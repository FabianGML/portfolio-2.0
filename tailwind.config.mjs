/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#102542',
        accent: '#00f2ff'
      },
      fontFamily: {
        primary: ['Rubik Variable', 'sans-serif'],
        secondary: ['Outfit Variable', 'sans-serif']
      }
    }
  },
  plugins: []
}
