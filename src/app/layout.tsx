import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hayashida Group — Connecting Markets, Shaping Futures",
    template: "%s | Hayashida Group",
  },
  description:
    "Hayashida Group is a global financial services firm headquartered in Tokyo, Japan, offering investment banking, global markets, asset management, and wealth management services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
