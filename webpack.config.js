const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Точка входа
  entry: './src/index.ts',
  
  // Режим сборки
  mode: 'development',
  
  // Выходной файл
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Очищает dist перед каждой сборкой
  },
  
  // Dev Server
  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
  },
  
  // Модули и загрузчики
  module: {
    rules: [
      // JavaScript
      {
        test: /\.(js|)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {

          }
        }
      },
    ]
  },
  
  // Плагины
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  
  // Расширения файлов
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};