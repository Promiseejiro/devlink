import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#FFFFFF",
      danger: "#FF3939",
      primary: {
        DEFAULT: "#633CFF",
        100: "#BEADFF",
        200: "#EFEBFF",
      },
      gray: {
        DEFAULT: "#333333",
        100: "#737373",
        200: "#D9D9D9",
        300: "#FAFAFA",
      },
    },
    screens: {
      sm: "640px", // Small screens (e.g., phones)
      md: "768px", // Medium screens (e.g., tablets)
      lg: "1024px", // Large screens (e.g., laptops)
      xl: "1280px", // Extra large screens (e.g., desktops)
      "2xl": "1536px", // 2xl screens (e.g., large desktops)
    },
  },
  plugins: [],
};
export default config;
