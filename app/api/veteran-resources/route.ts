import { resourceDataPart1 } from "@/lib/veteran-resources/compressed-part1";
import { resourceDataPart2 } from "@/lib/veteran-resources/compressed-part2";

export const runtime = "edge";

export async function GET() {
  try {
    const binary = atob(resourceDataPart1 + resourceDataPart2);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));

    return new Response(bytes, {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "content-encoding": "gzip",
        "cache-control": "public, max-age=3600, s-maxage=86400",
        "vary": "accept-encoding",
      },
    });
  } catch (error) {
    console.error("Veteran resource data could not be served", error);
    return Response.json({ error: "Resource directory unavailable" }, { status: 500 });
  }
}
