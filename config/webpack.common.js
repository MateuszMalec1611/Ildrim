const paths = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

const options = {
  policy: [
    {
      userAgent: "Googlebot",
      allow: "/",
      crawlDelay: 2,
    },
    {
      userAgent: "*",
      allow: "/",
    },
  ],
  sitemap: "https://ildirim.pl/sitemap.xml",
  host: "https://ildirim.pl/",
};


module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },

      // Images: Copy image files to build folder and optimize
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ],
      },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.src}/images`,
          to: `${paths.build}/images/`,
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    new ImageMinimizerPlugin({
      test: /\.(jpe?g|png)$/i,
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          ['mozjpeg', { quality: 50 }],
          ['imagemin-webp'],
        ],
      },
      deleteOriginalAssets: true,
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      favicon: paths.src + '/images/favicon.jpg',
      template: paths.src + '/template.html', // template file
      filename: 'index.html', // output file
    }),

    new RobotstxtPlugin(options)
  ],
}
