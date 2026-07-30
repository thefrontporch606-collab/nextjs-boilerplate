"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { VeteranResource, VeteranResourceCategory } from "@/lib/veteran-resources/types";

const scopes = ["All", "Local", "State", "Federal", "National"] as const;
type ScopeFilter = (typeof scopes)[number];

function phoneHref(phone: string) {
  if (/\b988\b/.test(phone)) return "tel:988";
  if (/\b2-1-1\b|\b211\b/.test(phone)) return "tel:211";
  const match = phone.match(/(?:\+?1[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}/)?.[0];
  return match ? `tel:${match.replace(/\D/g, "")}` : undefined;
}

function matches(resource: VeteranResource, category: string, groupScope: string, query: string, selectedScope: ScopeFilter) {
  const scopeMatch = selectedScope === "All" || groupScope.toLowerCase().includes(selectedScope.toLowerCase());
  if (!scopeMatch) return false;
  if (!query) return true;
  return `${category} ${groupScope} ${resource.name} ${resource.desc} ${resource.phone} ${resource.email} ${resource.website} ${resource.address} ${resource.note}`.toLowerCase().includes(query);
}

export default function VeteranResourcesPage() {
  const [categories, setCategories] = useState<VeteranResourceCategory[]>([]);
  const [loadingError, setLoadingError] = useState("");
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState<ScopeFilter>("All");
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    let cancelled = false;
    fetch("/api/veteran-resources", { cache: "force-cache" })
      .then(async (response) => {
        if (!response.ok) throw new Error(`Resource API returned ${response.status}`);
        return response.json() as Promise<VeteranResourceCategory[]>;
      })
      .then((data) => {
        if (cancelled) return;
        setCategories(data);
        if (data[0]) setOpenCategories(new Set([data[0].title]));
      })
      .catch((error) => {
        console.error(error);
        if (!cancelled) setLoadingError("The full resource directory could not be loaded. Please refresh the page.");
      });
    return () => { cancelled = true; };
  }, []);

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = useMemo(() => categories.map((category) => ({
    ...category,
    groups: category.groups.map(([groupScope, resources]) => [groupScope, resources.filter((resource) => matches(resource, category.title, groupScope, normalizedQuery, scope))] as [string, VeteranResource[]]).filter(([, resources]) => resources.length),
  })).filter((category) => category.groups.length), [categories, normalizedQuery, scope]);

  const totalCount = categories.reduce((total, category) => total + category.groups.reduce((sum, [, resources]) => sum + resources.length, 0), 0);
  const count = filtered.reduce((total, category) => total + category.groups.reduce((sum, [, resources]) => sum + resources.length, 0), 0);

  useEffect(() => {
    if (normalizedQuery || scope !== "All") setOpenCategories(new Set(filtered.map((category) => category.title)));
  }, [normalizedQuery, scope, filtered]);

  const toggle = (title: string) => setOpenCategories((current) => {
    const next = new Set(current);
    next.has(title) ? next.delete(title) : next.add(title);
    return next;
  });

  return (
    <main className="directory-page" id="main-content">
      <section className="hero">
        <img src="/frontporch-logo.PNG" alt="The Front Porch Veterans Nonprofit" className="brand-logo" />
        <h1>Veteran Resources Directory</h1>
        <p>Local, Kentucky, and federal resources for veterans in London, Laurel County, and the surrounding region.</p>
        <Link href="/veteran-discounts" className="discounts-link">Veteran Discounts &amp; Perks →</Link>
      </section>

      <div className="crisis-wrap">
        <a className="crisis-card" href="tel:988" aria-label="Call the Veterans Crisis Line at 988, then press 1">
          <span className="crisis-icon">★</span><span><strong>Veterans Crisis Line</strong><small>Dial 988, then press 1</small></span>
        </a>
      </div>

      <section className="sponsors" aria-label="Featured veteran resources and sponsors">
        <a href="https://smokechecked.com" target="_blank" rel="noreferrer" className="sponsor smoke"><strong>SMOKE CHECKED</strong><span>Veteran Apparel • 15% veteran discount</span></a>
        <a href="https://www.id.me/military" target="_blank" rel="noreferrer" className="sponsor idme"><strong>ID.me</strong><span>Verify military service and access participating discounts</span></a>
        <a href="https://www.vettix.org" target="_blank" rel="noreferrer" className="sponsor vettix"><strong>VET TIX</strong><span>Free and discounted event tickets for verified military and veterans</span></a>
      </section>

      <section className="directory" aria-label="Veteran resources directory">
        <div className="toolbar">
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search housing, GI Bill, mental health, VFW, phone number..." aria-label="Search veteran resources" />
          <div className="filters">{scopes.map((item) => <button key={item} type="button" className={scope === item ? "active" : ""} onClick={() => setScope(item)}>{item}</button>)}</div>
          <div className="toolbar-bottom"><p>{categories.length ? `Showing ${count} of ${totalCount} resources` : "Loading full directory…"}</p><div><button type="button" onClick={() => setOpenCategories(new Set(filtered.map((category) => category.title)))}>Expand all</button><button type="button" onClick={() => setOpenCategories(new Set())}>Collapse all</button></div></div>
        </div>

        {loadingError && <div className="empty">{loadingError}</div>}
        {!loadingError && filtered.map((category) => {
          const open = openCategories.has(category.title);
          const categoryCount = category.groups.reduce((sum, [, resources]) => sum + resources.length, 0);
          return <section className="category" key={category.title}>
            <button className="category-header" type="button" onClick={() => toggle(category.title)} aria-expanded={open}><span><strong>{category.title}</strong><small>{categoryCount} resources</small></span><span>⌄</span></button>
            {open && <div className="category-body">{category.note && <div className="category-note" dangerouslySetInnerHTML={{ __html: category.note }} />}{category.groups.map(([groupScope, resources]) => <section className="scope-section" key={`${category.title}-${groupScope}`}><h3>{groupScope}</h3><div className="resource-grid">{resources.map((resource) => {
              const callLink = resource.phone ? phoneHref(resource.phone) : undefined;
              return <article className="resource-card" key={`${groupScope}-${resource.name}`}><h4>{resource.name}</h4>{resource.desc && <p>{resource.desc}</p>}{resource.address && <p><strong>Address:</strong> {resource.address}</p>}{resource.note && <p className="note">{resource.note}</p>}<div className="actions">{callLink && <a href={callLink}>Call {resource.phone}</a>}{resource.email && <a href={`mailto:${resource.email}`}>Email</a>}{resource.website && <a href={resource.website} target="_blank" rel="noreferrer">Official website</a>}</div></article>;
            })}</div></section>)}</div>}
          </section>;
        })}
      </section>

      <style jsx>{`
        .directory-page{min-height:100vh;background:#f3f5f7;color:#17212b}.hero{text-align:center;padding:26px 16px 42px;background:linear-gradient(145deg,#0f2e4c,#174f79);color:#fff}.brand-logo{width:min(360px,76vw);max-height:230px;object-fit:contain;margin:auto;background:#fff;border-radius:14px;padding:10px}.hero h1{font-size:clamp(2rem,6vw,3.8rem);margin:18px 0 8px}.hero p{max-width:760px;margin:0 auto 18px;color:#d9e6ef}.discounts-link{display:inline-flex;padding:12px 18px;border-radius:999px;background:#b52331;color:#fff;font-weight:900;text-decoration:none}.crisis-wrap{max-width:1120px;margin:14px auto;padding:0 16px;display:flex;justify-content:flex-end}.crisis-card{display:flex;align-items:center;gap:12px;padding:12px 16px;border:1px solid #cbd8e6;border-radius:14px;background:#fff;color:#25364b;text-decoration:none;box-shadow:0 6px 18px #071a331a}.crisis-card strong,.crisis-card small{display:block}.crisis-card small{color:#c72828;font-weight:900}.crisis-icon{display:grid;place-items:center;width:48px;height:48px;border-radius:9px;background:#075391;color:#fff;font-size:1.5rem}.sponsors{max-width:1120px;margin:10px auto 20px;padding:0 16px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.sponsor{min-height:110px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:14px;border:1px solid #d6dee6;border-radius:15px;background:#fff;text-decoration:none;box-shadow:0 6px 18px #14283c10}.sponsor strong{font-size:1.35rem}.sponsor span{margin-top:6px;color:#53616e;font-size:.86rem}.smoke strong{color:#6d5725}.idme strong{color:#0b536b}.vettix strong{color:#1b4f90}.directory{max-width:1120px;margin:auto;padding:0 12px 70px}.toolbar{position:sticky;top:5rem;z-index:20;padding:14px;border:1px solid #d6dee6;border-radius:16px;background:#fffffff7;box-shadow:0 9px 28px #0f283c1a}.toolbar input{width:100%;padding:14px;border:1px solid #cbd5df;border-radius:11px;font-size:16px}.filters,.toolbar-bottom div{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.filters button,.toolbar-bottom button{padding:9px 14px;border:1px solid #cbd5df;border-radius:999px;background:#fff;font-weight:800}.filters .active{background:#164d78;color:#fff}.toolbar-bottom{display:flex;justify-content:space-between;gap:12px;align-items:center}.category{margin-top:16px;border:1px solid #d6dee6;border-radius:16px;background:#fff;overflow:hidden}.category-header{width:100%;display:flex;justify-content:space-between;align-items:center;padding:16px 18px;border:0;background:#123b5f;color:#fff;text-align:left}.category-header strong,.category-header small{display:block}.category-header small{color:#d9e6ef;margin-top:3px}.category-body{padding:16px}.category-note{padding:14px;margin-bottom:15px;border-radius:12px;background:#eef5fb}.scope-section+.scope-section{margin-top:22px}.scope-section h3{display:inline-flex;padding:6px 11px;border-radius:999px;background:#e6f0f8;color:#164d78;font-size:.82rem}.resource-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:12px}.resource-card{display:flex;flex-direction:column;padding:16px;border:1px solid #d8e0e7;border-radius:14px;background:#fff}.resource-card h4{margin:0 0 8px}.resource-card p{color:#53616e;line-height:1.45}.note{font-style:italic}.actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto;padding-top:10px}.actions a{padding:8px 10px;border:1px solid #c9d5df;border-radius:9px;color:#164d78;text-decoration:none;font-weight:800}.empty{margin-top:18px;padding:30px;text-align:center;border:1px dashed #bcc8d3;border-radius:14px;background:#fff}@media(max-width:650px){.sponsors{grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;padding-inline:6px}.sponsor{min-height:100px;padding:7px}.sponsor strong{font-size:.82rem}.sponsor span{font-size:.62rem}.crisis-card{width:100%}.toolbar-bottom{align-items:flex-start;flex-direction:column}.resource-grid{grid-template-columns:1fr}.category-body{padding:10px}}
      `}</style>
    </main>
  );
}
