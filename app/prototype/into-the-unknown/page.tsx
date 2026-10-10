import Link from "next/link";
import styles from "./page.module.css";

const projects = [
  {
    title: "Beside",
    type: "Pregnancy-to-parenthood companion app",
    description:
      "A care-centered digital product that helps parents navigate a deeply emotional transition with clarity, confidence, and support.",
    href: "/work/beside-case-study",
    accent: "Cohort",
  },
  {
    title: "Motif",
    type: "Used-car risk detection product",
    description:
      "A trust-first experience designed to reduce uncertainty by making risk signals clearer, more transparent, and easier to act on.",
    href: "/work/used-car",
    accent: "Trust",
  },
  {
    title: "Shaolin Temple India",
    type: "Cultural digital experience",
    description:
      "A thoughtful, editorial digital experience shaped to invite curiosity, reflection, and deeper engagement with heritage.",
    href: "/work/shaolin-temple",
    accent: "Heritage",
  },
];

const skills = [
  "UX strategy",
  "Interaction design",
  "Design systems",
  "Research synthesis",
  "Product thinking",
  "Design storytelling",
];

export default function PrototypeIntoTheUnknownPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.topbar}>
          <div className={styles.brand}>Jatin Gandhi</div>
          <nav className={styles.nav} aria-label="Main navigation">
            <Link href="#work">Work</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Product / UI / UX designer</p>
              <h1 className={styles.title}>Jatin Gandhi</h1>
              <p className={styles.intro}>
                I design thoughtful digital experiences that help people navigate complex decisions with
                more clarity, more confidence, and a stronger sense of trust.
              </p>
              <div className={styles.actions}>
                <Link href="#work" className={styles.primaryAction}>
                  View work
                </Link>
                <Link href="#about" className={styles.secondaryAction}>
                  About me
                </Link>
              </div>
            </div>

            <aside className={styles.heroPanel} aria-label="Design focus">
              <p>Focus</p>
              <ul>
                <li>Human-centered product design</li>
                <li>Research-led interaction</li>
                <li>Editorial systems and storytelling</li>
              </ul>
            </aside>
          </div>

          <div className={styles.metaRow}>
            <span>Designing for clarity</span>
            <span>Research-led systems</span>
            <span>Thoughtful product experiences</span>
          </div>
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
                  I’m a product and UI/UX designer interested in the spaces where people feel the
                  most uncertainty: healthcare decisions, financial complexity, and experiences that
                  need to feel both useful and emotionally safe.
                </p>
                <p>
                  My work blends research, systems thinking, and editorial clarity. I care about how
                  a product feels as much as what it does — and I aim for experiences that invite
                  confidence instead of friction.
                </p>

                <div className={styles.skillList}>
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <div className={styles.contactPanel}>
            <p className={styles.sectionLabel}>Contact</p>
            <h2>Let’s build something thoughtful.</h2>
            <p>
              I’m open to product design roles, collaborations, and conversations around meaningful,
              human-centered digital experiences.
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
