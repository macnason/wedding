import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

// PP Editorial New font
const ppEditorial = localFont({
  src: [
    {
      path: "../../public/fonts/PPEditorialNew/PPEditorialNew-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPEditorialNew/PPEditorialNew-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPEditorialNew/PPEditorialNew-UltralightItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/PPEditorialNew/PPEditorialNew-UltralightItalic.woff",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-pp-editorial",
  display: "swap",
});

// Domaine Text font
const domaineText = localFont({
  src: [
    {
      path: "../../public/fonts/DomaineText/DomaineText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/DomaineText/DomaineText-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/DomaineText/DomaineText-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/DomaineText/DomaineText-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-domaine",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olivia & Mac Wedding",
  description: "Join us on our special day - March 29th, 2026",
  keywords: ["wedding", "celebration", "olivia", "mac"],
  authors: [{ name: "Olivia & Mac" }],
  openGraph: {
    title: "Olivia & Mac Wedding",
    description: "Join us on our special day - March 29th, 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ppEditorial.variable} ${domaineText.variable}`}
    >
      <body className="bg-bg-base text-fg-primary antialiased font-domaine">
        {children}
      </body>
    </html>
  );
}
