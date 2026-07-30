"use client";

import Link from "next/link";

const federalBenefits = [
  ["VA health care", "Primary, specialty, mental health, urgent, pharmacy, long-term, and other care may be available to eligible veterans.", "https://www.va.gov/health-care/"],
  ["Disability compensation", "Tax-free monthly compensation may be available for conditions caused or worsened by military service.", "https://www.va.gov/disability/"],
  ["Education and training", "GI Bill and related programs may help with college, vocational training, apprenticeships, and licensing tests.", "https://www.va.gov/education/"],
  ["Home loans and housing", "VA-backed loans and adapted-housing grants may be available to eligible veterans.", "https://www.va.gov/housing-assistance/"],
  ["Careers and VR&E", "Employment tools, transition support, and Veteran Readiness and Employment programs.", "https://www.va.gov/careers-employment/"],
  ["Burial and memorial benefits", "Cemetery burial, memorial items, pre-need decisions, and possible burial allowances.", "https://www.va.gov/burials-memorials/"],
];

const featuredPerks = [
  { name: "Smoke Checked Veteran Apparel", offer: "15% veteran discount year-round. Veterans Day offer: 35% off plus free shipping.", url: "https://smokechecked.com", tag: "Official sponsor" },
  { name: "Vet Tix", offer: "Verified currently serving military, honorably discharged veterans, and eligible KIA family members can request donated event tickets and access some discounted offers. A small delivery fee may apply.", url: "https://www.vettix.org", tag: "Tickets and events" },
  { name: "ID.me Shop", offer: "Verify military status once, then browse military offers from participating brands and organizations. Each merchant controls its own eligibility and terms.", url: "https://shop.id.me/military", tag: "Discount marketplace" },
  { name: "Kings Island", offer: "Military, veterans, and first responders can access discounted admission after ID.me verification. Kings Island also offered free single-day admission for eligible military and veterans during Military Days, May 22–25, 2026.", url: "https://www.sixflags.com/kingsisland/military-discounts", tag: "Theme park" },
];

const nationalOffers = [
  { name: "National Parks", offer: "Veterans and Gold Star Families may qualify for a free Military Lifetime Pass.", url: "https://www.nps.gov/planyourvisit/veterans-and-gold-star-families-free-access.htm" },
  { name: "Home Depot", offer: "10% off eligible purchases for verified veterans, service members, and qualifying spouses, subject to exclusions and caps.", url: "https://www.homedepot.com/c/military" },
  { name: "Lowe’s", offer: "10% off eligible purchases for enrolled and verified service members, veterans, and qualifying spouses.", url: "https://www.lowes.com/l/about/honor-our-military" },
  { name: "Apple", offer: "Veterans and Military Purchase Program pricing for eligible military members, veterans, and qualifying household family members.", url: "https://www.apple.com/shop/browse/home/veterans_military" },
];

export default function VeteranDiscountsPage() {
  return (
    <main className="guide" id="main-content">
      <header className="hero">
        <Link href="/veteran-resources" className="back">← Veteran Resources</Link>
        <h1>Veteran Discounts &amp; Perks</h1>
        <p>Verified benefits, savings, tickets, and special offers for veterans and military families.</p>
      </header>

      <section className="featured-logos" aria-label="Featured veteran discount partners">
        <a href="https://smokechecked.com" target="_blank" rel="noreferrer" className="logo-card smoke"><strong>SMOKE CHECKED</strong><span>Veteran Apparel</span></a>
        <a href="https://shop.id.me/military" target="_blank" rel="noreferrer" className="logo-card idme"><strong>ID.me</strong><span>Military verification &amp; offers</span></a>
        <a href="https://www.vettix.org" target="_blank" rel="noreferrer" className="logo-card vettix"><strong>VET TIX</strong><span>Give something to those who gave</span></a>
      </section>

      <section className="notice"><strong>Start here:</strong> Offers can change. Confirm current eligibility, verification requirements, exclusions, dates, and redemption instructions on the official website before traveling or purchasing.</section>

      <section className="section">
        <h2>Featured discounts and perks</h2>
        <div className="offer-grid">{featuredPerks.map((item) => <article className="offer" key={item.name}><span className="tag">{item.tag}</span><h3>{item.name}</h3><p>{item.offer}</p><a href={item.url} target="_blank" rel="noreferrer">Open official website →</a></article>)}</div>
      </section>

      <section className="section alt">
        <h2>Federal benefits</h2>
        <div className="cards">{federalBenefits.map(([name, description, url]) => <article className="card" key={name}><h3>{name}</h3><p>{description}</p><a href={url} target="_blank" rel="noreferrer">Official information →</a></article>)}</div>
      </section>

      <section className="section">
        <h2>National military offers</h2>
        <div className="offer-grid">{nationalOffers.map((item) => <article className="offer" key={item.name}><h3>{item.name}</h3><p>{item.offer}</p><a href={item.url} target="_blank" rel="noreferrer">Check current terms →</a></article>)}</div>
      </section>

      <section className="section alt">
        <h2>More categories being expanded</h2>
        <div className="category-grid"><article><h3>Travel and lodging</h3><p>Airlines, hotels, rental cars, cruises, rail, and campgrounds.</p></article><article><h3>Food and shopping</h3><p>Restaurants, groceries, retailers, apparel, and local businesses.</p></article><article><h3>Connectivity and services</h3><p>Wireless, internet, fitness, insurance, and professional services.</p></article><article><h3>Recreation</h3><p>Theme parks, museums, sports, concerts, theaters, and outdoor activities.</p></article></div>
      </section>

      <footer><p>Businesses and agencies control their own terms. The Front Porch does not guarantee eligibility or availability.</p><Link href="/veteran-resources">Return to Veteran Resources</Link></footer>

      <style jsx>{`
        .guide{min-height:100vh;background:#f4f6f8;color:#17222d}.hero{position:relative;padding:38px 18px 54px;text-align:center;background:linear-gradient(145deg,#0f2e4c,#194f79);color:#fff}.back{position:absolute;left:18px;top:18px;color:#fff;font-weight:800}.hero h1{margin:18px 0 8px;font-size:clamp(2.2rem,7vw,4.5rem)}.hero p{max-width:760px;margin:auto;color:#dbe7f0;font-size:1.08rem}.featured-logos{max-width:1120px;margin:-28px auto 22px;padding:0 16px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px;position:relative}.logo-card{min-height:125px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border:1px solid #d6dfe7;border-radius:16px;background:#fff;text-decoration:none;box-shadow:0 10px 30px #14283c18;padding:14px}.logo-card strong{font-size:clamp(1rem,3vw,1.65rem)}.logo-card span{margin-top:7px;color:#53616e;font-size:.82rem}.smoke strong{color:#6c5726}.idme strong{color:#065b6f}.vettix strong{color:#174d91}.notice{max-width:1040px;margin:0 auto 18px;padding:18px 20px;background:#fff8dc;border:1px solid #e3ce7e;border-radius:14px;line-height:1.55}.section{max-width:1120px;margin:auto;padding:40px 18px}.section.alt{max-width:none;padding-left:max(18px,calc((100vw - 1084px)/2));padding-right:max(18px,calc((100vw - 1084px)/2));background:#e8edf2}.section h2{margin:0 0 12px;color:#123c60;font-size:clamp(1.6rem,4vw,2.4rem)}.cards,.offer-grid,.category-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(235px,1fr));gap:16px;margin-top:20px}.card,.offer,.category-grid article{padding:20px;border:1px solid #d6dfe7;border-radius:14px;background:#fff;box-shadow:0 6px 20px #14283c0f}.card h3,.offer h3,.category-grid h3{margin:0 0 8px;color:#183d5d}.card p,.offer p,.category-grid p{color:#53616e;line-height:1.5}.card a,.offer a{display:inline-block;margin-top:8px;color:#174f82;font-weight:800;text-decoration:none}.tag{display:inline-flex;margin-bottom:10px;padding:5px 9px;border-radius:999px;background:#e7f0f8;color:#164d78;font-size:.72rem;font-weight:900}footer{padding:32px 18px;text-align:center;background:#102f4e;color:#dbe6ef}footer a{color:#fff;font-weight:800}@media(max-width:600px){.featured-logos{grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;padding-inline:6px}.logo-card{min-height:105px;padding:7px}.logo-card strong{font-size:.78rem}.logo-card span{font-size:.58rem}.notice{margin-inline:12px}.back{position:static;display:inline-block;margin-bottom:10px}}
      `}</style>
    </main>
  );
}
