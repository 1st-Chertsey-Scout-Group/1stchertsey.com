/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  useTabs: false,
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  tailwindConfig: "./tailwind.config.mjs",
};

export default config;
