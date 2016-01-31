var webpack = require('webpack');
var getConfig = require('hjs-webpack')

var config = getConfig({
  in: 'src/app.js',
  out: 'dist',
  clearBeforeBuild: true,
  isDev: process.env.NODE_ENV !== 'production',
});

module.exports = config;
