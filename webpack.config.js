const path = require('path')
const isProduction = process.env.NODE_ENV == 'production'

// const config = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'viz.js',
//  //use config for react  and react-dom

    
//   },
//   module: {
//     test: /\.jsx?$/,
//     loader: 'babel-loader',
//     exclude: /node_modules/,
//     query: {
//         presets: ['es2015']
//     }
// }
 


// }

// module.exports = () => {
//   config.mode = isProduction ? "production" : "development"
//   return config
// }

module.exports = {
  entry: {
      app: './src/index.jsx',
      vendor: ["react","react-dom"]
      
  },
  mode: 'development',
  output: {
      filename: 'dist/[name].js',
      path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [{
          test: /\.jsx?$/,
          //exclude any files ending with .css
          
          use: {
              loader: 'babel-loader?cacheDirectory=true',
          }},{
            test: /\.css$/i,
            
            
            use: ["style-loader", "css-loader"],
            
      }]
    
  }
  
};