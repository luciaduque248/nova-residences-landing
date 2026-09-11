import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nova-residences-landing.vercel.app"),
  title: "NOVA Residences — Landing Page Concept",
  description:
    "Concepto de landing page inmobiliaria orientada a captación de leads, UX responsive, interacción, SEO y performance.",
  applicationName: "NOVA Residences",
  keywords: ["landing page", "real estate", "UX/UI", "frontend", "lead generation", "portfolio"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NOVA Residences — Landing Page Concept",
    description:
      "Caso conceptual de real estate enfocado en estrategia de conversión, experiencia responsive y desarrollo frontend.",
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: "NOVA Residences",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
