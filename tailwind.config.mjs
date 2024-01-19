import { addDynamicIconSelectors } from "@iconify/tailwind";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SukhumvitSet", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        raspberry:
          'url("/src/assets/images/grain-bg.png"), linear-gradient(170deg, #F9998C -10.14%, #650C17 98.39%)',
        raspberrybox:
          "linear-gradient(166deg, #FFFDF9 -16.07%, #ECC7BB 81.36%)",
        cosmo:
          'url("/src/assets/images/grain-bg.png"), linear-gradient(170deg, #F9A68B -10.14%, #C04343 98.39%)',
        cosmobox: "linear-gradient(166deg, #FFFFFF -16.07%, #ECC8BB 81.36%)",
        pina: 'url("/src/assets/images/grain-bg.png"), linear-gradient(170deg, #F9C08C -10.14%, #CB6100 98.39%)',
        pinabox: "linear-gradient(166deg, #FFFDF9 -16.07%, #ECD3BB 81.36%)",
        gin: 'url("/src/assets/images/grain-bg.png"), linear-gradient(170deg, #B2C196 -10.14%, #0D5649 98.39%)',
        ginbox: "linear-gradient(166deg, #FFFFFF -16.07%, #C7DBB7 81.36%)",
        lagoon:
          'url("/src/assets/images/grain-bg.png"), linear-gradient(170deg, #84C9EF -10.14%, #0D3C56 98.39%)',
        lagoonbox: "linear-gradient(166deg, #FAFEFF -16.07%, #B1DCFC 81.36%)",
        lalemon:
          'url("/src/assets/images/grain-bg.png"), linear-gradient(170deg, #D09DDE -10.14%, #30255A 98.39%)',
        lalemonbox: "linear-gradient(166deg, #FBF6FE -16.07%, #E2C9E8 81.36%)",
      },
      colors: {
        mutedbrown: "#6D5958",
        salmon: "#EB7676",
        peach: "#DE7671",
        pineapple: "#E5986C",
        leaf: "#547937",
        tropical: "#3884EB",
        lavender: "#8D61A7",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
