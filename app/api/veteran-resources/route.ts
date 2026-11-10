import directory from "@/lib/veteran-resources/directory.json";

export async function GET() {
  return Response.json(directory, {
    headers: {
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
