import request from '@/utils/request'

export function getUser() {
    return request.post('/api/open/user/info/only/1.0.0')
}

export function products(params) {
    console.log(params)
    return request.post('/api/open/order/query/1.0.0?pageIndex=' + params.pageIndex + '&orderStatus=' + params.orderStatus)
}

export function coupons(params) {
    console.log(params)
    return request.post('/api/open/user/coupon/userCouponInfoList/1.0.0?state=' + params.state)
}
export function nums(){
    return request.post('/api/open/order/tips/1.0.0')
}
//添加收货地址
export function Cargoaddress(params) {
    console.log("添加地址页的params。。。", params)
    return request.post('/api/open/user/address/addAddress/1.0.0', params)
}
//取消订单
export function cacel(params){
    return request.post('/api/open/order/cancel/order/1.0.0',params)
}