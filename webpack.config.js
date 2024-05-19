const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    ['global']: './src/global/index.js',
    ['home']: './src/home/index.js',
    ['about']: './src/about/index.js',
    ['initiatives']: './src/initiatives/index.js',
    ['products']: './src/products/index.js',
    ['products/madeups']: './src/products/madeups/index.js',
    ['products/fabrics']: './src/products/fabrics/index.js',
    ['products/yarn-and-apparel']: './src/products/yarn-and-apparel/index.js',
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
