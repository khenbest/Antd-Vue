module.exports = {
  outputDir: "public",
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/sass/main.scss";`,
      },
    },
  },
};
