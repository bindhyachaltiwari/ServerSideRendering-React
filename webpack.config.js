const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: './style/style.css'
});
module.exports = {
  entry: {
    app: './src/client.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"   
  },
  module: {
    rules: [
    {
                test: /\.scss$/,
                include: [path.resolve(__dirname, 'assets','sass')],
                use: extractPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                            
                        }
                    }
                    ],
                    fallback: 'style-loader'
                })
            },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      
    ]
 },
 plugins: [
        
        extractPlugin
    ],

}
