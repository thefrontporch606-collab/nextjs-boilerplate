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
