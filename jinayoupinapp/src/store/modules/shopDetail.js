import { getDetail, shopDetail, pay } from '@/service/shopDetail'

const state = {
    getDetailList:[],
    shopDetailList:{},
    subOrderId:''
}

const mutations = {
    upShopDetail(state,payload){
        console.log('payload',payload);
        state.shopDetailList = payload;
        state.subOrderId = payload.subOrder[0].subOrderId;
    }
}

const actions = {
    async shopItem({commit,state},payload){
        let data = await getDetail(payload);
        state.getDetailList = data.result;
    },
    async shopDetail (store, payload){
        let data = await shopDetail({
            orderChannel:4,
            skuPidNums:JSON.stringify([{"pid":852,"buyNum":1,"skuKey":"5370e15e668c3044b07e5cea35848377"}])
        });
        console.log('购物车的详情',data)
        store.commit('upShopDetail',data.result)
    },
    async pay(store,payload){
        let data = await pay({
            payChannel:1,
            prepareId:store.state.subOrderId,
            platform:4
        });
        console.log('支付',data)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}