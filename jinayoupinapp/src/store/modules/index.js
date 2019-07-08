import {swiperImg,getRecommed,scrollTo} from '@/api/home';
// 原始数据
const state = {
    swiperList:[],//swiper
    botList:[],//bot
    sixProductList:[],//列表数据
    adOneList:[],//列表大图
    recommendList:[],//scroll横向
    scrollToList:[],//scroll加载的数据
    pageIndex:1
}
// 同步改变, 改变数据的唯一途径
const mutations = {
    //swiper同步
    swiperImg(state,payload){
        state.swiperList=payload;
    },
    //bot同步
    botImg(state,payload){
        state.botList=payload;
    },
    //组件列表同步
    sixProduct(state,payload){
        state.sixProductList = payload;
    },
    //组件图片同步
    adOne(state,payload){
        state.adOneList = payload;
    },
    //今日推荐scroll横向数据同步
    getRecommed(state,payload){
        state.recommendList = payload;
    },
    //为你精选scrollTo的同步
    scrollTo(state,payload){
        state.scrollToList = payload;
        console.log(state.scrollToList)
    }

}

// 异步改变
const actions = {
    swiperImg({commit},payload){
        let data=swiperImg();
        data.then(res=>{
            //swiper
            let swiperData=res.result[0].items;
            commit("swiperImg",swiperData);
            //bot
            let botData=res.result[1].items;
            commit("botImg",botData);
            //组件列表数据
            let sixProduct = res.result.filter(item=>item.type==='sixProduct');
            commit('sixProduct',sixProduct);
            //组件图片数据
            let adOne = res.result.filter(item=>item.type==='adOne');
            commit('adOne',adOne);
        })
    },
    //今天推荐scroll横向数据
    getRecommed({commit},payload){
        let data=getRecommed();
        data.then(res=>{
            commit('getRecommed',res.result);
        })
    },
    //为你精选scrollTo的数据
    scrollTo({commit,state},payload){
        let data=scrollTo(state.pageIndex);
        data.then(res=>{
            // console.log(res.result)
            commit('scrollTo',res.result);
        })
    },
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
