const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "{{BG_COLOR}}",
        "navy-soft": "{{BG_COLOR_SOFT}}",
        green: "{{PRIMARY_COLOR}}",
        blue: "{{ACCENT_COLOR}}",
        ink: "{{INK_COLOR}}",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
