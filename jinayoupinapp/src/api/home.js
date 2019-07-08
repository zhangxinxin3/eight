import request from '@/untils/request';

export function one(){
    return request.post('/api/open/init/app/1')
}

export function two(parentId){
    return request.post('/api/open/product/category/sub/1',{
        parentId
    })
}

export function three(parentId){
    return request.post('/api/open/product/category/sub/1',{
        parentId
    })
}

export function four(pageIndex){
    return request.post('/api/open/page/home/products/1.0.0',{
        pageIndex
    })
}

export function four(){
    return request.post('/api/open/page/home/list/1.0.0')
}