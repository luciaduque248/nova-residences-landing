import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVA Residences — Portfolio Landing Page",
  description: "Conversion-oriented real-estate landing page for a fictional premium residential project. Built as a portfolio case study focused on lead generation, responsive UX, interaction quality, SEO and performance.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
