const path = require('path')
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

const config = {
    entry: {
        app: `${PATHS.src}/index.js`
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
            test: /\.css$/,
            use: [
                'style-loader',
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
            test: /\.scss$/,
            use: [
                'style-loader',
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
                name: '[name].[ext]'
            }
        }, {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        } ]
    },
    devServer: {
        overlay: true
    },

    plugins: [ 
        new MiniCssExtractPlugin({
            filename:"[name].css",
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/assets/img`, to: `${PATHS.assets}/img` },
            { from: `${PATHS.src}/assets/fonts`, to: `${PATHS.assets}/fonts` }
            //{ from: PATHS.src + '/static' }
        ]),

    ],

}
//дополнение, чтобы вручную не прописывать пути к pug файлам
// формат добавления паг файлов find_pug('pathFrom', 'pathTo')
let find_pug = (src,save) => {
    let pages = glob.sync(__dirname + "/src/pug/" + src + "/*.pug");
    pages.forEach(function (file) {
      let base = path.basename(file, '.pug');
      config.plugins.push(
        new HtmlWebpackPlugin({
          filename: save + base + '.html',
          template: `${PATHS.pug}/${src}/` + base + '.pug',
          inject: true
        })
      )
    });
}
// find_pug("/src/pug/cards", "./cards/")
find_pug('blocks/cards', "/UI/cards/");
find_pug('blocks/__elements', '/UI/_elements/');
// find_pug('/src/pug/blocks/__elements/text-field', "./__elemets/text-field/");


module.exports = config

