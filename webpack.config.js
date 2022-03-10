const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const rulesForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const ruleForReact = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {runtime: "automatic"}
      ]
    ]
  }
};

const rules = [ruleForReact, rulesForStyles];

module.exports = (env, argv) => {
  const {mode} = argv;
  const isProd = mode === 'production';
  return {
    output: {
      filename: isProd ? "mytheresa.[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
      new HtmlWebpackPlugin({template: "src/index.html"}),
      new CleanWebpackPlugin()
    ],
    module: {rules},
    devServer: {
      open: true,
      port: 3000,
    },
    devtool: 'source-map'
  }
}
