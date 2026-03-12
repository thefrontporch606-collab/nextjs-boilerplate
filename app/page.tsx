"use client";

import Image from "next/image";

const paypal =
  "https://www.paypal.com/donate/?hosted_button_id=JJ9CFXVS9J44G";

const shop = "https://the-front-porch-4771.myshopify.com";

const facebook =
  "https://www.facebook.com/share/1ALeuZKmMZ/?mibextid=wwXIfr";

const COLORS = {
  blue: "#1F3558",
  red: "#B44537",
  white: "#FFFFFF",
};

export default function Home() {
  return (
    <main
      style={{
        background: COLORS.white,
        fontFamily: "Arial, sans-serif",
        color: COLORS.blue,
      }}
    >
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.07);
          }
          100% {
            transform: scale(1);
          }
        }

        .nav-link {
          color: #ffffff;
          font-weight: 
