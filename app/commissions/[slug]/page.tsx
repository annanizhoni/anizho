
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { commissionServiceBySlugQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type {
  CommissionService,
  CommissionPricingItem,
} from "@/types";
import { Section } from "@/components/layout/Section";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

function getPriceLabel(
  priceType?: CommissionPricingItem["priceType"]
): string {
  switch (priceType) {
    case "fixed":
      return "Fixed price";
    case "starting-at":
      return "Starting at";
    case "hourly":
      return "Hourly rate";
    case "per-square-foot":
      return "Per square foot";
    case "custom-quote":
      return "Custom quote";
    default:
      return "";
  }
}

type DescriptionBlock = {
  _key?: string;
  _type?: string;
  style?: string;
  children?: { text?: string }[];
};

function Description({ blocks }: { blocks?: unknown[] }) {
  if (!blocks?.length) return null;

  return (
    <div className="space-y-5 text-base leading-8 text-zinc-600">
      {(blocks as DescriptionBlock[]).map((block, index) => {
        const text = block.children
          ?.map((child) => child.text ?? "")
          .join("");

        if (!text) return null;

        const key = block._key ?? index;

        if (block.style === "h2") {
          return (
            <h2
              key={key}
              className="text-2xl font-light text-zinc-900"
            >
              {text}
            </h2>
          );
        }

        if (block.style === "h3") {
          return (
            <h3
              key={key}
              className="text-xl font-light text-zinc-900"
            >
              {text}
            </h3>
          );
        }

        if (block.style === "blockquote") {
          return (
            <blockquote
              key={key}
              className="border-l-2 border-zinc-300 pl-5 italic"
            >
              {text}
            </blockquote>
          );
        }

        return <p key={key}>{text}</p>;
      })}
    </div>
  );
}

export default async function CommissionServicePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service: CommissionService | null = await client.fetch(
    commissionServiceBySlugQuery,
    { slug }
  );

  if (!service) {
    notFound();
  }

  return (
    <Section>
      <Link
        href="/commissions"
        className="text-sm text-zinc-500 transition-colors hover:text-taupe-500"
      >
        ← Back to Commissions
      </Link>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        {/* Images */}
        <div className="space-y-10">
          {service.coverImage?.asset?.url && (
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
              <Image
                src={urlFor(service.coverImage).width(1400).url()}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          )}

          {service.gallery?.length ? (
            <div className="grid grid-cols-2 gap-4">
              {service.gallery.map((image, index) =>
                image.asset?.url ? (
                  <div
                    key={image._key ?? index}
                    className="relative aspect-square overflow-hidden bg-zinc-100"
                  >
                    <Image
                      src={urlFor(image).width(800).url()}
                      alt={`${service.title} example ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                ) : null
              )}
            </div>
          ) : null}
        </div>

        {/* Service information */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm uppercase tracking-widest text-zinc-400">
            Commissions
          </p>

          <h1 className="mt-3 text-4xl font-light tracking-tight">
            {service.title}
          </h1>

          {service.shortDescription && (
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              {service.shortDescription}
            </p>
          )}

          {/* Full description */}
          {service.description?.length ? (
            <div className="mt-8">
              <Description blocks={service.description} />
            </div>
          ) : null}

          {/* Pricing */}
          {service.pricingItems?.length ? (
            <div className="mt-12 border-t border-zinc-200 pt-8">
              <h2 className="text-2xl font-light tracking-tight">
                Pricing
              </h2>

              <div className="mt-6 space-y-7">
                {service.pricingItems.map((item, index) => (
                  <div
                    key={item._key ?? index}
                    className="border-b border-zinc-100 pb-6"
                  >
                    <h3 className="font-medium text-zinc-900">
                      {item.title}
                    </h3>

                    {item.priceType === "custom-quote" ? (
                      <p className="mt-2 text-zinc-700">
                        Custom quote
                      </p>
                    ) : item.amount != null ? (
                      <p className="mt-2 text-zinc-700">
                        {getPriceLabel(item.priceType)}{" "}
                        {currencyFormatter.format(item.amount)}
                        {item.unit ? ` ${item.unit}` : ""}
                      </p>
                    ) : null}

                    {item.description && (
                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {service.pricingNotes && (
                <p className="mt-6 text-sm leading-7 text-zinc-500">
                  {service.pricingNotes}
                </p>
              )}
            </div>
          ) : null}

          {/* Contact */}
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-block border border-zinc-900 px-7 py-3 text-sm transition-colors hover:bg-zinc-900 hover:text-white"
            >
              Inquire About a Commission
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}