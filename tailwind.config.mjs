export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        richblack: '#0D0D0D',
        charcoal: '#3A3A3A',
        warmwhite: '#FAFAF8',
        softgray: '#F4F3F1',
        divider: '#E5E3E0',
        brand: {
          DEFAULT: '#E64A25',
          hover: '#C93E1D',
          light: '#FDF2F0',
          border: '#F8D5CE',
        },
        primary: {
          DEFAULT: '#E64A25',
          hover: '#C93E1D',
          light: '#FDF2F0',
          dark: '#B03214',
        },
        surface: '#FFFFFF',
        canvas: '#FAFAF8',
        subtle: '#F4F3F1',
        card: '#FFFFFF',
        'gray-border': '#E5E3E0',
        'text-main': '#0D0D0D',
        'text-muted': '#3A3A3A',
        'text-subtle': '#6B7280',
        ink: '#0D0D0D',
        panel: '#FFFFFF',
        line: '#E5E3E0',
        accent: '#E64A25',
        mist: '#F4F3F1',
      },
      boxShadow: {
        enterprise: '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'card-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 32px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        clinical: '0 0 0 1px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.06)',
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
          '50%': { transform: 'scale(1.08)', opacity: '1' },
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