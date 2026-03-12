"use client";

export default function ScratchOffPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0b1423 0%, #152c4b 100%)",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            marginBottom: "16px",
          }}
        >
          The Front Porch
        </h1>

        <h2
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            marginBottom: "20px",
          }}
        >
          Charity Scratch-Off Tickets
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "620px",
            margin: "0 auto",
          }}
        >
          Play our charity scratch-off game for a chance to win prizes while
          helping support veterans and their families.
        </p>

        <p
          style={{
            marginTop: "30px",
            fontSize: "22px",
            fontWeight: 800,
            color: "#f7d774",
          }}
        >
          Ticket Price: $10
        </p>
      </div>
    </main>
  );
}
