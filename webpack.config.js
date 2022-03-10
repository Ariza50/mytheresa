const path = require("path");

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
  module: { rules }
}
