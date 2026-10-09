import { Body, SectionHeading, SmallLabel } from "@/components/typography";
import { Container, Section } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { CaseStudyHero } from "@/components/case-study-hero";
import { RichText, MetaLabel } from "@/components/content";

export default function BesideCaseStudyPage() {
  return (
    <main>
      <Section className="page-hero">
        <Container>
          <CaseStudyHero
            kicker="Case study"
            title="Beside"
            summary="Placeholder narrative for the Beside product experience — a service ecosystem for clarity, emotional support, and more confident decisions."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="case-study-layout">
            <div className="case-study-aside">
              <div className="info-panel">
                <MetaLabel>Role</MetaLabel>
                <p>Product design lead</p>
              </div>
              <div className="info-panel">
                <MetaLabel>Context</MetaLabel>
                <p>Mobility service ecosystem</p>
              </div>
              <div className="info-panel">
                <MetaLabel>Timeline</MetaLabel>
                <p>2024</p>
              </div>
            </div>

            <RichText>
              <SmallLabel>Context</SmallLabel>
              <SectionHeading>Designing confidence in a vulnerable journey.</SectionHeading>
              <Body>
                This page has grown into a more structured case-study shell. It is ready for strategic
                framing, artifact sequencing, narrative writing, and a more premium editorial rhythm.
              </Body>
              <Body>
                The layout keeps the project story flexible while still feeling intentional, calm, and
                premium — without committing to the final visual design yet.
              </Body>
            </RichText>
          </div>
        </Container>
      </Section>
    </main>
  );
}
