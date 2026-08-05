import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { press } from "@/content/press";

export default function PressPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Press"
        title="Media & Interviews"
        description="A selection of media coverage and interviews."
      />

      <div className="mt-16 space-y-8">
        {press.map((article) => (
          <article
            key={article.title}
            className="border-b border-zinc-200 pb-8"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              {article.publication}
            </p>

            <h2 className="mt-2 text-2xl font-light">
              {article.title}
            </h2>

            <p className="mt-2 text-zinc-500">
              {article.date}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}