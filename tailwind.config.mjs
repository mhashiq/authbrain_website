export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        panel: '#0c0c0c',
        line: '#232323',
        accent: '#ff5a2a',
        mist: '#f5f2ec',
      },
      boxShadow: {
        clinical: '0 0 0 1px rgba(255,255,255,0.08), 0 18px 60px rgba(0,0,0,0.35)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'SFMono-Regular', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateX(-18%)', opacity: '0' },
          '12%': { opacity: '1' },
          '50%': { opacity: '0.65' },
          '100%': { transform: 'translateX(18%)', opacity: '0' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.12)', opacity: '1' },
        },
      },
      animation: {
        scan: 'scan 6s linear infinite',
        pulseSoft: 'pulseSoft 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};