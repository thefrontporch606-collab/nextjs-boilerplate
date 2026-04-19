"use client";

import { useState, useEffect } from "react";

const PAYPAL_URL =
  "https://www.paypal.com/donate/?hosted_button_id=JJ9CFXVS9J44G";

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
        @keyframes donate-bounce-

