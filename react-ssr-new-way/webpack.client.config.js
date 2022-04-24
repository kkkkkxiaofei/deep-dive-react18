const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/i,
        use: [
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // default
              encoding: "base64", // "utf8","utf16le","latin1","base64","hex","ascii","binary","ucs2"
            },
          },
        ],
      },
    ],
  }
};
