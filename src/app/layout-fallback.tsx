import type { Metadata } from "next";
import "../styles/globals.css";

// Temporary fallback fonts until actual font files are added
// Once you add the font files, replace this file with layout-with-fonts.tsx
const ppEditorial = {
  variable: "--font-pp-editorial",
};

const domaineText = {
  variable: "--font-domaine",
};

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
