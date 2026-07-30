import { resourceDataPart1 } from "@/lib/veteran-resources/compressed-part1";
import { resourceDataPart2 } from "@/lib/veteran-resources/compressed-part2";

export const runtime = "edge";

export async function GET() {
  try {
    const binary = atob(resourceDataPart1 + resourceDataPart2);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
    const json = await new Response(stream).text();

    return new Response(json, {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=3600, s-maxage=86400",
      },
    });
  } catch (error) {
    console.error("Veteran resource data could not be decompressed", error);
    return Response.json({ error: "Resource directory unavailable" }, { status: 500 });
  }
}
