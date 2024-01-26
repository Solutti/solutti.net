import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'primary': '#4527F4',
      'secondary': '#FFFFFF',
      'lilas': '#7D64F5',
      'green': '#D2FFBE',
      'gray-dark': '#232832',
      'gray': '#555A64',
      'gray-light': '#D2D7DC',
      'background':'#F7F6F2',
    },
    fontFamily: {
      sans: ['Anek_Gujarati', 'sans-serif'],
      serif: ['Anek_Gujarati', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};
export default config;
