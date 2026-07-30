"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { resourceDataPart1 } from "@/lib/veteran-resources/compressed-part1";
import { resourceDataPart2 } from "@/lib/veteran-resources/compressed-part2";
import type { VeteranResource, VeteranResourceCategory } from "@/lib/veteran-resources/types";

const scopes = ["All", "Local", "State", "Federal", "National"] as const;

type ScopeFilter = (typeof scopes)[number];

function phoneHref(phone: string) {
  if (/\b988\b/.test(phone)) return "tel:988";
  if (/\b2-1-1\b|\b211\b/.test(phone)) return "tel:211";
  const match = phone.match(/(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/)?.[0];
  return match ? `tel:${match.replace(/\D/g, "")}` : undefined;
}

function resourceMatches(resource: VeteranResource, category: string, scope: string, query: string, selectedScope: ScopeFilter) {
  const scopeMatch = selectedScope === "All" || scope.toLowerCase().includes(selectedScope.toLowerCase());
  if (!scopeMatch) return false;
  if (!query) return true;
  return `${category} ${scope} ${resource.name} ${resource.desc} ${resource.phone} ${resource.email} ${resource.website} ${resource.address} ${resource.note}`
    .toLowerCase()
    .includes(query);
}

export default function VeteranResourcesPage() {
  const [categories, setCategories] = useState<VeteranResourceCategory[]>([]);
  const [loadingError, setLoadingError] = useState("");
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState<ScopeFilter>("All");
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    let cancelled = false;
    async function loadResources() {
      try {
        const binary = atob(resourceDataPart1 + resourceDataPart2);
        const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
        const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
        const text = await new Response(stream).text();
        const parsed = JSON.parse(text) as VeteranResourceCategory[];
        if (!cancelled) {
          setCategories(parsed);
          if (parsed[0]) setOpenCategories(new Set([parsed[0].title]));
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) setLoadingError("The full resource directory could not be loaded. Please refresh the page.");
      }
    }
    loadResources();
    return () => {
      cancelled = true;
    };
  }, []);

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return categories
      .map((category) => ({
        ...category,
        groups: category.groups
          .map(([groupScope, resources]) => [
            groupScope,
            resources.filter((resource) => resourceMatches(resource, category.title, groupScope, normalizedQuery, scope)),
          ] as [string, VeteranResource[]])
          .filter(([, resources]) => resources.length > 0),
      }))
      .filter((category) => category.groups.length > 0);
  }, [categories, normalizedQuery, scope]);

  const count = filtered.reduce(
    (total, category) => total + category.groups.reduce((groupTotal, [, resources]) => groupTotal + resources.length, 0),
    0,
  );

  const totalCount = categories.reduce(
    (total, category) => total + category.groups.reduce((groupTotal, [, resources]) => groupTotal + resources.length, 0),
    0,
  );

  const toggleCategory = (title: string) => {
    setOpenCategories((current) => {
      const next = new Set(current);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  useEffect(() => {
    if (normalizedQuery || scope !== "All") setOpenCategories(new Set(filtered.map((category) => category.title)));
  }, [normalizedQuery, scope, filtered]);

  return (
    <main className="directory-page" id="main-content">
      <section className="hero">
        <img src="/IMG_1844.jpeg" alt="The Front Porch" className="brand-logo" />
        <div className="utility-links">
          <Link href="/">Home</Link>
          <a href="tel:988">Call 988, then press 1</a>
        </div>
        <h1>Veteran Resources Directory</h1>
        <p>Local, Kentucky, and federal resources for veterans in London, Laurel County, and the surrounding region.</p>
        <Link href="/veteran-discounts" className="discounts-link">Veteran Benefits &amp; Discounts →</Link>
      </section>

      <div className="crisis-wrap">
        <a className="crisis-card" href="tel:988" aria-label="Call the Veterans Crisis Line at 988, then press 1">
          <span className="crisis-icon">★</span>
          <span><strong>Veterans Crisis Line</strong><small>Dial 988, then press 1</small></span>
        </a>
      </div>

      <section className="directory" aria-label="Veteran resources directory">
        <div className="toolbar">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search housing, GI Bill, mental health, VFW, phone number..."
            aria-label="Search veteran resources"
          />
          <div className="filters" aria-label="Filter resources by scope">
            {scopes.map((item) => (
              <button key={item} type="button" className={scope === item ? "active" : ""} onClick={() => setScope(item)}>{item}</button>
            ))}
          </div>
          <div className="toolbar-bottom">
            <p className="status">{categories.length ? `Showing ${count} of ${totalCount} resources` : "Loading full directory…"}</p>
            <div className="toolbar-actions">
              <button type="button" onClick={() => setOpenCategories(new Set(filtered.map((category) => category.title)))}>Expand all</button>
              <button type="button" onClick={() => setOpenCategories(new Set())}>Collapse all</button>
            </div>
          </div>
        </div>

        {loadingError && <div className="empty">{loadingError}</div>}

        {!loadingError && filtered.map((category) => {
          const open = openCategories.has(category.title);
          const categoryCount = category.groups.reduce((total, [, resources]) => total + resources.length, 0);
          return (
            <section className={`category ${open ? "open" : ""}`} key={category.title}>
              <button className="category-header" type="button" onClick={() => toggleCategory(category.title)} aria-expanded={open}>
                <span><strong>{category.title}</strong><small>{categoryCount} resource{categoryCount === 1 ? "" : "s"}</small></span>
                <span className="caret" aria-hidden="true">⌄</span>
              </button>
              {open && (
                <div className="category-body">
                  {category.note && <div className="category-note" dangerouslySetInnerHTML={{ __html: category.note }} />}
                  {category.groups.map(([groupScope, resources]) => (
                    <section className="scope-section" key={`${category.title}-${groupScope}`}>
                      <h3>{groupScope}</h3>
                      <div className="resource-grid">
                        {resources.map((resource) => {
                          const callLink = resource.phone ? phoneHref(resource.phone) : undefined;
                          return (
                            <article className="resource-card" key={`${category.title}-${groupScope}-${resource.name}`}>
                              <span className="scope">{groupScope}</span>
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
                        })}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </section>
          );
        })}

        {!loadingError && categories.length > 0 && filtered.length === 0 && (
          <div className="empty">No resources match that search. Try a broader term or clear the filters.</div>
        )}
      </section>

      <style jsx>{`
        .directory-page{min-height:100vh;background:#f3f5f7;color:#17212b}.hero{padding:20px 18px 46px;text-align:center;background:linear-gradient(145deg,#0f2e4c,#174f79);color:#fff}.brand-logo{width:min(330px,76vw);height:auto;margin:0 auto 10px;border-radius:10px}.utility-links{max-width:1100px;margin:0 auto 20px;display:flex;justify-content:space-between;gap:12px}.utility-links a{color:#fff;font-weight:700}.hero h1{margin:0 0 8px;font-size:clamp(2rem,6vw,3.8rem)}.hero p{max-width:760px;margin:0 auto 20px;color:#d9e6ef}.discounts-link{display:inline-flex;padding:13px 20px;border-radius:999px;background:#b52331;color:#fff;text-decoration:none;font-weight:900}.crisis-wrap{display:flex;justify-content:flex-end;max-width:1120px;margin:12px auto 0;padding:0 16px}.crisis-card{display:flex;align-items:center;gap:10px;padding:10px 14px;border:1px solid #cbd8e6;border-radius:12px;background:#fff;color:#25364b;text-decoration:none;box-shadow:0 6px 18px rgba(7,26,51,.1)}.crisis-card strong,.crisis-card small{display:block}.crisis-card small{color:#c72828;font-weight:800}.crisis-icon{display:grid;place-items:center;width:42px;height:42px;border-radius:8px;background:#075391;color:#fff}.directory{max-width:1120px;margin:auto;padding:22px 16px 70px}.toolbar{position:sticky;top:5rem;z-index:20;margin:18px 0 28px;padding:14px;border:1px solid #d6dee6;border-radius:16px;background:rgba(255,255,255,.97);box-shadow:0 9px 28px rgba(15,40,60,.1);backdrop-filter:blur(8px)}.toolbar input{width:100%;padding:14px 16px;border:1px solid #cbd5df;border-radius:11px;font-size:16px}.filters,.toolbar-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.filters button,.toolbar-actions button{padding:9px 14px;border:1px solid #cbd5df;border-radius:999px;background:#fff;cursor:pointer;font-weight:700}.filters button.active{background:#164d78;color:#fff;border-color:#164d78}.toolbar-bottom{display:flex;align-items:center;justify-content:space-between;gap:12px}.status{margin:10px 2px 0;color:#5b6874;font-size:.9rem}.category{margin-top:16px;border:1px solid #d6dee6;border-radius:16px;background:#fff;overflow:hidden;box-shadow:0 6px 18px rgba(20,40,60,.06)}.category-header{width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 18px;border:0;background:#123b5f;color:#fff;text-align:left;cursor:pointer}.category-header strong,.category-header small{display:block}.category-header strong{font-size:clamp(1.1rem,3vw,1.5rem)}.category-header small{margin-top:3px;color:#d9e6ef}.caret{font-size:1.6rem;transition:transform .2s}.category.open .caret{transform:rotate(180deg)}.category-body{padding:18px}.category-note{margin-bottom:16px;padding:14px;border:1px solid #cfe0f1;border-radius:12px;background:#eef5fb;color:#294c67}.category-note :global(a){font-weight:800}.scope-section+.scope-section{margin-top:24px}.scope-section h3{display:inline-flex;margin:0 0 10px;padding:6px 11px;border-radius:999px;background:#e6f0f8;color:#164d78;font-size:.82rem}.resource-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:12px}.resource-card{display:flex;min-height:100%;flex-direction:column;padding:16px;border:1px solid #d8e0e7;border-radius:14px;background:#fff}.scope{align-self:flex-start;padding:4px 8px;border-radius:999px;background:#edf3f8;color:#164d78;font-size:.72rem;font-weight:800}.resource-card h4{margin:10px 0 6px;font-size:1.03rem}.resource-card p{margin:5px 0;color:#53616e;line-height:1.45}.resource-card .meta,.resource-card .note{font-size:.88rem}.resource-card .note{font-style:italic}.actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto;padding-top:12px}.actions a{display:inline-flex;padding:8px 10px;border:1px solid #c9d5df;border-radius:9px;color:#164d78;text-decoration:none;font-weight:800;font-size:.86rem}.empty{padding:30px;text-align:center;border:1px dashed #bcc8d3;border-radius:14px;background:#fff;color:#5b6874}@media(max-width:600px){.crisis-card{width:100%}.toolbar{top:4.7rem}.toolbar-bottom{align-items:flex-start;flex-direction:column}.toolbar-actions{margin-top:0}.category-body{padding:10px}.resource-grid{grid-template-columns:1fr}.category-header{padding:14px}.directory{padding-inline:8px}}
      `}</style>
    </main>
  );
}
