var webpack = require('webpack');

// paths
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'build');
var mainPath = path.resolve(__dirname, 'app/main.js');


var config = {
  entry: [
    // server hot update
    'webpack/hot/dev-server',
    mainPath
  ],
  output: {
    path: buildPath,
    filename: "bundle.js"
    // localhost:3000/conference.lohika.com/. That makes proxying easier to handle
    //publicPath: '/conference.lohika.com/'

  },
  module: {
    loaders: [
      // ES6/7 syntax and JSX transpiling out of the box
      { test: /\.js$/, loader: 'babel', exclude: [nodeModulesPath] },
      // SCSS -> CSS
      { test: /\.scss$/, loader: 'style!css!sass' },
      // templaiting
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      // images
      { test: /\.(png|jpg)$/, loader: 'url?limit=25000' },
      // fonts, for bootstrap also
      { test: /\.woff2$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },

      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },

      // bootsrap - work fix for jquery
      //{ test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' }
    ]
  },


  plugins: [
    // bootsrap - work fix for jquery
    new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
  ],
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee'] 
  }


};

if (process.env.NODE_ENV == "production"){
  config.entry = [mainPath];

}

module.exports = config;