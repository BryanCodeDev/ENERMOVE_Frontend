/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0C4EA8',
          blueDark: '#08356F',
          charcoal: '#2C2C2A',
          ink: '#171716',
          mist: '#F4F6F3',
          line: '#E5EAE3',
          sand: '#F8F7F2',
          whatsapp: '#25D366',
          whatsappHover: '#1EBE5A',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(23, 23, 22, 0.08)',
        lift: '0 16px 40px rgba(12, 78, 168, 0.18)',
        liftStrong: '0 22px 55px rgba(12, 78, 168, 0.28)',
      },
      borderRadius: {
        'card': '1.25rem',
        'media': '1.5rem',
        'button': '9999px',
        'input': '0.75rem',
      },
      maxWidth: {
        page: 'min(1200px, 100%)',
      },
    },
  },
  plugins: [],
};
