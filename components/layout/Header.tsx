
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Container } from "@/components/layout/Container";

const navigation = [
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

const workLinks = [
  { href: "/work/murals", label: "Murals" },
  { href: "/work/fine-art", label: "Fine Art" },
  { href: "/work/beadwork", label: "Beadwork" },
  { href: "/work/signs-windows", label: "Signs & Windows" },
];

const aboutLinks = [
  { href: "/artist", label: "Artist" },
  { href: "/press", label: "Press" },
];

const commissionLinks = [
  { href: "/commissions/fine-art", label: "Fine Art" },
  { href: "/commissions/murals", label: "Murals" },
  { href: "/commissions/beadwork", label: "Beadwork" },
  { href: "/commissions/signs-windows", label: "Signs & Windows" },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const isWorkActive = pathname.startsWith("/work");

  const isAboutActive =
    pathname === "/about" ||
    pathname.startsWith("/about/") ||
    pathname === "/artist" ||
    pathname.startsWith("/artist/") ||
    pathname === "/press" ||
    pathname.startsWith("/press/");

  const isCommissionsActive = pathname.startsWith("/commissions");

  const activeClass = "rounded-sm bg-zinc-100 text-zinc-900";
  const inactiveClass = "text-zinc-500 hover:text-zinc-900";

  const closeMobileMenu = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const menu = event.currentTarget.closest("details");
    if (menu) {
      menu.open = false;
    }
  };

  const blurLink = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.currentTarget.blur();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <Container className="relative flex h-16 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="transition-opacity hover:opacity-70">
          <Image
            src="/signature.png"
            alt="Anna Nizhoni"
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
              onClick={blurLink}
              className={`inline-block py-5 text-sm transition-opacity hover:opacity-60 ${
                isWorkActive ? "text-zinc-900" : ""
              }`}
            >
              Work
            </Link>

            <div className="invisible absolute left-0 top-full z-50 min-w-48 border border-zinc-200 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
              {workLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={blurLink}
                  className={`block px-5 py-2.5 text-sm transition-colors ${
                    isActive(item.href)
                      ? "bg-zinc-100 text-zinc-900"
                      : "hover:bg-zinc-50 hover:text-zinc-500"
                  }`}
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
              onClick={blurLink}
              className={`inline-block py-5 text-sm transition-opacity hover:opacity-60 ${
                isAboutActive ? "text-zinc-900" : ""
              }`}
            >
              About
            </Link>

            <div className="invisible absolute left-0 top-full z-50 min-w-48 border border-zinc-200 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
              {aboutLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={blurLink}
                  className={`block px-5 py-2.5 text-sm transition-colors ${
                    isActive(item.href)
                      ? "bg-zinc-100 text-zinc-900"
                      : "hover:bg-zinc-50 hover:text-zinc-500"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Commissions dropdown */}
          <div className="group relative">
            <Link
              href="/commissions"
              onClick={blurLink}
              className={`inline-block py-5 text-sm transition-opacity hover:opacity-60 ${
                isCommissionsActive ? "text-zinc-900" : ""
              }`}
            >
              Commissions
            </Link>

            <div className="invisible absolute left-0 top-full z-50 min-w-48 border border-zinc-200 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
              {commissionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={blurLink}
                  className={`block px-5 py-2.5 text-sm transition-colors ${
                    isActive(item.href)
                      ? "bg-zinc-100 text-zinc-900"
                      : "hover:bg-zinc-50 hover:text-zinc-500"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Shop and Contact */}
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-opacity hover:opacity-60 ${
                isActive(item.href) ? "text-zinc-900" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Shopping bag */}
          <Link
            href="/shop"
            aria-label="Shopping bag"
            className={`rounded-sm p-1 transition-colors ${
              isActive("/shop")
                ? "bg-zinc-100 text-zinc-900"
                : "hover:bg-zinc-50"
            }`}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
          </Link>
        </nav>

        {/* Mobile navigation */}
        <div className="flex items-center gap-5 md:hidden">

          {/* Shopping bag */}
          <Link
            href="/shop"
            aria-label="Shopping bag"
            className={`rounded-sm p-1 transition-colors ${
              isActive("/shop")
                ? "bg-zinc-100 text-zinc-900"
                : "hover:bg-zinc-50"
            }`}
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
                onClick={closeMobileMenu}
                className={`mx-3 block px-3 py-2.5 text-sm font-medium ${
                  isWorkActive ? activeClass : inactiveClass
                }`}
              >
                Work
              </Link>

              <div className="mb-3 space-y-1 border-b border-zinc-100 px-6 pb-4">
                {workLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block rounded-sm px-3 py-2 text-sm transition-colors ${
                      isActive(item.href) ? activeClass : inactiveClass
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* About */}
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={`mx-3 block px-3 py-2.5 text-sm font-medium ${
                  isAboutActive ? activeClass : inactiveClass
                }`}
              >
                About
              </Link>

              <div className="mb-3 space-y-1 border-b border-zinc-100 px-6 pb-4">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block rounded-sm px-3 py-2 text-sm transition-colors ${
                      isActive(item.href) ? activeClass : inactiveClass
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Commissions */}
              <Link
                href="/commissions"
                onClick={closeMobileMenu}
                className={`mx-3 block px-3 py-2.5 text-sm font-medium ${
                  isCommissionsActive ? activeClass : inactiveClass
                }`}
              >
                Commissions
              </Link>

              <div className="mb-3 space-y-1 border-b border-zinc-100 px-6 pb-4">
                {commissionLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block rounded-sm px-3 py-2 text-sm transition-colors ${
                      isActive(item.href) ? activeClass : inactiveClass
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Shop and Contact */}
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`mx-3 block rounded-sm px-3 py-2.5 text-sm ${
                    isActive(item.href) ? activeClass : inactiveClass
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}