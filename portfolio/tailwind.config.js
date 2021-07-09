const {
  colors,
  scale,
  fontSize,
  spacing,
  width,
  height,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
} = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/layouts/**/*.{js,jsx,ts,tsx}",
      // "./src/errors/**/*.{js,jsx,ts,tsx}",
      // "./src/hooks/**/*.{js,jsx,ts,tsx}",
      // "./src/contexts/**/*.{js,jsx,ts,tsx}",
      // "./src/models/**/*.{js,jsx,ts,tsx}",
      // "./src/services/**/*.{js,jsx,ts,tsx}",
      "next.config.js",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // xs: '320px',
      // sm: '640px',
      md: "768px",
      lg: "992px",
      xl: "1200px",
      // xxl: '1440px',
      // xxxl: '1800px',
    },
    extend: {
      transitionDelay: {
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
      },
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        // https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c
        accent0: "#2EE884",
        accent1: "#F59B23",
        accent2: "#FC65A2",
        accent3: "#FFFFFF",
        accent4: "#191414",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        gray: {
          ...colors.gray,
          10: "#101010",
          22: "#222326",
          17: "#171717",
          "1d": "#1d1d1d",
          91: "#919496",
          40: "#404040",
        },
      },
      fontSize: {
        ...fontSize,
        "2xs": "0.65rem",
        "3xs": "0.6rem",
        "4xs": "0.5rem",
      },
      fontFamily: {
        sans: ["CircularBook", "Helvetica", "Arial", "sans-serif"],
        circular: [
          "Circular",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
