import { getDetail,getChoose, getAddress, getDownPic } from '@/service/shopDetail'

const state = {
    getDetailList:[],
    currentpid:'',
    chooseList:[],
    hintAddress:'',
    picDownList:[]
}

const mutations = {
    
}

const actions = {
    //获取详情swiper图片
    async shopItem({commit,state},payload){
        state.currentpid = payload;
        let data = await getDetail(payload);
        state.getDetailList = data.result;
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
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}