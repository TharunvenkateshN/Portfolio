import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

export const metadata: Metadata = {
  title: "Tharun N V | AI/ML Engineer & Full Stack Developer",
  description:
    "Portfolio of Tharun N V — AI/ML Engineer, Backend Developer, and Full Stack Developer specializing in production ML systems, FastAPI, React, and Next.js. Available for internships and entry-level roles.",
  keywords: [
    "Tharun N V",
    "AI ML Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "FastAPI",
    "Next.js",
    "React",
    "Python",
    "Machine Learning",
    "Portfolio",
    "Amrita Vishwa Vidyapeetham",
    "Internship",
  ],
  authors: [{ name: "Tharun N V" }],
  creator: "Tharun N V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tharunnv.dev",
    title: "Tharun N V | AI/ML Engineer & Full Stack Developer",
    description:
      "Production-oriented systems combining machine learning, backend engineering, and real-time processing.",
    siteName: "Tharun N V Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharun N V | AI/ML Engineer & Full Stack Developer",
    description:
      "Production-oriented systems combining ML, backend engineering, and real-time processing.",
    creator: "@tharunnv",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased noise-bg">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
