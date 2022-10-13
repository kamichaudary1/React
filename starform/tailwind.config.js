/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora"],
      },
      colors: {
        beige: '#E8B222',
        'mainbody-blue': '#132237'
      },
      screens: {
        'xs': '320px',
        'tablet': '992px',
        'ipad': '1200px',
        '1xl': '1350px',
        'laptopview': '1400px',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'banner-gradient': (angle) => ({
            'background-image': `linear-gradient(180deg, rgba(19, 34, 55, 0) 0%, #132237 100%);`,
          }),
          'banner-gradientopaciity': (angle) => ({
            'background-image': `linear-gradient(${angle}, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
          }),
          'media-gradient': (angle) => ({
            'background-image': `linear-gradient(359.48deg, #0C1623 26.57%, rgba(12, 22, 35, 0) 99.56%);`,
          }),
          'media-gradientopaciity': (angle) => ({
            'background-image': `linear-gradient(${angle}, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              0: '0deg',
              10: '10deg', // bg-gradient-10
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              120: '120deg',
              135: '135deg',
              145: '145deg',
              150: '150deg',
              155: '165deg',
              160: '160deg',
            },
          ),
        },
      );
    }),
  ],
}
