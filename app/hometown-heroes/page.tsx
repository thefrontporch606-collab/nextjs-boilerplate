"use client";

import { useState } from "react";
import Image from "next/image";

type Veteran = {
  name: string;
  city: string;
  branch: string;
  campaign: string;
  years: string;
  image?: string;
  isPlaceholder?: boolean;
};

const kiaVeterans: Veteran[] = [
  // PASTE NEW KIA HEROES DIRECTLY BELOW THIS LINE
  {
    name: "LCPL. Thomas TJ Reilly JR.",
    city: "London, KY",
    branch: "United States Marine Corps",
    campaign: "Operation Iraqi Freedom",
    years: "KIA Karmah, Iraq 12/21/2008 Age 19",
    image: "/heroes/tjreilly.JPG",
  },
  {
    name: "PFC. Dustin Paul Napier",
    city: "Corbin, KY",
    branch: "United States Army",
    campaign: "Operation Enduring Freedom",
    years: "KIA Qalat, Afghanistan 01/08/2012 Age 20",
    image: "/heroes/dustinnapier.jpeg",
  },
  {
    name: "CPL. Joseph S. Tremblay",
    city: "Corbin, KY",
    branch: "United States Marine Corps",
    campaign: "Operation Iraqi Freedom",
    years: "KIA Hit, Iraq 04/27/2005 Age 23",
    image: "/heroes/josephtremblay.JPG",
  },
  {
    name: "SSG. McKenley Odis Matlock",
    city: "Barbourville, KY",
    branch: "United States Army",
    campaign: "Vietnam",
    years: "KIA Giah Dinh, South Vietnam 03/30/1968 Age 25",
    image: "/heroes/odismatlock.jpeg",
  },
  {
    name: "MM1c Uliss C. Steely",
    city: "Corbin, KY",
    branch: "United States Navy",
    campaign: "USS Oklahoma, Pearl Harbor",
    years: "KIA 12/07/1941 Age 25",
    image: "/heroes/ulissteely.jpeg",
  },
];

const otherVeterans: Veteran[] = [
  {
    name: "CPL Vincent Tomasino",
    city: "Williamsburg, KY",
    branch: "United States Marine Corps",
    campaign: "Peacetime Service",
    years: "1973-1977",
    image: "/heroes/vincenttomasino.jpeg",
  },
  {
    name: "Name",
    city: "City",
    branch: "Branch",
    campaign: "Campaign",
    years: "Years From-To",
    isPlaceholder: true,
  },
  {
    name: "Name",
    city: "City",
    branch: "Branch",
    campaign: "Campaign",
    years: "Years From-To",
    isPlaceholder: true,
  },
];

export default function HometownHeroesPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedVeteran, setSelectedVeteran] = useState<Veteran | null>(null);

  return (
    <>
      <main className="heroes-page">
        <section className="hero-header">
          <div className="hero-overlay" />

          <div className="hero-inner">
            <div className="logo-wrap">
              <Image
                src="/frontporch-logo.PNG"
                alt="The Front Porch Logo"
                width={360}
                height={220}
                priority
                className="hero-logo"
              />
            </div>

            <div className="salutes-wrap">
              <p className="salutes-text">Salutes Our</p>
            </div>

            <div className="title-image-wrap">
              <img
                src="/hometown-heroes.PNG"
                alt="Hometown Heroes"
                className="title-image"
              />
            </div>

            <div className="branches-row">
              <img src="/branches.png" alt="U.S. Military Branch Emblems" />
            </div>

            <button className="submit-hero-btn" onClick={() => setFormOpen(true)}>
              Submit A Hometown Hero
            </button>
          </div>
        </section>

        <section className="wall-section">
          <h2 className="quote-heading">
            “Greater love has no one than this: to lay down one&apos;s life for
            one&apos;s friends.” - John 15:13
          </h2>

          <div className="veteran-grid">
            {kiaVeterans.map((vet, index) => (
              <button
                key={`kia-${vet.name}-${index}`}
                type="button"
                className="veteran-card kia-card"
                onClick={() => setSelectedVeteran(vet)}
              >
                <div className="image-wrap">
                  {vet.image ? (
                    <img src={vet.image} alt={vet.name} className="veteran-image" />
                  ) : (
                    <div className="placeholder-image">
                      <span>Photo Coming Soon</span>
                    </div>
                  )}

                  <div className="kia-light" />
                  <div className="image-glow" />
                </div>

                <div className="veteran-info">
                  <p>{vet.campaign}</p>
                  <p className="name">{vet.name}</p>
                  <p>{vet.city}</p>
                  <p>{vet.branch}</p>
                  <p>{vet.years}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="wall-section second-section">
          <h2 className="quote-heading">
            “A nation that does not honor its heroes will not long endure.” -
            Abraham Lincoln
          </h2>

          <div className="veteran-grid">
            {otherVeterans.map((vet, index) => (
              <button
                key={`other-${vet.name}-${index}`}
                type="button"
                className={`veteran-card ${vet.isPlaceholder ? "placeholder-card" : ""}`}
                onClick={() => setSelectedVeteran(vet)}
              >
                <div className="image-wrap">
                  {vet.image ? (
                    <img src={vet.image} alt={vet.name} className="veteran-image" />
                  ) : (
                    <div className="placeholder-image">
                      <span>Photo Coming Soon</span>
                    </div>
                  )}
                  <div className="image-glow" />
                </div>

                <div className="veteran-info">
                  <p className="name">{vet.name}</p>
                  <p>{vet.city}</p>
                  <p>{vet.branch}</p>
                  <p>{vet.campaign}</p>
                  <p>{vet.years}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      {formOpen && (
        <div className="modal-backdrop" onClick={() => setFormOpen(false)}>
          <div
            className="modal patriotic-form-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setFormOpen(false)}>
              ×
            </button>

            <div className="form-top-accent" />

            <h3 className="modal-title">Submit A Hometown Hero</h3>
            <p className="modal-subtitle">
              Help us honor veterans from our community by submitting their
              information and photo for review.
            </p>

            <form
              className="hero-form"
              action="https://formsubmit.co/thefrontporch606@gmail.com"
              method="POST"
              encType="multipart/form-data"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Hometown Hero Submission"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="form-grid">
                <input type="text" name="name" placeholder="Name" required />
                <input type="text" name="city" placeholder="City" required />
                <input
                  type="text"
                  name="branch"
                  placeholder="Branch Of Service"
                  required
                />
                <input
                  type="text"
                  name="campaign"
                  placeholder="Campaign/Theatre"
                  required
                />
                <input
                  type="text"
                  name="years"
                  placeholder="Years From-To"
                  required
                />
                <input type="file" name="photo" accept="image/*" required />
              </div>

              <button type="submit" className="form-submit-btn">
                Honor This Hero
              </button>
            </form>
          </div>
        </div>
      )}

      {selectedVeteran && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedVeteran(null)}
        >
          <div
            className="modal memorial-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedVeteran(null)}
            >
              ×
            </button>

            <div className="memorial-content">
              <div className="memorial-image-wrap">
                {selectedVeteran.image ? (
                  <img
                    src={selectedVeteran.image}
                    alt={selectedVeteran.name}
                    className="memorial-image"
                  />
                ) : (
                  <div className="placeholder-image modal-placeholder">
                    <span>Photo Coming Soon</span>
                  </div>
                )}
              </div>

              <div className="memorial-text">
                <p className="memorial-campaign">{selectedVeteran.campaign}</p>
                <h3 className="memorial-name">{selectedVeteran.name}</h3>
                <p>{selectedVeteran.city}</p>
                <p>{selectedVeteran.branch}</p>
                <p>{selectedVeteran.years}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .heroes-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top center, rgba(255, 255, 255, 0.96), rgba(244, 244, 244, 0.98)),
            linear-gradient(180deg, #f3f3f3 0%, #ebebeb 100%);
          color: #111;
        }

        .hero-header {
          position: relative;
          overflow: hidden;
          padding: 34px 18px 36px;
          text-align: center;
          background:
            linear-gradient(180deg, rgba(8, 22, 48, 0.98) 0%, rgba(22, 51, 96, 0.94) 56%, rgba(146, 29, 44, 0.92) 100%);
          border-bottom: 5px solid #d1b443;
          box-shadow: inset 0 -40px 80px rgba(0, 0, 0, 0.18);
        }

        .hero-header::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.05) 0px,
              rgba(255, 255, 255, 0.05) 12px,
              rgba(255, 255, 255, 0.01) 12px,
              rgba(255, 255, 255, 0.01) 24px
            );
          opacity: 0.44;
          pointer-events: none;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 16% 15%, rgba(255, 255, 255, 0.18), transparent 22%),
            radial-gradient(circle at 84% 16%, rgba(255, 255, 255, 0.12), transparent 20%),
            radial-gradient(circle at center, rgba(255, 255, 255, 0.03), transparent 42%);
          pointer-events: none;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1380px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 16px;
        }

        .hero-logo {
          width: auto;
          height: auto;
          max-width: 360px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.2));
        }

        .salutes-wrap {
          margin-bottom: 14px;
        }

        .salutes-text {
          margin: 8px 0 6px;
          color: #ffffff;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-family: "Brush Script MT", "Lucida Handwriting", cursive;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);
          text-align: center;
        }

        .title-image-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 12px;
          margin-bottom: 18px;
        }

        .title-image {
          display: block;
          width: min(100%, 820px);
          max-width: 100%;
          height: auto;
          filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.28));
        }

        .branches-row {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 10px;
          margin-bottom: 22px;
        }

        .branches-row img {
          display: block;
          width: min(100%, 840px);
          height: auto;
          max-width: 100%;
          opacity: 0.97;
          filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.18));
        }

        .submit-hero-btn {
          background:
            linear-gradient(135deg, #d9b84a 0%, #f4dc87 22%, #c79a19 54%, #e5c75d 100%);
          color: #0f2447;
          border: 2px solid rgba(255, 255, 255, 0.42);
          border-radius: 999px;
          padding: 16px 34px;
          font-size: 1.04rem;
          font-weight: 900;
          letter-spacing: 0.03em;
          cursor: pointer;
          box-shadow:
            0 14px 30px rgba(0, 0, 0, 0.24),
            0 0 24px rgba(209, 180, 67, 0.2);
          transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            filter 0.22s ease;
        }

        .submit-hero-btn:hover {
          transform: translateY(-3px);
          filter: brightness(1.04);
          box-shadow:
            0 18px 34px rgba(0, 0, 0, 0.28),
            0 0 28px rgba(209, 180, 67, 0.26);
        }

        .wall-section {
          max-width: 1500px;
          margin: 0 auto;
          padding: 42px 20px 24px;
        }

        .second-section {
          padding-top: 8px;
          padding-bottom: 80px;
        }

        .quote-heading {
          margin: 0 0 30px;
          text-align: center;
          font-size: clamp(1.45rem, 2.9vw, 2.35rem);
          line-height: 1.45;
          color: #1f3558;
          font-style: italic;
          font-weight: 800;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
        }

        .veteran-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .veteran-card {
          width: 100%;
          background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);
          border: 1px solid rgba(31, 53, 88, 0.12);
          border-radius: 18px;
          overflow: hidden;
          padding: 0;
          text-align: center;
          cursor: pointer;
          box-shadow:
            0 10px 26px rgba(0, 0, 0, 0.08),
            0 0 0 rgba(209, 180, 67, 0);
          transition:
            transform 0.24s ease,
            box-shadow 0.24s ease,
            border-color 0.24s ease;
        }

        .veteran-card:hover {
          transform: translateY(-6px);
          border-color: rgba(209, 180, 67, 0.7);
          box-shadow:
            0 18px 42px rgba(0, 0, 0, 0.14),
            0 0 26px rgba(209, 180, 67, 0.2);
        }

        .kia-card {
          box-shadow:
            0 10px 26px rgba(0, 0, 0, 0.08),
            0 0 18px rgba(255, 255, 255, 0.08);
        }

        .placeholder-card {
          border-style: dashed;
        }

        .image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: #d7d7d7;
          overflow: hidden;
        }

        .kia-light {
          position: absolute;
          top: -18%;
          left: 50%;
          transform: translateX(-50%);
          width: 72%;
          height: 86%;
          background: radial-gradient(
            ellipse at top,
            rgba(255, 255, 255, 0.58) 0%,
            rgba(255, 255, 255, 0.2) 32%,
            rgba(255, 255, 255, 0.05) 58%,
            rgba(255, 255, 255, 0) 100%
          );
          pointer-events: none;
          z-index: 2;
        }

        .placeholder-image {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            linear-gradient(135deg, rgba(31, 53, 88, 0.92) 0%, rgba(180, 69, 55, 0.9) 100%);
          color: #ffffff;
          text-align: center;
          padding: 16px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .modal-placeholder {
          min-height: 100%;
          font-size: 1.2rem;
        }

        .image-glow {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(15, 36, 71, 0.18), transparent 35%),
            radial-gradient(circle at top center, rgba(255, 255, 255, 0.22), transparent 35%);
          pointer-events: none;
          z-index: 3;
        }

        .veteran-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .veteran-info {
          padding: 14px 12px 16px;
          min-height: 154px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .veteran-info p {
          margin: 4px 0;
          color: #111;
          font-size: 0.95rem;
          line-height: 1.35;
          font-weight: 500;
        }

        .veteran-info .name {
          font-size: 1.05rem;
          font-weight: 900;
          color: #0f2447;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.68);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 9999;
        }

        .modal {
          position: relative;
          width: 100%;
          max-width: 760px;
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 26px 70px rgba(0, 0, 0, 0.34);
        }

        .patriotic-form-modal {
          border: 3px solid rgba(209, 180, 67, 0.65);
        }

        .form-top-accent {
          height: 14px;
          background:
            linear-gradient(
              90deg,
              #1f3558 0%,
              #1f3558 33.333%,
              #ffffff 33.333%,
              #ffffff 66.666%,
              #b44537 66.666%,
              #b44537 100%
            );
        }

        .close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 42px;
          height: 42px;
          border: none;
          border-radius: 50%;
          background: #f3f3f3;
          color: #111;
          font-size: 1.8rem;
          cursor: pointer;
          z-index: 2;
        }

        .modal-title {
          margin: 22px 24px 10px;
          text-align: center;
          font-size: 1.9rem;
          font-weight: 900;
          color: #0f2447;
        }

        .modal-subtitle {
          margin: 0 24px 20px;
          text-align: center;
          color: #333;
          font-size: 1rem;
          line-height: 1.6;
        }

        .hero-form {
          padding: 0 24px 26px;
        }

        .form-grid {
          display: grid;
          gap: 14px;
        }

        .form-grid input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #d7d7d7;
          border-radius: 12px;
          background: #fff;
          color: #111;
          font-size: 1rem;
        }

        .form-grid input:focus {
          outline: none;
          border-color: #1f3558;
          box-shadow: 0 0 0 3px rgba(31, 53, 88, 0.09);
        }

        .form-submit-btn {
          margin-top: 18px;
          width: 100%;
          border: none;
          border-radius: 14px;
          padding: 16px 18px;
          background:
            linear-gradient(135deg, #1f3558 0%, #284978 42%, #b44537 100%);
          color: #ffffff;
          font-size: 1.03rem;
          font-weight: 900;
          letter-spacing: 0.03em;
          cursor: pointer;
          box-shadow: 0 14px 24px rgba(31, 53, 88, 0.18);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            filter 0.2s ease;
        }

        .form-submit-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.03);
          box-shadow: 0 18px 30px rgba(31, 53, 88, 0.22);
        }

        .memorial-modal {
          max-width: 920px;
          background: linear-gradient(180deg, #ffffff 0%, #f6f6f6 100%);
          border: 3px solid rgba(209, 180, 67, 0.7);
        }

        .memorial-content {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          align-items: stretch;
        }

        .memorial-image-wrap {
          background: #d7d7d7;
          min-height: 380px;
        }

        .memorial-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .memorial-text {
          padding: 38px 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background:
            linear-gradient(180deg, rgba(31, 53, 88, 0.05) 0%, rgba(180, 69, 55, 0.03) 100%);
        }

        .memorial-campaign {
          margin: 0 0 10px;
          color: #b44537;
          font-size: 1rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .memorial-name {
          margin: 0 0 16px;
          color: #0f2447;
          font-size: 2rem;
          line-height: 1.15;
          font-weight: 900;
        }

        .memorial-text p {
          margin: 6px 0;
          color: #222;
          font-size: 1.04rem;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .hero-logo {
            max-width: 300px;
          }

          .salutes-text {
            font-size: 2rem;
          }

          .title-image {
            width: 100%;
            max-width: 720px;
          }

          .branches-row img {
            width: 100%;
            max-width: 920px;
          }

          .quote-heading {
            font-size: clamp(1.25rem, 4.6vw, 1.7rem);
          }

          .veteran-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
          }

          .veteran-info {
            padding: 10px 8px 12px;
            min-height: 126px;
          }

          .veteran-info p {
            font-size: 0.68rem;
            line-height: 1.2;
            margin: 3px 0;
          }

          .veteran-info .name {
            font-size: 0.76rem;
          }

          .modal {
            max-width: 100%;
          }

          .memorial-content {
            grid-template-columns: 1fr;
          }

          .memorial-image-wrap {
            min-height: 280px;
          }

          .memorial-text {
            padding: 24px 20px 26px;
          }

          .memorial-name {
            font-size: 1.5rem;
          }

          .modal-title {
            font-size: 1.55rem;
            margin-top: 26px;
          }

          .modal-subtitle {
            font-size: 0.96rem;
          }
        }
      `}</style>
    </>
  );
}
