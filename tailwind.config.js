/** @type {import('tailwindcss').Config} */
export default {
  // content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'cnsb-image': "url('../src/assets/images/cnsb-image.webp')",
        'space-image': "url('../src/assets/images/space-image.webp')",
      }
    },
  },
  plugins: [],
}

