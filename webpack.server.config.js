// See:
// https://ssr.vuejs.org/guide/build-config.html#server-config
// https://github.com/vuejs/vue-hackernews-2.0/blob/master/build/webpack.server.config.js

const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
  target: 'node',
  mode: process.env.NODE_ENV || 'development',
  devtool: '#source-map',
  entry: './entry-server.js',
  output: {
    filename: 'vue-ssr-server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    alias: {
      "~": ".",
    }
  },
  // https://webpack.js.org/configuration/externals/#externals
  // https://github.com/liady/webpack-node-externals
  externals: nodeExternals({
    // do not externalize CSS files in case we need to import it from a dep
    whitelist: /\.css$/
  }),
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin()
  ]
})
