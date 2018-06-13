const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    'vue-zawuni': './src/index.js',
    'ssr': './src/ssr.js'
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist")
  }
};
