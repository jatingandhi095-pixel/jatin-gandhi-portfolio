import { Body, Display, Eyebrow, SectionHeading, SmallLabel } from "@/components/typography";
import { Container, Section } from "@/components/layout";

export default function UsedCarCaseStudyPage() {
  return (
    <main>
      <Section className="page-hero">
        <Container>
          <Eyebrow>Case study</Eyebrow>
          <Display>Used Car</Display>
          <Body>
            Placeholder exploration for a retail and trust-centered automotive experience that helps
            buyers feel informed, calm, and in control.
          </Body>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="story-block">
            <SmallLabel>Context</SmallLabel>
            <SectionHeading>Reducing uncertainty without removing emotion.</SectionHeading>
            <Body>
              This case study placeholder identifies the design challenge, strategic opportunity,
              and future narrative arc. The final version will include process, decision-making,
              and polished case-study composition.
            </Body>
          </div>
        </Container>
      </Section>
    </main>
  );
}
