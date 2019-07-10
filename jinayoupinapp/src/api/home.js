import request from '@/utils/request';
//获取swiper
export function swiperImg(){
    return request.post("/api/open/page/home/list/1.0.0")
}
//今天推荐 scrollx滚动数据
export function getRecommed(){
    return request.post('/api/open/product/category/query/1.0.0');
}
//为你精选滚动的数据
export function scrollTo(page){
    return request.post('/api/open/page/home/products/1.0.0?pageIndex='+page);
}
//搜索
export function searchTo(params){
    return request.post('/api/open/search/query/1.0.0',params);
}
//banner图进入详情接口
export function bannerTo(siid){
    return request.post('/api/open/sepcial/query/1.0.0?siid='+siid);
}