import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SmallLabel({ children }: { children: ReactNode }) {
  return <span className="small-label">{children}</span>;
}

export function Display({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h1 className={`display ${className}`.trim()}>{children}</h1>;
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h2 className={`section-heading ${className}`.trim()}>{children}</h2>;
}

export function Body({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`body-copy ${className}`.trim()}>{children}</p>;
}
