const colors = require("tailwindcss/colors");

const background = "#131B2B"; // slate 900
const foreground = "hsl(213 31% 91%)";

const muted = "#1A2434";
const mutedForeground = "hsl(215.4 16.3% 56.9%)";

const popover = "hsl(224 71% 4%)"; // slate 800
const popoverForeground = "hsl(215 20.2% 65.1%)";

const card = "#131B2B"; // slate-900
const cardForeground = "hsl(222.2 47.4% 11.2%)";

const border = "hsl(216 34% 17%)";
const input = "hsl(216 34% 17%)";

const primary = "hsl(210 40% 98%)";
const primaryForeground = "hsl(222.2 47.4% 1.2%)";

const secondary = "hsl(222.2 47.4% 11.2%)";
const secondaryForeground = "hsl(210 40% 98%)";

const accent = "hsl(216 34% 17%)";
const accentForeground = "hsl(210 40% 98%)";

const destructive = "hsl(0 63% 31%)";
const destructiveForeground = "hsl(210 40% 98%)";

const ring = "hsl(216 34% 17%)";

const radius = "0.5rem";

const slate = {
  450: "#7E8FA6",
  500: "#6B7C95",
  550: "#586981",
  600: "#45566D",
  650: "#3C4B62",
  750: "#293649",
  850: "#1A2434",
  900: "#131B2B",
  950: "#0E1521",
  1000: "#0B1018",
};

const toxic = {
  50: "#E3FFE6",
  100: "#C8FFCD",
  200: "#A9FFAB",
  300: "#8AFF96",
  400: "#6DFC7B",
  500: "#41FF54",
  600: "#28F03C",
  700: "#2AE03C",
  800: "#22D834",
  900: "#16CC28",
};

const acid = {
  50: "#F9FFD1",
  100: "#F6FFB6",
  200: "#F3FF99",
  300: "#EEFF82",
  400: "#E7FF52",
  500: "#DAF437",
  600: "#C5E118",
  700: "#B2CD0A",
  800: "#A5BE07",
  900: "#9FB802",
};

const bright = colors.slate[200];
const dimmed = colors.slate[400];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        title: ["Poppins", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      fontSize: {
        xxs: [
          "0.5rem",
          {
            lineHeight: "0.75rem",
            fontWeight: "500",
          },
        ],
        "2.5xl": [
          "1.7rem",
          {
            lineHeight: "2.1rem",
            fontWeight: "500",
          },
        ],
      },
      colors: {
        bright,
        dimmed,
        border,
        input,
        ring,
        background,
        foreground,
        primary: {
          DEFAULT: primary,
          foreground: primaryForeground,
        },
        secondary: {
          DEFAULT: secondary,
          foreground: secondaryForeground,
        },
        destructive: {
          DEFAULT: destructive,
          foreground: destructiveForeground,
        },
        muted: {
          DEFAULT: muted,
          foreground: mutedForeground,
        },
        accent: {
          DEFAULT: accent,
          foreground: accentForeground,
        },
        popover: {
          DEFAULT: popover,
          foreground: popoverForeground,
        },
        card: {
          DEFAULT: card,
          foreground: cardForeground,
        },
        slate,
        toxic,
        acid,
      },
      borderRadius: {
        lg: radius,
        md: `calc(${radius} - 2px)`,
        sm: `calc(${radius} - 4px)`,
      },
    },
  },
  plugins: [],
};
