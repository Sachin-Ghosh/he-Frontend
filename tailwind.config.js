/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner1':'url(/images/banner-1.jpeg")',
        'banner2':'url("/images/banner-1.jpeg")'
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
      }
    },
  },
  plugins: [require("daisyui"),
  require('@tailwindcss/forms')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  function ({addUtilities}){
    const newUtilities ={
      "no-scrollbar::-webkit-scrollbar":{
        display:"none",
      },
      "no-scrollbar":{
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
    };
    addUtilities(newUtilities);
  }
};
