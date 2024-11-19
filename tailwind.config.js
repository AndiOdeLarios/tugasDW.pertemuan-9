module.exports = {
  content: ["./src/**/*.html"], // Lokasi file HTML
  darkMode: 'class', // Mengaktifkan dark mode dengan class
  theme: {
    extend: {
      colors: {
        primary: '#0D9488', // Warna hijau teal
        secondary: '#F87171', // Warna merah salmon
        headerBg: '#2D3748', // Warna gelap untuk header
        heroBg: '#EDF2F7', // Warna terang untuk hero section
        gridBg: '#E2E8F0', // Warna netral untuk grid layout
        footerBg: '#1A202C', // Warna gelap untuk footer
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Font kustom
      },
    },
  },
  plugins: [],
};
