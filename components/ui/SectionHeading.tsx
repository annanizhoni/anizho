interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">

      {eyebrow && (
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-light tracking-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-zinc-600">
          {description}
        </p>
      )}

    </div>
  );
}