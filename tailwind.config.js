// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Your theme extensions
      // e.g., colors: { 'stox-green': '#34D399' }
    },
  },
  plugins: [
    // Official v4 plugins go here if needed, e.g.,
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
};