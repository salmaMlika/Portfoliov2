import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salma Mlika — AI & Data Science Engineering",
  description: "Portfolio of Salma Mlika — AI & Data Science student. Machine Learning, NLP, MLOps, Full Stack.",
  authors: [{ name: "Salma Mlika" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
