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
    fetch("/api/veteran-resources", { cache: "no-store" })
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
      <section className="utility-strip" aria-label="Immediate veteran support links">
        <a className="utility-card crisis" href="tel:988" aria-label="Call Veterans Crisis Line at 988 then press 1"><span className="star">★</span><span><strong>Veterans Crisis Line</strong><small>Dial 988, then press 1</small></span></a>
        <a className="utility-card homeless" href="tel:8774243838"><span className="arrow">↗</span><span><strong>Help for Homeless Veterans</strong><small>877-4AID-VET</small></span></a>
        <Link className="utility-card porch" href="/veteran-support"><img src="/frontporch-logo.PNG" alt="The Front Porch" /><small>Request support</small></Link>
      </section>

      <section className="hero">
        <img src="/frontporch-logo.PNG" alt="The Front Porch Veterans Nonprofit" className="brand-logo" />
        <h1>Veteran Resources Directory</h1>
        <p>Local, Kentucky, and federal resources for veterans in London, Laurel County, and the surrounding region.</p>
        <Link href="/veteran-discounts" className="discounts-link">Veteran Discounts &amp; Perks →</Link>
      </section>

      <section className="sponsor-row" aria-label="Resource sponsors and partners">
        <a href="https://smokechecked.com" target="_blank" rel="noreferrer" className="sponsor"><img src="/smoke-checked-logo.svg" alt="Smoke Checked Veteran Apparel" /><span><strong>Smoke Checked Veteran Apparel</strong><small>15% veteran discount. Veterans Day: 35% off and free shipping.</small></span></a>
        <a href="https://www.vettix.org" target="_blank" rel="noreferrer" className="sponsor text-logo"><strong>VET TIX</strong><small>Free and discounted event tickets for eligible members of the military and veteran community.</small></a>
      </section>

      <section className="directory" aria-label="Veteran resources directory">
        <div className="toolbar">
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search housing, GI Bill, mental health, VFW, phone number..." aria-label="Search veteran resources" />
          <div className="filters">{scopes.map((item) => <button key={item} type="button" className={scope === item ? "active" : ""} onClick={() => setScope(item)}>{item}</button>)}</div>
          <div className="toolbar-bottom"><p>{categories.length ? `Showing ${count} of ${totalCount} resources` : "Loading full directory…"}</p><div><button onClick={() => setOpenCategories(new Set(filtered.map((category) => category.title)))}>Expand all</button><button onClick={() => setOpenCategories(new Set())}>Collapse all</button></div></div>
        </div>

        {loadingError && <div className="empty">{loadingError}</div>}
        {!loadingError && filtered.map((category) => {
          const open = openCategories.has(category.title);
          const categoryCount = category.groups.reduce((total, [, resources]) => total + resources.length, 0);
          return <section className={`category ${open ? "open" : ""}`} key={category.title}><button className="category-header" onClick={() => toggle(category.title)} aria-expanded={open}><span><strong>{category.title}</strong><small>{categoryCount} resources</small></span><span>⌄</span></button>{open && <div className="category-body">{category.groups.map(([groupScope, resources]) => <section className="scope-section" key={`${category.title}-${groupScope}`}><h3>{groupScope}</h3><div className="resource-grid">{resources.map((resource) => { const callLink = resource.phone ? phoneHref(resource.phone) : undefined; return <article className="resource-card" key={`${category.title}-${groupScope}-${resource.name}`}><span className="scope">{groupScope}</span><h4>{resource.name}</h4>{resource.desc && <p>{resource.desc}</p>}{resource.address && <p><strong>Address:</strong> {resource.address}</p>}{resource.note && <p><em>{resource.note}</em></p>}<div className="actions">{callLink && <a href={callLink}>Call {resource.phone}</a>}{resource.email && <a href={`mailto:${resource.email}`}>Email</a>}{resource.website && <a href={resource.website} target="_blank" rel="noreferrer">Official website</a>}</div></article>; })}</div></section>)}</div>}</section>;
        })}
      </section>

      <style jsx>{`
        .directory-page{min-height:100vh;background:#f3f5f7;color:#17212b}.utility-strip{max-width:1120px;margin:auto;padding:16px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.utility-card{min-height:98px;display:flex;align-items:center;justify-content:center;gap:12px;padding:12px;border:1px solid #d7e0e8;border-radius:16px;background:#fff;color:#18364f;text-decoration:none;box-shadow:0 7px 22px rgba(20,40,60,.08);text-align:left}.utility-card strong,.utility-card small{display:block}.utility-card small{margin-top:3px;color:#a92323;font-weight:800}.utility-card img{width:90px;max-height:62px;object-fit:contain}.star{display:grid;place-items:center;width:54px;height:54px;border-radius:10px;background:#0864a5;color:#fff;font-size:26px}.arrow{font-size:38px;color:#0e5b90}.hero{padding:30px 18px 46px;text-align:center;background:linear-gradient(145deg,#0f2e4c,#174f79);color:#fff}.brand-logo{width:min(260px,66vw);height:auto;margin:auto}.hero h1{margin:12px 0 8px;font-size:clamp(2rem,6vw,3.8rem)}.hero p{max-width:760px;margin:0 auto 20px;color:#d9e6ef}.discounts-link{display:inline-flex;padding:13px 20px;border-radius:999px;background:#b52331;color:#fff;text-decoration:none;font-weight:900}.sponsor-row{max-width:1120px;margin:18px auto 0;padding:0 16px;display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.sponsor{display:flex;align-items:center;gap:14px;padding:14px;border:1px solid #d6dee6;border-radius:16px;background:#fff;color:#17212b;text-decoration:none}.sponsor img{width:92px;height:92px;object-fit:contain}.sponsor strong,.sponsor small{display:block}.sponsor small{margin-top:5px;color:#566674}.text-logo>strong{font-size:2rem;color:#174f82}.directory{max-width:1120px;margin:auto;padding:22px 16px 70px}.toolbar{position:sticky;top:5rem;z-index:20;margin:18px 0 28px;padding:14px;border:1px solid #d6dee6;border-radius:16px;background:rgba(255,255,255,.97);box-shadow:0 9px 28px rgba(15,40,60,.1)}.toolbar input{width:100%;padding:14px 16px;border:1px solid #cbd5df;border-radius:11px;font-size:16px}.filters,.toolbar-bottom>div{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.filters button,.toolbar-bottom button{padding:9px 14px;border:1px solid #cbd5df;border-radius:999px;background:#fff;font-weight:700}.filters button.active{background:#164d78;color:#fff}.toolbar-bottom{display:flex;align-items:center;justify-content:space-between;gap:12px}.category{margin-top:16px;border:1px solid #d6dee6;border-radius:16px;background:#fff;overflow:hidden}.category-header{width:100%;display:flex;justify-content:space-between;padding:16px 18px;border:0;background:#123b5f;color:#fff;text-align:left}.category-header strong,.category-header small{display:block}.category-header small{color:#d9e6ef}.category-body{padding:18px}.scope-section+.scope-section{margin-top:24px}.scope-section h3{display:inline-flex;padding:6px 11px;border-radius:999px;background:#e6f0f8;color:#164d78;font-size:.82rem}.resource-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:12px}.resource-card{display:flex;flex-direction:column;padding:16px;border:1px solid #d8e0e7;border-radius:14px}.scope{align-self:flex-start;padding:4px 8px;border-radius:999px;background:#edf3f8;color:#164d78;font-size:.72rem;font-weight:800}.resource-card h4{margin:10px 0 6px}.resource-card p{color:#53616e}.actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto;padding-top:12px}.actions a{padding:8px 10px;border:1px solid #c9d5df;border-radius:9px;color:#164d78;text-decoration:none;font-weight:800}.empty{padding:30px;text-align:center;border:1px dashed #bcc8d3;border-radius:14px;background:#fff}@media(max-width:680px){.utility-strip{grid-template-columns:1fr}.utility-card{min-height:82px}.sponsor-row{grid-template-columns:1fr}.toolbar{top:4.7rem}.toolbar-bottom{align-items:flex-start;flex-direction:column}.category-body{padding:10px}.resource-grid{grid-template-columns:1fr}.directory{padding-inline:8px}}
      `}</style>
    </main>
  );
}
