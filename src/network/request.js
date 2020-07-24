import axios from 'axios'
export function request(config){
    //1.创建axios的实例
    const axiosInstance=axios.create({
        baseURL:"http://123.207.32.32:8000",
        timeout:5000
    })
    //2.创建拦截器
    //请求拦截
    axiosInstance.interceptors.request.use(config=>{
        //1.配置config或者转化参数
        //2.设置网络请求的动画
        //3.某些路径的特殊设置
        return config;
    },err=>{})
    //响应拦截
    axiosInstance.interceptors.response.use(result=>{
        return result.data
    },err=>{})
    //3.发送网络请求
    return axiosInstance(config)
}
// 使用方法
// request({
//     url:"",
//     method:""
// }).then(()=>{})
//     .catch(()=>{})
