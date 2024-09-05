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
      screens: {
        sm: "550px",
        // => @media (min-width: 640px) { ... }

        md: "850px",
        // => @media (min-width: 800px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        tab: "720px",
        // => @media (min-width: 720px) { ... }

        xl: "1150px",
        // => @media (min-width: 720px) { ... }

        mob: "450px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
