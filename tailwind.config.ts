import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'main': '#323233',
        'content': '#646466',
        'tips': '#969799',
        'light': '#c8c9cc',
        'border': '#f5f5f5',
        'bg': '#f8f9fd',
        'disabled': '#c8c9cc',
        'primary':'#3259ce',
        'primary-dark': '#173daf',
        'primary-disabled': '#6f8bdd',
        'primary-light': '#d6def5',
        'success':'#2da641',
        'success-dark':'#139228',
        'success-disabled':'#96d2a0',
        'success-light':'#d5edd9',
        'warning':'#f98734',
        'warning-dark':'#f5761a',
        'warning-disabled':'#fcc39a',
        'warning-light':'#fee7d6',
        'error':'#fa3e3e',
        'error-dark':'#ed1f1f',
        'error-disabled':'#fd9f9f',
        'error-light':'#fed8d8',
        'info':'#909399',
        'info-dark':'#767a82',
        'info-disabled':'#c4c6c9',
        'info-light': '#f4f4f5',
        'trouble':'#ffb72a',
        'trouble-dark': '#f1a511',
        'trouble-disabled': '#ffdb95',
        'trouble-light': '#fff1d4',
        'cyanBlue':'#0FC6C2',
        'cyanBlue-dark': '#0AA5A8',
        'cyanBlue-disabled': '#B5F4EA',
        'cyanBlue-light': '#E8FFFB',
      }
    },
  },
  plugins: [],
};
export default config;
