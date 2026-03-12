"use client";

import { useState } from "react";

const COLORS = {
  blue: "#1F3558",
  red: "#B44537",
  gold: "#F7D774",
};

const symbols = ["🎖", "🇺🇸", "🪖", "🎯", "⭐", "💰", "🏆"];

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

export default function ScratchTicketClient() {
  const [grid, setGrid] = useState<string[]>(
    Array.from({ length: 9 }, () => "?")
  );
  const [scratched, setScratched] = useState(false);

  function reveal() {
    const newGrid = Array.from({ length: 9 }, () => getRandomSymbol());
    setGrid(newGrid);
    setScratched(true);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: COLORS.blue,
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
        Match 3 symbols in a row to win!
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 120px)",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        {grid.map((symbol, i) => (
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
              fontSize: "40px",
              fontWeight: "bold",
              color: "#111",
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {!scratched && (
        <button
          onClick={reveal}
          style={{
            background: COLORS.red,
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

      {scratched && (
        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            color: COLORS.gold,
          }}
        >
          Ticket revealed!
        </p>
      )}
    </main>
  );
}
