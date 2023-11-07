/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "hsla-white": "hsla(0, 0%, 100%, 0.7)",
        search: "hsla(40,20%,97%,0.7);",
      },
      boxShadow: {
        "nav-shadow": "0 0 15px rgba(0,0,0,.1)",
      },
    },
    screens: {
      sm: "500px",
      lg: "1024px",
    },
  },
  plugins: [],
};
