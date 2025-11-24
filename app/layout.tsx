import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LexPort - Autonomous Export Control Classification",
  description: "Automate ITAR & EAR classification with Agentic AI. Integrate directly with PLM/CAD to reduce risk and accelerate time-to-market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
