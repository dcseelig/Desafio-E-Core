const path = require('path');
module.exports = {
  entry: './src/index.js', // O ponto de entrada do seu aplicativo
  output: {
    path: path.resolve(__dirname, 'dist'), // O diretório de saída para os arquivos compilados
    filename: 'bundle.js', // O nome do arquivo de saída
  },
  // Outras configurações do Webpack, como loaders e plugins, podem ser adicionadas aqui
};