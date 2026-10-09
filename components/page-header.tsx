import { Body, Display, Eyebrow } from "@/components/typography";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="page-header">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Display>{title}</Display>
      {description ? <Body>{description}</Body> : null}
    </header>
  );
}
