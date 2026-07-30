"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNavigation, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="site-header__inner">
        <button className="site-header__menu-button" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((value) => !value)}>
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>

        <Link className="site-header__brand" href="/" aria-label="The Front Porch home">
          <span className="site-header__brand-mark site-header__brand-mark--logo">
            <img src="/frontporch-logo.PNG" alt="" />
          </span>
          <span className="site-header__brand-name">The Front Porch</span>
        </Link>

        <nav id="primary-navigation" className={`site-header__nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {primaryNavigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} className="site-header__nav-link" aria-current={active ? "page" : undefined}>{item.label}</Link>;
          })}
        </nav>

        <a className="site-header__donate" href={siteConfig.donationUrl} target="_blank" rel="noreferrer">Donate</a>
      </div>
      <style jsx>{`.site-header__brand-mark--logo{overflow:hidden;background:#fff}.site-header__brand-mark--logo img{width:100%;height:100%;object-fit:contain;padding:3px}`}</style>
    </header>
  );
}
