import request from "../utils/request"

// 今日推荐
export function getRecommend(){
    console.log(1)
    return request.post('/api/open/product/category/sub/1');
}
