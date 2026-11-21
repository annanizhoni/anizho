
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { site } from "@/content/site";

const navigation = [
  { href: "/shop", label: "Shop" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

const workLinks = [
  { href: "/work/murals", label: "Murals" },
  { href: "/work/fine-art", label: "Fine Art" },
  { href: "/work/beadwork", label: "Beadwork" },
  { href: "/work/signs-windows", label: "Signs & Windows" },
];

const aboutLinks = [
  { href: "/about", label: "Artist" },
  { href: "/commissions", label: "Commissions" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <Container className="relative flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="transition-opacity hover:opacity-70">
          <Image
            src="/signature.png"
            alt={site.name}
            width={180}
            height={50}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* Work dropdown */}
          <div className="group relative">
            <Link
              href="/work"
              className="inline-block py-5 text-sm transition-opacity hover:opacity-60"
            >
              Work
            </Link>

            <div className="invisible absolute left-0 top-full z-50 min-w-48 border border-zinc-200 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {workLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-5 py-2.5 text-sm transition-colors hover:bg-zinc-50 hover:text-zinc-500"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* About dropdown */}
          <div className="group relative">
            <Link
              href="/about"
              className="inline-block py-5 text-sm transition-opacity hover:opacity-60"
            >
              About
            </Link>

            <div className="invisible absolute left-0 top-full z-50 min-w-48 border border-zinc-200 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {aboutLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-5 py-2.5 text-sm transition-colors hover:bg-zinc-50 hover:text-zinc-500"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining navigation links */}
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}

          {/* Shopping bag */}
          <Link
            href="/shop"
            aria-label="Shop"
            className="transition-opacity hover:opacity-60"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
          </Link>
        </nav>

        {/* Mobile navigation */}
        <div className="flex items-center gap-5 md:hidden">
          {/* Mobile shopping bag */}
          <Link
            href="/shop"
            aria-label="Shop"
            className="transition-opacity hover:opacity-60"
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
          </Link>

          {/* Hamburger menu */}
          <details className="relative">
            <summary
              aria-label="Open navigation menu"
              className="flex cursor-pointer list-none items-center text-2xl [&::-webkit-details-marker]:hidden"
            >
              <span aria-hidden="true">☰</span>
            </summary>

            <nav className="absolute right-0 top-full z-50 mt-4 w-64 border border-zinc-200 bg-white py-4 shadow-lg">
              {/* Work */}
              <Link
                href="/work"
                className="block px-6 py-2.5 text-sm font-medium"
              >
                Work
              </Link>

              <div className="mb-3 space-y-1 border-b border-zinc-100 px-6 pb-4">
                {workLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* About */}
              <Link
                href="/about"
                className="block px-6 py-2.5 text-sm font-medium"
              >
                About
              </Link>

              <div className="mb-3 space-y-1 border-b border-zinc-100 px-6 pb-4">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Other links */}
              <Link
                href="/press"
                className="block px-6 py-2.5 text-sm transition-colors hover:text-zinc-500"
              >
                Press
              </Link>

              <Link
                href="/contact"
                className="block px-6 py-2.5 text-sm transition-colors hover:text-zinc-500"
              >
                Contact
              </Link>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
