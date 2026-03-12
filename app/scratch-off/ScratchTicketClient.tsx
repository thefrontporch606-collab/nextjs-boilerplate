"use client";

import { useState } from "react";

export default function ScratchTicketClient() {
  const [symbols, setSymbols] = useState<string[]>(["?", "?", "?"]);
  const [message, setMessage] = useState("");
  const [revealed, setRevealed] = useState(false);

  async function scratchTicket() {
    const res = await fetch("/api/scratchoff/reveal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    const data = await res.json();

    setSymbols(data.symbols);
    setRevealed(true);

    if (data.isWinner) {
      setMessage(`You won ${data.prizeLabel}!`);
    } else {
      setMessage("Sorry, this ticket is not a winner.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#1F3558",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "2.8rem", marginBottom: "10px" }}>
        Charity Scratch Ticket
      </h1>

      <p style={{ marginBottom: "30px" }}>
        Match 3 symbols to win!
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {symbols.map((s, i) => (
          <div
            key={i}
            style={{
              width: "120px",
              height: "120px",
              background: "#ddd",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: "bold",
              color: "#111",
            }}
          >
            {s}
          </div>
        ))}
      </div>

      {!revealed && (
        <button
          onClick={scratchTicket}
          style={{
            background: "#B44537",
            border: "none",
            padding: "16px 28px",
            fontSize: "18px",
            borderRadius: "12px",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 800,
          }}
        >
          Scratch Ticket
        </button>
      )}

      {revealed && (
        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            color: "#F7D774",
          }}
        >
          {message}
        </p>
      )}
    </main>
  );
}
