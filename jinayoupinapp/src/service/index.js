import request from "@/utils/request"

// 今日推荐
export function getRecommeds(){
    return request.post('/api/open/product/category/query/1.0.0');
}
//获取点击奶粉的数据
export let getClassify = params =>{
    console.log('params',params)
    return request.post('/api/open/product/category/productList/1.0.0?pageIndex=' + params.pageIndex + '&cid='+params.cid+'&sortType=' + params.sortType)
}