import { getDetail, shopDetail, pay, share } from '@/service/shopDetail'

const state = {
    getDetailList:[],
    shopDetailList:{},
    subOrderId:'',
    shareData:{}
}

const mutations = {
    upShopDetail(state,payload){
        console.log('payload',payload);
        state.shopDetailList = payload;
        state.subOrderId = payload.subOrder[0].subOrderId;
    },
    upShare(state,payload){
        state.shareData = payload;
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
    },
    //分享
    async share(store,payload){
        let data = await share({
            pid:852
        })
        console.log('分享',data)
        if(data.res_code === 1){
            store.commit('upShare',data.result)
        }else{
            store.commit('upShare',{})
        }
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}