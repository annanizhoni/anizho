
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { workCategoryImagesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface CategoryImages {
  murals?: { image?: any };
  signsWindows?: { image?: any };
  fineArt?: { image?: any };
  beadwork?: { image?: any };
}

const categories = [
  {
    title: "Murals",
    description: "Community, commercial, and public art",
    href: "/work/murals",
    key: "murals",
  },
  {
    title: "Signs & Windows",
    description: "Hand-painted signs, lettering, and windows",
    href: "/work/signs-windows",
    key: "signsWindows",
  },
  {
    title: "Fine Art",
    description: "Paintings, drawings, and mixed media",
    href: "/work/fine-art",
    key: "fineArt",
  },
  {
    title: "Beadwork",
    description: "Beaded artwork and objects",
    href: "/work/beadwork",
    key: "beadwork",
  },
] as const;

export default async function WorkPage() {
  const images = await client.fetch<CategoryImages>(
    workCategoryImagesQuery
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-16">
        <h1 className="text-4xl font-light tracking-tight md:text-6xl">
          Work
        </h1>
        <p className="mt-4 text-zinc-500">
          A collection of artwork, murals, and creative projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
        {categories.map((category) => {
          const image = images[category.key]?.image;

          return (
            <Link
              key={category.href}
              href={category.href}
              className="group block"
            >
              <div className="aspect-[5/3] overflow-hidden bg-zinc-100">
                {image && (
                  <img
                    src={urlFor(image).width(1200).auto("format").url()}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                )}
              </div>

              <div className="mt-5 space-y-2">
                <h2 className="text-2xl font-light tracking-tight">
                  {category.title}
                </h2>
                <p className="text-sm text-zinc-500">
                  {category.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}