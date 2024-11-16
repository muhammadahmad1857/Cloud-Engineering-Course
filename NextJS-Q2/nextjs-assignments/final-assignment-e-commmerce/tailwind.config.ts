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
        text: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='50px' width='120px'><text x='0' y='15' fill='red' font-size='20'>NEWSLETTER</text></svg>",
      },
      keyframes: {
        showSuccess: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
        tipInPlace: {
          from: { width: "0em", top: "0em", left: "-1.6em" },
          to: { width: "2.4em", top: "4.3em", left: "1.4em", visibility: "visible" },
        },
        longInPlace: {
          from: { width: "0em", top: "5.1em", left: "3.2em" },
          to: { width: "4em", top: "3.70em", left: "2.75em", visibility: "visible" },
        },
      },
      animation: {
        showSuccess: "showSuccess 180ms ease-in-out",
        tipInPlace: "tipInPlace 300ms ease-in-out forwards 180ms",
        longInPlace: "longInPlace 140ms ease-in-out forwards 440ms",
      },
      screens: {
        sm: "550px",
        // => @media (min-width: 640px) { ... }

        md: "900px",
        // => @media (min-width: 800px) { ... }

        lg: "1025px",
        // => @media (min-width: 1024px) { ... }

        tab: "720px",
        // => @media (min-width: 720px) { ... }

        xl: "1150px",
        // => @media (min-width: 720px) { ... }

        xxl: "1536px",
        // => @media (min-width: 720px) { ... }

        mob: "450px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
