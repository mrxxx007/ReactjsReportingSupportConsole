var ExtractTextPlugin = require ('extract-text-webpack-plugin');

var config = {
   entry: './js/source/app.js',
	
   output: {
      path:'./',
      filename: 'bundle.js',
   },
   
   resolve: {
        modulesDirectories: ['node_modules']
   },
	
   devServer: {
      inline: true,
      port: 8082
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
         }
      ]
   },
   
   plugins: [
        new ExtractTextPlugin('bundle.css')
   ]
}

module.exports = config;