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
        raspberrybox: 'linear-gradient(166deg, #FFFDF9 -16.07%, #ECC7BB 81.36%)',
        cosmo: 'url("/images/elements/grain-bg.png"), linear-gradient(170deg, #F9A68B -10.14%, #0D3C56 98.39%)',
        cosmobox: 'linear-gradient(166deg, #FFFFFF -16.07%, #ECC8BB 81.36%)',
        pina: 'url("/images/elements/grain-bg.png"), linear-gradient(170deg, #F9C08C -10.14%, #0D3C56 98.39%)',
        pinabox: 'linear-gradient(166deg, #FFFDF9 -16.07%, #ECD3BB 81.36%)',
        gin: 'url("/images/elements/grain-bg.png"), linear-gradient(170deg, #B2C196 -10.14%, #0D3C56 98.39%)',
        ginbox: 'linear-gradient(166deg, #FFFFFF -16.07%, #C7DBB7 81.36%)',
        lagoon: 'url("/images/elements/grain-bg.png"), linear-gradient(170deg, #9EB5C2 -10.14%, #0D3C56 98.39%)',
        lagoonbox: 'linear-gradient(166deg, #FAFEFF -16.07%, #B1DCFC 81.36%)',
        lalemon: 'url("/images/elements/grain-bg.png"), linear-gradient(170deg, #B88DC3 -10.14%, #0D3C56 98.39%)',
        lalemonbox: 'linear-gradient(166deg, #FBF6FE -16.07%, #E2C9E8 81.36%)',

      },
      colors: {
        mutedbrown: '#6D5958',
        salmon: '#EB7676',
        peach: '#DE7671',
        pineapple: '#E5986C',
        leaf: '#547937',
        tropical: '#3884EB',
        lavender: '#8D61A7',
      }
    },
  },
  plugins: [addDynamicIconSelectors()],
};
