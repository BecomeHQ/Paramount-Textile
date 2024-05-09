const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    ['global']: './src/global/index.js',
    ['home']: './src/home/index.js',
    ['about']: './src/about/index.js',
    ['initiatives']: './src/initiatives/index.js',
    ['products']: './src/products/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
    clean: true,
  },
}
