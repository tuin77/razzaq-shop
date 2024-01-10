// tailwind.config.js
import { tailwindConfig } from "@storefront-ui/vue/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindConfig],
  content: ["./index.html", "./**/*.vue", "./node_modules/@storefront-ui/vue/**/*.{js,mjs}"],
  theme: {
    extend: {
      fontSize: {
        sm: ["14px", "18px"],
        base: ["16px", "24px"],
        lg: ["18px", "24px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        32: ["2rem", "2.625rem"],
        48: ["3rem", "4rem"],
      },
      maxWidth: {
        1620: "1620px",
      },
      margin: {
        4.5: "1.125rem",
        30: "1.875rem",
        120: "7.5rem",
      },
      padding: {
        4.5: "1.125rem",
        30: "1.875rem",
        120: "7.5rem",
      },

      borderRadius: {
        20: "20px",
        large: "1.875rem", //30px
        100: "6.25rem",
      },
      colors: {
        bold: {
          100: "#1A1A1A",
        },
        red: {
          500: "#F93B3B",
        },
        neutral: {
          100: "#f5f5f5",
        },
        gray: {
          100: "#E6E6E6",
          e6e: "#E6E6E6",
          200: "#666666",
          666: "#666666",
          400: "#999999",
        },
        primary: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#FCA500", //主色调
          800: "#854d0e",
          900: "#713f12",
          950: "#FA800E", //#首页buy button
        },
      },
    },
    fontFamily: {
      body: [
        "Lato",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Lato",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [],
};
