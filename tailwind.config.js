/** Marsekal ID — Tailwind config (dipindah dari inline <script> di index.html, 24 Nov 2026).
 *  Build ulang setelah menambah class Tailwind baru:
 *    npx tailwindcss -c tailwind.config.js -i tailwind-input.css -o assets/tailwind.css --minify
 *  (jalankan dari root repo; butuh tailwindcss@3)
 *  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './index.redesign.html',
    './layanan/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0F172A',
          secondary: '#334155',
          accent: '#0369A1',
          accentDark: '#075985',
          accentTint: '#E0F2FE',
          background: '#F8FAFC',
          foreground: '#020617',
          card: '#FFFFFF',
          muted: '#E8ECF1',
          mutedfg: '#475569',
          border: '#E2E8F0',
          destructive: '#DC2626',
          wa: '#25D366',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        md: '0 4px 6px rgba(0,0,0,0.1)',
        lg: '0 10px 15px rgba(0,0,0,0.1)',
        xl: '0 20px 25px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
};
