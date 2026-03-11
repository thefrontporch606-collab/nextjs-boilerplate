"use client";

import { useState } from "react";

type Veteran = {
  name: string;
  city: string;
  branch: string;
  campaign: string;
  years: string;
  image: string;
};

const kiaVeterans: Veteran[] = [
  {
    name: "LCPL. Thomas TJ Reilly JR.",
    city: "London, KY",
    branch: "United States Marine Corps",
    campaign: "Operation Iraqi Freedom",
    years: "KIA Karmah, Iraq 12/21/2008 Age 22",
    image: "/heroes/tjreilly.JPG",
  },
  {
    name: "PFC. Dustin Paul Napier",
    city: "London, KY",
    branch: "United States Army",
    campaign: "Operation Enduring Freedom",
    years: "KIA Zabul Province, Afghanistan",
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
    name: "SSG.McKenley Odis Matlock",
    city: "Barbourville, KY",
    branch: "United States Army",
    campaign: "Vietnam",
    years: "KIA Giah Dinh, South Vietnam 03/30/1968 Age 25 ",
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

const otherVeterans: Veteran[] = [];

export default function HometownHeroesPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <main className="heroes-page">
        <section className="heroes-hero">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="flag-title">HOMETOWN HEROES</h1>

            <button className="submit-btn" onClick={() => setOpen(true)}>
              Submit A Hometown Hero
            </button>

            <p className="quote">
              "Greater love has no one than this: to lay down one&apos;s life for
              one&apos;s friends." - John 15:13
            </p>
          </div>
        </section>

        <section className="heroes-section">
          <h2 className="section-title">
            Veterans Who Gave Their Life in a War or Combat Zone
          </h2>

          <div className="veteran-grid">
            {kiaVeterans.map((vet, index) => (
              <article className="veteran-card" key={`${vet.name}-${index}`}>
                <div className="image-wrap">
                  <img src={vet.image} alt={vet.name} className="veteran-image" />
                </div>

                <div className="veteran-info">
                  <p>{vet.campaign}</p>
                  <p className="name">{vet.name}</p>
                  <p>{vet.city}</p>
                  <p>{vet.branch}</p>
                  <p>{vet.years}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="quote-section">
          <p className="quote quote-bottom">
            "A nation that does not honor its heroes will not long endure." -
            Abraham Lincoln
          </p>
        </section>

        <section className="heroes-section other-section">
          <h2 className="section-title">All Other Veterans</h2>

          <div className="veteran-grid">
            {otherVeterans.length > 0 ? (
              otherVeterans.map((vet, index) => (
                <article className="veteran-card" key={`${vet.name}-${index}`}>
                  <div className="image-wrap">
                    <img
                      src={vet.image}
                      alt={vet.name}
                      className="veteran-image"
                    />
                  </div>

                  <div className="veteran-info">
                    <p>{vet.campaign}</p>
                    <p className="name">{vet.name}</p>
                    <p>{vet.city}</p>
                    <p>{vet.branch}</p>
                    <p>{vet.years}</p>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-state">Additional hometown heroes coming soon.</div>
            )}
          </div>
        </section>
      </main>

      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ×
            </button>

            <h3 className="modal-title">Submit A Hometown Hero</h3>

            <form
              className="hero-form"
              action="https://formsubmit.co/YOUR-EMAIL-HERE"
              method="POST"
              encType="multipart/form-data"
            >
              <input type="hidden" name="_subject" value="New Hometown Hero Submission" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="form-grid">
                <input type="text" name="name" placeholder="Name" required />
                <input type="text" name="city" placeholder="City" required />
                <input type="text" name="branch" placeholder="Branch Of Service" required />
                <input type="text" name="campaign" placeholder="Campaign/Theatre" required />
                <input type="text" name="years" placeholder="Years From-To" required />
                <input type="file" name="photo" accept="image/*" required />
              </div>

              <button type="submit" className="form-submit-btn">
                Submit Hero
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .heroes-page {
          min-height: 100vh;
          background:
            linear-gradient(to bottom, rgba(255, 255, 255, 0.97), rgba(245, 245, 245, 0.98)),
            url("/american-texture.jpg");
          background-size: cover;
          background-position: center;
          color: #111;
        }

        .heroes-hero {
          position: relative;
          overflow: hidden;
          padding: 90px 20px 50px;
          text-align: center;
          border-bottom: 4px solid #c9a227;
          background:
            linear-gradient(180deg, rgba(8, 18, 42, 0.9) 0%, rgba(17, 37, 75, 0.82) 55%, rgba(255, 255, 255, 0.06) 100%);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 35%),
            radial-gradient(circle at top right, rgba(255, 255, 255, 0.05), transparent 30%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto;
        }

        .flag-title {
          margin: 0;
          font-size: clamp(3rem, 9vw, 7.2rem);
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background:
            repeating-linear-gradient(
              to bottom,
              #b22234 0px,
              #b22234 16px,
              #ffffff 16px,
              #ffffff 32px
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow:
            0 2px 0 rgba(255, 255, 255, 0.12),
            0 8px 22px rgba(0, 0, 0, 0.38),
            0 0 22px rgba(255, 255, 255, 0.1);
        }

        .submit-btn,
        .form-submit-btn {
          margin-top: 28px;
          background: linear-gradient(180deg, #d4af37 0%, #b68b16 100%);
          color: #111;
          border: none;
          border-radius: 999px;
          padding: 16px 28px;
          font-size: 1rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .submit-btn:hover,
        .form-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
        }

        .quote-section,
        .heroes-section {
          max-width: 1450px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .quote {
          margin: 28px auto 0;
          max-width: 1000px;
          font-size: clamp(1rem, 2vw, 1.35rem);
          line-height: 1.7;
          color: #ffffff;
          font-style: italic;
          font-weight: 600;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
        }

        .quote-bottom {
          color: #111;
          text-align: center;
          text-shadow: none;
          margin-top: 0;
        }

        .section-title {
          margin: 0 0 28px;
          text-align: center;
          font-size: clamp(1.6rem, 3vw, 2.3rem);
          font-weight: 900;
          color: #0f2447;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .veteran-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 28px;
        }

        .veteran-card {
          background: linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%);
          border: 1px solid rgba(15, 36, 71, 0.08);
          border-radius: 18px;
          overflow: hidden;
          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.08),
            0 0 0 rgba(201, 162, 39, 0);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .veteran-card:hover {
          transform: translateY(-6px);
          border-color: rgba(201, 162, 39, 0.65);
          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.14),
            0 0 24px rgba(201, 162, 39, 0.22);
        }

        .image-wrap {
          aspect-ratio: 1 / 1;
          background: #d9d9d9;
          overflow: hidden;
        }

        .veteran-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .veteran-info {
          padding: 16px 14px 18px;
          text-align: center;
        }

        .veteran-info p {
          margin: 6px 0;
          color: #111;
          font-size: 0.95rem;
          line-height: 1.4;
          font-weight: 500;
        }

        .veteran-info .name {
          font-weight: 900;
          font-size: 1rem;
        }

        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 36px 20px;
          border: 2px dashed rgba(15, 36, 71, 0.2);
          border-radius: 18px;
          color: #1f3558;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.72);
        }

        .other-section {
          padding-top: 10px;
          padding-bottom: 80px;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.62);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 9999;
        }

        .modal {
          position: relative;
          width: 100%;
          max-width: 720px;
          background: #fff;
          border-radius: 22px;
          padding: 28px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        }

        .close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 50%;
          background: #f0f0f0;
          color: #111;
          font-size: 1.7rem;
          cursor: pointer;
        }

        .modal-title {
          margin: 0 0 18px;
          font-size: 1.7rem;
          font-weight: 900;
          color: #0f2447;
          text-align: center;
        }

        .hero-form {
          width: 100%;
        }

        .form-grid {
          display: grid;
          gap: 14px;
        }

        .form-grid input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #d2d2d2;
          border-radius: 12px;
          font-size: 1rem;
          color: #111;
          background: #fff;
        }

        .form-grid input:focus {
          outline: none;
          border-color: #0f2447;
          box-shadow: 0 0 0 3px rgba(15, 36, 71, 0.08);
        }

        @media (max-width: 1300px) {
          .veteran-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (max-width: 1050px) {
          .veteran-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .heroes-hero {
            padding: 72px 16px 42px;
          }

          .veteran-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .veteran-info p {
            font-size: 0.88rem;
          }

          .modal {
            padding: 22px 18px;
          }
        }

        @media (max-width: 480px) {
          .veteran-grid {
            grid-template-columns: 1fr;
          }

          .submit-btn,
          .form-submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
