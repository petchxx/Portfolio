import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#676767", // or 50 to 900 DEFAULT
            primary: {
              DEFAULT: "#905aff",
            },
            secondary: "#F8F8F8",
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#000000", // or DEFAULT
            primary: {
              DEFAULT: "#905aff",
            },
            secondary: "#1F1F22",
          },
        },
      },
    }),
  ],
};
export default config;
