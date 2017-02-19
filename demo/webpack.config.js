const webpack = require('webpack');
const { resolve } = require('path');

const paths = {
    dist: resolve(__dirname, 'dist'),
    src: resolve(__dirname, 'src'),
};

module.exports = {
    entry: resolve(paths.src, 'index.tsx'),
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: paths.dist,
        publicPath: '/',
    },
    devServer: {
        hot: true,
        contentBase: paths.src,
        publicPath: '/',
        port: 4546,
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
        alias: {
            'preact-material-design': resolve(__dirname, '..'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [paths.src],
                use: ['awesome-typescript-loader'],
            },
            {
                test: /\.scss$/,
                include: [paths.src],
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
}
