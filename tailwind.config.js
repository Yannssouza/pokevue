module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      spacing: {
        128: "30rem",
      },
      backgroundImage: {
        main: "url('/src/assets/background.jpg')"
      },
    },
  },
  plugins: [],
};
