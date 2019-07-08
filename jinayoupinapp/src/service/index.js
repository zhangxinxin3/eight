import request from "@/utils/request"

// 今日推荐
export function getRecommed(){
    return request.post('/api/open/product/category/query/1.0.0');
}
