/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#A2BCFF',
        'bg-card': '#191C22',
        'badge-bg': '#242934',
        'text-primary': '#EDEDED',
        'text-secondary': '#CDD4E4',
        'text-ondark': '#EDF2FF',
      },
      fontFamily: {
        onest: ['Onest', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      screens: {
        xs: '390px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
};
