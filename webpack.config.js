const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs')

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: false,
        })
    })
}

const htmlPlugins = generateHtmlPlugins('./src/html/views')

module.exports = {
    entry: [
        './src/js/index',
        './src/scss/style.scss'
    ],

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000
    },

    devtool: 'cheap-eval-source-map', // remove for build

    module: {
        rules: [
            {
                test: /\.(woff2?|ttf|otf|eot|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/html/includes'),
                use: ['raw-loader']
            },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './src/img',
                to: './img'
            }
        ]),
        new ExtractTextPlugin({
            filename: './css/style.bundle.css',
            allChunks: true,
        }),
    ]
    .concat(htmlPlugins)
};