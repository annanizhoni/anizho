
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { commissionServicesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { CommissionService } from "@/types";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default async function CommissionsPage() {
  const services: CommissionService[] = await client.fetch(
    commissionServicesQuery
  );

  return (
    <Section>
      <SectionHeading
        title="Commissions"
        description="Custom artwork created in collaboration with you."
      />

      <div className="mt-8 max-w-2xl text-zinc-600 leading-7">
        <p>
          From original paintings and beadwork to murals and hand-painted
          signs, I welcome opportunities to create artwork tailored to
          your ideas, space, and vision.
        </p>
      </div>

      {services.length > 0 ? (
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service._id}
              href={`/commissions/${service.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
                {service.coverImage?.asset?.url && (
                  <Image
                    src={urlFor(service.coverImage).width(900).url()}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                )}
              </div>

              <div className="mt-5 space-y-2">
                <h2 className="text-xl font-light tracking-tight transition-colors duration-200 group-hover:text-taupe-500">
                  {service.title}
                </h2>

                {service.shortDescription && (
                  <p className="text-sm leading-6 text-zinc-500">
                    {service.shortDescription}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-16 border-t border-zinc-200 pt-8">
          <p className="text-zinc-500">
            Commission information is coming soon.
          </p>
        </div>
      )}

      <div className="mt-24 border-t border-zinc-200 pt-12">
        <h2 className="text-2xl font-light tracking-tight">
          Have something else in mind?
        </h2>
        <p className="mt-3 max-w-xl text-zinc-600 leading-7">
          If you have an idea for a project that doesn't fit into these
          categories, I'd love to hear about it.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block text-sm underline underline-offset-4 transition-colors hover:text-taupe-500"
        >
          Get in touch
        </Link>
      </div>
    </Section>
  );
}
