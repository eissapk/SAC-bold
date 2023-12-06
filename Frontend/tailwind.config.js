/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      screens: {
        sm: "600px",
        md: "962px",
        lg: "1100px",
        xl: "1228px",
      },
    extend: {
      margin: {
        1: "1vw",
        2: "1.3vw",
        3: "3vw",
      },
      padding: {
        1: "1vw",
        2: "1.3vw",
        3: "3vw",
      },
    },
  },
  plugins: [],
}
