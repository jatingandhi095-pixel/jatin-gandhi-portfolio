import { Body, Display, Eyebrow } from "@/components/typography";

type CaseStudyHeroProps = {
  kicker: string;
  title: string;
  summary: string;
};

export function CaseStudyHero({ kicker, title, summary }: CaseStudyHeroProps) {
  return (
    <header className="case-study-hero">
      <Eyebrow>{kicker}</Eyebrow>
      <Display>{title}</Display>
      <Body>{summary}</Body>
    </header>
  );
}
