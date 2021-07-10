/**
 * @file tailwind.config.js
 * Theme colors: https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c
 */
const { colors, fontSize } = require("tailwindcss/defaultTheme");

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
        accent0: "#8C7D1B",
        accent1: "#622A2F",
        accent2: "#2F2334",
        accent3: "#f40",
        accent4: "#191414",
        linkedin: "#0a66c2",
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
        sans: ["Helvetica", "Arial", "sans-serif"],
        "rig-solid-bold-fill": ["'rig-solid-bold-fill'", "sans-serif"],
        "rig-solid-bold-inline": ["'rig-solid-bold-inline'", "sans-serif"],
        "rig-solid-bold-halftone": ["'rig-solid-bold-halftone'", "sans-serif"],
        "rig-solid-bold-inline-solo": [
          "'rig-solid-bold-inline-solo'",
          "sans-serif",
        ],
        "rig-solid-bold-outline": ["'rig-solid-bold-outline'", "sans-serif"],
        "rig-solid-bold-reverse": ["'rig-solid-bold-reverse'", "sans-serif"],
        "rig-solid-light-fill": ["'rig-solid-light-fill'", "sans-serif"],
        "rig-solid-light-halftone": [
          "'rig-solid-light-halftone'",
          "sans-serif",
        ],
        "rig-solid-medium-fill": ["'rig-solid-medium-fill'", "sans-serif"],
        "rig-solid-medium-halftone": [
          "'rig-solid-medium-halftone'",
          "sans-serif",
        ],
        "rig-solid-medium-lines": ["'rig-solid-medium-lines'", "sans-serif"],
        "rig-solid-medium-outline": [
          "'rig-solid-medium-outline'",
          "sans-serif",
        ],
        "rig-solid-zero-halftone": ["'rig-solid-zero-halftone'", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      fontFamily: [
        "active",
        "responsive",
        "focus",
        "focus-within",
        "dark",
        "hover",
      ],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
