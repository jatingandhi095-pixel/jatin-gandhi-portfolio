import { Body, SectionHeading, SmallLabel } from "@/components/typography";
import { Container, Section } from "@/components/layout";
import { PageHeader } from "@/components/page-header";

export default function AboutPage() {
  return (
    <main>
      <Section className="page-hero">
        <Container>
          <PageHeader
            eyebrow="About"
            title="Designing with care, clarity, and detail."
            description="I am Jatin Gandhi, a young product designer focused on creating meaningful systems, experiences, and narratives that feel considered from the first glance to the final interaction."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="story-block">
            <SmallLabel>Approach</SmallLabel>
            <SectionHeading>Thoughtful design grows from observation, empathy, and context.</SectionHeading>
            <Body>
              My work is grounded in research, strategic thinking, and editorial visual language.
              I care about how a product feels in the hands of real people — especially during the
              moments where trust, emotion, and uncertainty are most present.
            </Body>
          </div>
        </Container>
      </Section>
    </main>
  );
}
