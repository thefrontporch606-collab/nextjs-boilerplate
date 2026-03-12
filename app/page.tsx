"use client";

import Image from "next/image";

const paypal =
  "https://www.paypal.com/donate/?hosted_button_id=JJ9CFXVS9J44G";

const shop = "https://the-front-porch-4771.myshopify.com";

const facebook =
  "https://www.facebook.com/share/1ALeuZKmMZ/?mibextid=wwXIfr";

const COLORS = {
  blue: "#1F3558",
  red: "#B44537",
  white: "#FFFFFF",
};

export default function Home() {
  return (
    <main
      style={{
        background: COLORS.white,
        fontFamily: "Arial, sans-serif",
        color: COLORS.blue,
      }}
    >
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.07);
          }
          100% {
            transform: scale(1);
          }
        }

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

        .promo-link {
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .promo-link:hover {
          transform: scale(1.02);
          filter: brightness(1.03);
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
          <a href="/" className="nav-link">
            HOME
          </a>

          <a href="/hometown-heroes" className="nav-link">
            HOMETOWN HEROES
          </a>

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

          <a href="#services" className="nav-link">
            SERVICES
          </a>

          <a href="#events" className="nav-link">
            EVENTS
          </a>

          <a href="#contact" className="nav-link">
            CONTACT US
          </a>
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

            <div style={{ color: COLORS.white }}>
              <strong style={{ color: COLORS.white }}>
                The Front Porch is a Nonprofit Organization and your donation is
                a tax-deductible donation.
              </strong>

              <br />

              <span
                x-apple-data-detectors="false"
                style={{
                  color: "#FFFFFF",
                  fontSize: "20px",
                  fontWeight: 900,
                  letterSpacing: "1px",
                  textDecoration: "none",
                }}
              >
                EIN: 39-4248466
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* RAFFLES & GAMES BUTTON */}
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
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "100%",
              borderRadius: "28px",
              overflow: "hidden",
              boxShadow: "0 20px 45px rgba(31,53,88,0.16)",
              border: `3px solid ${COLORS.blue}`,
              backgroundColor: COLORS.white,
            }}
          >
            <img
              src="/raffles-games-button.jpeg"
              alt="Raffles and Games"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
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
        <div
          style={{
            width: "100%",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0 20px 45px rgba(31,53,88,0.16)",
            border: `3px solid ${COLORS.blue}`,
            backgroundColor: COLORS.white,
          }}
        >
          <img
            src="/carepackage.PNG"
            alt="Send a Care Package to a Deployed US Soldier"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* FACEBOOK */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
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
            display: "inline-block",
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
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.4rem",
            marginBottom: "30px",
          }}
        >
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
        <h2
          style={{
            fontSize: "2.4rem",
          }}
        >
          CONTACT US
        </h2>

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
  );
}
