"use client";

import { useState, useEffect } from "react";

const GIVEBUTTER_URL = "https://givebutter.com/donate-to-the-front-porch-nebqxb";

export default function FloatingDonateButton() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes donate-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(212, 166, 42, 0.7), 0 8px 28px rgba(31,53,88,0.35); }
          50%  { box-shadow: 0 0 0 12px rgba(212, 166, 42, 0), 0 8px 28px rgba(31,53,88,0.35); }
          100% { box-shadow: 0 0 0 0 rgba(212, 166, 42, 0), 0 8px 28px rgba(31,53,88,0.35); }
        }
        .floating-donate-btn {
          position: fixed;
          bottom: 22px;
          right: 22px;
          z-index: 9999;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 22px;
          border-radius: 999px;
          font-weight: 900;
          font-size: 1rem;
          color: #2b1500;
          background: linear-gradient(180deg, #ffe36c 0%, #ffbe1a 48%, #cb7a00 100%);
          box-shadow: 0 8px 28px rgba(31,53,88,0.35);
          text-decoration: none;
          transition: transform 0.2s ease;
        }
        .floating-donate-btn:hover {
          transform: translateY(-2px);
        }
        .floating-donate-btn.pulse {
          animation: donate-pulse 1s ease-out;
        }
      `}</style>
      <a
        href={GIVEBUTTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`floating-donate-btn${pulse ? " pulse" : ""}`}
      >
        Donate
      </a>
    </>
  );
}
