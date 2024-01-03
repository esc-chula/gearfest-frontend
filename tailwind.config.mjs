const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      body: [],
    },
    extend: {
      backgroundImage: {
        raspberry: 'url("/images/elements/grain-bg.png"), linear-gradient(170deg, #F99B8C -10.14%, #0D3C56 98.39%)',
        raspberrybox: 'linear-gradient(166deg, #FFFDF9 -16.07%, #ECC7BB 81.36%)'
      },
      colors: {
        mutedbrown: '#6D5958',
        salmon: '#EB7676'
      }
    },
  },
  plugins: [addDynamicIconSelectors()],
};
