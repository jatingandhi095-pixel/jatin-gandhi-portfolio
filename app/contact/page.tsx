import Link from "next/link";
import { Body, SectionHeading, SmallLabel } from "@/components/typography";
import { Container, Section } from "@/components/layout";
import { PageHeader } from "@/components/page-header";

export default function ContactPage() {
  return (
    <main>
      <Section className="page-hero">
        <Container>
          <PageHeader
            eyebrow="Contact"
            title="Let’s build something thoughtful."
            description="I’m open to product design roles, collaborations, and conversations around meaningful, human-centered digital experiences."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="contact-card">
            <SmallLabel>Email</SmallLabel>
            <SectionHeading>hello@jatingandhi.design</SectionHeading>
            <Body>
              For new opportunities, collaborations, or creative conversations, send a note and I’ll
              get back to you soon.
            </Body>
            <Link href="mailto:hello@jatingandhi.design" className="button button-primary">
              hello@jatingandhi.design
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
