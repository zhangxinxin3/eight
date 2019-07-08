 import {getRecommed} from '@/service/index'

const state={
    recommedList:'',
    saveItemList:[],
}
//异步改变
const actions={
    //今日推荐
    getRecommedList({commit},payload){
        let data = getRecommed();
        data.then(res=>{
           commit('getRecommed',res.result)
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
       state.saveItemList = payload.childs;
    //    console.log(this.saveItemList)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
  }