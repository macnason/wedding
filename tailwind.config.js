/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Figma Design Tokens
        "fg-inverted": "#fbf9ee",
        "fg-accent": "#4a1923",
        "fg-secondary": "#954e5d",
        "fg-primary": "#222222",
        "bg-base": "#fbf9ee",
        "bg-tint": "#f2efe3",
        "bg-feature": "#4a1923",

        // Legacy colors (keeping for backward compatibility)
        cream: "#fbf9ee", // Updated to match bg-base
        wine: {
          DEFAULT: "#4a1923", // Updated to match fg-accent
          hover: "#3d1420",
        },
        sage: "#9ca986",
        "dusty-rose": "#d4a5a5",
        midnight: "#4a1923", // Updated to match fg-accent
      },
      fontFamily: {
        // New font families based on Figma
        editorial: ["var(--font-pp-editorial)", "PP Editorial New", "serif"],
        domaine: ["var(--font-domaine)", "Domaine Text", "serif"],
        grotesk: ["Neue Haas Grotesk Text", "system-ui", "sans-serif"],
        rhymes: ["Rhymes Display", "serif"],

        // Updated defaults
        heading: ["var(--font-pp-editorial)", "PP Editorial New", "serif"],
        body: ["var(--font-domaine)", "Domaine Text", "serif"],
        serif: ["var(--font-pp-editorial)", "PP Editorial New", "serif"],
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        // Figma typography tokens
        button: ["26px", { lineHeight: "1", fontWeight: "500" }],
        "heading-subtitle": ["36px", { lineHeight: "1.3", fontWeight: "400" }],
        overline: ["14px", { lineHeight: "1.3", fontWeight: "400" }],
        "body-medium": ["20px", { lineHeight: "1.3", fontWeight: "400" }],
        "heading-h3": ["52px", { lineHeight: "1.1", fontWeight: "400" }],
        "hero-large": ["245.592px", { lineHeight: "1", fontWeight: "100" }],
        "hero-medium": ["167.801px", { lineHeight: "1", fontWeight: "100" }],
        "section-heading": ["96px", { lineHeight: "1.1", fontWeight: "400" }],
        "section-date": ["54px", { lineHeight: "1.3", fontWeight: "400" }],
        "event-time": ["36px", { lineHeight: "1.3", fontWeight: "400" }],
        "event-title": ["36px", { lineHeight: "1.3", fontWeight: "400" }],
        "cta-large": ["48px", { lineHeight: "1", fontWeight: "500" }],
        "cta-medium": ["32px", { lineHeight: "1", fontWeight: "500" }],

        // Standard sizes (keeping for compatibility)
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
      },
      spacing: {
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "6rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
