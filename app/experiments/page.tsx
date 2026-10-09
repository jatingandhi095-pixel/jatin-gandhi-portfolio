import { Body, SectionHeading, SmallLabel } from "@/components/typography";
import { Container, Section } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { experimentEntries } from "@/data/portfolio";

export default function ExperimentsPage() {
  return (
    <main>
      <Section className="page-hero">
        <Container>
          <PageHeader
            eyebrow="Experiments"
            title="Curiosity in motion."
            description="A place for sketches, prototypes, observations, and exploratory work that does not yet belong in a case-study format."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mini-grid single-column">
            {experimentEntries.map((entry) => (
              <div key={entry.number} className="mini-card">
                <SmallLabel>{entry.number}</SmallLabel>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
