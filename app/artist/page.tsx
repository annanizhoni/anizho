
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ArtistPage() {
  return (
    <Section>
      <SectionHeading
        title="About the Artist"
        description="Creating artwork rooted in community, place, and healing."
      />

      <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_2fr]">
        <div className="aspect-[4/5] bg-zinc-200" />

        <div className="max-w-2xl space-y-6 text-lg leading-8 text-zinc-700">
          <p>
            I create murals and public artwork that celebrate the people,
            landscapes, and stories that make each place unique.
          </p>

          <p>
            My work brings together art, collaboration, and storytelling to
            create spaces that reflect the communities they belong to.
          </p>

          <p>
            Whether working with local volunteers, nonprofit organizations,
            municipalities, or private clients, I believe public art should
            inspire connection and leave a lasting sense of place.
          </p>
        </div>
      </div>
    </Section>
  );
}
