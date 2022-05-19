const {merge} = require('webpack-merge')
const HTMLWebpackPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig=require('./webpack.common');
const packageJSON=require('./../package.json');

const devConfig={
    mode:'development',
    devServer:{
        port:8081
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './MFMarketing':'./src/bootstrap'
            },
            shared:packageJSON.dependencies,
        }),
        new HTMLWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}

module.exports=merge(commonConfig,devConfig)