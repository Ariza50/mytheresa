const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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

const rules = [ ruleForReact, rulesForStyles ];

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({template: "src/index.html"})
  ],
  module: { rules },
  devServer: {
    open: true,
    port: 3000,
  },
  devtool: 'source-map'
}
