import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import "../styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nason Wedding",
  description: "Two names, one weekend, your company requested",
  keywords: ["wedding", "celebration", "nason"],
  authors: [{ name: "Nason Wedding" }],
  openGraph: {
    title: "Nason Wedding",
    description: "Two names, one weekend, your company requested",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${crimson.variable}`}>
      <body className="bg-cream text-midnight antialiased">{children}</body>
    </html>
  );
}
