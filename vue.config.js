module.exports={
    configureWebpack:{
        resolve:{
            //1.配置哪些文件的后缀名可以省略
            // extension:[],
            //2.配置别名
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}
