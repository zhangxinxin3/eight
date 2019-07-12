<<<<<<< HEAD
import { getDetail,getChoose, getAddress, getDownPic, shopDetail, pay  } from '@/service/shopDetail'
=======
import { getDetail,getChoose, getAddress, getDownPic} from '@/service/shopDetail'
>>>>>>> njx

const state = {
    getDetailList:[],
    currentpid:'',
    chooseList:[],
    hintAddress:'',
    picDownList:[],
<<<<<<< HEAD
    getDetailList:[],
    shopDetailList:{},
    subOrderId:''
=======
    maskList:[]
>>>>>>> njx
}

const mutations = {
    upShopDetail(state,payload){
        console.log('payload',payload);
        state.shopDetailList = payload;
        state.subOrderId = payload.subOrder[0].subOrderId;
    }
}

const actions = {
    //获取详情swiper图片
    async shopItem({commit,state},payload){
        state.currentpid = payload;
        let data = await getDetail(payload);
        state.getDetailList = data.result;
        console.log('getDetailList',getDetailList)
    },
    //获取选择的颜色还是规格
    async choose({commit,state},payload){
        let data = await getChoose(state.currentpid);
        state.chooseList = data.result;
    },
    //获取提示的内容
    async hintContent({commit,state},payload){
        let data = await getAddress(payload);
        state.hintAddress = data.result;
    },
    //获取详情下边的图片
    async picDown({commit,state},payload){
        let data = await getDownPic(payload);
        state.picDownList = data.result;
    },
<<<<<<< HEAD
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
=======

>>>>>>> njx
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}