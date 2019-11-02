module.exports = {
  mode: "development",
  entry: "./src",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  watch: true,

  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000,
    watchContentBase: true
  },
  

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            }
          }
        ],
      },
    ]
  }
};