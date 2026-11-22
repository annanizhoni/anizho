
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function SCMPPage() {
  return (
    <Section>
      <SectionHeading
        title="Summit County Mural Project"
        description="Community, creativity, and connection through public art."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_2fr]">
        {/* Image placeholder */}
        <div className="aspect-[4/5] bg-zinc-100" />

        {/* Description */}
        <div className="max-w-2xl space-y-6 text-lg leading-8 text-zinc-600">
          <p>
            Summit County Mural Project is a collaborative public art
            initiative bringing communities together through creativity,
            storytelling, and shared values.
          </p>

          <p>
            Founded through Leadership Park City Class 32, the project
            celebrates the people, organizations, and causes that make
            Summit County special through community-created murals.
          </p>

          <p>
            Through partnerships with local organizations, artists, and
            volunteers, the project creates meaningful public artwork
            that reflects the spirit of Summit County.
          </p>

          <div className="pt-4">
            <a
              href="https://summitcountymuralproject.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-zinc-900 underline underline-offset-4 transition-colors hover:text-taupe-400"
            >
              Visit the Summit County Mural Project website →
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
