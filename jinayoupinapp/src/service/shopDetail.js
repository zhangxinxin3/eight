import request from "@/utils/request";

export let getDetail = params =>{
    return request.post('/api/open/product/info/1.0.0?pid='+params)
}

export let  shopDetail = params =>{
    return request.post('/api/open/order/prepare/1.0.0',params)
}

export let pay = params =>{
    return request.post('/api/open/order/place/order/1.0.0',params)
}