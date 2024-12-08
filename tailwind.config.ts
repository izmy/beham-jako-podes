import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        podes: "#ff2e1c",
        strava: {
          DEFAULT: "#fc5200",
          dark: "#e34a00",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
