/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#6e7d00",
        secondaryGreen: "#6d7c23",
        accentGreen: "#a5bc00",
      },
      display: ["group-hover"],
      fontFamily: {
        inder: ["var(--font-inder)"],
        julius: ["var(--font-julius)"],
      },
    },
  },
  plugins: [],
};
