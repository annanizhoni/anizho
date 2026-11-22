
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ShoppingBag, ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/Container";

const workLinks = [
  { href: "/work/murals", label: "Murals" },
  { href: "/work/fine-art", label: "Fine Art" },
  { href: "/work/beadwork", label: "Beadwork" },
  { href: "/work/signs-windows", label: "Signs & Windows" },
];

const aboutLinks = [
  { href: "/artist", label: "Artist" },
  { href: "/press", label: "Press" },
  { href: "/scmp", label: "Summit County Mural Project" },
];

const commissionLinks = [
  { href: "/commissions/fine-art", label: "Fine Art" },
  { href: "/commissions/murals", label: "Murals" },
  { href: "/commissions/beadwork", label: "Beadwork" },
  { href: "/commissions/signs-windows", label: "Signs & Windows" },
];

export function Header() {
  const pathname = usePathname();

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [commissionsOpen, setCommissionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Close the mobile menu when clicking or tapping outside it
  useEffect(() => {
    function handleOutsideClick(event: PointerEvent) {
      if (
        mobileMenuRef.current &&
        event.target instanceof Node &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
        setPortfolioOpen(false);
        setCommissionsOpen(false);
        setAboutOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setPortfolioOpen(false);
        setCommissionsOpen(false);
        setAboutOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick, true);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick, true);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setPortfolioOpen(false);
    setCommissionsOpen(false);
    setAboutOpen(false);
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const isWorkActive = pathname.startsWith("/work");

  const isAboutActive =
    pathname === "/about" ||
    pathname.startsWith("/about/") ||
    pathname === "/artist" ||
    pathname.startsWith("/artist/") ||
    pathname === "/press" ||
    pathname.startsWith("/press/") ||
    pathname === "/scmp" ||
    pathname.startsWith("/scmp/");

  const isCommissionsActive = pathname.startsWith("/commissions");

  const activeClass = "rounded-sm bg-zinc-100 text-zinc-900";
  const inactiveClass = "text-zinc-500 hover:text-zinc-900";

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

          {/* Portfolio dropdown */}
          <div className="group relative">
            <Link
              href="/work"
              onClick={blurLink}
              className={`inline-block py-5 text-sm transition-opacity hover:opacity-60 ${
                isWorkActive ? "text-zinc-900" : ""
              }`}
            >
              Portfolio
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

          {/* Commissions dropdown */}
          <div className="group relative">
            <Link
              href="/commissions"
              onClick={blurLink}
              className={`inline-block py-5 text-sm transition-opacity hover:opacity-60 ${
                isCommissionsActive ? "text-zinc-900" : ""
              }`}
            >
              Commission
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

          {/* Shop */}
          <Link
            href="/shop"
            className={`text-sm transition-opacity hover:opacity-60 ${
              isActive("/shop") ? "text-zinc-900" : ""
            }`}
          >
            Shop
          </Link>

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

          {/* Contact */}
          <Link
            href="/contact"
            className={`text-sm transition-opacity hover:opacity-60 ${
              isActive("/contact") ? "text-zinc-900" : ""
            }`}
          >
            Contact
          </Link>

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
        <div
          ref={mobileMenuRef}
          className="relative flex items-center gap-5 md:hidden"
        >
          {/* Shopping bag */}
          <Link
            href="/shop"
            aria-label="Shopping bag"
            onClick={closeMobileMenu}
            className={`rounded-sm p-1 transition-colors ${
              isActive("/shop")
                ? "bg-zinc-100 text-zinc-900"
                : "hover:bg-zinc-50"
            }`}
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
          </Link>

          {/* Hamburger button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex cursor-pointer items-center text-2xl text-zinc-800"
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>

          {/* Mobile dropdown menu */}
          {mobileMenuOpen && (
            <nav className="absolute right-0 top-full z-50 mt-4 w-72 border border-zinc-200 bg-white py-3 shadow-lg">

              {/* Portfolio */}
              <div className="border-b border-zinc-100 px-4 py-1">
                <div className="flex items-center justify-between">
                  <Link
                    href="/work"
                    onClick={closeMobileMenu}
                    className={`flex-1 py-3 text-sm font-medium ${
                      isWorkActive ? "text-zinc-900" : inactiveClass
                    }`}
                  >
                    Portfolio
                  </Link>

                  <button
                    type="button"
                    aria-label="Toggle Portfolio submenu"
                    aria-expanded={portfolioOpen}
                    onClick={() => setPortfolioOpen((open) => !open)}
                    className="flex h-10 w-10 items-center justify-center text-zinc-500"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        portfolioOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {portfolioOpen && (
                  <div className="space-y-1 pb-3 pl-3">
                    {workLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`block rounded-sm px-3 py-2.5 text-sm ${
                          isActive(item.href) ? activeClass : inactiveClass
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Commissions */}
              <div className="border-b border-zinc-100 px-4 py-1">
                <div className="flex items-center justify-between">
                  <Link
                    href="/commissions"
                    onClick={closeMobileMenu}
                    className={`flex-1 py-3 text-sm font-medium ${
                      isCommissionsActive ? "text-zinc-900" : inactiveClass
                    }`}
                  >
                    Commission
                  </Link>

                  <button
                    type="button"
                    aria-label="Toggle Commissions submenu"
                    aria-expanded={commissionsOpen}
                    onClick={() => setCommissionsOpen((open) => !open)}
                    className="flex h-10 w-10 items-center justify-center text-zinc-500"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        commissionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {commissionsOpen && (
                  <div className="space-y-1 pb-3 pl-3">
                    {commissionLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`block rounded-sm px-3 py-2.5 text-sm ${
                          isActive(item.href) ? activeClass : inactiveClass
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Shop */}
              <Link
                href="/shop"
                onClick={closeMobileMenu}
                className={`mx-4 block border-b border-zinc-100 py-3 text-sm ${
                  isActive("/shop") ? "text-zinc-900" : inactiveClass
                }`}
              >
                Shop
              </Link>

              {/* About */}
              <div className="border-b border-zinc-100 px-4 py-1">
                <div className="flex items-center justify-between">
                  <Link
                    href="/about"
                    onClick={closeMobileMenu}
                    className={`flex-1 py-3 text-sm font-medium ${
                      isAboutActive ? "text-zinc-900" : inactiveClass
                    }`}
                  >
                    About
                  </Link>

                  <button
                    type="button"
                    aria-label="Toggle About submenu"
                    aria-expanded={aboutOpen}
                    onClick={() => setAboutOpen((open) => !open)}
                    className="flex h-10 w-10 items-center justify-center text-zinc-500"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {aboutOpen && (
                  <div className="space-y-1 pb-3 pl-3">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`block rounded-sm px-3 py-2.5 text-sm ${
                          isActive(item.href) ? activeClass : inactiveClass
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`mx-4 block py-3 text-sm ${
                  isActive("/contact") ? "text-zinc-900" : inactiveClass
                }`}
              >
                Contact
              </Link>
            </nav>
          )}
        </div>
      </Container>
    </header>
  );
}