/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hanafont: ["HanaFont"],
      },
    },
    colors: {
      hana: "#008485",
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },

  plugins: [require("flowbite/plugin")],
  corePlugins: {
    fontFamily: true,
  },
};
