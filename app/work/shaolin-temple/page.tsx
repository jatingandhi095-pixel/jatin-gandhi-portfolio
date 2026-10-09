import { Body, SectionHeading, SmallLabel } from "@/components/typography";
import { Container, Section } from "@/components/layout";
import { CaseStudyHero } from "@/components/case-study-hero";
import { RichText, MetaLabel } from "@/components/content";

export default function ShaolinTempleCaseStudyPage() {
  return (
    <main>
      <Section className="page-hero">
        <Container>
          <CaseStudyHero
            kicker="Case study"
            title="Shaolin Temple"
            summary="Placeholder foundation for a heritage-forward digital experience that balances cultural storytelling with contemporary design language."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="case-study-layout">
            <div className="case-study-aside">
              <div className="info-panel">
                <MetaLabel>Role</MetaLabel>
                <p>Design & experience narrative</p>
              </div>
              <div className="info-panel">
                <MetaLabel>Context</MetaLabel>
                <p>Cultural digital experience</p>
              </div>
              <div className="info-panel">
                <MetaLabel>Timeline</MetaLabel>
                <p>2024</p>
              </div>
            </div>

            <RichText>
              <SmallLabel>Context</SmallLabel>
              <SectionHeading>Creating a digital ritual for cultural narrative.</SectionHeading>
              <Body>
                This case-study frame is optimized for future storytelling: concise strategic notes,
                refined hierarchy, and a richer editorial rhythm that allows the project story to lead.
              </Body>
              <Body>
                The current shell is intentionally simple, but the structure is already aligned with the
                premium portfolio direction you described.
              </Body>
            </RichText>
          </div>
        </Container>
      </Section>
    </main>
  );
}
