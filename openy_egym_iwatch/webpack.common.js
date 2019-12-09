const SassLintPlugin = require('sass-lint-webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')


module.exports = {
  entry: './webpack-entry.js',
  plugins: [
    new SassLintPlugin({
      files: path.resolve(__dirname) + '/src/**/*.scss'
    }),
    new MiniCssExtractPlugin({
      filename: "./css/openy_egym_iwatch.css",
      sourceMap: true,
      options: {
        sourceMap: false,
        watch: true,
      }
    }),
  ],

  devtool: 'source-map',
  output: {
    sourceMapFilename: 'css/openy_egym_iwatch.css.map',
  }
};
