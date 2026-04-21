    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      background: ${COLORS.lightBg};
    }

    .page-shell {
      width: 100%;
      overflow-x: hidden;
    }

    .content-wrap {
      width: 100%;
      max-width: 980px;
      margin: 0 auto;
      padding: 0 14px 60px;
    }

    .image-card {
      width: 100%;
      border-radius: 28px;
      overflow: hidden;
      box-shadow: 0 16px 38px rgba(31, 53, 88, 0.14);
      background: #ffffff;
    }

    .promo-link,
    .image-button {
      transition: transform 0.2s ease, filter 0.2s ease;
    }

    .promo-link:hover,
    .image-button:hover {
      transform: translateY(-2px);
      filter: brightness(1.03);
    }

    .main-menu-box {
      width: 100%;
      max-width: 860px;
      margin: 0 auto 34px;
      background: ${COLORS.blue};
      border-radius: 0;
      padding: 20px 18px;
    }

    .main-menu-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px 18px;
      align-items: center;
    }

    .main-menu-link {
      color: #ffffff;
      text-decoration: none;
      font-weight: 800;
      font-size: 1.05rem;
      line-height: 1.2;
      letter-spacing: 0.3px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 34px;
      padding: 4px 2px;
      background: transparent;
      border: 0;
    }

    .main-menu-link:hover {
      text-decoration: underline;
    }

    .top-row {
      display: grid;
      grid-template-columns: 290px 1fr;
      gap: 18px;
      align-items: start;
      margin: 0 auto 20px;
      max-width: 860px;
    }

    .top-row .image-card {
      border-radius: 0;
      box-shadow: none;
      background: transparent;
    }

    .section-stack {
      display: flex;
      flex-direction: column;
      gap: 22px;
      max-width: 860px;
      margin: 0 auto;
    }

    .centered-block {
      width: 100%;
    }

    .image-button {
      display: block;
      width: 100%;
      border: 0;
      background: transparent;
      padding: 0;
      cursor: pointer;
    }

    .newsletter-card {
      background: #ffffff;
      border-radius: 20px;
      padding: 18px;
      box-shadow: 0 12px 28px rgba(31, 53, 88, 0.12);
      margin-top: 12px;
    }

    .newsletter-title {
      margin: 0 0 14px;
      font-size: 1.3rem;
      font-weight: 900;
      color: ${COLORS.blue};
      text-align: center;
    }

    .newsletter-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      align-items: center;
    }

    .newsletter-input {
      width: 100%;
      border: 1px solid #d3d8e0;
      border-radius: 12px;
      padding: 12px 14px;
      font-size: 0.96rem;
      color: ${COLORS.blue};
      background: #fff;
    }

    .newsletter-input:focus {
      outline: 2px solid ${COLORS.gold};
      border-color: ${COLORS.gold};
    }

    .newsletter-button {
      border: 0;
      border-radius: 12px;
      padding: 12px 18px;
      font-size: 0.95rem;
      font-weight: 900;
      color: #2b1500;
      background: linear-gradient(180deg, #ffe36c 0%, #ffbe1a 48%, #cb7a00 100%);
      box-shadow: 0 8px 18px rgba(133, 69, 0, 0.18);
      cursor: pointer;
      white-space: nowrap;
      grid-column: 1 / -1;
    }

    .newsletter-button:hover {
      filter: brightness(1.03);
    }

    .newsletter-status {
      margin: 12px 0 0;
      text-align: center;
      color: ${COLORS.red};
      font-weight: 700;
      font-size: 0.92rem;
    }

    .contact-strip {
      text-align: center;
      padding: 24px 0 0;
    }

    .contact-link {
      display: inline-block;
      margin: 6px 12px;
      font-weight: 800;
      color: ${COLORS.red};
      text-decoration: none;
      font-size: 1rem;
    }

    .contact-link:hover {
      text-decoration: underline;
    }

    .contact-label {
      color: ${COLORS.blue};
      margin-right: 6px;
    }

    .events-panel {
      text-align: center;
      padding: 8px 0 0;
    }

    .events-title {
      margin: 0 0 10px;
      color: ${COLORS.blue};
      font-size: 2rem;
      font-weight: 900;
    }

    .events-list {
      list-style: none;
      padding: 0;
      margin: 0;
      color: ${COLORS.blue};
      font-weight: 800;
      line-height: 1.9;
      font-size: 1.02rem;
    }
  `}</style>

  <div className="page-shell">
    <div className="content-wrap">
      <section className="section-stack">

        <section id="events" className="events-panel">
          <h2 className="events-title">Upcoming Events</h2>
          <ul className="events-list">
            <li>TBD Event 1</li>
            <li>TBD Event 2</li>
            <li>TBD Event 3</li>
          </ul>
        </section>

        {/* ✅ PAYPAL CARE PACKAGE BOX */}
        <section style={{ marginTop: "20px", textAlign: "center" }}>
          <div className="image-card" style={{ padding: "24px 18px" }}>
            <h2
              style={{
                margin: "0 0 10px",
                fontSize: "1.8rem",
                fontWeight: 900,
                color: COLORS.blue,
              }}
            >
              Send a Care Package 🇺🇸
            </h2>

            <p
              style={{
                margin: "0 0 18px",
                color: "#4f5f74",
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              Support deployed service members by sending a care package.
              Your donation helps provide essential items and lets them know they are not forgotten.
            </p>

            <a
              href="https://www.paypal.com/donate/?hosted_button_id=BSKSR77NFL9DJ"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  border: 0,
                  borderRadius: "16px",
                  padding: "16px 22px",
                  fontSize: "1.05rem",
                  fontWeight: 900,
                  color: "#2b1500",
                  background:
                    "linear-gradient(180deg, #ffe36c 0%, #ffbe1a 48%, #cb7a00 100%)",
                  boxShadow: "0 8px 18px rgba(133, 69, 0, 0.28)",
                  cursor: "pointer",
                }}
              >
                SEND A CARE PACKAGE
              </button>
            </a>
          </div>
        </section>

        <section id="contact" className="contact-strip">
          <a href={phoneHref} className="contact-link">
            <span className="contact-label">Phone:</span>
            {phone}
          </a>
          <a href={emailHref} className="contact-link">
            <span className="contact-label">Email:</span>
            {email}
          </a>
        </section>

      </section>
    </div>
  </div>
</main>
