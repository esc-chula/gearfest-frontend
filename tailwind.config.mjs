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
      colors: {
        mutedpurple: "#864974",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
