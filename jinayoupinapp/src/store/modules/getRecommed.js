import {getRecommend} from '../../service/index'
const state={
    
}
const mutations = {
   
  }
const actions={
   getRecommend(state, {...payload}){
       console.log('0000')
    let data=getRecommend();
    data.then(res=>{
        console.log('res...',res)
    })
  }
}
  export default {
    namespaced: true,
    state,
    actions,
    mutations
  }