import request from '@/utils/request'

export function getUser(){
    return request.post('/api/open/user/info/only/1.0.0')
}

export function products(params){
    console.log(params)
    return request.post('/api/open/order/query/1.0.0?pageIndex=' + params.pageIndex + '&orderStatus=' + params.orderStatus)
}

export function coupons(params){
    console.log(params)
    return request.post('/api/open/user/coupon/userCouponInfoList/1.0.0?state='+params.state)
}
