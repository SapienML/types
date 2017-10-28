var path = require('path');
var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
module.exports = {
 entry: './src/main.ts',
 resolve: {
   extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
   plugins: [
    new TsConfigPathsPlugin(/* { tsconfig, compiler } */)
]
 },
 module: {
   loaders: [
     { test: /\.ts$/, loader: 'awesome-typescript-loader' }
   ]
 },
 output: {
   filename: 'bundle.js',
   libraryTarget :'commonjs2',
   path: path.resolve(__dirname, 'dist')
 }
}