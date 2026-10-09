import Link from "next/link";
import { Body, SectionHeading, SmallLabel } from "@/components/typography";
import { Container, Section } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { caseStudies } from "@/data/portfolio";

export default function WorkPage() {
  return (
    <main>
      <Section className="page-hero">
        <Container>
          <PageHeader
            eyebrow="Selected work"
            title="Work"
            description="A curation of product design work exploring trust, comfort, ritual, and systems that deserve a more human point of view."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="stack-list">
            {caseStudies.map((item) => (
              <Link key={item.title} href={item.href} className="stack-item">
                <div className="stack-image" aria-hidden="true" />
                <div className="stack-copy">
                  <SmallLabel>Case study</SmallLabel>
                  <SectionHeading>{item.title}</SectionHeading>
                  <Body>{item.summary}</Body>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
