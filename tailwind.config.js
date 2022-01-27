module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./core/components/**/*.{js,ts,jsx,tsx}",
    "./core/layouts/**/*.{js,ts,jsx,tsx}",
    "./core/sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "#FF9900",
          accent: "#002BCA",
          light: "#3B86FF",
        },
        cyan: "#00C8AB",
        dark: {
          DEFAULT: "#1F2A44",
          light: "#5A7184",
          lightest: "#36425D",
        },
        blueGrey: "#525D7D",
        muted: "#141924B3",
        disabled: "#F5F5F7",
        grey: {
          DEFAULT: "#707070",
          light: "#E6E6F2",
          lighter: "#CECDD2",
          lightest: "#FAFAFA",
          dark: "#0C0C0C99",
          socialmedia: "#D2D2D7",
          black: "#000000DD",
          placeholder: "#919196",
          placeholderPlus: "#141924B2",
        },
        yellow: "#F4B83E",
      },
      spacing: {
        wrapper: "6rem",
        100: "34rem",
      },

      minHeight: {
        "todo-modal": "608px",
        "form-box": "621.73px",
      },
      maxHeight: {
        "todo-modal": "608px",
      },
      maxWidth: {
        "todo-modal": "470px",
        "form-box": "400.2px",
      },
      borderRadius: {
        circle: "50%",
        card: ".5rem",
        card_xl: "1rem",
      },
      borderWidth: {
        middle: ".5px",
      },
      width: {
        btn: "11.125rem",
        btn_x: "8.375rem",
      },
      height: {
        btn: "3.4rem",
        btn_x: "2.875rem",
        servicesSection: "21rem",
        28: "28rem",
      },
      padding: {
        404: "140px",
        btn: ".688rem",
      },
      margin: {
        input: "15px",
        inputModal: "22px",
        btnBtwInput: "23.44px",
        inputBetweenText: "30px",
      },

      animation: {
        scaleto: "scaleto .3s ease both",
      },
      keyframes: {
        scaleto: {
          "100%": { transform: "scale(1)" },
        },
      },
      lineHeight: {
        24: "24px",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".0,933rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3.2rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  variants: {
    extend: {
      border: ["checked"],
      display: ["group-hover"],
      padding: ["first", "last"],
    },
  },
  //plugins: [require("@tailwindcss/line-clamp"), capitalizeFirst],
};
