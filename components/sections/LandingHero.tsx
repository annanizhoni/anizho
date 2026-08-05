import { site } from "@/content/site";
import Image from "next/image";

export function LandingHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-5xl px-8 text-center">

        <Image
  src="/signature.png"
  alt={site.name}
  width={900}
  height={260}
  priority
  className="mx-auto h-auto w-full max-w-sm"
/>

        

      </div>
    </section>
  );
}