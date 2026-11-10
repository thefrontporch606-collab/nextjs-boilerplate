"use client";

import Image from "next/image";
import { FormEvent, useEffect, useId, useMemo, useRef, useState } from "react";
import {
  branchFilters,
  branchId,
  detailLine,
  emblems,
  heroes,
  type BranchId,
  type Veteran,
} from "./heroes";
import styles from "./hometown-heroes.module.css";

const FORM_ACTION = "https://formsubmit.co/thefrontporch606@gmail.com";

function useDialog(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    node?.focus();

    const focusable = () =>
      Array.from(
        node?.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])") ?? [],
      );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !node) return;
      const items = focusable();
      if (!items.length) {
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

function Emblem({ id, className, fill = false }: { id: BranchId; className?: string; fill?: boolean }) {
  const emblem = emblems[id];
  if (fill) {
    return <Image src={emblem.src} alt={emblem.alt} fill sizes="56px" className={className} />;
  }
  return <Image src={emblem.src} alt={emblem.alt} width={64} height={64} className={className} />;
}

function HeroCard({ hero, onOpen }: { hero: Veteran; onOpen: (hero: Veteran) => void }) {
  const id = branchId(hero.branch);
  return (
    <article
      className={styles.card}
      tabIndex={0}
      role="button"
      aria-label={`${hero.rank} ${hero.name}, ${hero.city}`}
      onClick={() => onOpen(hero)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(hero);
        }
      }}
    >
      <div className={styles.photo}>
        {hero.image ? (
          <Image src={hero.image} alt={`${hero.rank} ${hero.name}`} fill sizes="(max-width: 40rem) 33vw, 20rem" className={styles.photoImg} />
        ) : null}
      </div>
      <div className={`${styles.cardBody} ${id ? styles.cardBodyMedallion : ""}`}>
        {id ? (
          <span className={styles.emblemSlot}>
            <Emblem id={id} fill className={styles.emblemImg} />
          </span>
        ) : null}
        <p className={styles.rank}>{hero.rank}</p>
        <h3 className={styles.name}>{hero.name}</h3>
        <p className={styles.hometown}>{hero.city}</p>
        <p className={styles.detail}>{detailLine(hero)}</p>
        <span className={styles.srOnly}>{hero.branch}</span>
      </div>
    </article>
  );
}

function ProfileDialog({ hero, onClose }: { hero: Veteran; onClose: () => void }) {
  const ref = useDialog(onClose);
  const titleId = useId();
  const id = branchId(hero.branch);
  const detail = detailLine(hero);
  const story = [hero.branch, hero.campaign, hero.city].filter((part) => part && !detail.includes(part)).join(". ");

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div ref={ref} className={styles.modal} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} onClick={(event) => event.stopPropagation()}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">✕</button>
        <div className={styles.modalPhoto}>
          {hero.image ? <Image src={hero.image} alt={`${hero.rank} ${hero.name}`} fill sizes="48rem" className={styles.photoImg} /> : null}
        </div>
        <div className={`${styles.modalCopy} ${id ? styles.modalCopyMedallion : ""}`}>
          {id ? (
            <span className={styles.modalMedallion}>
              <Emblem id={id} fill className={styles.emblemImg} />
            </span>
          ) : null}
          <p className={styles.modalRank}>
            <span>{hero.rank} · {hero.branch}</span>
          </p>
          <h2 id={titleId}>{hero.name}</h2>
          <p className={styles.modalHometown}>{hero.city}</p>
          <p className={styles.modalDetail}>{detail}</p>
          {story ? <p className={styles.story}>{story}.</p> : null}
        </div>
      </div>
    </div>
  );
}

function SubmitFields({ fieldId }: { fieldId: string }) {
  return (
    <>
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
    </>
  );
}

function QuoteDivider({ quote, cite, label }: { quote: string; cite: string; label: string }) {
  return (
    <div className={styles.separator}>
      <div className={styles.rule} aria-hidden="true">
        <span />
        <svg className={styles.star} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span />
      </div>
      <blockquote className={styles.quote}>{quote}</blockquote>
      <cite className={styles.cite}>{cite}</cite>
      <p className={styles.areaLabel}>{label}</p>
    </div>
  );
}

function SubmitDialog({ onClose }: { onClose: () => void }) {
  const ref = useDialog(onClose);
  const titleId = useId();
  const fieldId = useId();

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div ref={ref} className={styles.modal} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} onClick={(event) => event.stopPropagation()}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">✕</button>
        <div className={styles.modalCopy}>
          <h2 id={titleId}>Submit a Hometown Hero</h2>
          <p className={styles.formIntro}>Help us honor a veteran from our community. Submissions are reviewed before publication.</p>
          <form action={FORM_ACTION} method="POST" encType="multipart/form-data" className={styles.form}>
            <SubmitFields fieldId={fieldId} />
            <button type="submit" className={styles.primary}>Honor This Hero</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function CorrectionDialog({ onClose }: { onClose: () => void }) {
  const ref = useDialog(onClose);
  const titleId = useId();
  const fieldId = useId();
  const [heroChoice, setHeroChoice] = useState(heroes[0] ? `${heroes[0].rank} ${heroes[0].name}` : "Other");
  const [otherName, setOtherName] = useState("");
  const subjectName = heroChoice === "Other" ? otherName.trim() || "Other" : heroChoice;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div ref={ref} className={styles.modal} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} onClick={(event) => event.stopPropagation()}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">✕</button>
        <div className={styles.modalCopy}>
          <h2 id={titleId}>Submit a Correction</h2>
          <p className={styles.formIntro}>Tell us what should be changed. Submissions are reviewed before anything is updated.</p>
          <form action={FORM_ACTION} method="POST" encType="multipart/form-data" className={styles.form}>
            <input type="hidden" name="_subject" value={`Hometown Heroes correction: ${subjectName}`} />
            <label className={styles.field} htmlFor={`${fieldId}-hero`}>
              <span>Hero name <span className={styles.required}>(required)</span></span>
              <select id={`${fieldId}-hero`} name="hero" value={heroChoice} onChange={(event) => setHeroChoice(event.target.value)} required>
                {heroes.map((hero) => {
                  const label = `${hero.rank} ${hero.name}`;
                  return <option key={hero.id} value={label}>{label}</option>;
                })}
                <option value="Other">Other</option>
              </select>
            </label>
            {heroChoice === "Other" ? (
              <label className={styles.field} htmlFor={`${fieldId}-other`}>
                <span>Hero name <span className={styles.required}>(required)</span></span>
                <input id={`${fieldId}-other`} name="hero_name" value={otherName} onChange={(event) => setOtherName(event.target.value)} required />
              </label>
            ) : null}
            <label className={styles.field} htmlFor={`${fieldId}-what`}>
              <span>What needs correcting <span className={styles.required}>(required)</span></span>
              <textarea id={`${fieldId}-what`} name="what_needs_correcting" required />
            </label>
            <label className={styles.field} htmlFor={`${fieldId}-correct`}>
              <span>Correct information <span className={styles.required}>(required)</span></span>
              <textarea id={`${fieldId}-correct`} name="correct_information" required />
            </label>
            <label className={styles.field} htmlFor={`${fieldId}-link`}>
              <span>Supporting link <span className={styles.optional}>(optional)</span></span>
              <input id={`${fieldId}-link`} name="supporting_link" type="url" placeholder="https://" />
            </label>
            <label className={styles.field} htmlFor={`${fieldId}-photo`}>
              <span>Supporting photo <span className={styles.optional}>(optional)</span></span>
              <input id={`${fieldId}-photo`} name="photo" type="file" accept="image/*" />
            </label>
            <label className={styles.field} htmlFor={`${fieldId}-submitter`}>
              <span>Your name <span className={styles.required}>(required)</span></span>
              <input id={`${fieldId}-submitter`} name="submitter_name" required />
            </label>
            <label className={styles.field} htmlFor={`${fieldId}-email`}>
              <span>Email <span className={styles.required}>(required)</span></span>
              <input id={`${fieldId}-email`} name="email" type="email" required />
            </label>
            <label className={styles.field} htmlFor={`${fieldId}-phone`}>
              <span>Phone <span className={styles.optional}>(optional)</span></span>
              <input id={`${fieldId}-phone`} name="phone" type="tel" />
            </label>
            <label className={styles.field} htmlFor={`${fieldId}-relationship`}>
              <span>Relationship to the hero <span className={styles.required}>(required)</span></span>
              <input id={`${fieldId}-relationship`} name="relationship" required />
            </label>
            <button type="submit" className={styles.primary}>Submit a Correction</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function HometownHeroesGallery({ bannerSrc }: { bannerSrc: string | null }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof branchFilters)[number]["id"]>("all");
  const [selected, setSelected] = useState<Veteran | null>(null);
  const [submitOpen, setSubmitOpen] = useState(false);
  const [correctionOpen, setCorrectionOpen] = useState(false);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return heroes.filter((hero) => {
      const id = branchId(hero.branch);
      const matchesFilter = filter === "all" || id === filter;
      const haystack = `${hero.rank} ${hero.name} ${hero.city}`.toLowerCase();
      return matchesFilter && (!q || haystack.includes(q));
    });
  }, [filter, query]);

  const kia = visible.filter((hero) => hero.fallen);
  const veterans = visible.filter((hero) => !hero.fallen);

  const clear = () => {
    setQuery("");
    setFilter("all");
  };

  const onSubmitSearch = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        {bannerSrc ? <Image src={bannerSrc} alt="" fill priority sizes="100vw" className={styles.heroPhoto} /> : null}
        <div className={bannerSrc ? styles.heroShade : styles.heroShadePlain} />
        <div className={styles.heroContent}>
          <div className={styles.logoFrame}>
            <Image src="/hometown-heroes/front-porch-logo.jpg" alt="The Front Porch" width={952} height={764} priority className={styles.logo} />
          </div>
          <h1 className={styles.headline}>HOMETOWN HEROES</h1>
          <p className={styles.subtitle}>Proudly supporting Southeastern Kentucky’s Veterans</p>
          <div className={styles.heroActions}>
            <div className={styles.ctaStack}>
              <button type="button" className={styles.primary} onClick={() => setSubmitOpen(true)}>+ Submit a Hometown Hero</button>
              <button type="button" className={styles.correction} onClick={() => setCorrectionOpen(true)}>Submit a Correction</button>
            </div>
            <a className={styles.ghost} href="#directory">View Heroes ↓</a>
          </div>
        </div>
      </section>

      <section className={styles.searchBar} aria-label="Search and filter heroes">
        <div className={styles.searchInner}>
          <div className={styles.searchRow}>
            <form className={styles.searchField} onSubmit={onSubmitSearch}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search name or hometown…"
                aria-label="Search name or hometown"
              />
            </form>
            <div className={styles.chips} role="group" aria-label="Filter by branch">
              {branchFilters.map((item) => {
                const active = filter === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`${styles.chip} ${active ? styles.chipActive : ""}`}
                    aria-pressed={active}
                    onClick={() => setFilter(item.id)}
                  >
                    {item.id !== "all" ? <Emblem id={item.id} className={styles.chipEmblem} /> : null}
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
          <p className={styles.count}>Showing {visible.length} hero{visible.length === 1 ? "" : "es"}</p>
        </div>
      </section>

      <section id="directory" className={styles.directory}>
        {visible.length ? (
          <div className={styles.grid}>
            {kia.length ? (
              <QuoteDivider
                quote="“Greater love has no one than this: to lay down one's life for one's friends.”"
                cite="— John 15:13"
                label="Killed in Action"
              />
            ) : null}
            {kia.map((hero) => <HeroCard key={hero.id} hero={hero} onOpen={setSelected} />)}
            {kia.length && veterans.length ? (
              <QuoteDivider
                quote="“A nation that does not honor its heroes will not long endure.”"
                cite="— Abraham Lincoln"
                label="Veterans of This Area"
              />
            ) : null}
            {veterans.map((hero) => <HeroCard key={hero.id} hero={hero} onOpen={setSelected} />)}
          </div>
        ) : (
          <div className={styles.empty}>
            No heroes match.
            <button type="button" className={styles.clear} onClick={clear}>Clear</button>
          </div>
        )}
      </section>

      <section id="submit" className={styles.submit}>
        <div className={styles.submitInner}>
          <h2>Know a Hometown Hero?</h2>
          <p className={styles.lead}>Help us honor them. Submit a name, photo, and story.</p>
          <div className={styles.submitActions}>
            <button type="button" className={styles.primary} onClick={() => setSubmitOpen(true)}>+ Submit a Hometown Hero</button>
            <button type="button" className={styles.correction} onClick={() => setCorrectionOpen(true)}>Submit a Correction</button>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>© 2026 The Front Porch · London, KY · Proudly supporting Southeastern Kentucky’s Veterans</p>
        </div>
      </footer>

      {selected ? <ProfileDialog hero={selected} onClose={() => setSelected(null)} /> : null}
      {submitOpen ? <SubmitDialog onClose={() => setSubmitOpen(false)} /> : null}
      {correctionOpen ? <CorrectionDialog onClose={() => setCorrectionOpen(false)} /> : null}
    </main>
  );
}
