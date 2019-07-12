import request from "@/utils/request";
//获取详情swiper图片
export let getDetail = params =>{
    return request.post('/api/open/product/info/1.0.0?pid='+params)
}
//获取选择的颜色还是规格
export let getChoose = params =>{
    // console.log('params',params)
    return request.post('/api/open/product/sku/attrs/1.0.0?pid='+params)
}
//获取提示邮费地址
export let getAddress = params =>{
    return request.post('/api/open/shipping/templates/info/1.0.0?sstid='+params)
}
//获取详情下边的图片
export let getDownPic = params =>{
    return request.post('/api/open/product/detailPicture/1.0.0'+params)
}
// //获取弹框的值
// export let getMask = params=>{
//     return request.post('/api/open/product/sku/query/1',params);
// }
//未查询到
export let noneFind = params =>{
    return request.post('/api/open/product/coupon/productCouponList/1.0.0?pid='+'50408'+'&bid'+'115'+'&uid'+'150'+'&usiid')
}

//  ****详情数据
// Request URL: https://upapi.jinaup.com/api/open/product/info/1.0.0
// Request Method: POST
// Form Data:{
//             pid: 36280
//            }
//  description:说明
           
// ****提示
// Request URL: https://upapi.jinaup.com/api/open/shipping/templates/info/1.0.0
// Request Method: POST
// result: "西藏自治区,新疆维吾尔自治区不发货。
// Form Data:{
//             sstid: 22
//            }


// ****提示已下图片
//  Request URL: https://upapi.jinaup.com/api/open/product/detailPicture/1.0.0
//  Request Method: POST
//  Form Data:{
//               pid: 36280
//               basePid: 
//               userIdentity: 
//            }


// ******选择默认 
// Request URL: https://upapi.jinaup.com/api/open/product/sku/attrs/1.0.0
// Request Method: POST
//  Form Data:{
//              pid: 36551
//            }

// ****规格
// Request URL: https://upapi.jinaup.com/api/open/product/sku/attrs/1.0.0
// Request Method: POST
//  Form Data:{
//               pid: 36280
//            } 
