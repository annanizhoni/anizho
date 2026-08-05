import Link from "next/link";

import { site } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-40 border-t border-[var(--border)]">
      <Container>
        <div className="flex flex-col items-center py-24 text-center">

          <p className="max-w-xl text-2xl font-extralight tracking-tight text-zinc-900">
            {site.footerTagline}
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-600">

            <a
              href={`mailto:${site.email}`}
              className="transition-opacity hover:opacity-60"
            >
              {site.email}
            </a>

            <span>·</span>

            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              Instagram
            </a>

            <span>·</span>

            <a
              href={site.scmp}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              {site.scmpName}
            </a>

          </div>

          <div className="mt-16 space-y-1 text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} {site.name}</p>
            <p>Park City, Utah</p>
          </div>

        </div>
      </Container>
    </footer>
  );
}