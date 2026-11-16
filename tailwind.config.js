/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffdf5',
          100: '#fef9e8',
          200: '#fcf0c6',
          300: '#f9e29a',
          400: '#f5cd64',
          500: '#efb333',
          600: '#d9921b',
          700: '#b46e15',
          800: '#925317',
          900: '#794318',
        },
        dark: {
          950: '#050505',
          900: '#0a0a0a',
          850: '#0f0f11',
          800: '#141416',
          700: '#1c1c20',
          600: '#25252b',
          500: '#34343d',
          400: '#52525e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 25s linear infinite',
      }
    },
  },
  plugins: [],
}
