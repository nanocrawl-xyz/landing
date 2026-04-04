import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NanoCrawl — Pay-Per-Page for AI Agents",
  description:
    "An HTTP-native micropayment protocol for AI data access. Publishers set a price. AI agents pay per page. Humans browse for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
