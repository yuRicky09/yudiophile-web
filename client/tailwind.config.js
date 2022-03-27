module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    maxWidth: {
      "8xl": "90rem",
    },
    extend: {
      keyframes: {
        "scale-from-top": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "scale-from-top": "scale-from-top 0.2s ease-out",
        "scale-from-top-reverse": "scale-from-top 0.2s ease-out reverse",
      },
    },
  },
  plugins: [],
};
