/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: { max: "600px" },
      md: { max: "962px" },
      lg: { max: "1100px" },
      xl: { max: "1228px" },
      xxl: { max: "1380px" },
    },
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        weave: "var(--weave)",
        grey: "var(--grey)",
        clay: "var(--clay)",
        red: "var(--red)",
        blue: "var(--blue)",
        yellow: "var(--yellow)",
        orange: "var(--orange)",
        green: "var(--green)",
        magenta: "var(--magenta)",
        separators: "var(--separators)",
        darkGrey: "var(-darkGrey)",
      },
      fontFamily: {
        "pr-light": "var(--primaryLightFont)",
        "pr-regular": "var(--primaryRegularFont)",
        "pr-medium": "var(--primaryMediumFont)",
        "pr-bold": "var(--primaryBoldFont)",
        "sec-light": "var(--secondaryLightFont)",
        "sec-regular": "var(--secondaryRegularFont)",
        "sec-medium": "var(--secondaryMediumFont)",
      },
      margin: {
        "0.5": "0.5vw",
        1: "1vw",
        2: "1.3vw",
        3: "3vw",
      },
      padding: {
        "0.5": "0.5vw",
        1: "1vw",
        2: "1.3vw",
        3: "3vw",
      },
    },
  },
  plugins: [],
};
