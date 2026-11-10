export type Veteran = {
  id: string;
  rank: string;
  name: string;
  city: string;
  branch: string;
  campaign: string;
  years: string;
  image?: string;
  fallen?: boolean;
};

export type HeroGroup = "kia" | "living" | "deceased";

/** Published Hometown Heroes. Names, ranks, branches, photos, and memorial wording are unchanged. */
export const heroes: Veteran[] = [
  { id: "thomas-tj-reilly-jr", rank: "LCPL.", name: "Thomas TJ Reilly JR.", city: "London, KY", branch: "United States Marine Corps", campaign: "Operation Iraqi Freedom", years: "KIA Karmah, Iraq 12/21/2008 • Age 19", image: "/heroes/tjreilly.JPG", fallen: true },
  { id: "dustin-paul-napier", rank: "PFC.", name: "Dustin Paul Napier", city: "Corbin, KY", branch: "United States Army", campaign: "Operation Enduring Freedom", years: "KIA Qalat, Afghanistan 01/08/2012 • Age 20", image: "/heroes/dustinnapier.jpeg", fallen: true },
  { id: "joseph-s-tremblay", rank: "CPL.", name: "Joseph S. Tremblay", city: "Corbin, KY", branch: "United States Marine Corps", campaign: "Operation Iraqi Freedom", years: "KIA Hit, Iraq 04/27/2005 • Age 23", image: "/heroes/josephtremblay.JPG", fallen: true },
  { id: "mckenley-odis-matlock", rank: "SSG.", name: "McKenley Odis Matlock", city: "Barbourville, KY", branch: "United States Army", campaign: "Vietnam", years: "KIA Giah Dinh, South Vietnam 03/30/1968 • Age 25", image: "/heroes/odismatlock.jpeg", fallen: true },
  { id: "uliss-c-steely", rank: "MM1c", name: "Uliss C. Steely", city: "Corbin, KY", branch: "United States Navy", campaign: "USS Oklahoma, Pearl Harbor", years: "KIA 12/07/1941 • Age 25", image: "/heroes/ulissteely.jpeg", fallen: true },
  { id: "vincent-tomasino", rank: "CPL", name: "Vincent Tomasino", city: "Williamsburg, KY", branch: "United States Marine Corps", campaign: "Vietnam Era Veteran", years: "1973–1977", image: "/heroes/vincenttomasino.jpeg" },
];

const nonKiaDeath = /\b(deceased|died|death|passed away)\b/i;

/** KIA records are marked fallen. A non-KIA death has to be written in the existing service text. */
export function heroGroup(hero: Veteran): HeroGroup {
  if (hero.fallen) return "kia";
  if (nonKiaDeath.test(`${hero.campaign} ${hero.years}`)) return "deceased";
  return "living";
}

export function groupHeroes(records: readonly Veteran[]) {
  const grouped: Record<HeroGroup, Veteran[]> = { kia: [], living: [], deceased: [] };
  for (const hero of records) grouped[heroGroup(hero)].push(hero);
  return grouped;
}

export const branchFilters = [
  { id: "all", label: "All" },
  { id: "army", label: "Army" },
  { id: "marines", label: "Marines" },
  { id: "navy", label: "Navy" },
  { id: "air-force", label: "Air Force" },
  { id: "coast-guard", label: "Coast Guard" },
  { id: "space-force", label: "Space Force" },
] as const;

export type BranchId = Exclude<(typeof branchFilters)[number]["id"], "all">;

export const emblems: Record<BranchId, { src: string; alt: string }> = {
  army: { src: "/hometown-heroes/emblems/army.png", alt: "U.S. Army emblem" },
  marines: { src: "/hometown-heroes/emblems/marines.png", alt: "U.S. Marine Corps emblem" },
  navy: { src: "/hometown-heroes/emblems/navy.png", alt: "U.S. Navy emblem" },
  "air-force": { src: "/hometown-heroes/emblems/air-force.png", alt: "U.S. Air Force emblem" },
  "coast-guard": { src: "/hometown-heroes/emblems/coast-guard.png", alt: "U.S. Coast Guard emblem" },
  "space-force": { src: "/hometown-heroes/emblems/space-force.png", alt: "U.S. Space Force emblem" },
};

export function branchId(branch: string): BranchId | null {
  const value = branch.toLowerCase();
  if (value.includes("marine")) return "marines";
  if (value.includes("coast guard")) return "coast-guard";
  if (value.includes("air force")) return "air-force";
  if (value.includes("space force")) return "space-force";
  if (value.includes("army")) return "army";
  if (value.includes("navy")) return "navy";
  return null;
}

/** Card detail line. Published wording is kept; Steely's location is joined from the existing campaign field. */
export function detailLine(hero: Veteran): string {
  if (!hero.fallen) return [hero.campaign, hero.years].filter(Boolean).join(" · ");
  const withoutMarkers = hero.years
    .replace(/KIA/gi, "")
    .replace(/age\s*\d+/gi, "")
    .replace(/[\d/•\-–—.,]/g, "")
    .trim();
  if (!withoutMarkers && hero.campaign) {
    return `KIA ${hero.campaign} · ${hero.years.replace(/^KIA\s*/i, "")}`;
  }
  return hero.years;
}
