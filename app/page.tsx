"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

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
  lightBg: "#F3F4F6",
};

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "HOMETOWN HEROES", href: "/hometown-heroes" },
  { label: "R&R", href: "/coming-soon" },
  { label: "DONATE", href: paypal, external: true },
  { label: "TFP SHOP", href: shop, external: true },
  { label: "CONTACT US", href: "#contact" },
  { label: "VETERAN RESOURCES", href: "/veteran-resources" },
  { label: "EVENTS", href: "#events" },
  { label: "MEMBERSHIP", href: "/coming-soon" },
];

export default function Home() {
  const [showCareModal, setShowCareModal] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [message, setMessage] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const handleCarePackageSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = donorName.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      alert("Please enter your name.");
      return;
    }

    const url = new URL(paypal);
    url.searchParams.set("amount", "10");
    url.searchParams.set("campaign", "care-package");
    url.searchParams.set("donor_name", trimmedName);
    url.searchParams.set("message", trimmedMessage);

    window.location.href = url.toString();
  };

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterStatus(
      "Newsletter signup is not connected yet. This form is currently display only."
    );
  };

  return (
    <main
      style={{
        background: COLORS.lightBg,
        fontFamily: "Arial, sans-serif",
        color: COLORS.blue,
        minHeight: "100vh",
      }}
    >
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

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

        .care-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.64);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .care-modal {
          width: 100%;
          max-width: 560px;
          background: #ffffff;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .care-close-btn {
          position: absolute;
          top: 10px;
          right: 14px;
          border: 0;
          background: transparent;
          font-size: 1.9rem;
          line-height: 1;
          cursor: pointer;
          color: ${COLORS.blue};
        }

        .care-modal-title {
          margin: 0 0 8px;
          text-align: center;
          font-size: 1.8rem;
          font-weight: 900;
          color: ${COLORS.blue};
        }

        .care-modal-text {
          margin: 0 0 18px;
          text-align: center;
          line-height: 1.55;
          color: #4f5f74;
        }

        .field-label {
          display: block;
          margin-bottom: 8px;
          color: ${COLORS.blue};
          font-weight: 800;
          font-size: 0.98rem;
        }

        .field-input,
        .field-textarea {
          width: 100%;
          border: 1px solid #d3d8e0;
          border-radius: 14px;
          padding: 13px 14px;
          font-size: 1rem;
          font-family: Arial, sans-serif;
          margin-bottom: 14px;
          color: ${COLORS.blue};
        }

        .field-input:focus,
        .field-textarea:focus {
          outline: 2px solid ${COLORS.gold};
          border-color: ${COLORS.gold};
        }

        .care-submit-btn {
          width: 100%;
          border: 0;
          border-radius: 16px;
          padding: 16px 18px;
          font-size: 1.08rem;
          font-weight: 900;
          letter-spacing: 0.03em;
          color: #2b1500;
          background: linear-gradient(180deg, #ffe36c 0%, #ffbe1a 48%, #cb7a00 100%);
          box-shadow: 0 8px 18px rgba(133, 69, 0, 0.28);
          cursor: pointer;
        }

        .care-submit-btn:hover {
          filter: brightness(1.03);
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

        @media (max-width: 900px) {
          .top-row {
            grid-template-columns: 1fr;
            max-width: 760px;
          }

          .top-row > * {
            margin: 0 auto;
            width: 100%;
          }

          .top-row .facebook-block {
            max-width: 280px;
          }

          .main-menu-box {
            max-width: 760px;
          }

          .section-stack {
            max-width: 760px;
          }

          .newsletter-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .main-menu-grid {
            gap: 12px 10px;
          }

          .main-menu-link {
            font-size: 0.9rem;
            min-height: 30px;
          }

          .care-modal {
            padding: 20px 16px;
          }

          .care-modal-title {
            font-size: 1.5rem;
          }

          .events-title {
            font-size: 1.7rem;
          }

          .top-row {
            gap: 14px;
          }
        }
      `}</style>

      <div className="page-shell">
        <section
          style={{
            width: "100%",
            background: COLORS.white,
            padding: "20px 0 8px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "980px",
              margin: "0 auto",
              height: "min(86vw,820px)",
              minHeight: "320px",
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

        <div className="content-wrap">
          <section className="main-menu-box" aria-label="Main navigation directory">
            <div className="main-menu-grid">
              {menuItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="main-menu-link"
                  >
                    {item.label}
                  </a>
                ) : item.href.startsWith("#") ? (
                  <a key={item.label} href={item.href} className="main-menu-link">
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.label} href={item.href} className="main-menu-link">
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </section>

          <section
            style={{
              maxWidth: "860px",
              margin: "0 auto 22px",
              textAlign: "center",
            }}
          >
            <Link
              href="/coming-soon"
              className="promo-link"
              style={{
                display: "inline-block",
                width: "100%",
                maxWidth: "456px",
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
            </Link>
          </section>

          <section className="top-row">
            <div className="facebook-block">
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="promo-link"
                style={{ display: "block" }}
              >
                <div className="image-card">
                  <img
                    src="/facebook-like.PNG"
                    alt="Like us on Facebook"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
              </a>
            </div>

            <div>
              <div className="image-card">
                <img
                  src="/news-letter.JPG"
                  alt="Newsletter sign up"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>

              <div className="newsletter-card">
                <h2 className="newsletter-title">Sign Up For Our Newsletter</h2>

                <form onSubmit={handleNewsletterSubmit}>
                  <div className="newsletter-grid">
                    <input
                      className="newsletter-input"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      className="newsletter-input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      className="newsletter-input"
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (Optional)"
                    />
                    <input
                      className="newsletter-input"
                      type="text"
                      name="address"
                      placeholder="Address (Optional)"
                    />
                    <button type="submit" className="newsletter-button">
                      SUBMIT
                    </button>
                  </div>
                </form>

                {newsletterStatus ? (
                  <p className="newsletter-status">{newsletterStatus}</p>
                ) : null}
              </div>
            </div>
          </section>

          <section className="section-stack">
            <a
              href={paypal}
              target="_blank"
              rel="noopener noreferrer"
              className="promo-link centered-block"
              style={{ display: "block" }}
            >
              <div className="image-card">
                <img
                  src="/donate-new.jpeg"
                  alt="Donate to TFP"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </a>

            <section id="events" className="events-panel">
              <h2 className="events-title">Upcoming Events</h2>
              <ul className="events-list">
                <li>TBD Event 1</li>
                <li>TBD Event 2</li>
                <li>TBD Event 3</li>
              </ul>
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

      {showCareModal && (
        <div
          className="care-modal-backdrop"
          onClick={() => setShowCareModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Send a care package"
        >
          <div className="care-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="care-close-btn"
              onClick={() => setShowCareModal(false)}
              aria-label="Close popup"
            >
              ×
            </button>

            <h2 className="care-modal-title">Send a $10 Care Package</h2>
            <p className="care-modal-text">
              Enter your name and add an optional note to a soldier, then
              continue to the donation page.
            </p>

            <form onSubmit={handleCarePackageSubmit}>
              <label htmlFor="donorName" className="field-label">
                Name:
              </label>
              <input
                id="donorName"
                type="text"
                className="field-input"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                placeholder="Enter your name"
                required
              />

              <label htmlFor="message" className="field-label">
                Send A Message With Package:
              </label>
              <textarea
                id="message"
                className="field-textarea"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a note to a soldier"
              />

              <button type="submit" className="care-submit-btn">
                Continue to $10 Donation
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
