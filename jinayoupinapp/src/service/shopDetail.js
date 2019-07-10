import request from "@/utils/request";
export let getDetail = params =>{
    return request.post('/api/open/product/info/1.0.0?pid='+params)
}