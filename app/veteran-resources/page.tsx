"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Resource = { name: string; scope: string; description: string; phone?: string; website?: string; address?: string };
type Category = { title: string; resources: Resource[] };

const categories: Category[] = [
  {
    title: "Benefits & Claims Assistance",
    resources: [
      { name: "KDVA Benefits Representative for Laurel County — Joseph Trinetto", scope: "Kentucky / Local", description: "Free accredited veterans benefits assistance serving Laurel and nearby counties.", phone: "606-344-1003", website: "https://veterans.ky.gov/Benefits/Pages/Your-Benefits-Representative.aspx" },
      { name: "KDVA London Regional Office", scope: "Kentucky / Local", description: "Free claims, eligibility, and application assistance serving Bell, Clay, Knox, Laurel, Owsley, and Whitley counties.", phone: "502-564-9203", website: "https://veterans.ky.gov/Benefits/Pages/Your-Benefits-Representative.aspx" },
      { name: "U.S. Department of Veterans Affairs — Main Benefits Line", scope: "Federal", description: "Primary federal contact for disability compensation, pension, education, home loans, insurance, burial, and other VA benefits.", phone: "1-800-827-1000", website: "https://www.va.gov" },
      { name: "GI Bill Hotline", scope: "Federal", description: "Help with VA education benefits and GI Bill questions.", phone: "1-888-442-4551", website: "https://benefits.va.gov/gibill/contact_us.asp" },
      { name: "VA Veteran Readiness & Employment", scope: "Federal", description: "Career counseling, training, and employment assistance for eligible veterans with service-connected disabilities.", phone: "1-800-827-1000", website: "https://www.va.gov/careers-employment/vocational-rehabilitation/" },
      { name: "American Legion Post 16 — London", scope: "VSO / Local", description: "Local American Legion post supporting Laurel County veterans with community programs and benefits connections.", phone: "606-864-2627", website: "https://americanlegionpost16.org", address: "1785 Barbourville St, London, KY 40741" },
      { name: "Disabled American Veterans Chapter 66", scope: "VSO / Local", description: "London-area DAV chapter supporting disabled veterans.", phone: "606-877-1308", website: "https://davwebsites.dav.org/ky/66/SystemPages/Home.aspx" },
      { name: "Laurel County VFW Post 3302", scope: "VSO / Local", description: "Local Veterans of Foreign Wars post serving London and Laurel County.", phone: "606-389-5229", website: "https://vfwky.org/di/vfw/v2/postroster.asp", address: "3027 West Laurel Rd, London, KY" },
    ],
  },
  {
    title: "Burial & Cemetery Benefits",
    resources: [
      { name: "VA Burial and Memorial Benefits", scope: "Federal", description: "Information about burial in a national cemetery, memorial items, pre-need eligibility, and possible funeral-expense allowances.", phone: "1-800-827-1000", website: "https://www.va.gov/burials-memorials/" },
      { name: "National Cemetery Scheduling Office", scope: "Federal", description: "Schedule an eligible burial at a VA national cemetery.", phone: "1-800-535-1117", website: "https://www.cem.va.gov" },
      { name: "Camp Nelson National Cemetery", scope: "Federal / Kentucky", description: "National cemetery serving Kentucky veterans and eligible family members.", phone: "1-800-535-1117", website: "https://www.cem.va.gov/cems/nchp/CampNelson.asp", address: "6980 Danville Rd, Nicholasville, KY 40356" },
      { name: "Kentucky Veterans Cemetery — Southeast", scope: "Kentucky", description: "The closest Kentucky state veterans cemetery to London and Laurel County.", phone: "606-672-2750", website: "https://veterans.ky.gov/cemeteries", address: "1280 Kentucky Highway 118, Hyden, KY 41749" },
    ],
  },
  {
    title: "Crisis, Mental Health & Immediate Support",
    resources: [
      { name: "Veterans Crisis Line", scope: "Federal / 24-7", description: "Confidential crisis support for veterans, service members, National Guard and Reserve members, and their loved ones.", phone: "988, then press 1", website: "https://www.veteranscrisisline.net" },
      { name: "National Call Center for Homeless Veterans", scope: "Federal / 24-7", description: "Connects veterans who are homeless or at risk of homelessness with VA services.", phone: "1-877-424-3838", website: "https://www.va.gov/homeless/nationalcallcenter.asp" },
      { name: "VA Women Veterans Call Center", scope: "Federal", description: "Dedicated assistance for women veterans with questions about VA care, benefits, and services.", phone: "1-855-829-6636", website: "https://www.va.gov/womenvet/" },
    ],
  },
  {
    title: "Housing & Emergency Assistance",
    resources: [
      { name: "KCEOC Community Action Partnership", scope: "Local / Regional", description: "Rental and utility assistance, homelessness prevention, rapid rehousing, weatherization, and LIHEAP across the Cumberland Valley region.", phone: "606-546-3152", website: "https://www.kceoc.org", address: "5448 North US Hwy 25E, Suite A, Gray, KY 40734" },
      { name: "Kentucky River Foothills — Supportive Services for Veteran Families", scope: "Local / Regional", description: "Housing-stability assistance serving Laurel County, including deposits, eviction prevention, emergency rental help, and case management.", phone: "859-408-7017", website: "https://www.foothillscap.org" },
      { name: "Laurel County Judge-Executive’s Office", scope: "Local", description: "County government referrals for emergency assistance and community services available to Laurel County residents, including veterans.", phone: "606-864-5158", website: "https://www.laurelcounty.org", address: "203 S Main St, London, KY 40741" },
    ],
  },
  {
    title: "Records, Identification & Proof of Service",
    resources: [
      { name: "DD-214 and Military Records Request — National Archives", scope: "Federal", description: "Request discharge papers and other military service records needed for many benefits applications.", phone: "1-314-801-0800", website: "https://www.archives.gov/veterans/military-service-records", address: "National Personnel Records Center, 1 Archives Dr, St. Louis, MO 63138" },
      { name: "VA Veteran ID Card", scope: "Federal", description: "Apply for a VA-issued Veteran ID Card that may be accepted as proof of service for participating discounts.", phone: "1-800-827-1000", website: "https://www.va.gov/records/get-veteran-id-cards/vic/" },
      { name: "Kentucky Veteran Designation on Driver’s License", scope: "Kentucky", description: "Add a veteran designation to an eligible Kentucky driver’s license or ID card.", phone: "502-564-1257", website: "https://drive.ky.gov" },
    ],
  },
];

export default function VeteranResourcesPage() {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState("All");
  const scopes = ["All", "Federal", "Kentucky", "Local", "VSO"];
  const filtered = useMemo(() => categories.map((category) => ({ ...category, resources: category.resources.filter((resource) => {
    const q = query.toLowerCase().trim();
    const searchMatch = !q || `${resource.name} ${resource.scope} ${resource.description} ${resource.phone ?? ""} ${resource.address ?? ""}`.toLowerCase().includes(q);
    const scopeMatch = scope === "All" || resource.scope.toLowerCase().includes(scope.toLowerCase());
    return searchMatch && scopeMatch;
  }) })).filter((category) => category.resources.length), [query, scope]);
  const count = filtered.reduce((total, category) => total + category.resources.length, 0);

  return (
    <main className="directory-page">
      <section className="hero">
        <div className="utility-links"><Link href="/">Home</Link><a href="tel:988">Call 988, then press 1</a></div>
        <h1>Veteran Resources Directory</h1>
        <p>Local, Kentucky, and federal resources for veterans in London, Laurel County, and the surrounding region.</p>
        <Link href="/veteran-discounts" className="discounts-link">Veteran Benefits &amp; Discounts →</Link>
      </section>

      <section className="directory" aria-label="Veteran resources directory">
        <div className="progress-note"><strong>This directory is active and still growing.</strong> The verified information collected so far is available now, and additional categories and resources will continue to be added.</div>
        <div className="toolbar">
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search housing, GI Bill, mental health, VFW, phone number..." aria-label="Search veteran resources" />
          <div className="filters" aria-label="Filter resources by scope">{scopes.map((item) => <button key={item} className={scope === item ? "active" : ""} onClick={() => setScope(item)}>{item}</button>)}</div>
          <p className="status">Showing {count} resource{count === 1 ? "" : "s"}</p>
        </div>

        {filtered.length ? filtered.map((category) => (
          <section className="category" key={category.title}>
            <h2>{category.title}</h2>
            <div className="resource-grid">{category.resources.map((resource) => (
              <article className="resource-card" key={`${category.title}-${resource.name}`}>
                <span className="scope">{resource.scope}</span>
                <h3>{resource.name}</h3>
                <p>{resource.description}</p>
                {resource.address && <p className="meta"><strong>Address:</strong> {resource.address}</p>}
                <div className="actions">
                  {resource.phone && <a href={`tel:${resource.phone.replace(/[^0-9]/g, "")}`}>Call {resource.phone}</a>}
                  {resource.website && <a href={resource.website} target="_blank" rel="noreferrer">Official website</a>}
                </div>
              </article>
            ))}</div>
          </section>
        )) : <div className="empty">No resources match that search yet. Try a broader term or clear the filters.</div>}
      </section>

      <style jsx>{`
        .directory-page{min-height:100vh;background:#f3f5f7;color:#17212b}.hero{padding:22px 18px 48px;text-align:center;background:linear-gradient(145deg,#0f2e4c,#174f79);color:#fff}.utility-links{max-width:1100px;margin:0 auto 32px;display:flex;justify-content:space-between;gap:12px}.utility-links a{color:#fff;text-decoration:none;font-weight:700}.hero h1{margin:0 0 8px;font-size:clamp(2rem,6vw,3.8rem)}.hero p{max-width:760px;margin:0 auto 20px;color:#d9e6ef}.discounts-link{display:inline-flex;padding:13px 20px;border-radius:999px;background:#b52331;color:#fff;text-decoration:none;font-weight:900;box-shadow:0 7px 22px rgba(0,0,0,.22)}.directory{max-width:1120px;margin:auto;padding:26px 16px 70px}.progress-note{padding:16px 18px;border:1px solid #d7c16b;border-radius:12px;background:#fff8d9;line-height:1.5}.toolbar{position:sticky;top:10px;z-index:10;margin:18px 0 28px;padding:14px;border:1px solid #d6dee6;border-radius:16px;background:rgba(255,255,255,.96);box-shadow:0 9px 28px rgba(15,40,60,.1);backdrop-filter:blur(8px)}.toolbar input{width:100%;padding:14px 16px;border:1px solid #cbd5df;border-radius:11px;font-size:16px}.filters{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.filters button{padding:9px 14px;border:1px solid #cbd5df;border-radius:999px;background:#fff;cursor:pointer;font-weight:700}.filters button.active{background:#164d78;color:#fff;border-color:#164d78}.status{margin:10px 2px 0;color:#5b6874;font-size:.9rem}.category{margin-top:34px}.category h2{padding:12px 16px;border-left:6px solid #b52331;border-radius:8px;background:#123b5f;color:#fff;font-size:clamp(1.25rem,3vw,1.8rem)}.resource-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px}.resource-card{padding:18px;border:1px solid #d8e0e7;border-radius:14px;background:#fff;box-shadow:0 6px 18px rgba(20,40,60,.06)}.scope{display:inline-block;padding:5px 9px;border-radius:999px;background:#e6f0f8;color:#164d78;font-size:.76rem;font-weight:800}.resource-card h3{margin:10px 0 8px}.resource-card p{color:#53616e;line-height:1.5}.resource-card .meta{font-size:.9rem}.actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}.actions a{display:inline-flex;padding:9px 11px;border:1px solid #c9d5df;border-radius:9px;color:#164d78;text-decoration:none;font-weight:800}.empty{padding:30px;text-align:center;border:1px dashed #bcc8d3;border-radius:14px;background:#fff;color:#5b6874}@media(max-width:600px){.utility-links{margin-bottom:24px}.toolbar{top:6px}.resource-grid{grid-template-columns:1fr}}
      `}</style>
    </main>
  );
}
