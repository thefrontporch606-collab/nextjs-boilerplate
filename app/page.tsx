export default function Home() {
  return (
    <main>
      <section className="top-banner">
        <div className="container banner-wrap">
          <img
            src="/banner.png"
            alt="TFP Built From Chaos - For Veterans. By Veterans."
            className="banner-image"
          />
        </div>
      </section>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Veterans Nonprofit</p>
            <h1>The Front Porch</h1>
            <p className="hero-text">
              Supporting veterans and their families through outreach,
              emergency relief, VA benefits guidance, employment support,
              and strong community connection.
            </p>

            <div className="hero-buttons">
              <a className="btn btn-primary" href="#donate">Donate Now</a>
              <a className="btn btn-secondary" href="#help">Get Help</a>
            </div>
          </div>

          <div className="hero-logo-card">
            <img
              src="/logo.jpeg"
              alt="The Front Porch logo"
              className="hero-logo"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <h2>Our Mission</h2>
          <p className="lead">
            The Front Porch exists to support veterans and their families by
            providing resources, guidance, emergency assistance, and a community
            where no one is left behind.
          </p>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <h2 className="center">What We Do</h2>

          <div className="card-grid">
            <div className="card">
              <h3>Homeless Veteran Outreach</h3>
              <p>
                Connecting unhoused veterans with safety, housing resources,
                and long-term support.
              </p>
            </div>

            <div className="card">
              <h3>Emergency Relief Support</h3>
              <p>
                Immediate assistance during crisis situations when veterans
                and families need help most.
              </p>
            </div>

            <div className="card">
              <h3>VA Claims & Benefits Guidance</h3>
              <p>
                Helping veterans understand and access the benefits
                they have earned.
              </p>
            </div>

            <div className="card">
              <h3>Veteran Employment Support</h3>
              <p>
                Career readiness, resume support, and job placement help
                for veterans.
              </p>
            </div>

            <div className="card">
              <h3>Community & Peer Support</h3>
              <p>
                Building real connection, shared experiences, and
                judgment-free support.
              </p>
            </div>

            <div className="card">
              <h3>Family & Community Outreach</h3>
              <p>
                Serving veterans, their families, and the wider community
                through outreach and events.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="donate" className="section donate">
        <div className="container donate-box">
          <div>
            <h2>Support Our Mission</h2>
            <p>
              Your donation helps provide outreach, emergency support,
              benefits guidance, and hope for veterans in need.
            </p>
          </div>

          <div className="donate-actions">
            <a className="btn btn-primary" href="https://paypal.com" target="_blank">
              Donate with PayPal
            </a>
            <p className="small">
              One-time and recurring donations can be connected here.
            </p>
          </div>
        </div>
      </section>

      <section id="help" className="section">
        <div className="container center">
          <h2>Need Help?</h2>
          <p className="lead">
            Veterans needing assistance with housing, emergency relief,
            employment support, benefits guidance, or other services can contact us.
          </p>
          <a className="btn btn-primary" href="mailto:info@frontporch606.com">
            Request Assistance
          </a>
        </div>
      </section>

      <section className="section light">
        <div className="container center">
          <h2>Get Involved</h2>
          <p className="lead">
            Donate, volunteer, become a member, attend events, and help us make
            a real impact for veterans and their families.
          </p>

          <div className="hero-buttons center-buttons">
            <a className="btn btn-secondary" href="#">Membership</a>
            <a className="btn btn-secondary" href="#">Events</a>
            <a className="btn btn-secondary" href="#">Shop</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <h3>The Front Porch</h3>
            <p>Veterans Nonprofit</p>
          </div>

          <div>
            <p>Email: info@frontporch606.com</p>
            <p>For Veterans. By Veterans.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
