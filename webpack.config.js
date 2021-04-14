module.exports = {
  entry: __dirname+'/src/index.ts',
  output: {
    path: __dirname+'/src',
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }
    ]
  },
  devtool: "eval-cheap-source-map"
};