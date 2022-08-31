const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { mergeWithRules } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = mergeWithRules({
  module: {
    rules: {
      test: "match",
      use: "prepend",
    },
  },
})(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/i,
        use: [MiniCssExtractPlugin.loader],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
});
