const path = require("path");

module.exports = {
  entry: path.join(__dirname, "./src/index.jsx"),
  output: {
    path: path.join(`${__dirname}/dist`),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/
      },
      {
        test: /\.png/,
        use: "file-loader?name=[path][name].[ext]&outputPath=images/"
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  },
  devtool: "source-map"
};
