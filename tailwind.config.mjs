const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#864974",
        base: "#E0E0E0",
      },
      backgroundImage: {
        signin:
          "url(/public/images/grain-bg.png), linear-gradient(170deg, #A283AB -10.14%, #0D3C56 69.45%);",
      },
      boxShadow: {
        button:
          "0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 2px 9px 0px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
