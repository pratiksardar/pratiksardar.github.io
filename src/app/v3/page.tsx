import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import HealingName from "./HealingName";
import "./v3.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });
const jet = JetBrains_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Pratik Sardar — I break software for a living",
  description:
    "Staff SDET and quality-engineering leader. Twelve years of breaking software on purpose — with test agents, MCP servers and two US patents to show for it.",
};

const record = [
  {
    years: "2023 — now",
    org: "Loop Health",
    role: "Staff SDET · QA Engineering Manager",
    line: "Taught an entire engineering org to test with agents.",
    detail:
      "Company-wide automation platform (Java + Selenium/Appium/REST Assured/TestNG, TypeScript + Playwright). Custom MCP servers give coding agents full context over code, Jira and docs — test authoring runs ~50% faster. An OCR hybrid framework asserts on rendered insurance documents no UI check can reach. CI/CD quality gates on GCP guard a SOC 2 platform.",
  },
  {
    years: "2021 — 23",
    org: "Locus.sh",
    role: "SDET",
    line: "Benchmarked route-optimization engines until they confessed.",
    detail:
      "Led the SDET function for large-scale distributed logistics systems — correctness and performance regressions surfaced before release, never after.",
  },
  {
    years: "2020 — 21",
    org: "Zebra Technologies",
    role: "Senior Software Engineer in Test",
    line: "Load-tested auto-scaling systems across Kafka, UI and APIs.",
    detail:
      "Functional and performance suites for SmartPack; alerting, logging and monitoring built on open-source observability tooling.",
  },
  {
    years: "2018 — 20",
    org: "Carlson Wagonlit Travel",
    role: "Senior Test Engineer",
    line: "Made a giant travel-repository system observable and honest.",
    detail:
      "Functional and non-functional coverage plus the logging, monitoring and alerting that kept production visible.",
  },
  {
    years: "2014 — 18",
    org: "Zebra · Motorola Solutions",
    role: "Software Test Engineer",
    line: "First job: enterprise scanners. First patent: their security.",
    detail:
      "Functional, regression and integration testing for data-capture products — and co-inventor of a patented data-capture security method (US20180027208A1).",
  },
];

const experiments = [
  { name: "PooP Monsters", note: "gamified web3 lifestyle dapp — a gateway for Bio-DeSci quests and studies" },
  { name: "Regen Bazaar", note: "tokenizing real-world NGO impact — smart-contract testing, Foundry CI" },
  { name: "W3 Split", note: "web3 expense-splitting dApp — contracts and frontend, built and tested" },
  { name: "Spitfire", note: "AI video editor on a custom MCP server — long-form video into reels" },
];

const channels = [
  { label: "email", value: "pratiksardar@gmail.com", href: "mailto:pratiksardar@gmail.com" },
  { label: "github", value: "pratiksardar", href: "https://github.com/pratiksardar" },
  { label: "linkedin", value: "in/pratiksardar", href: "https://linkedin.com/in/pratiksardar" },
  { label: "x", value: "@pratik_sardar", href: "https://x.com/pratik_sardar" },
  { label: "farcaster", value: "@0xpratik", href: "https://farcaster.com/0xpratik" },
];

export default function V3() {
  return (
    <div className={`hx ${fraunces.variable} ${instrument.variable} ${jet.variable}`}>
      {/* ——— hero ——— */}
      <header className="hx-hero">
        <p className="hx-eyebrow">staff sdet · quality engineering · est. 2014</p>
        <HealingName />
        <p className="hx-thesis">
          I break software <em>on purpose</em> — so it never breaks your trust.
        </p>
        <p className="hx-stats">
          12 yrs in test · 2 US patents · ~50% faster authoring with agents
        </p>
      </header>

      {/* ——— practice ——— */}
      <section className="hx-practice" aria-label="The practice">
        <p className="hx-kicker">the practice</p>
        <p className="hx-manifesto">
          Quality isn&rsquo;t a phase at the end of the sprint. It&rsquo;s an{" "}
          <em>assertion that has to hold every single day</em> — across backends, APIs, rendered
          documents and the occasional smart contract. My job is to write that assertion, automate
          it, and teach machines to keep it honest.
        </p>
        <ul className="hx-principles">
          <li>
            <strong>Break it first.</strong> Every defect found in CI is a 3 a.m. page that never
            happens.
          </li>
          <li>
            <strong>Automate the boring, audit the scary.</strong> Frameworks for the thousand
            known checks; human judgment for the one unknown.
          </li>
          <li>
            <strong>Give the agents context.</strong> An AI with the codebase, the tickets and the
            docs writes tests like a senior — without them, like a tourist.
          </li>
        </ul>
      </section>

      {/* ——— agent log ——— */}
      <section className="hx-agentlog" aria-label="Working with machines">
        <p className="hx-kicker">working with machines</p>
        <h2>
          The test suite that <em>answers back</em>
        </h2>
        <div className="hx-terminal" role="img" aria-label="An agent conversation: the agent queries the MCP server for context and generates passing tests">
          <p><span className="hx-t-actor">agent</span> what changed in benefits-redemption since v2.14?</p>
          <p><span className="hx-t-actor">mcp</span> 3 endpoints, 1 schema, 14 Jira refs. context attached.</p>
          <p><span className="hx-t-actor">agent</span> drafting 27 cases… OCR assertions for the rendered e-card included.</p>
          <p><span className="hx-t-actor">suite</span> <span className="hx-ok">27 passed</span> · authored in half the time · escape defects: none</p>
        </div>
        <p className="hx-agentnote">
          Custom MCP servers, agentic test workflows, self-healing locators, visual AI — wired into
          the dev loop at Loop Health, not bolted on after.
        </p>
      </section>

      {/* ——— record ——— */}
      <section className="hx-record" aria-label="The record">
        <p className="hx-kicker">the record</p>
        {record.map((r) => (
          <article className="hx-chapter" key={r.org}>
            <div className="hx-chapter-meta">
              <span>{r.years}</span>
              <span>{r.org}</span>
              <span>{r.role}</span>
            </div>
            <h3>{r.line}</h3>
            <p>{r.detail}</p>
          </article>
        ))}
      </section>

      {/* ——— patents ——— */}
      <section className="hx-patents" aria-label="Patents">
        <p className="hx-kicker">on file with the uspto</p>
        <h2>
          Two ideas the examiners <em>couldn&rsquo;t reject</em>
        </h2>
        <ol>
          <li>
            <span className="hx-patent-date">aug 2018</span>
            Method of securing a data-capture session of a portable data-capture device
          </li>
          <li>
            <span className="hx-patent-date">aug 2022</span>
            Method to deduce post-active period for load
          </li>
        </ol>
      </section>

      {/* ——— after hours ——— */}
      <section className="hx-after" aria-label="After hours">
        <p className="hx-kicker">after hours</p>
        <ul>
          {experiments.map((e) => (
            <li key={e.name}>
              <strong>{e.name}</strong>
              <span>{e.note}</span>
            </li>
          ))}
        </ul>
        <p className="hx-afternote">
          Also: Director at The Phoenix Guild since 2024. B.E. Computer Science, BMS College of
          Engineering.
        </p>
      </section>

      {/* ——— contact ——— */}
      <footer className="hx-contact">
        <h2>
          Got something that <em>shouldn&rsquo;t break?</em>
        </h2>
        <ul>
          {channels.map((c) => (
            <li key={c.label}>
              <span>{c.label}</span>
              <a href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
                {c.value}
              </a>
            </li>
          ))}
        </ul>
        <p className="hx-colophon">pratik sardar · bengaluru · no particles were harmed in this redesign</p>
      </footer>
    </div>
  );
}
