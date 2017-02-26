module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: './public',
        filename: 'bundle.js'
    },

    devtool: "source-map",

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};