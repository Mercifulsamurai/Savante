/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", 'sans-serif'],
      },
      animation: {
        typewriter: 'typewriter 2s steps(50) forwards',
        caret: 'typewriter 2s steps(50) forwards, blink 1s steps(11) 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    
    },
  },
  plugins: [],
}

