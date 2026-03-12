"use client";

import Image from "next/image";

const COLORS = {
  blue: "#1F3558",
  red: "#B44537",
  white: "#FFFFFF",
  light: "#F4F6FA",
};

const cardStyle: React.CSSProperties = {
  background: "#FFFFFF",
  borderRadius: "24px",
  boxShadow: "0 18px 40px rgba(31,53,88,0.14)",
  overflow: "hidden",
  border: `3px solid ${COLORS.blue}`,
};

const buttonStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "14px 22px",
  borderRadius: "12px",
  background: COLORS.red,
  color: "#FFFFFF",
  fontWeight: 800,
  textDecoration: "none",
  fontSize: "16px",
};

export default function RafflesGamesPage() {
  return (
    <main
      style={{
        background: COLORS.light,
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        color: COLORS.blue,
      }}
    >
      <section
        style={{
          background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.red})`,
          color: COLORS.white,
          padding: "70px 20px 60px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              marginBottom: "18px",
            }}
          >
            RAFFLES & GAMES
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Play, participate, and support The Front Porch. Every entry helps us
            provide real support to veterans and military families.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 20px 70px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "28px",
          }}
        >
          {/* Scratch Off */}
          <div style={cardStyle}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "220px",
                background: `linear-gradient(135deg, ${COLORS.red}, ${COLORS.blue})`,
              }}
            >
              <Image
                src="/frontporch-logo.png"
                alt="The Front Porch"
                fill
                style={{ objectFit: "contain", padding: "24px" }}
              />
            </div>

            <div style={{ padding: "24px" }}>
              <h2 style={{ marginTop: 0, fontSize: "1.8rem" }}>
                Scratch-Off Tickets
              </h2>

              <p style={{ lineHeight: "1.7", marginBottom: "20px" }}>
                Play our charity scratch-off tickets for a chance to win prizes
                while supporting veterans and their families.
              </p>

              <a href="/scratch-off" style={buttonStyle}>
                PLAY SCRATCH-OFF
              </a>
            </div>
          </div>

          {/* Spin Wheel */}
          <div style={cardStyle}>
            <div
              style={{
                height: "220px",
                background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.red})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: COLORS.white,
                fontSize: "2rem",
                fontWeight: 900,
                textAlign: "center",
                padding: "20px",
              }}
            >
              SPIN WHEEL
            </div>

            <div style={{ padding: "24px" }}>
              <h2 style={{ marginTop: 0, fontSize: "1.8rem" }}>
                Spin Wheel
              </h2>

              <p style={{ lineHeight: "1.7", marginBottom: "20px" }}>
                Spin for prizes, bonus entries, and special supporter rewards.
                This feature can be added next.
              </p>

              <a
                href="#"
                style={{
                  ...buttonStyle,
                  background: "#7B8798",
                  cursor: "default",
                }}
              >
                COMING SOON
              </a>
            </div>
          </div>

          {/* Current Raffles */}
          <div style={cardStyle}>
            <div
              style={{
                height: "220px",
                background: `linear-gradient(135deg, ${COLORS.red}, ${COLORS.blue})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: COLORS.white,
                fontSize: "2rem",
                fontWeight: 900,
                textAlign: "center",
                padding: "20px",
              }}
            >
              CURRENT RAFFLES
            </div>

            <div style={{ padding: "24px" }}>
              <h2 style={{ marginTop: 0, fontSize: "1.8rem" }}>
                Current Raffles
              </h2>

              <p style={{ lineHeight: "1.7", marginBottom: "20px" }}>
                Feature your active raffles here. You can later link each raffle
                to its own page with details, ticket counts, and winners.
              </p>

              <a
                href="#"
                style={{
                  ...buttonStyle,
                  background: "#7B8798",
                  cursor: "default",
                }}
              >
                ADD RAFFLES SOON
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            background: "#FFFFFF",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 18px 40px rgba(31,53,88,0.10)",
            border: `2px solid ${COLORS.blue}`,
            textAlign: "center",
          }}
        >
          <h3 style={{ marginTop: 0, fontSize: "1.8rem" }}>More Ways to Win</h3>
          <p style={{ maxWidth: "780px", margin: "0 auto", lineHeight: "1.8" }}>
            This page is your main hub for all games, raffles, and interactive
            fundraising features. As new games are added, they can each be
            placed here with their own button and page.
          </p>
        </div>
      </section>
    </main>
  );
}
