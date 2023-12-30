// tailwind.config.js
import { tailwindConfig } from "@storefront-ui/vue/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindConfig],
  content: ["./index.html", "./**/*.vue", "./node_modules/@storefront-ui/vue/**/*.{js,mjs}"],
  theme: {
    extend: {
      maxWidth: {
        1620: "1620px",
      },
      borderRadius: {
        large: "1.875rem",
      },
      colors: {
        bold: {
          100: "#1A1A1A",
        },
        gray: {
          100: "#E6E6E6",
          200: "#666666",
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
          950: "#422006",
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
