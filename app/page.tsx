import Link from "next/link";
import styles from "./home.module.css";

const pathways = [
  { title: "I need help now", description: "Find crisis support, housing help, food assistance, transportation, health care, and other urgent services.", href: "/veteran-support", label: "Find veteran support" },
  { title: "I am looking for resources", description: "Browse local, regional, Kentucky, and federal organizations that serve veterans and their families.", href: "/veteran-resources", label: "Explore veteran resources" },
  { title: "I want to honor a veteran", description: "Visit Hometown Heroes to remember the fallen and recognize veterans from our communities.", href: "/hometown-heroes", label: "Visit Hometown Heroes" },
];

export default function HomePage() {
  return (
    <main id="main-content" className={styles.homePage}>
      <section className={styles.brandNav} aria-label="The Front Porch main navigation">
        <img src="/frontporch-nav.PNG" alt="The Front Porch proudly supports Southeastern Kentucky veterans" className={styles.brandNavImage} />
        <Link href="/" className={`${styles.hotspot} ${styles.homeHotspot}`} aria-label="Home" />
        <Link href="/veteran-support" className={`${styles.hotspot} ${styles.supportHotspot}`} aria-label="Veteran Support Request" />
        <Link href="/veteran-resources" className={`${styles.hotspot} ${styles.resourcesHotspot}`} aria-label="Veteran Resources" />
        <Link href="/hometown-heroes" className={`${styles.hotspot} ${styles.heroesHotspot}`} aria-label="Hometown Heroes" />
        <Link href="/shop" className={`${styles.hotspot} ${styles.shopHotspot}`} aria-label="Shop" />
        <a href="https://givebutter.com/donate-to-the-front-porch-nebqxb" target="_blank" rel="noreferrer" className={`${styles.hotspot} ${styles.donateHotspot}`} aria-label="Donate" />
      </section>

      <div className={styles.crisisRow}>
        <a className={styles.crisisCard} href="tel:988" aria-label="Call the Veterans Crisis Line at 988 then press 1">
          <span className={styles.crisisIcon} aria-hidden="true">★</span>
          <span><strong>Veterans Crisis Line</strong><small>Dial 988, then press 1</small></span>
        </a>
      </div>

      <section className={`${styles.section} ${styles.intro}`} aria-labelledby="start-here-title">
        <div className={styles.sectionInner}>
          <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>Start here</p>
          <h1 id="start-here-title">What do you need today?</h1>
          <div className={styles.pathways}>{pathways.map((pathway) => <article className={styles.card} key={pathway.title}><h2>{pathway.title}</h2><p>{pathway.description}</p><Link href={pathway.href}>{pathway.label} →</Link></article>)}</div>
        </div>
      </section>

      <section className={styles.callout} aria-labelledby="callout-title">
        <div className={`${styles.sectionInner} ${styles.calloutInner}`}><div><p className={styles.eyebrow}>The Front Porch</p><h2 id="callout-title">No Veteran Should Ever Run Out of Places to Turn.</h2></div><Link className={`${styles.button} ${styles.buttonLight}`} href="/veteran-resources">Find a resource</Link></div>
      </section>
    </main>
  );
}
