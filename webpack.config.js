const path = require("path");

const HTMLWebpack = require("html-webpack-plugin");

const HTMLWebpackPlugin = new HTMLWebpack({
  template: path.resolve(__dirname, "src/index.html"),
});

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  plugins: [HTMLWebpackPlugin],
  /* For external CDN: Access-Control-Allow-Origin: * HTTP header */
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
