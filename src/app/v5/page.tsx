import type { Metadata } from "next";
import { Marcellus, Cormorant_Garamond, Manrope } from "next/font/google";
import Scene5 from "./Scene5";
import GodFace from "./GodFace";
import Reveal from "./Reveal";
import MobileDelight from "./MobileDelight";
import "./v5.css";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const cormorant = Cormorant_Garamond({
  weight: ["500", "600"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-flourish",
});
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Pratik Sardar — Quality, elevated",
  description:
    "Staff SDET and quality-engineering leader. Twelve years of test automation, two US patents, and a pantheon of AI agents keeping software worthy of its users.",
};

const odyssey = [
  {
    years: "2023 · now",
    org: "Loop Health",
    role: "Staff SDET · QA Engineering Manager",
    line: "Company-wide automation platform; AI-assisted testing with custom MCP servers cut authoring time in half; OCR validation for insurance documents; SOC 2 quality gates on GCP.",
  },
  {
    years: "2021 · 23",
    org: "Locus.sh",
    role: "SDET",
    line: "Led the SDET function for distributed route-optimization systems; benchmarked engines for correctness and performance.",
  },
  {
    years: "2020 · 21",
    org: "Zebra Technologies",
    role: "Senior Software Engineer in Test",
    line: "Performance and functional automation for SmartPack across Kafka, UI and APIs.",
  },
  {
    years: "2018 · 20",
    org: "Carlson Wagonlit Travel",
    role: "Senior Test Engineer",
    line: "Functional and non-functional testing for a global travel-repository system.",
  },
  {
    years: "2014 · 18",
    org: "Zebra · Motorola Solutions",
    role: "Software Test Engineer",
    line: "Enterprise data-capture testing; co-invented patent US20180027208A1.",
  },
];

const privateLabors = [
  {
    name: "Hibi",
    note: "A gentle habit-tracker PWA built on Japanese concepts — local-first, tiny steps, no shame.",
  },
  {
    name: "Videoz",
    note: "Local-first AI video editor that turns long-form footage into platform-ready clips; every command is AI-callable.",
  },
  {
    name: "Future Express",
    note: "A retro AI newspaper whose autonomous editor holds its own crypto wallet — publishing a fresh edition every four hours until the funds run dry.",
  },
];

const publicLabors = [
  { name: "PooP Monsters", note: "gamified web3 Bio-DeSci dapp" },
  { name: "Regen Bazaar", note: "tokenizing real-world NGO impact" },
  { name: "W3 Split", note: "web3 expense splitting" },
  { name: "Spitfire", note: "AI video editor on a custom MCP server" },
];

const channels = [
  { label: "Email", href: "mailto:pratiksardar@gmail.com" },
  { label: "GitHub", href: "https://github.com/pratiksardar" },
  { label: "LinkedIn", href: "https://linkedin.com/in/pratiksardar" },
  { label: "X", href: "https://x.com/pratik_sardar" },
  { label: "Farcaster", href: "https://farcaster.com/0xpratik" },
  { label: "Résumé", href: "/Pratik-Sardar.pdf" },
];

export default function V5() {
  return (
    <div className={`oly ${marcellus.variable} ${cormorant.variable} ${manrope.variable}`}>
      <MobileDelight />
      <div className="oly-blobs" aria-hidden="true" />

      {/* ——— hero ——— */}
      <header className="oly-hero">
        <Scene5 />
        <div className="oly-hero-inner">
          <Reveal>
            <p className="oly-eyebrow">Quality engineering · est. MMXIV</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1>Pratik Sardar</h1>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="oly-thesis">
              Staff SDET &amp; quality-engineering leader. Twelve years making software{" "}
              <em>worthy of its users</em> — lately, with a pantheon of AI agents.
            </p>
          </Reveal>
          <Reveal delay={0.34}>
            <p className="oly-chips">
              <span>12 yrs in test</span>
              <span>2 US patents</span>
              <span>3 industries</span>
              <span>~50% faster with agents</span>
              <a className="oly-chip-cta" href="/Pratik-Sardar.pdf" target="_blank" rel="noopener noreferrer">
                résumé ↓
              </a>
            </p>
          </Reveal>
        </div>
      </header>

      <div className="oly-meander" role="presentation" />

      {/* ——— odyssey ——— */}
      <section className="oly-section">
        <GodFace god="athena" side="right" tint="#a99ecf" />
        <Reveal>
          <p className="oly-kicker">The odyssey</p>
          <h2>
            Five ports, <em>one discipline</em>
          </h2>
        </Reveal>
        <div className="oly-timeline">
          {odyssey.map((o, i) => (
            <Reveal key={o.org} delay={i * 0.05}>
              <article className="oly-stop">
                <span className="oly-years">{o.years}</span>
                <div>
                  <h3>
                    {o.org} <small>{o.role}</small>
                  </h3>
                  <p>{o.line}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="oly-meander" role="presentation" />

      {/* ——— labors ——— */}
      <section className="oly-section">
        <GodFace god="hermes" side="left" tint="#d9a289" />
        <Reveal>
          <p className="oly-kicker">The labors</p>
          <h2>
            Built after hours, <em>tested like production</em>
          </h2>
        </Reveal>

        <Reveal>
          <article className="oly-aegis">
            <p className="oly-aegis-tag">In the forge</p>
            <h3>AEGIS</h3>
            <p className="oly-aegis-flourish">the shield of quality</p>
            <p className="oly-aegis-desc">
              An AI-based, agentic test-automation product that sustains itself — agents that
              write, run, heal and retire tests without being asked. Coverage that grows with the
              codebase. Quality that maintains its own temple.
            </p>
            <p className="oly-aegis-chips">
              <span>agentic</span>
              <span>self-healing</span>
              <span>self-sustaining</span>
            </p>
          </article>
        </Reveal>

        <div className="oly-labors">
          {privateLabors.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <article className="oly-labor oly-labor-private">
                <p className="oly-labor-tag">Private forge</p>
                <h4>{p.name}</h4>
                <p>{p.note}</p>
              </article>
            </Reveal>
          ))}
          {publicLabors.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <article className="oly-labor">
                <h4>{p.name}</h4>
                <p>{p.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="oly-meander" role="presentation" />

      {/* ——— decrees ——— */}
      <section className="oly-section">
        <GodFace god="apollo" side="right" tint="#9dba97" />
        <Reveal>
          <p className="oly-kicker">The decrees</p>
          <h2>
            Two patents, <em>carved in USPTO marble</em>
          </h2>
        </Reveal>
        <div className="oly-decrees">
          <Reveal>
            <article>
              <span>MMXVIII</span>
              <p>Method of securing a data-capture session of a portable data-capture device</p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article>
              <span>MMXXII</span>
              <p>Method to deduce post-active period for load</p>
            </article>
          </Reveal>
        </div>
      </section>

      <div className="oly-meander" role="presentation" />

      {/* ——— contact ——— */}
      <footer className="oly-contact">
        <Reveal>
          <h2>
            Every great build <em>deserves a guardian</em>
          </h2>
          <p className="oly-contact-sub">
            Quality leadership, agentic testing, or something in web3 that must not break.
          </p>
          <nav className="oly-channels" aria-label="Contact links">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                {c.label}
              </a>
            ))}
          </nav>
          <p className="oly-colophon">
            Also: Director, The Phoenix Guild · B.E. CS, BMS College of Engineering · marble,
            pastels &amp; agents
          </p>
        </Reveal>
      </footer>
    </div>
  );
}
