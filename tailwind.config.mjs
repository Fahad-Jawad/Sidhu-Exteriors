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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:'#ed2229',
        primaryExtraLight:'#fef8f8',
        secondary:'#a5171c'
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      fontSize:{
        'xxs':"8px"
      ,
     },
    },
  },
  plugins: [],
};
