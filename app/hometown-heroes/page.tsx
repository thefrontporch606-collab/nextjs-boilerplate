import type { Metadata } from "next";
import { HometownHeroesGallery } from "./HometownHeroesGallery";

export const metadata: Metadata = {
  title: "Hometown Heroes",
  description:
    "The Front Porch honors local veterans killed in action, living veterans, and veterans who have passed.",
};

export default function HometownHeroesPage() {
  return <HometownHeroesGallery />;
}
