/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "proxima-bold": "proximanova-bold",
        "proxima-normal": "proximanova-regular",
        "proxima-semibold": "proximanova-semibold",
        "lulo": "LuloCleanW01-OneBold",
      },
      colors: {
        "light-green": "#0BB89D",
        "black1": "#050505",
        "dark-green": "#011210",
        "dark-brown": "#333333",
        "theme-green": "#02251F",
        "grey-white": "#C3C3C3"
      },
      fontSize: {
        "5xxl": "64px",
        "2xxl": "32px",
        "xxl": "26px",
      },
      lineHeight: {
        "150": "150%",
        "148": "148%",
        "120": "120%",
        "122": "122%",
      },
      boxShadow: {
        "small-green": "0px 0px 22.9px 0px #0BB89D1F;",
        "xs-green": "0px 0px 12px 6px #0BB89D0F;",
        "grey-green": "0px 0px 18.5px 0px #0BB89D4D;",
        "box-green": "0px 0px 20px 12px #0BB89D0F;",
        "green-large": "0px 0px 57.6px 0px #0BB89D;",
        "green-xl": " 0px 0px 30px 0px #0BB89D4D;",
        "small-black": "0px 0px 23.3px 0px #0000001F;",
      },
      backgroundImage: {
        "purple-green": "linear-gradient(134.44deg, #0BB89D -2.33%, #7D4EFF 98.65%);"
      },
      screens: {
        "992": "992px",
        "400": "400px",
        "430": "430px",
        "576": "576px"
      },
      borderRadius: {
        "200": "200px",
        "32": "32px",
        "4": "4px"
      }
    },
  },
  plugins: [],
}