"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

type Veteran = {
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

const heroes: Veteran[] = [
  { id: "thomas-tj-reilly-jr", rank: "LCPL.", name: "Thomas TJ Reilly JR.", city: "London, KY", branch: "United States Marine Corps", campaign: "Operation Iraqi Freedom", years: "KIA Karmah, Iraq 12/21/2008 • Age 19", image: "/heroes/tjreilly.JPG", fallen: true },
  { id: "dustin-paul-napier", rank: "PFC.", name: "Dustin Paul Napier", city: "Corbin, KY", branch: "United States Army", campaign: "Operation Enduring Freedom", years: "KIA Qalat, Afghanistan 01/08/2012 • Age 20", image: "/heroes/dustinnapier.jpeg", fallen: true },
  { id: "joseph-s-tremblay", rank: "CPL.", name: "Joseph S. Tremblay", city: "Corbin, KY", branch: "United States Marine Corps", campaign: "Operation Iraqi Freedom", years: "KIA Hit, Iraq 04/27/2005 • Age 23", image: "/heroes/josephtremblay.JPG", fallen: true },
  { id: "mckenley-odis-matlock", rank: "SSG.", name: "McKenley Odis Matlock", city: "Barbourville, KY", branch: "United States Army", campaign: "Vietnam", years: "KIA Giah Dinh, South Vietnam 03/30/1968 • Age 25", image: "/heroes/odismatlock.jpeg", fallen: true },
  { id: "uliss-c-steely", rank: "MM1c", name: "Uliss C. Steely", city: "Corbin, KY", branch: "United States Navy", campaign: "USS Oklahoma, Pearl Harbor", years: "KIA 12/07/1941 • Age 25", image: "/heroes/ulissteely.jpeg", fallen: true },
  { id: "vincent-tomasino", rank: "CPL", name: "Vincent Tomasino", city: "Williamsburg, KY", branch: "United States Marine Corps", campaign: "Vietnam Era Veteran", years: "1973–1977", image: "/heroes/vincenttomasino.jpeg" },
];

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();

export default function HometownHeroesPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Veteran | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [highlighted, setHighlighted] = useState<string | null>(null);

  const matches = useMemo(() => {
    const q = normalize(query);
    if (!q) return [];
    return heroes.filter((hero) => normalize(`${hero.rank} ${hero.name}`).includes(q));
  }, [query]);

  const goToHero = (hero: Veteran) => {
    setQuery(`${hero.rank} ${hero.name}`);
    setHighlighted(hero.id);
    document.getElementById(hero.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => setHighlighted(null), 2400);
  };

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    if (matches[0]) goToHero(matches[0]);
  };

  const shareHero = async (hero: Veteran) => {
    const url = `${window.location.origin}${window.location.pathname}#${hero.id}`;
    if (navigator.share) await navigator.share({ title: `${hero.rank} ${hero.name}`, text: "View this Hometown Hero on The Front Porch.", url });
    else await navigator.clipboard.writeText(url);
  };

  const HeroCard = ({ hero }: { hero: Veteran }) => (
    <article id={hero.id} className={`hero-card ${hero.fallen ? "fallen" : ""} ${highlighted === hero.id ? "highlighted" : ""}`}>
      <button className="card-main" type="button" onClick={() => setSelected(hero)} aria-label={`View ${hero.rank} ${hero.name}`}>
        <div className="photo-wrap">
          {hero.image ? <img src={hero.image} alt={`${hero.rank} ${hero.name}`} /> : <div className="photo-placeholder">Photo coming soon</div>}
        </div>
        <div className="card-copy">
          <p className="rank">{hero.rank}</p>
          <h3>{hero.name}</h3>
          <p>{hero.city}</p>
          <p>{hero.branch}</p>
          <p>{hero.campaign}</p>
          {hero.years && <p>{hero.years}</p>}
        </div>
      </button>
    </article>
  );

  return (
    <main className="page-shell">
      <section className="masthead">
        <Image src="/frontporch-logo.PNG" alt="The Front Porch" width={420} height={260} priority className="logo" />
        <p className="salutes">Salutes Our</p>
        <img src="/hometown-heroes.PNG" alt="Hometown Heroes" className="title-art" />
        <img src="/branches.png" alt="United States military branch emblems" className="branches" />
        <button className="primary-button" onClick={() => setFormOpen(true)}>Submit a Hometown Hero</button>
      </section>

      <section className="search-section" aria-labelledby="hero-search-title">
        <div className="search-inner">
          <h1 id="hero-search-title">Search for a Hometown Hero</h1>
          <p>Enter a veteran’s first name, last name, or full name.</p>
          <form onSubmit={submitSearch} className="search-form">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Example: Dustin Napier" aria-label="Search Hometown Heroes by name" />
            <button type="submit">Find Hero</button>
          </form>
          {query && (
            <div className="results" role="listbox" aria-label="Hero search results">
              {matches.length ? matches.map((hero) => <button key={hero.id} type="button" onClick={() => goToHero(hero)}>{hero.rank} {hero.name}</button>) : <p>No matching hero was found.</p>}
            </div>
          )}
        </div>
      </section>

      <section className="wall-section">
        <h2>“Greater love has no one than this: to lay down one&apos;s life for one&apos;s friends.” — John 15:13</h2>
        <div className="grid">{heroes.filter((hero) => hero.fallen).map((hero) => <HeroCard key={hero.id} hero={hero} />)}</div>
      </section>

      <section className="wall-section veterans-section">
        <h2>“A nation that does not honor its heroes will not long endure.” — Abraham Lincoln</h2>
        <div className="grid">{heroes.filter((hero) => !hero.fallen).map((hero) => <HeroCard key={hero.id} hero={hero} />)}</div>
      </section>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <section className="modal" onClick={(event) => event.stopPropagation()} aria-modal="true" role="dialog" aria-label={`${selected.rank} ${selected.name}`}>
            <button className="close" onClick={() => setSelected(null)} aria-label="Close">×</button>
            {selected.image && <img src={selected.image} alt={`${selected.rank} ${selected.name}`} className="modal-photo" />}
            <p className="rank">{selected.rank}</p>
            <h2>{selected.name}</h2>
            <p>{selected.city}</p><p>{selected.branch}</p><p>{selected.campaign}</p><p>{selected.years}</p>
            <div className="actions">
              <button onClick={() => shareHero(selected)}>Share This Hero</button>
              <button onClick={() => window.print()}>Print This Hero</button>
              <a href={`mailto:thefrontporch606@gmail.com?subject=${encodeURIComponent(`Correction for ${selected.rank} ${selected.name}`)}`}>Submit a Correction</a>
              <a href={`mailto:thefrontporch606@gmail.com?subject=${encodeURIComponent(`Additional information for ${selected.rank} ${selected.name}`)}`}>Help Preserve This Hero</a>
            </div>
          </section>
        </div>
      )}

      {formOpen && (
        <div className="modal-backdrop" onClick={() => setFormOpen(false)}>
          <section className="modal form-modal" onClick={(event) => event.stopPropagation()} aria-modal="true" role="dialog" aria-label="Submit a Hometown Hero">
            <button className="close" onClick={() => setFormOpen(false)} aria-label="Close">×</button>
            <h2>Submit a Hometown Hero</h2>
            <p>Help us honor a veteran from our community. Submissions are reviewed before publication.</p>
            <form action="https://formsubmit.co/thefrontporch606@gmail.com" method="POST" encType="multipart/form-data" className="submission-form">
              <input type="hidden" name="_subject" value="New Hometown Hero Submission" />
              <input name="rank" placeholder="Rank" />
              <input name="name" placeholder="Full name" required />
              <input name="city" placeholder="City / hometown" required />
              <input name="branch" placeholder="Branch of service" required />
              <input name="campaign" placeholder="Campaign, era, or conflict" />
              <input name="years" placeholder="Service dates, if known" />
              <input type="file" name="photo" accept="image/*" />
              <button type="submit" className="primary-button">Honor This Hero</button>
            </form>
          </section>
        </div>
      )}

      <style jsx>{`
        .page-shell{min-height:100vh;background:#f2f3f5;color:#17212b}.masthead{text-align:center;padding:28px 18px 34px;background:linear-gradient(#fff 0%,#d8aaa3 32%,#8d3940 58%,#17375d 100%);border-bottom:5px solid #d0b44a}.logo{width:min(430px,90vw);height:auto}.salutes{margin:0;color:#fff;font-size:clamp(22px,4vw,36px);font-weight:800;text-shadow:0 2px 8px #000}.title-art{width:min(760px,94vw);margin:0 auto}.branches{width:min(660px,90vw);margin:14px auto 22px}.primary-button,.search-form button{border:0;border-radius:999px;padding:13px 22px;background:#a51e2c;color:#fff;font-weight:800;cursor:pointer}.search-section{padding:24px 16px;background:#102f4e;color:#fff}.search-inner{max-width:760px;margin:auto;text-align:center}.search-inner h1{margin:0 0 6px;font-size:clamp(22px,4vw,32px)}.search-inner p{margin:0 0 14px;color:#dbe6ef}.search-form{display:grid;grid-template-columns:1fr auto;gap:8px}.search-form input{min-width:0;padding:14px 16px;border:2px solid transparent;border-radius:12px;font-size:16px}.search-form input:focus{outline:none;border-color:#d0b44a}.results{display:grid;gap:6px;margin-top:8px;padding:8px;background:#fff;border-radius:12px;color:#17212b;text-align:left}.results button{padding:11px;border:0;border-radius:8px;background:#eef3f8;text-align:left;font-weight:700;cursor:pointer}.results p{margin:4px;color:#5b6772}.wall-section{padding:34px 16px}.wall-section h2{max-width:1050px;margin:0 auto 24px;text-align:center;font-family:Georgia,serif;font-size:clamp(19px,3vw,28px)}.veterans-section{background:#e6e9ed}.grid{max-width:1180px;margin:auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px}.hero-card{scroll-margin-top:120px;border-radius:18px;background:#fff;box-shadow:0 10px 28px rgba(15,35,55,.12);overflow:hidden;border:2px solid transparent;transition:.25s}.hero-card.fallen{border-color:#c3a445}.hero-card.highlighted{border-color:#c51f36;box-shadow:0 0 0 6px rgba(197,31,54,.2),0 16px 36px rgba(15,35,55,.2);transform:translateY(-4px)}.card-main{display:block;width:100%;height:100%;padding:0;border:0;background:transparent;cursor:pointer;color:inherit}.photo-wrap{aspect-ratio:4/5;background:#d9dee4;overflow:hidden}.photo-wrap img{width:100%;height:100%;object-fit:cover}.photo-placeholder{height:100%;display:grid;place-items:center;color:#5b6772}.card-copy{padding:17px;text-align:center}.rank{margin:0 0 3px;font-weight:900;letter-spacing:.08em;color:#8e1f2e}.card-copy h3{margin:0 0 10px;font-size:1.35rem}.card-copy p:not(.rank){margin:5px 0;font-size:.94rem}.modal-backdrop{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:18px;background:rgba(5,16,27,.78)}.modal{position:relative;width:min(620px,100%);max-height:92vh;overflow:auto;padding:26px;border-radius:18px;background:#fff;text-align:center}.close{position:absolute;right:12px;top:8px;border:0;background:transparent;font-size:34px;cursor:pointer}.modal-photo{width:min(280px,100%);aspect-ratio:4/5;object-fit:cover;border-radius:14px;margin:0 auto 18px}.modal h2{margin:2px 0 12px}.modal p{margin:6px}.actions{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:20px}.actions button,.actions a{display:flex;align-items:center;justify-content:center;min-height:44px;padding:10px;border:1px solid #cbd5df;border-radius:10px;background:#f4f7fa;color:#17375d;text-decoration:none;font-weight:700;cursor:pointer}.submission-form{display:grid;gap:10px;margin-top:18px}.submission-form input{padding:13px;border:1px solid #cbd5df;border-radius:9px;font-size:16px}@media(max-width:600px){.search-form{grid-template-columns:1fr}.actions{grid-template-columns:1fr}.masthead{padding-top:18px}.wall-section{padding:28px 12px}}@media print{.masthead,.search-section,.wall-section,.close,.actions{display:none}.modal-backdrop{position:static;background:#fff}.modal{box-shadow:none;max-height:none}}
      `}</style>
    </main>
  );
}
