/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        "twitter": "rgb(29,155,240)",
        "twitter-hover": "rgb(26,140,216)",
      }
    },
  },
  daisyui: {
    themes: [
      {
        reakh: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: '#77C232',
          secondary: '#203C3E',
          accent: '#DFDFDF',
          neutral: '#3d4451',
          error: '#FF7474',
          info: '#3249C2'
        }
      },
      'light',
      'dark'
    ]
  },
  plugins: [require('daisyui')]
}
