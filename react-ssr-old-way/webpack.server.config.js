const path = require("path");
const { exec } = require("child_process");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve("server-build"),
    filename: "index.js",
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
  },
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.watchRun.tap("WatchRunPlugin", (compilation) => {
          console.log(compilation.modifiedFiles, '=========='); 
          const clientChanged = [...(compilation.modifiedFiles ?? [])].some(filePath => filePath.includes('/src/'));
          if (clientChanged) {
            console.log("building client components...");
            exec("npm run build", (err, stdout, stderr) => {
              if (stdout) process.stdout.write(stdout);
              if (stderr) process.stderr.write(stderr);
            });
          }
        });
      },
    },
  ],
};
