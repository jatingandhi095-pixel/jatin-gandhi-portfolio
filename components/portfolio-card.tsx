import Link from "next/link";
import type { ReactNode } from "react";
import { SmallLabel } from "@/components/typography";

type PortfolioCardProps = {
  eyebrow: string;
  title: string;
  summary: string;
  href: string;
  imageClassName?: string;
  children?: ReactNode;
};

export function PortfolioCard({
  eyebrow,
  title,
  summary,
  href,
  imageClassName,
  children,
}: PortfolioCardProps) {
  return (
    <article className="portfolio-card">
      <div className={`portfolio-card__image ${imageClassName ?? ""}`.trim()} aria-hidden="true" />

      <div className="portfolio-card__content">
        <SmallLabel>{eyebrow}</SmallLabel>
        <h3>{title}</h3>
        <p>{summary}</p>

        {children ? <div className="portfolio-card__meta">{children}</div> : null}

        <Link href={href} className="card-link">
          Read case study →
        </Link>
      </div>
    </article>
  );
}
