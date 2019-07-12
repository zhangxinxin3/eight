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

export let shopDetail = params =>{
    return request.post('/api/open/order/prepare/1.0.0',params)
}

export let pay = params =>{
    return request.post('/api/open/order/place/order/1.0.0',params)
}

export let share = params =>{
    console.log('params',params)
    return request.post('/api/open/product/info/1.0.0',params)
}
