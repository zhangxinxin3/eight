/* eslint-disable */
import Fly from "flyio/dist/npm/wx"

export let fly = new Fly

//设置超时
<<<<<<< HEAD
fly.config.timeout = 10000;
//设置请求基地址
fly.config.baseURL = 'https://upapi.jinaup.com/api/open/'
=======
fly.config.timeout=10000;
//设置请求基地址
fly.config.baseURL = 'https://upapi.jinaup.com/'
>>>>>>> 71744290b65d3a9102158eda11b83b4df3543f2b
// fly.config.baseURL = "http://123.206.55.50:7001/"
// fly.config.baseURL = "http://169.254.12.68:7001/"
// fly.config.baseURL = 'http://127.0.0.1:7001/'

const HOST = 'https://127.0.0.1' // 更改
//添加请求拦截器
fly.interceptors.request.use((request) => {
<<<<<<< HEAD
    // 把openid放在请求头部
    let openid = wx.getStorageSync('openid');
    if (openid) {
        request.headers['openid'] = openid;
    }
    //给所有请求添加自定义header
    // request.headers["Cookie"] = map(cookies, (v, k) => k + '=' + v).join(';')
    //打印出请求体
    // console.log(request.body)
    //终止请求
    //var err=new Error("xxx")
    //err.request=request
    //return Promise.reject(new Error(""))

    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
=======
    request.headers['content-type'] = "application/x-www-form-urlencoded";
    request.headers['trackId'] = "F649B34989975F268EA5BC4927E7C2365DBB8293767D955992FF410009F6B2DE301BCDFBE166230EBF083C72B5B6A948277C0041980DAC5E46FA1EF475B12D4773F05A5E984CF1D814817C9546DF831BF9D9BD6C1F2231AFA450731B6837E7084E77DC9918A436BC";
    // 把openid放在请求头部
//   let trackId = wx.getStorageSync('trackId');
//   if (trackId){
//     request.headers['trackId'] = trackId;
//   }
  //给所有请求添加自定义header
  // request.headers["Cookie"] = map(cookies, (v, k) => k + '=' + v).join(';')
  //打印出请求体
  // console.log(request.body)
  //终止请求
  //var err=new Error("xxx")
  //err.request=request
  //return Promise.reject(new Error(""))

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
>>>>>>> 71744290b65d3a9102158eda11b83b4df3543f2b
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
<<<<<<< HEAD
    (response) => {
        if (response.request.url.indexOf(HOST) == 0) {
            let hcks = response.headers['set-cookie'] || response.headers['Set-Cookie']
            if (hcks != null) {
                hcks.forEach(v => {
                    let ck = v.split(';')[0].split('=')
                    cookies[ck[0]] = ck[1]
                })
            }
        }
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)

export default fly
=======
  (response) => {
    if (response.request.url.indexOf(HOST) == 0) {
      let hcks = response.headers['set-cookie'] || response.headers['Set-Cookie']
      if (hcks != null) {
        hcks.forEach(v => {
          let ck = v.split(';')[0].split('=')
          cookies[ck[0]] = ck[1]
        })
      }
    }
    //只将请求结果的data字段返回
    return response.data
  },
  (err) => {
    //发生网络错误后会走到这里
    //return Promise.resolve("ssss")
  }
)

export default fly
>>>>>>> 71744290b65d3a9102158eda11b83b4df3543f2b
