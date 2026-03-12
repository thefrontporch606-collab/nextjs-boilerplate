"use client";

import { PRIZES, OVERALL_ODDS_TEXT, TOTAL_TICKETS, TICKET_PRICE } from "@/lib/prizes";

export default function PrizeBoard() {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "40px auto 0",
        padding: "0 20px 40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          boxShadow: "0 18px 40px rgba(31,53,88,0.14)",
          overflow: "hidden",
          border: "3px solid #1F3558",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #1F3558, #B44537)",
            color: "#FFFFFF",
            padding: "24px",
            textAlign: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "2rem" }}>Prize Board</h2>
          <p style={{ margin: "10px 0 0", fontSize: "16px" }}>
            Ticket Price: ${TICKET_PRICE} • Total Tickets: {TOTAL_TICKETS} • Overall Odds: {OVERALL_ODDS_TEXT}
          </p>
        </div>

        <div style={{ padding: "24px" }}>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "700px",
              }}
            >
              <thead>
                <tr style={{ background: "#F4F6FA" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "2px solid #D9E0EA",
                      color: "#1F3558",
                    }}
                  >
                    Prize
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "2px solid #D9E0EA",
                      color: "#1F3558",
                    }}
                  >
                    Symbol
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "2px solid #D9E0EA",
                      color: "#1F3558",
                    }}
                  >
                    Winners
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px",
                      borderBottom: "2px solid #D9E0EA",
                      color: "#1F3558",
                    }}
                  >
                    Unlock After Sold
                  </th>
                </tr>
              </thead>

              <tbody>
                {PRIZES.map((prize) => (
                  <tr key={prize.code}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #E5EAF0",
                        fontWeight: 700,
                        color: "#1F3558",
                      }}
                    >
                      {prize.label}
                    </td>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #E5EAF0",
                        color: "#1F3558",
                      }}
                    >
                      {prize.symbol}
                    </td>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #E5EAF0",
                        color: "#1F3558",
                      }}
                    >
                      {prize.quantity}
                    </td>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #E5EAF0",
                        color: "#1F3558",
                      }}
                    >
                      {prize.minSoldBeforeReveal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              marginTop: "22px",
              padding: "18px",
              borderRadius: "16px",
              background: "#F4F6FA",
              color: "#1F3558",
              lineHeight: "1.7",
            }}
          >
            <strong>How this game works:</strong>
            <br />
            Match 3 identical symbols to win the prize shown. Larger prizes are set to unlock
            later as more tickets are sold, helping protect the fundraiser while keeping the
            game exciting.
          </div>
        </div>
      </div>
    </section>
  );
}
