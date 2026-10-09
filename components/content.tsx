import type { ReactNode } from "react";

export function RichText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rich-text ${className}`.trim()}>{children}</div>;
}

export function MetaLabel({ children }: { children: ReactNode }) {
  return <span className="meta-label">{children}</span>;
}
