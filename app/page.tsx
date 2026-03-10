"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const paypalLink =
  "https://www.paypal.com/donate/?hosted_button_id=JJ9CFXVS9J44G";

const shopLink = "https://the-front-porch-4771.myshopify.com";

const facebookLink =
  "https://www.facebook.com/share/1ALeuZKmMZ/?mibextid=wwXIfr";

const COLORS = {
  red: "#B44537",
  blue: "#1F3558",
  white: "#FFFFFF",
};

const navItems = [
  { label: "HOME", mobileLabel: "Home", href: "/" },

  {
    label: "DONATE TO THE FRONT PORCH",
    mobileLabel: "Donate To The Front Porch",
    href: paypalLink,
    external: true,
  },

  {
    label: "TFP SHOP",
    mobileLabel: "TFP Shop",
    href: shopLink,
    external: true,
  },

  {
    label: "SERVICES",
    mobileLabel: "Services",
    href: "/services",
  },

  {
    label: "EVENTS",
    mobileLabel: "Events",
    href: "#events",
  },

  {
    label: "CONTACT US",
    mobileLabel: "Contact Us",
    href: "#contact",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      style={{
        backgroundColor: COLORS.white,
        color: COLORS.blue,
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >

{/* HERO IMAGE */}

<section
style={{
width: "100%",
backgroundColor: COLORS.white,
padding: "14px 0",
}}
>
<div
style={{
position: "relative",
width: "100%",
maxWidth: "1400px",
margin: "0 auto",
height: "min(82vw, 900px)",
minHeight: "360px",
}}
>
<Image
src="/IMG_1844.jpeg"
alt="The Front Porch hero image"
fill
priority
style={{
objectFit: "contain",
objectPosition: "center",
}}
/>
</div>
</section>

{/* NAVIGATION */}

<nav
style={{
width: "100%",
backgroundColor: COLORS.blue,
borderTop: `3px solid ${COLORS.red}`,
borderBottom: `3px solid ${COLORS.red}`,
position: "sticky",
top: 0,
zIndex: 50,
}}
>

{/* Desktop Nav */}

<div
style={{
maxWidth: "1400px",
margin: "0 auto",
padding: "18px 20px",
display: "flex",
justifyContent: "center",
gap: "28px",
flexWrap: "wrap",
}}
>

{navItems.map((item) =>
item.external ? (

<a
key={item.label}
href={item.href}
target="_blank"
style={{
color: COLORS.white,
fontWeight: 800,
textDecoration: "none",
fontSize: ".85rem",
letterSpacing: ".4px",
}}
>

{item.label}

</a>

) : (

<Link
key={item.label}
href={item.href}
style={{
color: COLORS.white,
fontWeight: 800,
textDecoration: "none",
fontSize: ".85rem",
letterSpacing: ".4px",
}}
>

{item.label}

</Link>

)

)}

</div>

</nav>

{/* DONATE SECTION */}

<section
style={{
maxWidth: "1180px",
margin: "0 auto",
padding: "40px 20px",
}}
>

<div
style={{
background: `linear-gradient(135deg, ${COLORS.red} 0%, ${COLORS.blue} 100%)`,
borderRadius: "28px",
padding: "42px 24px",
textAlign: "center",
color: COLORS.white,
boxShadow: "0 22px 52px rgba(31,53,88,0.22)",
}}
>

<h1
style={{
fontSize: "clamp(2rem,5vw,3.4rem)",
marginBottom: "16px",
}}
>

Support The Front Porch

</h1>

<p
style={{
maxWidth: "800px",
margin: "0 auto 26px",
lineHeight: 1.8,
}}
>

Your donations help us provide outreach, emergency relief,
and support for veterans and their families.

</p>

<a
href={paypalLink}
target="_blank"
style={{
display: "inline-block",
backgroundColor: COLORS.white,
color: COLORS.red,
padding: "20px 40px",
borderRadius: "18px",
fontWeight: 900,
fontSize: "1.1rem",
textDecoration: "none",
}}
>

DONATE TO THE FRONT PORCH

</a>

</div>

</section>

{/* FACEBOOK */}

<section
style={{
textAlign: "center",
marginBottom: "40px",
}}
>

<a
href={facebookLink}
target="_blank"
style={{
display: "inline-flex",
alignItems: "center",
gap: "10px",
backgroundColor: "#1877F2",
color: "#FFFFFF",
padding: "14px 24px",
borderRadius: "12px",
textDecoration: "none",
fontWeight: "700",
fontSize: "1rem",
boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
}}
>

👍 Like Us On Facebook

</a>

</section>

{/* EVENTS */}

<section
id="events"
style={{
maxWidth: "1100px",
margin: "0 auto",
padding: "40px 20px",
}}
>

<h2
style={{
textAlign: "center",
fontSize: "2.4rem",
marginBottom: "30px",
}}
>

Events

</h2>

<div
style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
gap: "20px",
}}
>

{["TBD","TBD","TBD"].map((item,index)=>(
<div
key={index}
style={{
backgroundColor: COLORS.white,
border:`2px solid ${COLORS.red}`,
borderRadius:"16px",
padding:"22px",
textAlign:"center",
}}
>

<h3>TBD</h3>

<p>TBD</p>

</div>
))}

</div>

</section>

{/* CONTACT */}

<section
id="contact"
style={{
maxWidth:"900px",
margin:"0 auto",
padding:"60px 20px",
textAlign:"center"
}}
>

<h2
style={{
fontSize:"2.5rem",
marginBottom:"20px"
}}
>

Contact Us

</h2>

<p style={{fontSize:"1.1rem",marginBottom:"10px"}}>

Phone:
<a
href="tel:16065958622"
style={{
color:COLORS.red,
textDecoration:"none",
fontWeight:700,
marginLeft:"8px"
}}
>
(606)595-8622
</a>

</p>

<p style={{fontSize:"1.1rem"}}>

Email:
<a
href="mailto:thefrontporch606@gmail.com"
style={{
color:COLORS.red,
textDecoration:"none",
fontWeight:700,
marginLeft:"8px"
}}
>
thefrontporch606@gmail.com
</a>

</p>

</section>

</main>
  );
}