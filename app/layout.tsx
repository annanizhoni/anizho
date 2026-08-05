import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.annanizhoni.com"), // change if you use a different domain
  title: {
    default: "Anna Nizhoni",
    template: "%s | Anna Nizhoni",
  },
  description:
    "Community artist and muralist creating public art inspired by place, connection, and storytelling.",
  keywords: [
    "Anna Nizhoni",
    "Mural Artist",
    "Community Murals",
    "Public Art",
    "Fine Art",
    "Park City Artist",
    "Utah Mural Artist",
  ],
  authors: [{ name: "Anna Nizhoni" }],
  creator: "Anna Nizhoni",

  openGraph: {
    title: "Anna Nizhoni",
    description:
      "Community artist and muralist creating public art inspired by place, connection, and storytelling.",
    url: "https://www.annanizhoni.com",
    siteName: "Anna Nizhoni",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anna Nizhoni",
    description:
      "Community artist and muralist creating public art inspired by place, connection, and storytelling.",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
  <Header />
  <main>{children}</main>
  <Footer />
</body>
    </html>
  );
}