export const siteConfig = {
  name: "The Front Porch",
  description:
    "A Kentucky veteran navigation platform helping veterans and their families find support, resources, and community.",
  contact: {
    phone: "(606) 595-8622",
    phoneHref: "tel:+16065958622",
    email: "thefrontporch606@gmail.com",
    emailHref: "mailto:thefrontporch606@gmail.com",
  },
  donationUrl:
    process.env.NEXT_PUBLIC_DONATION_URL ??
    "https://givebutter.com/donate-to-the-front-porch-nebqxb",
} as const;

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Veteran Support", href: "/veteran-support" },
  { label: "Veteran Resources", href: "/veteran-resources" },
  { label: "Shop", href: "/shop" },
  { label: "Hometown Heroes", href: "/hometown-heroes" },
] as const;
