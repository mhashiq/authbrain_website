export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A56DB',
          hover: '#1E40AF',
          light: '#EBF5FF',
          dark: '#1E3A8A',
        },
        surface: '#FFFFFF',
        canvas: '#FAFAFA',
        subtle: '#F8FAFC',
        card: '#FFFFFF',
        'gray-border': '#E5E7EB',
        'text-main': '#111827',
        'text-muted': '#374151',
        'text-subtle': '#6B7280',
        ink: '#111827',
        panel: '#FFFFFF',
        line: '#E5E7EB',
        accent: '#1A56DB',
        mist: '#F5F6F8',
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