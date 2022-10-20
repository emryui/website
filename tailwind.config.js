/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        2500: "2500ms",
      },
      boxShadow: {
        xs: "0px 1px 2px rgba(16, 24, 40, 0.05);",
      },
      spacing: {
        4.5: "1.125rem",
      },
      colors: {
        base: {
          black: "#040404",
        },
        primary: {
          DEFAULT: "#7A28FF",
          50: "#ECE0FF",
          100: "#DFCBFF",
          200: "#C6A2FF",
          300: "#AC7AFF",
          400: "#9351FF",
          500: "#7A28FF",
          600: "#5B00EF",
          700: "#4600B7",
          800: "#30007F",
          900: "#1B0047",
        },
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
        },
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          200: "#A6F4C5",
          300: "#6CE9A6",
          400: "#32D583",
          500: "#12B76A",
          600: "#039855",
          700: "#027A48",
          800: "#05603A",
          900: "#054F31",
        },
      },
      fontSize: {
        "display-2xl": [
          "4.5rem",
          {
            lineHeight: "5.625rem",
            letterSpacing: "-0.02em",
          },
        ],
        "display-xl": [
          "3.75rem",
          {
            lineHeight: "4.625rem",
            letterSpacing: "-0.02em",
          },
        ],
        "display-lg": [
          "3rem",
          {
            lineHeight: "3.75rem",
            letterSpacing: "-0.02em",
          },
        ],
        "display-md": [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "-0.02em",
          },
        ],
        "display-sm": [
          "1.875rem",
          {
            lineHeight: "2.375rem",
          },
        ],
        "display-xs": [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.875rem",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        md: [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1.125rem",
          },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
