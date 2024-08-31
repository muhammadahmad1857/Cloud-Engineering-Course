import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "550px",
        // => @media (min-width: 640px) { ... }

        md: "850px",
        // => @media (min-width: 800px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

      tab: '720px',
        // => @media (min-width: 720px) { ... }

        mob: '450px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
