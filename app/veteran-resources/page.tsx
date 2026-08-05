import Link from "next/link";
import { gunzipSync } from "node:zlib";
import { resourceDataPart1 } from "@/lib/veteran-resources/compressed-part1";
import { resourceDataPart2 } from "@/lib/veteran-resources/compressed-part2";
import type { VeteranResource, VeteranResourceCategory } from "@/lib/veteran-resources/types";

function loadResources(): VeteranResourceCategory[] {
  const compressed = Buffer.from(resourceDataPart1 + resourceDataPart2, "base64");
  return JSON.parse(gunzipSync(compressed).toString("utf8")) as VeteranResourceCategory[];
}

function phoneHref(phone: string) {
  if (/\b988\b/.test(phone)) return "tel:988";
  if (/\b2-1-1\b|\b211\b/.test(phone)) return "tel:211";
  const match = phone.match(/(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/)?.[0];
  return match ? `tel:${match.replace(/\D/g, "")}` : undefined;
}

function ResourceCard({ resource, scope }: { resource: VeteranResource; scope: string }) {
  const callLink = resource.phone ? phoneHref(resource.phone) : undefined;
  return (
    <article className="resource-card">
      <span className="scope">{scope}</span>
      <h4>{resource.name}</h4>
      {resource.desc && <p>{resource.desc}</p>}
      {resource.address && <p className="meta"><strong>Address:</strong> {resource.address}</p>}
      {resource.note && <p className="note">{resource.note}</p>}
      <div className="actions">
        {callLink && <a href={callLink}>Call {resource.phone}</a>}
        {resource.email && <a href={`mailto:${resource.email}`}>Email</a>}
        {resource.website && <a href={resource.website} target="_blank" rel="noreferrer">Official website</a>}
      </div>
    </article>
  );
}

export default function VeteranResourcesPage() {
  const categories = loadResources();
  const totalCount = categories.reduce((total, category) => total + category.groups.reduce((sum, [, resources]) => sum + resources.length, 0), 0);

  return (
    <main className="directory-page" id="main-content">
      <section className="hero">
        <p className="eyebrow">The Front Porch Veteran Resource Guide</p>
        <h1>Veteran Resources Directory</h1>
        <p>Local, Southeastern Kentucky, statewide, federal, and national resources for veterans and their families.</p>
        <Link href="/veteran-discounts" className="discounts-link">Veteran Discounts &amp; Perks →</Link>
      </section>

      <section className="quick-links" aria-label="Immediate veteran support contacts">
        <a href="tel:988"><strong>Veterans Crisis Line</strong><span>Dial 988, then press 1</span></a>
        <a href="tel:18774243838"><strong>Homeless Veterans Line</strong><span>877-424-3838</span></a>
        <Link href="/veteran-support"><strong>The Front Porch</strong><span>Submit a support request</span></Link>
      </section>

      <section className="directory" aria-label="Veteran resources directory">
        <div className="directory-intro">
          <div><span>Complete directory</span><strong>{totalCount} verified resource listings</strong></div>
          <p>Open a category below to view its local, state, federal, and national support network.</p>
        </div>

        {categories.map((category, categoryIndex) => {
          const categoryCount = category.groups.reduce((sum, [, resources]) => sum + resources.length, 0);
          return (
            <details className="category" key={category.title} open={categoryIndex === 0}>
              <summary><span><strong>{category.title}</strong><small>{categoryCount} resource{categoryCount === 1 ? "" : "s"}</small></span><b aria-hidden="true">+</b></summary>
              <div className="category-body">
                {category.note && <div className="category-note" dangerouslySetInnerHTML={{ __html: category.note }} />}
                {category.groups.map(([scope, resources]) => (
                  <section className="scope-section" key={`${category.title}-${scope}`}>
                    <h3>{scope}</h3>
                    <div className="resource-grid">{resources.map((resource) => <ResourceCard key={`${scope}-${resource.name}`} resource={resource} scope={scope} />)}</div>
                  </section>
                ))}
              </div>
            </details>
          );
        })}
      </section>

      <style>{`
        .directory-page{min-height:100vh;background:#f3f5f7;color:#17212b}.hero{padding:42px 18px 50px;text-align:center;background:linear-gradient(145deg,#0f2e4c,#174f79);color:#fff}.eyebrow{margin:0 0 8px;font-size:.78rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:#d7e5ef}.hero h1{margin:0 0 10px;font-size:clamp(2.1rem,7vw,4.3rem)}.hero p:not(.eyebrow){max-width:760px;margin:0 auto 20px;color:#d9e6ef}.discounts-link{display:inline-flex;padding:13px 20px;border-radius:999px;background:#b52331;color:#fff;text-decoration:none;font-weight:900}.quick-links{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;max-width:1120px;margin:-24px auto 24px;padding:0 16px;position:relative}.quick-links a{display:flex;min-height:108px;flex-direction:column;align-items:center;justify-content:center;padding:16px;border:1px solid #ccd8e3;border-radius:16px;background:#fff;color:#173a5b;text-align:center;text-decoration:none;box-shadow:0 10px 28px rgba(15,46,76,.12)}.quick-links strong,.quick-links span{display:block}.quick-links span{margin-top:6px;color:#b52331;font-weight:800}.directory{max-width:1120px;margin:auto;padding:0 16px 70px}.directory-intro{display:flex;justify-content:space-between;gap:20px;align-items:center;margin:18px 0;padding:18px;border:1px solid #d4dee7;border-radius:16px;background:#fff}.directory-intro span,.directory-intro strong{display:block}.directory-intro span{font-size:.76rem;text-transform:uppercase;letter-spacing:.12em;color:#a92323;font-weight:900}.directory-intro strong{margin-top:4px;font-size:1.25rem}.directory-intro p{max-width:560px;color:#5a6875}.category{margin-top:14px;border:1px solid #d6dee6;border-radius:16px;background:#fff;overflow:hidden;box-shadow:0 6px 18px rgba(20,40,60,.06)}.category summary{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 18px;background:#123b5f;color:#fff;cursor:pointer;list-style:none}.category summary::-webkit-details-marker{display:none}.category summary strong,.category summary small{display:block}.category summary strong{font-size:clamp(1.05rem,3vw,1.45rem)}.category summary small{margin-top:3px;color:#d9e6ef}.category summary b{font-size:1.7rem}.category[open] summary b{transform:rotate(45deg)}.category-body{padding:18px}.category-note{margin-bottom:16px;padding:14px;border:1px solid #cfe0f1;border-radius:12px;background:#eef5fb;color:#294c67}.scope-section+.scope-section{margin-top:24px}.scope-section h3{display:inline-flex;margin:0 0 10px;padding:6px 11px;border-radius:999px;background:#e6f0f8;color:#164d78;font-size:.82rem}.resource-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:12px}.resource-card{display:flex;min-height:100%;flex-direction:column;padding:16px;border:1px solid #d8e0e7;border-radius:14px;background:#fff}.scope{align-self:flex-start;padding:4px 8px;border-radius:999px;background:#edf3f8;color:#164d78;font-size:.72rem;font-weight:800}.resource-card h4{margin:10px 0 6px;font-size:1.03rem}.resource-card p{margin:5px 0;color:#53616e;line-height:1.45}.resource-card .meta,.resource-card .note{font-size:.88rem}.resource-card .note{font-style:italic}.actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto;padding-top:12px}.actions a{display:inline-flex;padding:8px 10px;border:1px solid #c9d5df;border-radius:9px;color:#164d78;text-decoration:none;font-weight:800;font-size:.86rem}@media(max-width:650px){.quick-links{grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;padding-inline:6px}.quick-links a{min-height:92px;padding:8px 4px}.quick-links strong{font-size:.72rem}.quick-links span{font-size:.62rem}.directory{padding-inline:8px}.directory-intro{align-items:flex-start;flex-direction:column}.category-body{padding:10px}.resource-grid{grid-template-columns:1fr}.category summary{padding:14px}}
      `}</style>
    </main>
  );
}
