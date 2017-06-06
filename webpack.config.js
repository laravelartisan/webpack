var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                //test:/\.css/, loaders:'style-loader!css-loader' PREVIOUS VERSION
                test:/\.scss/,
                //use:ExtractTextPlugin.extract(['style-loader','css-loader','sass-loader'])
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader",'sass-loader'],
                    publicPath: "/dist"
     })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({
         filename: "app.css",
         disable: false,
         allChunks: true
        })
    ]
}