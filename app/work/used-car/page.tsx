import { Body, SectionHeading, SmallLabel } from "@/components/typography";
import { Container, Section } from "@/components/layout";
import { CaseStudyHero } from "@/components/case-study-hero";
import { RichText, MetaLabel } from "@/components/content";

export default function UsedCarCaseStudyPage() {
  return (
    <main>
      <Section className="page-hero">
        <Container>
          <CaseStudyHero
            kicker="Case study"
            title="Used Car"
            summary="Placeholder exploration for a retail and trust-centered automotive experience that helps buyers feel informed, calm, and in control."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="case-study-layout">
            <div className="case-study-aside">
              <div className="info-panel">
                <MetaLabel>Role</MetaLabel>
                <p>Product designer</p>
              </div>
              <div className="info-panel">
                <MetaLabel>Context</MetaLabel>
                <p>Retail trust redesign</p>
              </div>
              <div className="info-panel">
                <MetaLabel>Timeline</MetaLabel>
                <p>2024</p>
              </div>
            </div>

            <RichText>
              <SmallLabel>Context</SmallLabel>
              <SectionHeading>Reducing uncertainty without removing emotion.</SectionHeading>
              <Body>
                The structure now supports narrative sequencing, strategic framing, and artefact-led
                storytelling — all while preserving a clean editorial rhythm that suits your vision.
              </Body>
              <Body>
                This is the right kind of foundation for a premium portfolio case study: calm, layered,
                and thoughtfully paced.
              </Body>
            </RichText>
          </div>
        </Container>
      </Section>
    </main>
  );
}
