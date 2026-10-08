import Link from "next/link";
import {
  Body,
  Display,
  Eyebrow,
  SectionHeading,
  SmallLabel,
} from "@/components/typography";
import { Container, Section } from "@/components/layout";

const caseStudies = [
  {
    title: "Beside case study",
    href: "/work/beside-case-study",
    summary:
      "A service ecosystem designed to reduce fear and restore confidence during a stressful transition.",
  },
  {
    title: "Used Car case study",
    href: "/work/used-car",
    summary:
      "Reframing trust in a retail journey shaped by uncertainty, negotiation, and emotional risk.",
  },
  {
    title: "Shaolin Temple case study",
    href: "/work/shaolin-temple",
    summary:
      "A digital experience that frames heritage with clarity, warmth, and a contemporary editorial rhythm.",
  },
];

export default function WorkPage() {
  return (
    <main>
      <Section className="page-hero">
        <Container>
          <Eyebrow>Selected work</Eyebrow>
          <Display>Work</Display>
          <Body>
            A curation of product design work exploring trust, comfort, ritual, and systems that
            deserve a more human point of view.
          </Body>
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
