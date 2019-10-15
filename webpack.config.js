const path = require('path')
const webpack = require('webpack')
const fs = require('fs')
const glob = require('glob')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//создаем постоянный объект PATHS, чтобы не прописывать везде вручную при смене директорий
const PATHS = {
    src: path.join(__dirname,'src'),
    pug: path.join(__dirname, 'src/pug'),
    dist: path.join(__dirname, 'dist'),
    assets: path.join(__dirname, 'dist/assets')
}
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
    entry: {
        main: `${PATHS.src}/index.js`,
        Form_Elements: `${PATHS.src}/Form_Elements.js`,
        ColorType: `${PATHS.src}/colorType.js`,
        Cards: `${PATHS.src}/Cards.js`,
        HeaderFooter: `${PATHS.src}/Header&Footer.js`
    },
    output: {
        filename: '[name].js',
        path: `${PATHS.dist}`,
        publicPath: ''
    },
    module: {
        rules: [ {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: './postcss.config.js' } }
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        }, {
            test: /\.(woff(2)?|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader',
                options: {
                    publicPath: '../../',
                    name: 'assets/fonts/[name].[ext]'
                }
        }, {
            test: /\.(png|jpg|gif)$/,
            use:[ {
              loader: 'file-loader',
              options: {
                publicPath: '../../',
                name: 'assets/img/[name].[ext]'
              }
            }
         ]
          }, {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        } ]
    },
    devServer: {
        contentBase: 'dist',
        index: 'dist/pages/UI/Form_Elements.html',
        port: 3000,
        stats: 'errors-only',
        overlay: true
    },
    // devtool: 'source-map',
    plugins: [ 
        new MiniCssExtractPlugin({
            filename:"./assets/css/[name].css",
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/assets/img`, to: `${PATHS.dist}/assets/img`},
            // { from: `${PATHS.src}/assets/fonts`, to: `${PATHS.dist}/assets/fonts` }
            //{ from: PATHS.src + '/static' }
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/pug/blocks/__elements/ColorType.pug',
            filename: '/pages/UI/ColorType.html',
            inject: true,
            chunks: ['<index>']
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/pug/blocks/__elements/Form_Elements.pug',
            filename: '/pages/UI/Form_Elements.html',
            inject: true,
            chunks: ['<index>']
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/pug/blocks/__elements/Cards.pug',
            filename: '/pages/UI/Cards.html',
            inject: true,
            chunks: ['<index>']
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/pug/blocks/__elements/Header&Footer.pug',
            filename: '/pages/UI/Header&Footer.html',
            inject: true,
            chunks: ['<index>']
        })

    ],

}

// дополнение, чтобы вручную не прописывать пути к pug файлам
// формат добавления паг файлов find_pug('pathFrom', 'pathTo')
// let find_pug = (src,save) => {
//     let pages = glob.sync(__dirname + "/src/pug/" + src + "/*.pug");
//     pages.forEach(function (file) {
//       let base = path.basename(file, '.pug');
//       config.plugins.push(
//         new HtmlWebpackPlugin({
//           filename: save + base + '.html',
//           template: `${PATHS.pug}/${src}/` + base + '.pug',
//           inject: true
//         })
//       )
//     });
// }

// find_pug('blocks/cards', "/pages/");
// find_pug('blocks/__elements', '/pages/UI/');

module.exports = config

