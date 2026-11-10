"use client";

import Image from "next/image";
import { FormEvent, useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { groupHeroes, heroes, type HeroGroup, type Veteran } from "./heroes";
import styles from "./hometown-heroes.module.css";

const johnVerse = "“Greater love has no one than this: to lay down one's life for one's friends.”";
const lincolnTribute = "“A nation that does not honor its heroes will not long endure.”";

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function scrollToId(id: string) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const card = document.getElementById(id);
  if (!card) return;
  card.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  card.querySelector<HTMLButtonElement>("button")?.focus({ preventScroll: true });
}

function useDialog(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    node?.focus();

    const focusable = () =>
      Array.from(
        node?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])',
        ) ?? [],
      );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !node) return;
      const items = focusable();
      if (items.length === 0) {
        event.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || active === node)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || active === node)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return ref;
}

function HeroCard({
  hero,
  group,
  highlighted,
  onOpen,
}: {
  hero: Veteran;
  group: HeroGroup;
  highlighted: boolean;
  onOpen: (hero: Veteran) => void;
}) {
  const className = [
    styles.card,
    group === "kia" ? styles.cardKia : "",
    group === "deceased" ? styles.cardDeceased : "",
    highlighted ? styles.highlighted : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article id={hero.id} className={className}>
      <div className={styles.photo}>
        {hero.image ? (
          <Image
            src={hero.image}
            alt={`${hero.rank} ${hero.name}`}
            fill
            sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 24rem"
            className={styles.photoImg}
          />
        ) : (
          <div className={styles.photoPlaceholder} role="img" aria-label={`${hero.rank} ${hero.name}`}>
            Photo
          </div>
        )}
        {group === "kia" ? <p className={styles.badge}>Killed in Action</p> : null}
        {group === "deceased" ? <p className={`${styles.badge} ${styles.badgeDeceased}`}>Deceased</p> : null}
      </div>
      <div className={styles.cardBody}>
        <p className={styles.rank}>{hero.rank}</p>
        <h3 className={styles.name}>{hero.name}</h3>
        <p className={styles.city}>{hero.city}</p>
        <p className={styles.branch}>
          <span className={styles.srOnly}>Branch: </span>
          {hero.branch}
        </p>
        <p className={styles.era}>
          <span className={styles.srOnly}>Service: </span>
          {hero.campaign}
        </p>
        <p className={styles.inscription}>
          <span className={styles.srOnly}>Details: </span>
          {hero.years}
        </p>
        <button type="button" className={styles.readMore} onClick={() => onOpen(hero)}>
          Read more<span className={styles.srOnly}> about {hero.rank} {hero.name}</span>
        </button>
      </div>
    </article>
  );
}

function HeroGrid({
  records,
  group,
  highlighted,
  onOpen,
}: {
  records: Veteran[];
  group: HeroGroup;
  highlighted: string | null;
  onOpen: (hero: Veteran) => void;
}) {
  return (
    <div className={styles.grid}>
      {records.map((hero) => (
        <HeroCard key={hero.id} hero={hero} group={group} highlighted={highlighted === hero.id} onOpen={onOpen} />
      ))}
    </div>
  );
}

function ProfileDialog({ hero, onClose }: { hero: Veteran; onClose: () => void }) {
  const ref = useDialog(onClose);
  const titleId = useId();
  const rankId = useId();
  const [shareNote, setShareNote] = useState("");

  const shareHero = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${hero.id}`;
    const payload = {
      title: `${hero.rank} ${hero.name}`,
      text: "View this Hometown Hero on The Front Porch.",
      url,
    };
    if (typeof navigator.share === "function") {
      try {
        await navigator.share(payload);
        setShareNote("");
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setShareNote("Link copied.");
    } catch {
      setShareNote(url);
    }
  };

  return (
    <div className={`${styles.backdrop} hh-print-dialog`} onClick={onClose}>
      <div
        ref={ref}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${rankId} ${titleId}`}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className={styles.modalHeader}>
          <p id={rankId} className={styles.rank}>{hero.rank}</p>
          <h2 id={titleId}>{hero.name}</h2>
        </div>
        {hero.image ? (
          <div className={`${styles.modalPhotoWrap} ${hero.fallen ? styles.modalPhotoKia : ""}`}>
            <Image
              src={hero.image}
              alt={`${hero.rank} ${hero.name}`}
              fill
              sizes="16rem"
              className={styles.photoImg}
            />
          </div>
        ) : null}
        <dl className={styles.facts}>
          <div>
            <dt>Hometown</dt>
            <dd>{hero.city}</dd>
          </div>
          <div>
            <dt>Branch</dt>
            <dd>{hero.branch}</dd>
          </div>
          <div>
            <dt>Service</dt>
            <dd>{hero.campaign}</dd>
          </div>
          <div>
            <dt>Details</dt>
            <dd>{hero.years}</dd>
          </div>
        </dl>
        <div className={styles.actions}>
          <button type="button" onClick={shareHero}>Share This Hero</button>
          <button type="button" onClick={() => window.print()}>Print This Hero</button>
          <a href={`mailto:thefrontporch606@gmail.com?subject=${encodeURIComponent(`Correction for ${hero.rank} ${hero.name}`)}`}>
            Submit a Correction
          </a>
          <a href={`mailto:thefrontporch606@gmail.com?subject=${encodeURIComponent(`Additional information for ${hero.rank} ${hero.name}`)}`}>
            Help Preserve This Hero
          </a>
        </div>
        {shareNote ? <p className={styles.shareNote} role="status">{shareNote}</p> : null}
      </div>
    </div>
  );
}

function SubmitDialog({ onClose }: { onClose: () => void }) {
  const ref = useDialog(onClose);
  const titleId = useId();
  const fieldId = useId();

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        ref={ref}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className={styles.modalHeader}>
          <h2 id={titleId}>Submit a Hometown Hero</h2>
          <p className={styles.formIntro}>Help us honor a veteran from our community. Submissions are reviewed before publication.</p>
        </div>
        <form action="https://formsubmit.co/thefrontporch606@gmail.com" method="POST" encType="multipart/form-data" className={styles.form}>
          <input type="hidden" name="_subject" value="New Hometown Hero Submission" />
          <label className={styles.field} htmlFor={`${fieldId}-rank`}>
            <span>Rank</span>
            <input id={`${fieldId}-rank`} name="rank" placeholder="Rank" />
          </label>
          <label className={styles.field} htmlFor={`${fieldId}-name`}>
            <span>Full name <span className={styles.required}>(required)</span></span>
            <input id={`${fieldId}-name`} name="name" placeholder="Full name" required />
          </label>
          <label className={styles.field} htmlFor={`${fieldId}-city`}>
            <span>City / hometown <span className={styles.required}>(required)</span></span>
            <input id={`${fieldId}-city`} name="city" placeholder="City / hometown" required />
          </label>
          <label className={styles.field} htmlFor={`${fieldId}-branch`}>
            <span>Branch of service <span className={styles.required}>(required)</span></span>
            <input id={`${fieldId}-branch`} name="branch" placeholder="Branch of service" required />
          </label>
          <label className={styles.field} htmlFor={`${fieldId}-campaign`}>
            <span>Campaign, era, or conflict</span>
            <input id={`${fieldId}-campaign`} name="campaign" placeholder="Campaign, era, or conflict" />
          </label>
          <label className={styles.field} htmlFor={`${fieldId}-years`}>
            <span>Service dates, if known</span>
            <input id={`${fieldId}-years`} name="years" placeholder="Service dates, if known" />
          </label>
          <label className={styles.field} htmlFor={`${fieldId}-photo`}>
            <span>Photo</span>
            <input id={`${fieldId}-photo`} type="file" name="photo" accept="image/*" />
          </label>
          <button type="submit" className={styles.primary}>Honor This Hero</button>
        </form>
      </div>
    </div>
  );
}

export function HometownHeroesGallery() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Veteran | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const grouped = useMemo(() => groupHeroes(heroes), []);

  const matches = useMemo(() => {
    const q = normalize(query);
    if (!q) return [];
    return heroes.filter((hero) => normalize(`${hero.rank} ${hero.name}`).includes(q));
  }, [query]);

  const closeProfile = useCallback(() => setSelected(null), []);
  const closeForm = useCallback(() => setFormOpen(false), []);
  const openProfile = useCallback((hero: Veteran) => setSelected(hero), []);
  const highlightTimer = useRef<number | null>(null);

  const goToHero = (hero: Veteran) => {
    setQuery(`${hero.rank} ${hero.name}`);
    setHighlighted(hero.id);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${hero.id}`);
    scrollToId(hero.id);
    if (highlightTimer.current) window.clearTimeout(highlightTimer.current);
    highlightTimer.current = window.setTimeout(() => setHighlighted(null), 2400);
  };

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    if (matches[0]) goToHero(matches[0]);
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.logoFrame}>
            <Image
              src="/frontporch-logo.PNG"
              alt="The Front Porch"
              width={1536}
              height={1024}
              priority
              className={styles.logo}
            />
          </div>
          <h1 className={styles.titleBlock}>
            <span className={styles.salutes}>Salutes Our</span>
            <span className={styles.titleWrap}>
              <Image
                src="/hometown-heroes.PNG"
                alt="Hometown Heroes"
                width={1536}
                height={1024}
                priority
                className={styles.titleArt}
                style={{ width: "100%", height: "auto" }}
              />
            </span>
          </h1>
          <div className={styles.branchWrap}>
            <Image
              src="/branches.png"
              alt="United States military branch emblems"
              width={1987}
              height={317}
              className={styles.branches}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <p className={styles.lede}>
            A memorial for local veterans killed in action, and for the living and deceased veterans of our communities.
          </p>
          <div className={styles.heroActions}>
            <button type="button" className={styles.primary} onClick={() => setFormOpen(true)}>
              Submit a Hometown Hero
            </button>
            <nav className={styles.jumps} aria-label="On this page">
              <a href="#killed-in-action">Killed in Action</a>
              <a href="#living-veterans">Living veterans</a>
              <a href="#deceased-veterans">Deceased veterans</a>
            </nav>
          </div>
          <div className={styles.searchCard}>
            <h2 id="hero-search-title">Search for a Hometown Hero</h2>
            <p id="hero-search-help" className={styles.searchHelp}>
              Enter a veteran’s first name, last name, or full name.
            </p>
            <form onSubmit={submitSearch} className={styles.searchForm}>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Example: Dustin Napier"
                aria-label="Search Hometown Heroes by name"
                aria-describedby="hero-search-help"
              />
              <button type="submit" className={styles.primary}>Find Hero</button>
            </form>
            {query ? (
              <div aria-live="polite">
                {matches.length ? (
                  <ul className={styles.results}>
                    {matches.map((hero) => (
                      <li key={hero.id}>
                        <button type="button" onClick={() => goToHero(hero)}>
                          {hero.rank} {hero.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.noMatch}>No matching hero was found.</p>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className={styles.kia} id="killed-in-action" aria-labelledby="kia-title">
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>In memoriam</p>
          <h2 id="kia-title">Killed in Action</h2>
          <blockquote className={styles.quote}>
            <p>{johnVerse}</p>
            <footer>— John 15:13</footer>
          </blockquote>
        </div>
        <HeroGrid records={grouped.kia} group="kia" highlighted={highlighted} onOpen={openProfile} />
      </section>

      <section className={styles.community} aria-labelledby="community-title">
        <div className={styles.sectionIntro}>
          <blockquote className={styles.quote}>
            <p>{lincolnTribute}</p>
            <footer>— Abraham Lincoln</footer>
          </blockquote>
          <h2 id="community-title">Living and deceased veterans</h2>
        </div>

        <div className={styles.subsection} id="living-veterans">
          <h3>Living veterans</h3>
          <HeroGrid records={grouped.living} group="living" highlighted={highlighted} onOpen={openProfile} />
        </div>

        <div className={styles.subsection} id="deceased-veterans">
          <h3>Deceased veterans</h3>
          <p className={styles.subsectionLead}>
            Veterans from our communities who have passed, and who were not killed in action, are honored here.
          </p>
          {grouped.deceased.length ? (
            <HeroGrid records={grouped.deceased} group="deceased" highlighted={highlighted} onOpen={openProfile} />
          ) : (
            <div className={styles.empty}>
              <p>No deceased veterans are listed on this page yet.</p>
              <button type="button" className={styles.secondary} onClick={() => setFormOpen(true)}>
                Submit a Hometown Hero
              </button>
            </div>
          )}
        </div>
      </section>

      {selected ? <ProfileDialog key={selected.id} hero={selected} onClose={closeProfile} /> : null}
      {formOpen ? <SubmitDialog onClose={closeForm} /> : null}
    </main>
  );
}
