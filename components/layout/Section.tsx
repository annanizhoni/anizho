import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-24 md:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}