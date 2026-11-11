import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GlowBackground } from "@/components/GlowBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Harsh Gour | Full-Stack & Frontend Engineer | IIT Kanpur",
  description:
    "Developer portfolio of Harsh Gour, B.Tech undergraduate at IIT Kanpur. Specializing in full-stack engineering, high-performance web applications, scalable CI/CD pipelines, and machine learning architectures.",
  keywords: [
    "Harsh Gour",
    "IIT Kanpur",
    "Full-Stack Engineer",
    "Frontend Engineer",
    "Next.js Developer",
    "FastAPI",
    "Software Engineer Portfolio",
    "TypeScript",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Harsh Gour", url: "https://github.com/harshgour" }],
  creator: "Harsh Gour",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshgour.dev",
    title: "Harsh Gour | Full-Stack & Frontend Engineer",
    description:
      "Explore the portfolio of Harsh Gour — software engineering intern at Blitz and NextRoundAi, IIT Kanpur placement coordinator, and creator of ROJ Guard and Med-CycleGAN.",
    siteName: "Harsh Gour Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Gour | Full-Stack & Frontend Engineer",
    description:
      "Software engineering portfolio of Harsh Gour — IIT Kanpur undergraduate specializing in full-stack, distributed pipelines, and generative AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen font-sans bg-[#07080c] text-slate-100 relative antialiased selection:bg-sky-500/25 selection:text-sky-200">
        <GlowBackground />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
