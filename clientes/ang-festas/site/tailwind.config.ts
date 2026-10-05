const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lilac: "#e8dff5",
        pink: "#fce1e4",
        yellow: "#fff3cd",
        mint: "#d4f4dd",
        peach: "#ffe5d9",
        blue: "#d0e8ff",
        purple: "#9b72cf",
        coral: "#ff7f7f",
        green: "#6bcf7f",
        cream: "#fffbf5",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
