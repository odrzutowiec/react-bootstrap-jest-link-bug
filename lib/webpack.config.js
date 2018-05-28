const path = require('path')
const nodeExternals = require('webpack-node-externals')
const jsxPlugin = require('babel-plugin-transform-react-jsx')

const config = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },
  externals: [nodeExternals()],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    library: 'lib',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: path.resolve('./node_modules'),
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0'],
          plugins: [jsxPlugin],
        },
      },
    ],
  },
}

module.exports = config
