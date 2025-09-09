import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oguzhan | Full-Stack Developer",
  description:
    "Oguzhan is a Full-Stack Developer experienced in building scalable applications for law enforcement and fintech, using .NET, Node.js, Next.js, TailwindCSS, and more.",
  keywords: [
    "Oguzhan",
    "Full-Stack Developer",
    ".NET",
    "Node.js",
    "Next.js",
    "Nuxt.js",
    "TailwindCSS",
    "GraphQL",
    "Fastify",
    "WebSocket",
    "Fintech",
    "Law Enforcement",
    "Portfolio",
  ],
  authors: [{ name: "Oguzhan" }],
  creator: "Oguzhan",
  openGraph: {
    title: "Oguzhan | Full-Stack Developer",
    description:
      "Portfolio of Oguzhan, a developer specializing in web and backend technologies for fintech and law enforcement solutions.",
    url: "https://oguzhandag.dev",
    siteName: "Oguzhan Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>{children}</body>
    </html>
  );
}
