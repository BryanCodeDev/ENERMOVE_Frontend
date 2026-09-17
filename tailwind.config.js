/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#185FA5',
          blueDark: '#124A82',
          green: '#639922',
          greenDark: '#4A7518',
          charcoal: '#2C2C2A',
          ink: '#171716',
          mist: '#F4F6F3',
          line: '#E5EAE3',
          sand: '#F8F7F2',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(23, 23, 22, 0.08)',
        lift: '0 16px 40px rgba(24, 95, 165, 0.12)',
      },
      maxWidth: {
        page: '1200px',
      },
    },
  },
  plugins: [],
};
