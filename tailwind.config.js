/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F8FB",
        ink: "#14172B",
        indigo: {
          DEFAULT: "#3B5BA8",
          deep: "#26356B",
          soft: "#E7ECF7",
        },
        gold: {
          DEFAULT: "#D9A93B",
          soft: "#F6E8C5",
        },
        sage: {
          DEFAULT: "#7FA98C",
          soft: "#E4EFE7",
        },
        clay: "#B9694A",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Cairo", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        card: "0 20px 60px -25px rgba(20, 23, 43, 0.35)",
        soft: "0 12px 30px -18px rgba(20, 23, 43, 0.25)",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
