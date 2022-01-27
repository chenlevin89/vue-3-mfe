const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const dependencies = require('./package.json').dependencies;

module.exports = {
    publicPath: process.env.PUBLIC_PATH,
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "vueRemote",
                library: {type: "var", name: "vueRemote"},
                filename: "remoteEntry.js",
                exposes: {
                    './Wrapper': {
                        import: './src/Wrapper.js',
                        name: 'vue_src_wrapper'
                    }
                },
                shared: {
                    'vue': {requiredVersion: `${dependencies['vue']}`, singleton: true},
                    'core-js': {requiredVersion: `${dependencies['core-js']}`, singleton: true},
                    'vue-router': {requiredVersion: `${dependencies['vue-router']}`, singleton: true}
                }
            })
        ],
        devServer: {
            historyApiFallback: true,
            hot:false,
            liveReload:true
        }
    }
}