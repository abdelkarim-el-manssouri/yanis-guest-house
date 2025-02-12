export default {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    "@fullhuman/postcss-purgecss": {
      content: ["./src/**/*.jsx", "./src/**/*.js", "./public/index.html"],
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
