module.exports = {
    entry: './component/todo1.jsx',
    output: {
        path: __dirname,
        filename: './component/todo.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel',
                query:{presets:['react','es2015']}
            }

        ]
    }
}
