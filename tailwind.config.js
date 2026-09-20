/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF9F6',
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#151412',
          soft: '#69655F',
          faint: '#A39E95',
        },
        line: '#E4E0D8',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.02em',
        tighter2: '-0.035em',
        wideish: '0.08em',
        wider2: '0.14em',
      },
      fontSize: {
        mega: ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        huge: ['clamp(2.1rem, 4.5vw, 3.5rem)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
      },
      transitionTimingFunction: {
        folio: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      maxWidth: {
        content: '1320px',
        prose: '62ch',
      },
    },
  },
  plugins: [],
}
