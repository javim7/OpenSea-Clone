const path = require('path')

module.exports = {
     // entry: './src/index.js' <- Esta es la entrada por defecto 
    mode: "development",
    devServer: {
        static: "./build",
    },
    output: {
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                         [
                            '@babel/preset-react',
                            {
                                runtime: 'automatic'
                            }
                        ]
                    ]

                }
            },
             {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
        ]
    }
}

