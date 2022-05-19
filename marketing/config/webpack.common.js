module.exports={
    module:{
        rules:[
            {
                test:/\.m?js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react','@babel/preset-env'], 
                        //preset-react will convert the react to browser understandable JS and preset-env convert ES6,7 to browser understandable
                        plugins:['@babel/plugin-transform-runtime'],
                        //plugin-transform-runtime use to transform some other features
                    }
                }
            }
        ]
    }
}