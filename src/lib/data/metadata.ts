import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "John Douglas – Backend Engineer.",
  icons: {
    icon: "/favicon/favicon.ico",
  },
  description:
    "Welcome to the personal portfolio of John Douglas – Backend Engineer. Explore personal projects, freelance work, and professional experience.",
  authors: [{ name: "John Douglas", url: "https://yourdomain.com" }],
  keywords: [
    "John Douglas",
    "Backend Engineer",
    "Freelance Developer",
    "Next.js Portfolio",
    "ShadCN UI",
    "Tailwind Developer",
    "TypeScript Developer",
    "Google",
    "Amazon",
  ],
  openGraph: {
    title: "John Douglas – Backend Engineer",
    description:
      "Discover the work and journey of John Douglas – Backend Engineer..",
    url: "https://yourdomain.com",
    siteName: "John Douglas",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://yourdomain.com"),
};
