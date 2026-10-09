import type { ReactNode } from "react";

export function Grid({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`grid ${className}`.trim()}>{children}</div>;
}

export function Split({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`split ${className}`.trim()}>{children}</div>;
}

export function Stack({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`stack ${className}`.trim()}>{children}</div>;
}
