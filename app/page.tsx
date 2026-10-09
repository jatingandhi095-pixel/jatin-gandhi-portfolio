"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Body, Display, Eyebrow, SectionHeading, SmallLabel } from "@/components/typography";
import { Container, Section } from "@/components/layout";
import { PortfolioCard } from "@/components/portfolio-card";
import { featuredWork } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <main>
      <Section className="hero-section">
        <Container>
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
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
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <PortfolioCard
                  eyebrow={item.category}
                  title={item.title}
                  summary={item.summary}
                  href={item.href}
                />
              </motion.div>
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
