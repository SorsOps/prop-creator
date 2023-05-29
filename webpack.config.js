const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',

  // This is necessary because Figma's 'eval' works differently than normal eval
  devtool: argv.mode === 'production' ? false : 'inline-source-map',

  entry: {
    ui: './src/app/index.tsx', // The entry point for your UI code
    code: './src/plugin/controller.ts', // The entry point for your plugin code
  },

  module: {
    parser: { javascript: { url: 'relative' } },
    rules: [
      { test: /\.m?js/, resolve: { fullySpecified: false } },
      {
        test: /\.js?$/, loader: 'swc-loader',
        include:/node_modules[\/\\](@tokens-studio|colorjs.io)/ 
      },
      // Converts TypeScript code to JavaScript
      {
        test: /\.tsx?$/, loader: 'ts-loader', options: {
          transpileOnly: true,
        }, exclude: /node_modules/
      },

      // Enables including CSS by doing "import './file.css'" in your TypeScript code
      { test: /\.css$/, use: ['style-loader', { loader: 'css-loader' }] },

      // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
      { test: /\.(png|jpg|gif|webp|svg)$/, loader: 'url-loader' },
    ],
  },

  // Webpack tries these extensions for you if you omit the extension like "import './file'"
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],

    mainFields: ['browser', 'module', 'main'],
  },
  target: ['web', 'es6'],
  output: {
    filename: '[name].js',

    path: path.resolve(__dirname, 'dist'), // Compile into a folder called "dist"
  },

  // Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app/index.html',
      filename: 'ui.html',
      chunks: ['ui'],
      cache: false,
    }),
    new ForkTsCheckerWebpackPlugin({
      async: argv.mode === 'development',
      typescript: {
        configFile: 'tsconfig.json',
      },
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/]),
  ],
});
