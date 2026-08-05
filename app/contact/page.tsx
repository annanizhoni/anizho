import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Contact"
        title="Let's create something meaningful together."
      />

      <div className="mt-16 max-w-2xl space-y-6 text-lg leading-8 text-zinc-700">
        <p>
          Whether you're planning a community mural, public art project,
          commercial commission, or something entirely unique, I'd love to
          hear about it.
        </p>

        <div className="flex items-center gap-3">
  <Mail className="h-5 w-5 text-zinc-500" />

  <a
    href={`mailto:${site.email}`}
    className="transition-opacity hover:opacity-60"
  >
    {site.email}
  </a>
</div>
      </div>
    </Section>
  );
}