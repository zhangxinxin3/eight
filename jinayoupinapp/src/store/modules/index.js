 import {getClassify} from '@/service/index'
 import {swiperImg,getRecommed,scrollTo} from '@/api/home'

const state={
    recommedList:'',
    saveItemList:[],
    cid:'',
    getclassifyList:[],
    swiperList:[],//swiper
    botList:[],//bot
    sixProductList:[],//列表数据
    adOneList:[],//列表大图
    recommendList:[],//scroll横向
    scrollToList:[],//scroll加载的数据
    pageIndex:1,
    sortType:1,
}
//异步改变
const actions={
   async getClassifyList({commit,state},payload){
      
        await payload.pageIndex&&commit('changePage',payload.pageIndex);
        await payload.sortType&&commit('changeSortType',payload.sortType);
        
        let obj={
            pageIndex:state.pageIndex,
            cid:payload.cid,
            sortType:state.sortType
        };
        let data = await getClassify(obj);
           commit('getClassify',data.result)
       
    },
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
  async scrollTo({commit,state},payload){
        commit('changePage',payload);
        let data=await scrollTo(payload);
        if(state.pageIndex===1){
            commit('scrollTo',data.result);
        }else{
            commit('scrollTo',[...state.scrollToList,...data.result]);
        }
    },

}
//同步改变
const mutations = {
    //到单独的组件里 将item保存到vuex里
    saveItem(state,payload){
       state.cid = payload.cid;
       state.saveItemList = payload.childs;
    },
    getClassify(state,payload){
        if(state.pageIndex===1){
            state.getclassifyList = payload;
        }else{
            payload.map((item)=>{
              state.getclassifyList.push(item)
            });
        }
    },
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
    },
    changePage(state,payload){
        state.pageIndex=payload
    },
    changeSortType(state,payload){
        state.sortType=payload
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
