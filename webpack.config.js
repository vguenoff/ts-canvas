const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        app: "./src/game.ts"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    devtool: "source-map",
    resolve: {
        // Tell webpack to try adding ".ts" to `import ...` statements it parses
        extensions: [".ts", ".js"],
        modules: [ path.resolve(__dirname, "src"), path.resolve(__dirname, "node_modules")]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "./static" }
        ])
    ],
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        compress: true,
        port: 8000,
        host: "0.0.0.0"
    }
};
