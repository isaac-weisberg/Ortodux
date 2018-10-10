module.exports = {
    target: 'node',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [ 
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}
