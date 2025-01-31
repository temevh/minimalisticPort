/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0c0f11",
        foreground: "#0c0f11",
        accentOrange: "#D16002",
        discord: "#5662f6",
        linkedin: "#0077B5",
        graytext: "#949494",
      },
    },
  },
  plugins: [],
};
