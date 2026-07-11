import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./v4.css";

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--v4-font-sans" });
const jetMono = JetBrains_Mono({ subsets: ["latin"], variable: "--v4-font-mono" });

export const metadata: Metadata = {
  title: "Pratik Sardar, Staff SDET",
  description:
    "Staff SDET and quality engineering leader. 12+ years, 2 US patents, AI-assisted testing with custom MCP servers and agentic workflows.",
  // Prototype route: keep it out of the index so it never competes with the live pages.
  robots: { index: false, follow: false },
};

interface Stat {
  num: string;
  label: string;
}

interface Role {
  when: string;
  org: string;
  title: string;
  note?: string;
  bullets?: string[];
}

interface Capability {
  heading: string;
  body: string;
  tools: string;
  variant?: "ai" | "web3";
}

interface Patent {
  year: string;
  title: string;
  body: string;
  id?: string;
}

interface Project {
  name: string;
  desc: string;
  href: string;
  seed: string;
}

const stats: Stat[] = [
  { num: "12+", label: "years in quality engineering" },
  { num: "2", label: "US patents granted" },
  { num: "~50%", label: "test-authoring time cut with AI" },
  { num: "3", label: "industries: logistics, hardware, healthtech" },
];

const roles: Role[] = [
  {
    when: "2023 - now",
    org: "Loop Health",
    title: "Staff SDET / QA Engineering Manager",
    bullets: [
      "Built the company-wide automation platform: Java with Selenium, Appium, REST Assured and TestNG, plus TypeScript with Playwright.",
      "Pioneered AI test generation on custom MCP servers, cutting authoring time by about half.",
      "Shipped Tesseract-OCR hybrid validation for insurance documents and CI/CD quality gates on GCP under SOC 2.",
    ],
  },
  {
    when: "2021 - 2023",
    org: "Locus.sh",
    title: "SDET",
    note: "Benchmarked the route-optimization engine and hardened CI/CD with observability.",
  },
  {
    when: "2020 - 2021",
    org: "Zebra Technologies",
    title: "Senior Software Engineer in Test",
    note: "SmartPack performance work plus Kafka, UI and API automation.",
  },
  {
    when: "2018 - 2020",
    org: "CWT",
    title: "Senior Test Engineer",
    note: "System testing and observability for a global travel-repository platform.",
  },
  {
    when: "2014 - 2018",
    org: "Zebra / Motorola",
    title: "Software Test Engineer",
    note: "Tested data-capture products and co-invented patent US20180027208A1.",
  },
];

const capabilities: Capability[] = [
  {
    heading: "Test automation platforms",
    body: "End-to-end frameworks that whole engineering orgs adopt, from backend to API to UI.",
    tools: "Java, TypeScript, Python, Selenium, Playwright, Appium, TestNG, REST Assured, Cypress, JMeter, Gatling",
  },
  {
    heading: "AI-assisted testing",
    body: "Custom MCP servers and agentic workflows that write, heal and review tests.",
    tools: "MCP servers, coding agents, Healenium, Applitools, Keploy",
    variant: "ai",
  },
  {
    heading: "Infrastructure and CI/CD",
    body: "Quality gates wired into the delivery pipeline, with observability to back them.",
    tools: "GitHub Actions, Jenkins, Docker, Kubernetes, GCP, AWS, Datadog",
  },
  {
    heading: "Security and web3",
    body: "Security testing for regulated products and smart-contract quality on the side.",
    tools: "OWASP, Burp Suite, Solidity, Foundry, Ethereum, Cairo",
    variant: "web3",
  },
];

const patents: Patent[] = [
  {
    year: "2018",
    title: "Securing a data-capture session of a portable data-capture device",
    body: "Granted August 2018, invented while testing enterprise scanning hardware at Zebra.",
    id: "US20180027208A1",
  },
  {
    year: "2022",
    title: "Deduce post-active period for load",
    body: "Granted August 2022, born from logistics load-tracking work.",
  },
];

const projects: Project[] = [
  {
    name: "PooP Monsters",
    desc: "A gamified web3 Bio-DeSci dapp.",
    href: "https://github.com/pratiksardar",
    seed: "poop-monsters-game",
  },
  {
    name: "Regen Bazaar",
    desc: "Tokenizing NGO impact, with smart-contract testing and Foundry CI.",
    href: "https://github.com/pratiksardar",
    seed: "regen-bazaar-market",
  },
  {
    name: "W3 Split",
    desc: "A web3 expense splitter for groups.",
    href: "https://github.com/pratiksardar",
    seed: "w3-split-ledger",
  },
  {
    name: "Spitfire",
    desc: "An AI video editor running on a custom MCP server.",
    href: "https://github.com/pratiksardar",
    seed: "spitfire-video-editor",
  },
];

const socials: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/pratiksardar" },
  { label: "LinkedIn", href: "https://linkedin.com/in/pratiksardar" },
  { label: "X", href: "https://x.com/pratik_sardar" },
  { label: "Farcaster", href: "https://farcaster.com/0xpratik" },
];

export default function V4(): React.ReactElement {
  return (
    <div className={`v4 ${grotesk.variable} ${jetMono.variable}`}>
      <header className="v4-nav">
        <div className="v4-wrap v4-nav-inner">
          <Link href="/v4" className="v4-wordmark">
            Pratik
          </Link>
          <nav className="v4-nav-links" aria-label="Section navigation">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <Link href="/contact" className="v4-nav-cta">
              Get in touch
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="v4-hero">
          <div className="v4-wrap v4-hero-grid">
            <div>
              <p className="v4-eyebrow v4-rise">Pratik Sardar · Staff SDET</p>
              <h1 className="v4-rise v4-rise-2">I break software before your users can.</h1>
              <p className="v4-hero-sub v4-rise v4-rise-3">
                Staff SDET with 12+ years, two US patents, and an AI-assisted testing practice that
                cut authoring time in half.
              </p>
              <div className="v4-cta-row v4-rise v4-rise-4">
                <Link href="/contact" className="v4-btn v4-btn-primary">
                  Get in touch
                </Link>
                <a
                  href="https://github.com/pratiksardar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v4-btn v4-btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="v4-portrait v4-rise v4-rise-5">
              <Image
                src="https://iili.io/3tPQ3S1.md.jpg"
                alt="Portrait of Pratik Sardar"
                width={640}
                height={800}
                priority
                unoptimized
              />
            </div>
          </div>
        </section>

        <section className="v4-stats" aria-label="Career highlights">
          <div className="v4-wrap v4-stats-row">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="v4-stat-num">{s.num}</div>
                <div className="v4-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="v4-section" id="experience">
          <div className="v4-wrap">
            <h2 className="v4-h2">Experience</h2>
            <p className="v4-section-intro">
              Twelve years of shipping quality across logistics, enterprise hardware and healthtech.
            </p>
            {roles.map((r) => (
              <article className="v4-role" key={r.org + r.when}>
                <div className="v4-role-when v4-mono">{r.when}</div>
                <div>
                  <h3>{r.org}</h3>
                  <p className="v4-role-title">{r.title}</p>
                  {r.bullets ? (
                    <ul>
                      {r.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="v4-role-note">{r.note}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="v4-section" id="capabilities">
          <div className="v4-wrap">
            <h2 className="v4-h2">What I bring</h2>
            <p className="v4-section-intro">
              Automation depth, AI leverage and the infrastructure to make both stick.
            </p>
            <div className="v4-bento">
              {capabilities.map((c) => (
                <div
                  key={c.heading}
                  className={`v4-bento-cell${c.variant === "ai" ? " v4-cell-ai" : ""}${c.variant === "web3" ? " v4-cell-web3" : ""}`}
                >
                  <h3>{c.heading}</h3>
                  <p>{c.body}</p>
                  <div className="v4-bento-tools">{c.tools}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="v4-section" id="patents">
          <div className="v4-wrap">
            <h2 className="v4-h2">Patents</h2>
            <p className="v4-section-intro">
              Two granted US patents, both invented while doing the day job.
            </p>
            <div className="v4-patents">
              {patents.map((p) => (
                <article className="v4-patent" key={p.year}>
                  <div className="v4-patent-year">{p.year}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  {p.id ? <span className="v4-patent-id">{p.id}</span> : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="v4-section" id="projects">
          <div className="v4-wrap">
            <h2 className="v4-h2">Side projects</h2>
            <p className="v4-section-intro">
              Web3 and AI experiments built nights and weekends, tested like production.
            </p>
            <div className="v4-projects">
              {projects.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v4-project"
                >
                  <div className="v4-project-img">
                    {/* TODO: replace seeded placeholder with a real screenshot of the project */}
                    <Image
                      src={`https://picsum.photos/seed/${p.seed}/960/540`}
                      alt={`${p.name} preview`}
                      width={960}
                      height={540}
                      unoptimized
                    />
                  </div>
                  <div className="v4-project-body">
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="v4-contact" id="contact">
        <div className="v4-wrap">
          <h2>Get in touch</h2>
          <p className="v4-contact-sub">
            Hiring for quality engineering leadership, or building something in AI or web3 that
            needs to not break? Say hello.
          </p>
          <a href="mailto:pratiksardar@gmail.com" className="v4-email">
            pratiksardar@gmail.com
          </a>
          <div className="v4-social-row">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
          <div className="v4-colophon">
            <span>B.E. Computer Science, BMS College of Engineering. Director, The Phoenix Guild since 2024.</span>
            <span>
              Redesign prototype. <Link href="/">Current site</Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
