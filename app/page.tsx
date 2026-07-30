import Link from "next/link";

const pathways = [
  {
    title: "I need help now",
    description:
      "Find crisis support, housing help, food assistance, transportation, health care, and other urgent services.",
    href: "/veteran-support",
    label: "Find veteran support",
  },
  {
    title: "I am looking for resources",
    description:
      "Browse local, regional, Kentucky, and federal organizations that serve veterans and their families.",
    href: "/veteran-resources",
    label: "Explore veteran resources",
  },
  {
    title: "I want to honor a veteran",
    description:
      "Visit Hometown Heroes to remember the fallen and recognize veterans from our communities.",
    href: "/hometown-heroes",
    label: "Visit Hometown Heroes",
  },
];

export default function HomePage() {
  return (
    <main id="main-content" className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__overlay" />
        <div className="home-hero__content">
          <p className="home-eyebrow">Serving veterans across Kentucky</p>
          <h1 id="home-title">No Veteran Should Ever Run Out of Places to Turn.</h1>
          <p className="home-hero__lead">
            The Front Porch connects veterans, service members, and families with practical help, trusted resources, and a community that remembers their service.
          </p>
          <div className="home-hero__actions">
            <Link className="home-button home-button--primary" href="/veteran-support">
              Get help now
            </Link>
            <Link className="home-button home-button--secondary" href="/veteran-resources">
              Browse resources
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section home-section--intro" aria-labelledby="start-here-title">
        <div className="home-section__inner">
          <p className="home-eyebrow home-eyebrow--dark">Start here</p>
          <h2 id="start-here-title">What do you need today?</h2>
          <div className="home-pathways">
            {pathways.map((pathway) => (
              <article className="home-card" key={pathway.title}>
                <h3>{pathway.title}</h3>
                <p>{pathway.description}</p>
                <Link href={pathway.href}>{pathway.label} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--mission" aria-labelledby="mission-title">
        <div className="home-section__inner home-mission-grid">
          <div>
            <p className="home-eyebrow home-eyebrow--dark">Our mission</p>
            <h2 id="mission-title">A clearer path to help.</h2>
          </div>
          <div className="home-mission-copy">
            <p>
              Veterans should not have to sort through disconnected websites, outdated phone numbers, and confusing eligibility rules when they need assistance.
            </p>
            <p>
              The Front Porch is building one dependable place to find support, understand available benefits, discover community resources, and preserve the stories of Kentucky veterans.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section home-section--features" aria-label="Featured areas">
        <div className="home-section__inner home-feature-grid">
          <Link className="home-feature" href="/veteran-discounts">
            <span>Benefits &amp; discounts</span>
            <strong>Find programs and savings available to veterans.</strong>
          </Link>
          <Link className="home-feature" href="/hometown-heroes">
            <span>Hometown Heroes</span>
            <strong>Honor those who served and remember those we lost.</strong>
          </Link>
          <a className="home-feature" href="https://givebutter.com/donate-to-the-front-porch-nebqxb" target="_blank" rel="noreferrer">
            <span>Support the mission</span>
            <strong>Help us expand access to veteran support across Kentucky.</strong>
          </a>
        </div>
      </section>

      <section className="home-callout" aria-labelledby="callout-title">
        <div className="home-section__inner home-callout__inner">
          <div>
            <p className="home-eyebrow">The Front Porch</p>
            <h2 id="callout-title">Built around one question:</h2>
            <p>Does this make it easier for a Veteran to get help?</p>
          </div>
          <Link className="home-button home-button--light" href="/veteran-resources">
            Find a resource
          </Link>
        </div>
      </section>
    </main>
  );
}
