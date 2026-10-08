import { Body, Display, Eyebrow, SectionHeading, SmallLabel } from "@/components/typography";
import { Container, Section } from "@/components/layout";

export default function ExperimentsPage() {
  return (
    <main>
      <Section className="page-hero">
        <Container>
          <Eyebrow>Experiments</Eyebrow>
          <Display>Curiosity in motion.</Display>
          <Body>
            A place for sketches, prototypes, observations, and exploratory work that does not yet
            belong in a case-study format.
          </Body>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mini-grid single-column">
            <div className="mini-card">
              <SmallLabel>01</SmallLabel>
              <h3>Interaction studies</h3>
              <p>Testing pacing, gestures, and micro-confirmation moments in interfaces.</p>
            </div>
            <div className="mini-card">
              <SmallLabel>02</SmallLabel>
              <h3>Typographic explorations</h3>
              <p>Exploring editorial rhythm, hierarchy, and expressive voice within digital systems.</p>
            </div>
            <div className="mini-card">
              <SmallLabel>03</SmallLabel>
              <h3>Material experiments</h3>
              <p>Probing tactile references, textures, and sensorial language for digital products.</p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
