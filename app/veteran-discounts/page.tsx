"use client";

import Link from "next/link";

const federalBenefits = [
  ["VA health care", "Eligible veterans may access primary, specialty, mental health, urgent, pharmacy, long-term, and other care. Enrollment and copays vary.", "https://www.va.gov/health-care/"],
  ["Disability compensation", "Tax-free monthly compensation may be available for conditions caused or worsened by military service, including qualifying secondary or presumptive conditions.", "https://www.va.gov/disability/"],
  ["Veterans Pension", "Needs-based monthly payments may be available to qualifying wartime veterans who meet age or disability, income, net-worth, and service requirements.", "https://www.va.gov/pension/"],
  ["Education and training", "GI Bill and related programs can help with approved college, vocational training, apprenticeships, licensing tests, and other education costs.", "https://www.va.gov/education/"],
  ["Home loans and housing", "A VA-backed loan may help an eligible borrower buy, build, improve, or refinance a home. Some veterans may qualify for adapted-housing grants.", "https://www.va.gov/housing-assistance/"],
  ["Careers and VR&E", "Employment tools, transition support, and Veteran Readiness and Employment may help eligible veterans prepare for, find, or keep suitable work.", "https://www.va.gov/careers-employment/"],
  ["Life insurance", "VA offers several life-insurance options for eligible service members, veterans, and families. Deadlines and eligibility differ by program.", "https://www.va.gov/life-insurance/"],
  ["Burial and memorial benefits", "Eligible veterans and qualifying family members may receive cemetery burial, memorial items, pre-need eligibility decisions, or burial allowances.", "https://www.va.gov/burials-memorials/"],
  ["Family, caregiver, and survivor support", "Qualifying spouses, dependents, survivors, and caregivers may be eligible for health care, education, compensation, pension, insurance, or caregiver support.", "https://www.va.gov/family-and-caregiver-benefits/"],
];

const offers = [
  { name: "National Parks", offer: "Veterans and Gold Star Families are eligible for a free Military Lifetime Pass covering entrance and standard day-use fees on participating federal recreation lands. Online processing or shipping fees may apply.", checked: "Reviewed 07/28/2026 • Reverify yearly", url: "https://www.nps.gov/planyourvisit/veterans-and-gold-star-families-free-access.htm" },
  { name: "Home Depot", offer: "10% off eligible purchases for verified veterans, service members, and spouses, subject to exclusions and an annual discount cap.", checked: "Reviewed 07/28/2026 • Reverify quarterly", url: "https://www.homedepot.com/c/military" },
  { name: "Lowe’s", offer: "10% off eligible purchases for enrolled and verified service members, veterans, and qualifying spouses. Account enrollment, verification, and exclusions apply.", checked: "Reviewed 07/28/2026 • Reverify quarterly", url: "https://www.lowes.com/l/about/honor-our-military" },
  { name: "Apple", offer: "Veterans and Military Purchase Program savings for eligible U.S. military members, veterans, and qualifying household family members. Verification and product restrictions apply.", checked: "Reviewed 07/28/2026 • Reverify quarterly", url: "https://www.apple.com/shop/browse/home/veterans_military" },
];

const stateChecks = [
  "Property and income tax exemptions, credits, deductions, or filing advantages",
  "Tuition waivers, scholarships, in-state tuition, and dependent education",
  "Hunting, fishing, professional-license, park-admission, and camping discounts",
  "Special plates, registration-fee relief, transit discounts, and parking privileges",
  "Public-hiring preference, licensing credit, business programs, and contracting resources",
  "Veterans homes, housing programs, emergency grants, and county assistance",
];

export default function VeteranDiscountsPage() {
  return (
    <main className="guide">
      <header className="hero">
        <div className="top-links"><Link href="/veteran-resources">← Veteran Resources</Link><Link href="/">Home</Link></div>
        <p className="eyebrow">THE FRONT PORCH • VETERAN RESOURCE GUIDE</p>
        <h1>Veteran Benefits &amp; Discounts</h1>
        <p>A practical starting point for veterans, families, caregivers, and resource navigators.</p>
        <p className="reviewed">Guide reviewed July 28, 2026</p>
      </header>

      <section className="notice">
        <strong>Start here:</strong> Eligibility depends on service history, discharge status, disability rating, income, location, and the specific program. Official agencies and businesses control their rules. Use VA.gov for formal benefit decisions, and use a VA-accredited representative or VSO for free claims help.
      </section>

      <section className="section">
        <h2>Federal benefits</h2>
        <div className="cards">
          {federalBenefits.map(([name, description, url]) => (
            <article className="card" key={name}>
              <h3>{name}</h3><p>{description}</p><a href={url} target="_blank" rel="noreferrer">Official information →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <h2>State and local benefits to check</h2>
        <p>These benefits vary by residence, disability rating, wartime service, income, application deadlines, and other rules. Confirm each item with the administering state, county, or local agency.</p>
        <ul className="check-list">{stateChecks.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="section">
        <h2>Representative national offers</h2>
        <p>Commercial terms can change without notice. Review exclusions and verify the current offer before relying on it.</p>
        <div className="offer-grid">
          {offers.map((offer) => (
            <article className="offer" key={offer.name}>
              <h3>{offer.name}</h3><p>{offer.offer}</p><small>{offer.checked}</small><a href={offer.url} target="_blank" rel="noreferrer">Check official terms →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <h2>Discount categories being expanded</h2>
        <div className="category-grid">
          <article><h3>Travel and lodging</h3><p>Airlines, hotels, rail, rental cars, cruises, and campgrounds.</p></article>
          <article><h3>Connectivity and services</h3><p>Wireless, internet, fitness, insurance, and professional services.</p></article>
          <article><h3>Food and local shopping</h3><p>Restaurants, grocers, retailers, barbers, contractors, and local businesses.</p></article>
          <article><h3>Automotive and recreation</h3><p>Dealers, parts, museums, parks, sports, theaters, and attractions.</p></article>
        </div>
      </section>

      <section className="section safety">
        <h2>How to verify safely</h2>
        <ul>
          <li>Confirm the exact offer on the official agency or company website. Treat third-party lists only as leads.</li>
          <li>Record the official URL, date checked, eligibility group, accepted proof, exclusions, cap, geography, and expiration.</li>
          <li>Do not routinely carry or hand over a DD214. When accepted, use a Veteran ID Card, VHIC, military ID, state veteran designation, or secure verification service.</li>
          <li>Recheck commercial offers quarterly and government summaries annually. Withhold an exact rate when official terms cannot be confirmed.</li>
        </ul>
      </section>

      <footer>
        <p>This guide provides general information and does not guarantee eligibility, payment, coverage, or savings. Never pay an unverified person to “unlock” a VA benefit.</p>
        <Link href="/veteran-resources">Return to the Veteran Resources Directory</Link>
      </footer>

      <style jsx>{`
        .guide{min-height:100vh;background:#f4f6f8;color:#17222d}.hero{padding:24px 18px 48px;text-align:center;background:linear-gradient(145deg,#0f2e4c,#194f79);color:#fff}.top-links{max-width:1120px;margin:0 auto 35px;display:flex;justify-content:space-between}.top-links a{color:#fff;text-decoration:none;font-weight:700}.eyebrow{font-size:.78rem;letter-spacing:.12em;font-weight:800;color:#d6e4ef}.hero h1{margin:8px 0;font-size:clamp(2rem,6vw,4rem)}.hero>p:not(.eyebrow):not(.reviewed){max-width:700px;margin:0 auto;color:#dbe7f0;font-size:1.08rem}.reviewed{display:inline-block;margin-top:18px;padding:7px 12px;border:1px solid rgba(255,255,255,.35);border-radius:999px;font-size:.82rem}.notice{max-width:1040px;margin:-22px auto 20px;padding:18px 20px;background:#fff8dc;border:1px solid #e3ce7e;border-radius:14px;box-shadow:0 10px 30px rgba(20,40,60,.1);line-height:1.55}.section{max-width:1120px;margin:auto;padding:42px 18px}.section.alt{max-width:none;padding-left:max(18px,calc((100vw - 1084px)/2));padding-right:max(18px,calc((100vw - 1084px)/2));background:#e8edf2}.section h2{margin:0 0 12px;font-size:clamp(1.55rem,4vw,2.3rem);color:#123c60}.section>p{max-width:850px;color:#526170}.cards,.offer-grid,.category-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(235px,1fr));gap:16px;margin-top:22px}.card,.offer,.category-grid article{padding:20px;border:1px solid #d6dfe7;border-radius:14px;background:#fff;box-shadow:0 6px 20px rgba(20,40,60,.06)}.card h3,.offer h3,.category-grid h3{margin:0 0 8px;color:#183d5d}.card p,.offer p,.category-grid p{color:#53616e;line-height:1.5}.card a,.offer a{display:inline-block;margin-top:8px;color:#174f82;font-weight:800;text-decoration:none}.offer small{display:block;color:#7a5960;font-weight:700}.check-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:10px;padding:0;list-style:none}.check-list li{padding:14px 16px;background:#fff;border-radius:10px;border-left:5px solid #a51e2c}.safety{background:#fff}.safety ul{padding-left:22px;line-height:1.65}.safety li{margin:9px 0}footer{padding:32px 18px;text-align:center;background:#102f4e;color:#dbe6ef}footer p{max-width:900px;margin:0 auto 14px}footer a{color:#fff;font-weight:800}@media(max-width:600px){.notice{margin:-18px 12px 10px}.top-links{margin-bottom:25px}}
      `}</style>
    </main>
  );
}
