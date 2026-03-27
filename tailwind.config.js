/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Stitch Design System - Border Radius
      borderRadius: {
        DEFAULT: "0.25rem", // 4px - Sharp, engineered feel
        sm: "0.125rem", // 2px
        lg: "0.5rem", // 8px
        xl: "0.75rem", // 12px
        full: "9999px",
      },
      // Stitch Design System - Colors
      colors: {
        // Surface Hierarchy
        background: "#0e0e0e",
        surface: "#0e0e0e",
        "surface-dim": "#0e0e0e",
        "surface-bright": "#2c2c2c",
        "surface-container-lowest": "#000000",
        "surface-container-low": "#131313",
        "surface-container": "#1a1919",
        "surface-container-high": "#201f1f",
        "surface-container-highest": "#262626",
        "surface-variant": "#262626",
        "surface-tint": "#a1ffc1",

        // Primary Colors
        primary: {
          DEFAULT: "#a1ffc1",
          dim: "#00ec8d",
          container: "#00fc97",
          fixed: "#00fc97",
          "fixed-dim": "#00ec8d",
        },
        "on-primary": "#006439",
        "on-primary-container": "#005b33",
        "on-primary-fixed": "#004626",
        "on-primary-fixed-variant": "#00653a",

        // Secondary Colors
        secondary: {
          DEFAULT: "#63f6bf",
          dim: "#53e7b1",
          container: "#006c4e",
          fixed: "#63f6bf",
          "fixed-dim": "#53e7b1",
        },
        "on-secondary": "#005a40",
        "on-secondary-container": "#e0ffee",
        "on-secondary-fixed": "#004530",
        "on-secondary-fixed-variant": "#006548",

        // Tertiary Colors
        tertiary: {
          DEFAULT: "#74e0ff",
          dim: "#00c7ec",
          container: "#00d5fe",
          fixed: "#00d5fe",
          "fixed-dim": "#00c7ec",
        },
        "on-tertiary": "#004f5f",
        "on-tertiary-container": "#004553",
        "on-tertiary-fixed": "#002f39",
        "on-tertiary-fixed-variant": "#004e5f",

        // Error Colors
        error: {
          DEFAULT: "#ff716c",
          dim: "#d7383b",
          container: "#9f0519",
        },
        "on-error": "#490006",
        "on-error-container": "#ffa8a3",

        // On Surface
        "on-surface": "#ffffff",
        "on-surface-variant": "#adaaaa",
        "on-background": "#ffffff",

        // Outline
        outline: "#767575",
        "outline-variant": "#484847",

        // Inverse
        "inverse-surface": "#fcf9f8",
        "inverse-on-surface": "#565555",
        "inverse-primary": "#006e3f",

        // Accent for highlighting
        accent: "#00ff99",
      },
      // Stitch Design System - Typography
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Space Grotesk", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
      },
      // Custom animations
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
