import Link from "next/link";
import styles from "./page.module.css";

const destinations = [
  { id: "wreck", label: "The Wreck", href: "/work/beside-case-study" },
  { id: "coral", label: "The Coral Garden", href: "/about" },
  { id: "cove", label: "Hidden Cove", href: "/experiments" },
  { id: "surface", label: "The Surface", href: "/contact" },
];

const projects = [
  {
    title: "Beside",
    type: "Pregnancy-to-parenthood companion app",
    description:
      "A care-centered digital product that helps families navigate a deeply emotional transition with clarity and confidence.",
    href: "/work/beside-case-study",
    accent: "Cohort",
  },
  {
    title: "Motif",
    type: "Used-car risk detection product",
    description:
      "A trust-first experience that makes complex risk information easier to understand and act on.",
    href: "/work/used-car",
    accent: "Trust",
  },
  {
    title: "Shaolin Temple India",
    type: "Cultural digital experience",
    description:
      "A contemplative, editorial experience that invites people to engage with heritage in a contemporary way.",
    href: "/work/shaolin-temple",
    accent: "Heritage",
  },
];

const interests = [
  "Product strategy",
  "Research synthesis",
  "Interaction systems",
  "Service design",
  "Design storytelling",
  "Human-centered UX",
];

const experiments = [
  { title: "Interaction studies", detail: "Micro-interactions, pacing, and reassuring feedback patterns." },
  { title: "Motion studies", detail: "Quiet transitions that support clarity without distraction." },
  { title: "Visual explorations", detail: "Ocean-inspired textures, typography, and editorial systems." },
];

export default function PrototypeIntoTheUnknownPage() {
  return (
    <main className={styles.page}>
      <div className={styles.ocean} aria-hidden="true">
        <div className={styles.lightBeam} />
        <div className={styles.lightBeamSecondary} />
        <div className={styles.bubbleField}>
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} style={{ left: `${(index * 11) % 100}%`, animationDelay: `${index * 0.7}s` }} />
          ))}
        </div>
        <div className={styles.diver} />
        <div className={styles.coral} />
      </div>

      <div className={styles.shell}>
        <header className={styles.topbar}>
          <div className={styles.brand}>Jatin Gandhi</div>
          <nav className={styles.nav} aria-label="Main navigation">
            <Link href="#work">Work</Link>
            <Link href="#about">About</Link>
            <Link href="#experiments">Experiments</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Product / UI / UX designer</p>
            <h1 className={styles.title}>Jatin Gandhi</h1>
            <p className={styles.intro}>
              I design calm, meaningful digital experiences for complex human moments — from
              healthcare and mobility to cultural storytelling and trust-driven products.
            </p>
            <div className={styles.actions}>
              <Link href="#work" className={styles.primaryAction}>
                Begin the dive
              </Link>
              <Link href="#about" className={styles.secondaryAction}>
                About me
              </Link>
            </div>
          </div>

          <aside className={styles.heroPanel} aria-label="Ocean destinations">
            <p>Depth markers</p>
            <div className={styles.destinationList}>
              {destinations.map((destination) => (
                <Link key={destination.id} href={destination.href} className={styles.destinationPill}>
                  {destination.label}
                </Link>
              ))}
            </div>
          </aside>
        </section>

        <section className={styles.routeMap} aria-label="Dive map">
          {destinations.map((destination) => (
            <Link key={destination.id} href={destination.href} className={styles.routeItem}>
              {destination.label}
            </Link>
          ))}
        </section>

        <section id="work" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Selected work</p>
            <h2>Product stories shaped by trust, emotion, and clarity.</h2>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <Link key={project.title} href={project.href} className={styles.projectCard}>
                <div className={styles.cardVisual} aria-hidden="true">
                  <span>{project.accent}</span>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.projectType}>{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className={styles.projectLink}>Read case study</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.aboutBlock}>
            <div className={styles.aboutIntro}>
              <p className={styles.sectionLabel}>About</p>
              <h2>Designing calmer, more human systems.</h2>
            </div>

            <div className={styles.aboutContent}>
              <div className={styles.portraitPanel} aria-hidden="true">
                <div className={styles.portraitGlow} />
              </div>

              <div className={styles.aboutCopy}>
                <p>
                  I’m a product and UI/UX designer focused on the moments where clarity matters most:
                  when people are making difficult decisions, navigating uncertainty, or trying to feel
                  supported in an unfamiliar process.
                </p>
                <p>
                  My work blends design strategy, research, interaction thinking, and editorial visual
                  language. I care about experience quality as much as product outcomes — creating
                  systems that feel trustworthy, considered, and emotionally grounded.
                </p>

                <div className={styles.skillList}>
                  {interests.map((interest) => (
                    <span key={interest}>{interest}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experiments" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Experiments</p>
            <h2>Curiosity, motion, and visual exploration.</h2>
          </div>

          <div className={styles.experimentGrid}>
            {experiments.map((item) => (
              <article key={item.title} className={styles.experimentCard}>
                <div className={styles.experimentVisual} aria-hidden="true" />
                <div className={styles.experimentBody}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <div className={styles.contactPanel}>
            <p className={styles.sectionLabel}>Contact</p>
            <h2>Let’s build something thoughtful.</h2>
            <p>
              I’m open to product design roles, collaborations, and creative conversations around
              meaningful, human-centered digital experiences.
            </p>
            <div className={styles.contactLinks}>
              <Link href="mailto:hello@jatingandhi.design">hello@jatingandhi.design</Link>
              <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </Link>
              <Link href="/work">View work</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
