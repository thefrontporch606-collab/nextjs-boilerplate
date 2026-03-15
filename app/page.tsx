"use client";

import Image from "next/image";
import { FormEvent } from "react";

const paypal =
  "https://www.paypal.com/donate/?hosted_button_id=JJ9CFXVS9J44G";

const shop = "https://the-front-porch-4771.myshopify.com";

const facebook =
  "https://www.facebook.com/share/1ALeuZKmMZ/?mibextid=wwXIfr";

const phone = "(606)595-8622";
const phoneHref = "tel:16065958622";

const email = "thefrontporch606@gmail.com";
const emailHref = "mailto:thefrontporch606@gmail.com";

const COLORS = {
  blue: "#1F3558",
  red: "#B44537",
  white: "#FFFFFF",
  gold: "#D4A62A",
};

export default function Home() {
  const handleCarePackageSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const donorName = String(formData.get("donor_name") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!donorName) {
      alert("Please enter your name.");
      return;
    }

    const url = new URL(paypal);
    url.searchParams.set("amount", "10");
    url.searchParams.set("campaign", "care-package");
    url.searchParams.set("donor_name", donorName);
    url.searchParams.set("message", message);

    window.location.href = url.toString();
  };

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

        .image-card {
          width: 100%;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(31, 53, 88, 0.16);
          border: 3px solid ${COLORS.blue};
          background-color: ${COLORS.white};
        }

        .section-card {
          background: #ffffff;
          border-radius: 22px;
          padding: 22px;
          margin-top: 14px;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.12);
        }

        .field-label {
          display: block;
          font-size: 0.98rem;
          font-weight: 800;
          color: ${COLORS.blue};
          margin-bottom: 8px;
        }

        .field-input,
        .field-textarea {
          width: 100%;
          border: 1px solid #d6dbe3;
          border-radius: 14px;
          padding: 13px 14px;
          font-size: 1rem;
          font-family: Arial, sans-serif;
          color: ${COLORS.blue};
        }

        .field-input:focus,
        .field-textarea:focus {
          outline: 2px solid ${COLORS.gold};
          border-color: ${COLORS.gold};
        }

        .click-here-btn {
          width: 100%;
          border: 0;
          border-radius: 16px;
          padding: 18px 20px;
          margin-top: 8px;
          font-size: 1.3rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          color: #2b1500;
          background: linear-gradient(180deg, #ffe36c 0%, #ffbe1a 48%, #cb7a00 100%);
          box-shadow: 0 8px 18px rgba(133, 69, 0, 0.28);
          cursor: pointer;
          transition:
            transform 0.2s ease,
            filter 0.2s ease;
        }

        .click-here-btn:hover {
          transform: translateY(-1px);
          filter: brightness(1.03);
        }

        .helper-text {
          margin: 10px 0 0;
          text-align: center;
          color: #4d5a70;
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .events-list {
          margin: 10px 0 0;
          padding-left: 22px;
          color: ${COLORS.blue};
          line-height: 1.9;
          font-weight: 800;
        }

        .contact-link {
          display: block;
          text-decoration: none;
          color: ${COLORS.red};
          font-size: 1.08rem;
          font-weight: 900;
          margin: 12px 0;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .contact-label {
          color: ${COLORS.blue};
          margin-right: 8px;
        }

        @media (max-width: 768px) {
          .section-card {
            padding: 16px;
          }

          .click-here-btn {
            font-size: 1.15rem;
            padding: 16px;
          }
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
          <div className="image-card">
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

      {/* CARE PACKAGE SECTION */}
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
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          <div className="image-card">
            <img
              src="/care-package-new.jpg"
              alt="Send a Care Package to a Deployed US Soldier"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>

          <div className="section-card">
            <h2
              style={{
                textAlign: "center",
                fontSize: "2rem",
                margin: "0 0 10px",
                color: COLORS.blue,
              }}
            >
              Send a $10 Care Package
            </h2>

            <p
              style={{
                margin: "0 0 18px",
                color: "#4d5a70",
                lineHeight: "1.6",
                fontSize: "1rem",
              }}
            >
              Add your name and an optional message, then click below to
              continue to checkout.
            </p>

            <form
              onSubmit={handleCarePackageSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                textAlign: "left",
              }}
            >
              <div>
                <label htmlFor="cpName" className="field-label">
                  Your Name
                </label>
                <input
                  id="cpName"
                  name="donor_name"
                  type="text"
                  required
                  className="field-input"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="cpMessage" className="field-label">
                  Message (Optional)
                </label>
                <textarea
                  id="cpMessage"
                  name="message"
                  rows={4}
                  className="field-textarea"
                  placeholder="Write a short message"
                />
              </div>

              <button type="submit" className="click-here-btn">
                CLICK HERE
              </button>

              <p className="helper-text">
                This takes the supporter into the donation checkout flow with a
                $10 care package amount.
              </p>
            </form>
          </div>
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
          maxWidth: "1120px",
          margin: "0 auto 45px",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          <a
            href="#events"
            className="promo-link"
            style={{
              display: "block",
              textDecoration: "none",
            }}
          >
            <div className="image-card">
              <img
                src="/events-button-new.jpg"
                alt="Events"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </a>

          <div
            id="events-list"
            className="section-card"
            style={{ textAlign: "left" }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.1rem",
                margin: "0 0 14px",
                color: COLORS.blue,
              }}
            >
              Upcoming Events
            </h2>

            <ul className="events-list">
              <li>TBD Event 1</li>
              <li>TBD Event 2</li>
              <li>TBD Event 3</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 20px 60px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          <div className="image-card">
            <img
              src="/contact-us-new.png"
              alt="Contact Us"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>

          <div className="contact-links-wrap">
            <a href={phoneHref} className="contact-link">
              <span className="contact-label">Phone:</span>
              {phone}
            </a>

            <a href={emailHref} className="contact-link">
              <span className="contact-label">Email:</span>
              {email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
