import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HometownHeroesGallery } from "./HometownHeroesGallery";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hometown Heroes",
  description:
    "Honoring the men and women from our Kentucky hills who answered the call. The Front Porch salutes our Hometown Heroes.",
};

/** Owner photo drop-in. A file at public/hometown-heroes/banner.jpg replaces the gradient. */
function bannerSrc() {
  const file = path.join(process.cwd(), "public", "hometown-heroes", "banner.jpg");
  return fs.existsSync(file) ? "/hometown-heroes/banner.jpg" : null;
}

export default function HometownHeroesPage() {
  return (
    <div className={inter.className}>
      <HometownHeroesGallery bannerSrc={bannerSrc()} />
    </div>
  );
}
