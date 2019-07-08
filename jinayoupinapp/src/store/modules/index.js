 import {getRecommed,getClassify} from '@/service/index'

const state={
    recommedList:'',
    saveItemList:[],
    cid:'',
    getclassifyList:[]
}
//异步改变
const actions={
    //今日推荐
    getRecommedList({commit},payload){
        let data = getRecommed();
        data.then(res=>{
           commit('getRecommed',res.result)
        })
    },
    getClassifyList({commit},payload){
        console.log('payload',payload)
        let obj={
            pageIndex:payload.pageIndex,
            cid:payload.cid,
            sortType:payload.sortType
        };
        let data = getClassify(obj);
        data.then(res=>{
           commit('getClassify',res.result)
        })
    }

}
//同步改变
const mutations = {
    getRecommed(state,payload){
        state.recommedList=payload;
    },
    //到单独的组件里 将item保存到vuex里
    saveItem(state,payload){
       state.cid = payload.cid;
       state.saveItemList = payload.childs;
    },
    getClassify(state,payload){
        console.log(payload)
        state.getclassifyList = payload;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
  }