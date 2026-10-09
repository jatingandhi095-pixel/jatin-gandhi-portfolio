import Link from "next/link";
import { Body, Display, Eyebrow, SectionHeading, SmallLabel } from "@/components/typography";
import { Container, Section } from "@/components/layout";
import { motion } from "framer-motion";

const featuredWork = [
  {
    title: "Beside",
    category: "Service ecosystem",
    summary:
      "A care-centered mobility platform that brings clarity to a fragile, emotional customer journey.",
    href: "/work/beside-case-study",
  },
  {
    title: "Used Car",
    category: "Retail experience",
    summary:
      "A more transparent way to buy a used car by reducing uncertainty and restoring trust.",
    href: "/work/used-car",
  },
  {
    title: "Shaolin Temple",
    category: "Cultural digital experience",
    summary:
      "A regenerative storytelling experience that invites people to engage with heritage in a contemporary way.",
    href: "/work/shaolin-temple",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <main>
      <Section className="hero-section">
        <Container>
          <motion.div className="hero-copy" initial="hidden" animate="show" variants={fadeUp}>
            <Eyebrow>Product designer / researcher / storyteller</Eyebrow>
            <Display>
              Designing calmer,
              <br />
              more human systems.
            </Display>
            <Body className="hero-body">
              I craft thoughtful digital experiences for products, services, and brands that need a
              clearer point of view — rooted in research, visual clarity, and human detail.
            </Body>
            <div className="cta-row">
              <Link href="/work" className="button button-primary">
                View work
              </Link>
              <Link href="/about" className="button button-secondary">
                About me
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="section-headline">
            <SmallLabel>Selected work</SmallLabel>
            <SectionHeading>Thoughtful product design for complex human moments.</SectionHeading>
          </div>

          <div className="feature-grid">
            {featuredWork.map((item) => (
              <motion.article
                key={item.title}
                className="feature-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
              >
                <div className="card-image" aria-hidden="true" />
                <div className="card-copy">
                  <SmallLabel>{item.category}</SmallLabel>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <Link href={item.href}>Read case study →</Link>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="editorial-block">
        <Container>
          <div className="split-layout">
            <div>
              <SmallLabel>Approach</SmallLabel>
              <SectionHeading>Research-led design with a strong editorial eye.</SectionHeading>
            </div>
            <div>
              <Body>
                My work sits at the intersection of product thinking and emotional clarity —
                blending strategic rigor with visual curation, storytelling, and well-judged
                interaction design.
              </Body>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mini-grid">
            <div className="mini-card fill-accent">
              <SmallLabel>Practice</SmallLabel>
              <h3>Product strategy</h3>
              <p>Defining meaningful direction within complex systems.</p>
            </div>
            <div className="mini-card">
              <SmallLabel>Research</SmallLabel>
              <h3>Human insight</h3>
              <p>Listening closely to friction, behavior, and emotional context.</p>
            </div>
            <div className="mini-card">
              <SmallLabel>Design</SmallLabel>
              <h3>Interaction systems</h3>
              <p>Shaping experiences that feel intuitive, durable, and expressive.</p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
