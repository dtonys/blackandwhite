/**
 * base config, read by development & production configs
 */
var path = require('path');
var webpack = require('webpack');
var argv = require('minimist')(process.argv.slice(2));

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

// full paths
var NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
var PUBLIC_BUILD_PATH = path.resolve(__dirname, 'public/build');
var FRONTEND_PATH = path.resolve(__dirname, 'frontend');

var config = {
  addVendor: function( name, path ){
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp(path));
  },
  resolveLoader: {                                // path to look for loaders
    root: NODE_MODULES_PATH
  },
  output: {
    path: PUBLIC_BUILD_PATH,                      // compiled assets will be sent here
    publicPath: "/build/"                         // url to get static assets (set by express.static)
  },                                              // used when webpack loads assets async
  entry: {
    'index': ['./frontend/index.js'],
    'layouts': ['./frontend/layouts.js'],
    'blackandwhite': ['./frontend/blackandwhite.js']  // Generate the public minified css
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      },
      {
        test: /\.jsx?$/,
        loaders: [
          'react-hot',
          'babel'
        ],
        include: [ FRONTEND_PATH ]
      },
      // expose react global for dev tools
      {
        test: require.resolve("react"),
        loader: "expose?React"
      }
    ]
  },
  resolve: {
    alias: {},
    modulesDirectories: [
      "web_modules",
      "frontend",
      "frontend/vendor",
      "stylesheets",
      "node_modules"
    ]
  },
  plugins: argv['skip-commons-chunk-plugin']
     ? []
     : [ new CommonsChunkPlugin({ name: "common" }) ]
};

// config.addVendor( 'jquery', __dirname + '/node_modules/jquery/dist/jquery.min.js' );

module.exports = config;
