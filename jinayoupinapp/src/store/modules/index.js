import {swiperImg} from '@/api/home';
// 原始数据
const state = {
    swiperList:[]
}
// 同步改变, 改变数据的唯一途径
const mutations = {
    //swiper同步
    swiperImg(state,payload){
        state.swiperList=payload;
        console.log("swiper",state.swiperList)
    }
}

// 异步改变
const actions = {
    //swiper
    swiperImg({commit},payload){
        let data=swiperImg();
        data.then(res=>{
            let arrData=res.result[0].items;
            commit("swiperImg",arrData)
            // console.log(res.result[0].items)
        })
    }
}
// 派生数据
const getters = {
   
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
