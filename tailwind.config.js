/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: "#17180F",
        lime: "#C4E84F",
        mint: "#E6F0C8",
        bone: "#F7F5EA",
        sun: "#FFC83D",
        coral: "#FF7A59",
        muted: "#5E614F",
        danger: "#C8321F",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: { from: { opacity: "0", transform: "translateY(24px) scale(0.98)" } },
        float: { "50%": { transform: "translateY(-10px) rotate(2deg)" } },
        blink: { "0%, 92%, 100%": { transform: "scaleY(1)" }, "96%": { transform: "scaleY(0.1)" } },
        grow: { from: { transform: "scaleY(0)" } },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both",
        float: "float 6s ease-in-out infinite",
        blink: "blink 5s infinite",
        grow: "grow 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both",
      },
    },
  },
};
