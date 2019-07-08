import request from '../utils/request';
export function swiperImg(){
    return request.post("/api/open/page/home/list/1.0.0")
}