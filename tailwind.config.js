/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "rts-para": "var(--rts-para)",
        "rts-heading": "var(--rts-heading)",
        "rts-black": "var(--rts-black)",
        "rts-white": "var(--rts-white)",
        "rts-gray": "var(--rts-gray)",
        "btn-1": "var(--btn-1)",
        "heading-color": "var(--heading-color)",
        "rts-border": "var(--rts-border)",
        "color-success": "var(--color-success)",
        "color-danger": "var(--color-danger)",
        "color-warning": "var(--color-warning)",
        "color-info": "var(--color-info)",
      },
      fontFamily: {
        gilda: ["var(--glida)", "serif"],
        jost: ["var(--jost)", "sans-serif"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontSize: {
        h1: ["var(--h1)", { lineHeight: "90px" }],
        h2: ["var(--h2)", { lineHeight: "70px" }],
        h3: ["var(--h3)", { lineHeight: "58px" }],
        h4: ["var(--h4)", { lineHeight: "50px" }],
        h5: ["var(--h5)", { lineHeight: "42px" }],
        h6: ["var(--h6)", { lineHeight: "30px" }],
        p: ["var(--p)", { lineHeight: "28px" }],
        "p-sm": ["var(--p-sm)", { lineHeight: "28px" }],
        "p-xs": ["var(--p-xs)", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
};
