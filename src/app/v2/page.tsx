import type { Metadata } from "next";
import { Saira_Stencil_One, Archivo, IBM_Plex_Mono, Caveat } from "next/font/google";
import "./v2.css";

const stencil = Saira_Stencil_One({ weight: "400", subsets: ["latin"], variable: "--font-stencil" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-body" });
const plex = IBM_Plex_Mono({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-mono" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-sig" });

export const metadata: Metadata = {
  title: "Pratik Sardar — Certificate of Inspection",
  description:
    "Quality control dossier for Pratik Sardar: Staff SDET, test-automation architect, AI-assisted testing pioneer. Specimen inspected and approved for production.",
};

const checks = [
  { id: "CHK-01", label: "test-automation architecture, backend → API → frontend", result: "PASS" },
  { id: "CHK-02", label: "AI-assisted testing — custom MCP servers, agentic workflows", result: "PASS" },
  { id: "CHK-03", label: "US patents", result: "2 GRANTED" },
  { id: "CHK-04", label: "escape defects in production", result: "NONE FOUND" },
];

const history = [
  {
    period: "2023 — NOW",
    org: "Loop Health",
    role: "Staff SDET · QA Engineering Manager",
    finding:
      "Architected the company-wide automation platform and pioneered AI-assisted testing across engineering.",
    evidence: [
      "Automation platform across backend, REST APIs and frontend — Java + Selenium/Appium/REST Assured/TestNG, TypeScript + Playwright — adopted as the standard for all product lines.",
      "Custom MCP servers and agent configurations wove AI test-case generation into the dev workflow, cutting test-authoring time roughly in half.",
      "Tesseract-OCR hybrid validation framework asserts on rendered insurance documents and e-cards that UI/API checks cannot reach.",
      "CI/CD quality gates on GCP (GitHub Actions) protecting SLAs on a SOC 2-certified platform; pre-PR checks materially reduced escape defects.",
    ],
  },
  {
    period: "2021 — 23",
    org: "Locus.sh",
    role: "SDET",
    finding:
      "Led the SDET function for large-scale distributed route-optimization systems serving enterprise logistics.",
    evidence: [
      "Benchmarked multiple route-optimization engines for correctness and performance, surfacing regressions before release.",
      "Built CI/CD pipelines and observability for code coverage and repeatable deployments.",
      "Mentored peers within and across teams, raising testing rigor and cross-functional quality ownership.",
    ],
  },
  {
    period: "2020 — 21",
    org: "Zebra Technologies",
    role: "Senior Software Engineer in Test",
    finding:
      "Functional, performance and auto-scaling test suites for SmartPack across Kafka, UI and RESTful APIs.",
    evidence: [
      "Implemented performance tests for auto-scaling systems.",
      "Set up alerting, logging and monitoring with open-source observability tooling.",
    ],
  },
  {
    period: "2018 — 20",
    org: "Carlson Wagonlit Travel",
    role: "Senior Test Engineer",
    finding:
      "Functional and non-functional testing for a large travel-repository system; improved production observability.",
    evidence: [
      "Designed and tested functional and non-functional behavior for a large travel-repository system.",
      "Implemented logging, monitoring and alerting tooling.",
    ],
  },
  {
    period: "2014 — 18",
    org: "Zebra (Motorola Solutions)",
    role: "Software Test Engineer",
    finding:
      "Enterprise data-capture testing; co-invented a patented security method (US20180027208A1).",
    evidence: [
      "Functional, regression and integration testing for enterprise data-capture products.",
      "Contributed to test automation and co-invented a patented data-capture security method.",
    ],
  },
];

const matrix = [
  { area: "Languages", items: "Java · Python · TypeScript · JavaScript · SQL · Go · Rust" },
  {
    area: "Test automation",
    items: "Selenium · Playwright · Appium · TestNG · REST Assured · Cypress · JMeter · Gatling",
  },
  {
    area: "AI-assisted testing",
    items: "MCP servers · AI test generation · coding agents · Healenium · Applitools · Keploy · OCR validation",
  },
  {
    area: "CI/CD, cloud & observability",
    items: "GitHub Actions · Jenkins · Docker · Kubernetes · GCP · AWS · Datadog · Metabase",
  },
  {
    area: "Security & performance",
    items: "OWASP · Burp Suite · contract testing · Kafka · distributed-systems testing · coverage matrices",
  },
  { area: "Blockchain", items: "Solidity · smart contracts · Foundry · Ethereum · web3.js · Cairo" },
];

const specimens = [
  {
    name: "PooP Monsters",
    tag: "SPN-11",
    desc: "Gamified web3 lifestyle dapp — a gateway for Bio-DeSci projects and DAOs to host quests and studies.",
  },
  {
    name: "Regen Bazaar",
    tag: "SPN-12",
    desc: "Blockchain platform tokenizing real-world NGO impact; led smart-contract testing and Foundry CI.",
  },
  {
    name: "W3 Split",
    tag: "SPN-13",
    desc: "Web3 expense-splitting dApp; built and tested smart-contract and frontend flows.",
  },
  {
    name: "Spitfire",
    tag: "SPN-14",
    desc: "AI-assisted video editor on a custom MCP server — auto-clips long-form video into short-form reels.",
  },
];

const contacts = [
  { label: "EMAIL", value: "pratiksardar@gmail.com", href: "mailto:pratiksardar@gmail.com" },
  { label: "GITHUB", value: "pratiksardar", href: "https://github.com/pratiksardar" },
  { label: "LINKEDIN", value: "/in/pratiksardar", href: "https://linkedin.com/in/pratiksardar" },
  { label: "X / TWITTER", value: "@pratik_sardar", href: "https://x.com/pratik_sardar" },
  { label: "FARCASTER", value: "@0xpratik", href: "https://farcaster.com/0xpratik" },
];

function SectionHead({ no, title, note }: { no: string; title: string; note?: string }) {
  return (
    <header className="qc-sechead">
      <span className="qc-secno">SEC {no}</span>
      <h2>{title}</h2>
      {note && <span className="qc-secnote">{note}</span>}
    </header>
  );
}

export default function V2() {
  return (
    <div className={`qc ${stencil.variable} ${archivo.variable} ${plex.variable} ${caveat.variable}`}>
      <div className="qc-sheet">
        <div className="qc-formbar" role="presentation">
          <span>FORM QC-26 · QUALITY CONTROL DOSSIER</span>
          <span>SPECIMEN Nº 001 · REV 2026.07</span>
        </div>

        {/* ——— Certificate hero ——— */}
        <section className="qc-hero" aria-label="Certificate of inspection">
          <p className="qc-eyebrow">CERTIFICATE OF INSPECTION</p>
          <h1>
            Pratik
            <br />
            Sardar
          </h1>
          <p className="qc-role">Staff SDET · Quality Engineering Leader</p>
          <p className="qc-lede">
            Twelve years breaking software on purpose — across logistics, enterprise hardware and
            healthtech — so it never breaks in production.
          </p>

          <div className="qc-checkrun" aria-label="Inspection checklist">
            {checks.map((c, i) => (
              <div className="qc-check" style={{ animationDelay: `${0.4 + i * 0.45}s` }} key={c.id}>
                <span className="qc-checkid">{c.id}</span>
                <span className="qc-checklabel">{c.label}</span>
                <span className="qc-dots" aria-hidden="true" />
                <span className="qc-result">{c.result}</span>
              </div>
            ))}
          </div>

          <div className="qc-stamp" aria-label="Passed. Inspected by Pratik, number 001.">
            <span className="qc-stamp-top">passed</span>
            <span className="qc-stamp-mid">inspected by pratik</span>
            <span className="qc-stamp-btm">Nº 001</span>
          </div>
        </section>

        {/* ——— 1 · Summary of findings ——— */}
        <section>
          <SectionHead no="1" title="Summary of findings" />
          <p className="qc-prose">
            Specimen is a hands-on quality-engineering leader who architects and scales test
            automation for large-scale distributed systems. Owns end-to-end test strategy — coverage
            matrices through release sign-offs — and embeds a quality-first culture through CI/CD
            gates, performance and security testing, and mentorship. An early, hands-on adopter of
            AI-assisted testing: builds custom MCP servers and agent workflows that give coding
            agents full context and cut test-authoring time roughly in half.
          </p>
          <div className="qc-facts" role="list">
            <div role="listitem"><strong>12+</strong><span>years in test</span></div>
            <div role="listitem"><strong>2</strong><span>US patents granted</span></div>
            <div role="listitem"><strong>5</strong><span>orgs inspected</span></div>
            <div role="listitem"><strong>~50%</strong><span>faster authoring with AI</span></div>
          </div>
        </section>

        {/* ——— 2 · Inspection history ——— */}
        <section>
          <SectionHead no="2" title="Inspection history" note="most recent first" />
          <div className="qc-history">
            {history.map((h) => (
              <details className="qc-row" key={h.org}>
                <summary>
                  <span className="qc-period">{h.period}</span>
                  <span className="qc-org">
                    <strong>{h.org}</strong>
                    <em>{h.role}</em>
                  </span>
                  <span className="qc-finding">{h.finding}</span>
                  <span className="qc-expand" aria-hidden="true">
                    evidence +
                  </span>
                </summary>
                <ul>
                  {h.evidence.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>

        {/* ——— 3 · Capability matrix ——— */}
        <section>
          <SectionHead no="3" title="Capability matrix" note="coverage: full" />
          <div className="qc-matrix">
            {matrix.map((m) => (
              <div className="qc-cell" key={m.area}>
                <h3>
                  <span className="qc-tick" aria-hidden="true">✓</span>
                  {m.area}
                </h3>
                <p>{m.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ——— 4 · Unsupervised specimens ——— */}
        <section>
          <SectionHead no="4" title="Unsupervised specimens" note="after-hours experiments · web3 & AI" />
          <div className="qc-specimens">
            {specimens.map((s) => (
              <article className="qc-tag" key={s.name}>
                <span className="qc-tagno">{s.tag}</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <span className="qc-ministamp" aria-hidden="true">unsupervised</span>
              </article>
            ))}
          </div>
        </section>

        {/* ——— 5 · Granted claims ——— */}
        <section>
          <SectionHead no="5" title="Granted claims" note="US patents" />
          <ol className="qc-claims">
            <li>
              <span className="qc-claimdate">AUG 2018</span>
              <span>Method of securing a data-capture session of a portable data-capture device</span>
              <span className="qc-granted">GRANTED</span>
            </li>
            <li>
              <span className="qc-claimdate">AUG 2022</span>
              <span>Method to deduce post-active period for load</span>
              <span className="qc-granted">GRANTED</span>
            </li>
          </ol>
        </section>

        {/* ——— 6 · Addenda ——— */}
        <section>
          <SectionHead no="6" title="Addenda" />
          <ul className="qc-addenda">
            <li>
              <span>VOLUNTEERING</span> Director — The Phoenix Guild, 2024 → present
            </li>
            <li>
              <span>EDUCATION</span> B.E. Computer Science & Technology, BMS College of Engineering, 2009 – 13
            </li>
          </ul>
        </section>

        {/* ——— 7 · Release sign-off ——— */}
        <section className="qc-signoff">
          <SectionHead no="7" title="Release sign-off" />
          <p className="qc-prose">
            Specimen is approved for production environments. For inspections, audits, quality
            consulting or collaborations, open a channel below.
          </p>
          <ul className="qc-contacts">
            {contacts.map((c) => (
              <li key={c.label}>
                <span className="qc-contactlabel">{c.label}</span>
                <span className="qc-dots" aria-hidden="true" />
                <a href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
          <div className="qc-signature">
            <div className="qc-sigline">
              <span className="qc-sig">Pratik Sardar</span>
              <span className="qc-sigcaption">AUTHORIZED SIGNATORY</span>
            </div>
            <div className="qc-datebox">
              <span>SIGNED</span>
              <strong>2026 · BLR</strong>
            </div>
          </div>
        </section>

        <footer className="qc-footer">
          <span>FORM QC-26</span>
          <span>ERRORS &amp; OMISSIONS — FILE A BUG</span>
          <span>PRATIKSARDAR.GITHUB.IO</span>
        </footer>
      </div>
    </div>
  );
}
