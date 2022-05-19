const {merge} = require('webpack-merge');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig=require('./webpack.common');
const packageJSON=require('./../package.json');

const prodConfig={
    mode:'production',
    output:{
        filename:'[name].[contenthash].js',
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './MFMarketing':'./src/bootstrap'
            },
            shared:packageJSON.dependencies
        })
    ]
};

module.exports=merge(commonConfig,prodConfig);