/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        reakh: {
          primary: '#77C232',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#3d4451',
          red: '#BC4242',
          'base-100': '#ffffff'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
