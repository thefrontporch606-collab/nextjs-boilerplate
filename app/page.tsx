    .nav-link {
      color: #ffffff;
      font-weight: 800;
      text-decoration: none;
      font-size: 0.9rem;
      letter-spacing: 0.4px;
      transition:
        color 0.2s ease,
        text-shadow 0.2s ease,
        transform 0.2s ease;
    }

    .nav-link:hover {
      color: #ffffff;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.85);
      transform: translateY(-1px);
    }

    .promo-link:hover {
      transform: scale(1.02);
    }
  `}</style>

  {/* HERO IMAGE */}
  <section
    style={{
      width: "100%",
      background: COLORS.white,
      padding: "20px 0",
    }}
  >
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        height: "min(85vw,900px)",
        minHeight: "420px",
      }}
    >
      <Image
        src="/IMG_1844.jpeg"
        alt="The Front Porch"
        fill
        priority
        style={{
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </div>
  </section>

  {/* NAV BAR */}
  <nav
    style={{
      background: COLORS.blue,
      borderTop: `4px solid ${COLORS.red}`,
      borderBottom: `4px solid ${COLORS.red}`,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        padding: "18px",
        flexWrap: "wrap",
      }}
    >
      <a href="/" className="nav-link">HOME</a>

      <a href="/hometown-heroes" className="nav-link">
        HOMETOWN HEROES
      </a>

      {/* NEW NAV LINK */}
      <a href="/scratch-off" className="nav-link">
        RAFFLES & GAMES
      </a>

      <a
        href={paypal}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
      >
        DONATE TO THE FRONT PORCH
      </a>

      <a
        href={shop}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
      >
        TFP SHOP
      </a>

      <a href="#services" className="nav-link">SERVICES</a>
      <a href="#events" className="nav-link">EVENTS</a>
      <a href="#contact" className="nav-link">CONTACT US</a>
    </div>
  </nav>

  {/* DONATE SECTION */}
  <section
    style={{
      maxWidth: "1400px",
      margin: "60px auto",
      padding: "0 20px",
    }}
  >
    <div
      style={{
        background: `linear-gradient(135deg, ${COLORS.red}, ${COLORS.blue})`,
        padding: "90px 60px",
        borderRadius: "32px",
        textAlign: "center",
        color: COLORS.white,
        boxShadow: "0 30px 70px rgba(0,0,0,.25)",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2.4rem,5vw,4rem)",
          marginBottom: "24px",
        }}
      >
        SUPPORT THE FRONT PORCH
      </h1>

      <p
        style={{
          maxWidth: "760px",
          margin: "0 auto 34px",
          lineHeight: "1.8",
          fontSize: "18px",
        }}
      >
        Your donations help provide outreach, emergency relief, and real
        support to veterans and their families.
      </p>

      <a
        href={paypal}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: COLORS.white,
          color: COLORS.red,
          padding: "24px 52px",
          borderRadius: "20px",
          fontWeight: 900,
          fontSize: "24px",
          textDecoration: "none",
          display: "inline-block",
          animation: "pulse 2s infinite",
        }}
      >
        DONATE NOW
      </a>

      {/* TAX INFO */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          maxWidth: "760px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "left",
          fontSize: "16px",
          lineHeight: "1.6",
          color: COLORS.white,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill={COLORS.white}>
          <path d="M12 2L4 5v6c0 5.25 3.5 9.75 8 11 4.5-1.25 8-5.75 8-11V5l-8-3z" />
        </svg>

        <div>
          <strong>
            The Front Porch is a Nonprofit Organization and your donation
            is a tax-deductible donation.
          </strong>

          <br />

          <span
            style={{
              color: "#FFFFFF",
              fontSize: "20px",
              fontWeight: 900,
              letterSpacing: "1px",
            }}
          >
            EIN: 39-4248466
          </span>
        </div>
      </div>
    </div>
  </section>

  {/* NEW RAFFLES BUTTON */}
  <section
    style={{
      maxWidth: "1120px",
      margin: "0 auto 45px",
      padding: "0 20px",
      textAlign: "center",
    }}
  >
    <a
      href="/scratch-off"
      className="promo-link"
      style={{
        display: "inline-block",
        width: "100%",
        maxWidth: "760px",
      }}
    >
      <img
        src="/raffles-games-button.jpeg"
        alt="Raffles and Games"
        style={{
          width: "100%",
          borderRadius: "24px",
          boxShadow: "0 20px 45px rgba(31,53,88,0.16)",
        }}
      />
    </a>
  </section>

  {/* CARE PACKAGE IMAGE */}
  <section
    style={{
      maxWidth: "1120px",
      margin: "0 auto 45px",
      padding: "0 20px",
      textAlign: "center",
    }}
  >
    <img
      src="/carepackage.PNG"
      alt="Send a Care Package to a Deployed US Soldier"
      style={{
        width: "100%",
        borderRadius: "28px",
        boxShadow: "0 20px 45px rgba(31,53,88,0.16)",
        border: `3px solid ${COLORS.blue}`,
      }}
    />
  </section>

  {/* FACEBOOK */}
  <section style={{ textAlign: "center", marginBottom: "50px" }}>
    <a
      href={facebook}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: COLORS.blue,
        color: COLORS.white,
        padding: "16px 26px",
        borderRadius: "12px",
        fontWeight: 700,
        textDecoration: "none",
      }}
    >
      👍 LIKE US ON FACEBOOK
    </a>
  </section>

  {/* EVENTS */}
  <section
    id="events"
    style={{
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "40px 20px",
    }}
  >
    <h2 style={{ textAlign: "center", fontSize: "2.4rem", marginBottom: "30px" }}>
      EVENTS
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
      }}
    >
      {["TBD", "TBD", "TBD"].map((e, i) => (
        <div
          key={i}
          style={{
            border: `2px solid ${COLORS.red}`,
            padding: "25px",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          <h3>TBD</h3>
          <p>TBD</p>
        </div>
      ))}
    </div>
  </section>

  {/* CONTACT */}
  <section
    id="contact"
    style={{
      textAlign: "center",
      padding: "60px 20px",
    }}
  >
    <h2 style={{ fontSize: "2.4rem" }}>CONTACT US</h2>

    <p style={{ marginTop: "20px" }}>
      Phone
      <a
        href="tel:16065958622"
        style={{ color: COLORS.red, fontWeight: 700, marginLeft: "8px" }}
      >
        (606)595-8622
      </a>
    </p>

    <p>
      Email
      <a
        href="mailto:thefrontporch606@gmail.com"
        style={{ color: COLORS.red, fontWeight: 700, marginLeft: "8px" }}
      >
        thefrontporch606@gmail.com
      </a>
    </p>
  </section>
</main>
