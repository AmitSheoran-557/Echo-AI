/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': "#01000B", 
      },
      backgroundImage: {
        'hero-bg': "url('./assets/images/png/hero-bg-img.png')",
      },
    },
  },
  plugins: [],
};
