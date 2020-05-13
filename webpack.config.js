const path = require("path");

const config = {
  mode: "development",

  output: { filename: "index.js", path: path.resolve("docs") },

  entry: path.resolve("./src/index.tsx"),

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },

  devtool: "source-map",

  resolve: { extensions: [".js", ".ts", ".tsx"] },

  devServer: {
    contentBase: path.resolve("docs"),
  },
};

module.exports = config;
