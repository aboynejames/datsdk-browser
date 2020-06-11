const path = require('path')
// npx webpack --config webpack.config.js
module.exports = {
  entry: './index.js',
  target: 'web',
  resolve: {
    alias: {
      fs: 'graceful-fs'
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
