import { getDetail } from '@/service/shopDetail'

const state = {
    getDetailList:[]
}

const mutations = {
    
}

const actions = {
    async shopItem({commit,state},payload){
        let data = await getDetail(payload);
        state.getDetailList = data.result;
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}