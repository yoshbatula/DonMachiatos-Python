/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './core/templates/**/*.html',
    './myproject/templates/**/*.html',
    './core/static/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'django': '#0c4b33',
      }
    },
  },
  plugins: [],
}
