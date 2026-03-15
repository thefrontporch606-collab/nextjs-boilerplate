"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

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
  const [showCareModal, setShowCareModal] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!donorName.trim()) {
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
        .nav-link {
          color: white;
          font-weight: 800;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .promo-link:hover {
          transform: scale(1.02);
        }

        .image-card {
          border-radius: 28px;
          overflow: hidden;
          border: 3px solid ${COLORS.blue};
          box-shadow: 0 20px 45px rgba(31, 53, 88, 0.16);
        }

        .modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
        }

        .modal {
          background: white;
          border-radius: 20px;
          padding: 30px;
          width: 100%;
          max-width: 520px;
        }

        .field {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #ccc;
          margin-bottom: 14px;
        }

        .submit-btn {
          background: ${COLORS.gold};
          border: none;
          padding: 14px;
          border-radius: 12px;
          font-weight: 800;
          cursor: pointer;
          width: 100%;
        }
      `}</style>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "min(85vw,900px)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Image
          src="/IMG_1844.jpeg"
          alt="The Front Porch"
          fill
          priority
          style={{ objectFit: "contain" }}
        />
      </section>

      {/* NAV */}
      <nav
        style={{
          background: COLORS.blue,
          padding: "18px",
          textAlign: "center",
        }}
      >
        <a href="/" className="nav-link">HOME</a>{" "}
        <a href="/hometown-heroes" className="nav-link">HOMETOWN HEROES</a>{" "}
        <a href="/scratch-off" className="nav-link">RAFFLES & GAMES</a>{" "}
        <a href={paypal} className="nav-link">DONATE</a>{" "}
        <a href={shop} className="nav-link">TFP SHOP</a>{" "}
        <a href="#events" className="nav-link">EVENTS</a>{" "}
        <a href="#contact" className="nav-link">CONTACT</a>
      </nav>

      {/* RAFFLES BUTTON */}
      <section style={{ textAlign: "center", margin: "30px 0" }}>
        <a
          href="/scratch-off"
          style={{
            display: "inline-block",
            width: "60%",
            maxWidth: "450px",
          }}
        >
          <div className="image-card">
            <img
              src="/raffles-games-button.jpeg"
              style={{ width: "100%" }}
            />
          </div>
        </a>
      </section>

      {/* CARE PACKAGE */}
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <button
          onClick={() => setShowCareModal(true)}
          style={{
            border: "none",
            background: "transparent",
            width: "100%",
            maxWidth: "760px",
          }}
        >
          <div className="image-card">
            <img
              src="/care-package-new.jpeg"
              style={{ width: "100%" }}
            />
          </div>
        </button>
      </section>

      {/* FACEBOOK */}
      <section style={{ textAlign: "center", marginBottom: "50px" }}>
        <a
          href={facebook}
          style={{
            background: COLORS.blue,
            color: "white",
            padding: "14px 24px",
            borderRadius: "10px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          👍 LIKE US ON FACEBOOK
        </a>
      </section>

      {/* EVENTS */}
      <section id="events" style={{ textAlign: "center", marginBottom: "50px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div className="image-card">
            <img
              src="/events-button-new.jpeg"
              style={{ width: "100%" }}
            />
          </div>

          <ul style={{ marginTop: "20px", fontWeight: 700 }}>
            <li>TBD Event</li>
            <li>TBD Event</li>
            <li>TBD Event</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ textAlign: "center", marginBottom: "60px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div className="image-card">
            <img
              src="/contact-us-new.png"
              style={{ width: "100%" }}
            />
          </div>

          <p>
            Phone: <a href={phoneHref}>{phone}</a>
          </p>

          <p>
            Email: <a href={emailHref}>{email}</a>
          </p>
        </div>
      </section>

      {/* CARE PACKAGE POPUP */}
      {showCareModal && (
        <div className="modal-bg" onClick={() => setShowCareModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Send a $10 Care Package</h2>

            <form onSubmit={handleSubmit}>
              <input
                className="field"
                placeholder="Name"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
              />

              <textarea
                className="field"
                placeholder="Send A Message With Package"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button className="submit-btn">
                Continue to $10 Donation
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
