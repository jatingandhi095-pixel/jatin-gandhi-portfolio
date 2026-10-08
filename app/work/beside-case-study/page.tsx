import { Body, Display, Eyebrow, SectionHeading, SmallLabel } from "@/components/typography";
import { Container, Section } from "@/components/layout";

export default function BesideCaseStudyPage() {
  return (
    <main>
      <Section className="page-hero">
        <Container>
          <Eyebrow>Case study</Eyebrow>
          <Display>Beside</Display>
          <Body>
            Placeholder narrative for the Beside product experience — a service ecosystem for
            clarity, emotional support, and more confident decisions.
          </Body>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="story-block">
            <SmallLabel>Context</SmallLabel>
            <SectionHeading>Designing confidence in a vulnerable journey.</SectionHeading>
            <Body>
              This page is intentionally reserved for the detailed narrative and artifact archive
              that will later unfold for this project. The foundation is in place, and the final
              design story will be expanded as the portfolio evolves.
            </Body>
          </div>
        </Container>
      </Section>
    </main>
  );
}
