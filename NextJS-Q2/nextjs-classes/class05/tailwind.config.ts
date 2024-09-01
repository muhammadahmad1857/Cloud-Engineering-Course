import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'light': "#63b3ed",
          'default': "#4090e0",
          'dark': "#2d70b4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
