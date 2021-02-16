module.exports = {
  future: {
    purgeLayersByDefault: true,
    defaultLineHeights: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1025px',
        mobile: { max: '767px' },
        pad: { min: ' 768px', max: '1024px' },
        desktop: { min: '1025px' },
      },
      colors: {
        primary: 'var(--primary)',
        'primary-sub': 'var(--primary-sub)',
        'primary-opacity': 'var(--primary-opacity)',
        secondary: 'var(--secondary)',
        'gray-50': 'var(--gray-50)',
        'gray-200': 'var(--gray-200)',
        'gray-400': 'var(--gray-400)',
        'gray-600': 'var(--gray-600)',
        'gray-700': 'var(--gray-700)',
        'gray-900': 'var(--gray-900)',
        black: 'var(--black)',
        white: 'var(--white)',
        selection: 'var(--selection)',
        carousel: 'var(--carousel)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        'primary-sub': 'var(--text-primary-sub)',
        secondary: 'var(--text-secondary)',
        selection: 'var(--selection)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
