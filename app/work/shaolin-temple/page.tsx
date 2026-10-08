import { Body, Display, Eyebrow, SectionHeading, SmallLabel } from "@/components/typography";
import { Container, Section } from "@/components/layout";

export default function ShaolinTempleCaseStudyPage() {
  return (
    <main>
      <Section className="page-hero">
        <Container>
          <Eyebrow>Case study</Eyebrow>
          <Display>Shaolin Temple</Display>
          <Body>
            Placeholder foundation for a heritage-forward digital experience that balances cultural
            storytelling with contemporary design language.
          </Body>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="story-block">
            <SmallLabel>Context</SmallLabel>
            <SectionHeading>Creating a digital ritual for cultural narrative.</SectionHeading>
            <Body>
              This page is reserved for the full product narrative, visual system, and immersive
              storytelling of the Shaolin Temple project. It will later become a richer,
              art-directed case study within the portfolio.
            </Body>
          </div>
        </Container>
      </Section>
    </main>
  );
}
