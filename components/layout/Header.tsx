import Link from "next/link";
import { Container } from "@/components/layout/Container";
import Image from "next/image";
import { site } from "@/content/site";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
  <Container className="flex h-16 items-center justify-between">
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

    <nav className="flex items-center gap-8">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm transition-opacity hover:opacity-60"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  </Container>
</header>
  );
}