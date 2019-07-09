import { getUser, products, coupons, nums } from '@/api/mine'
//原始数据
const state = {
    positive: "",//身份证正面
    negative: "",//身份证反面
    tagList: [
        { id: 0, title: "家" },
        { id: 1, title: "公司" },
        { id: 2, title: "学校" },
        { id: 3, title: "其他" }
    ],//标签列表
    currentTab: 0,//改变标签的属性
    addRessObj: {
        name: "",
        tel: "",
        address: "",
        detailAddress: "",
        spn: "",
        status: ""
    },
    card:[{
        title:"全部",
        key:0
    },{
        title:"待付款",
        key:1,
        img:"/static/images/dfk.png"
    },{
        title:"待发货",
        key:2,
        img:"/static/images/dfh.png"
    },{
        title:"待收货",
        key:3,
        img:"/static/images/dsh.png"
    }],
    key:0,
    page:1,
    productsList:[],
    coupon:[{
        title:"未使用",
        key:0
    },{
        title:"已使用",
        key:1
    },{
        title:"已过期",
        key:2
    }],
    state:0,
    couponList:[],
    user:{}
}

const actions = {
    async getUser(store){
        let data = await getUser();
        if(data.res_code===1){
            store.commit('getUsers',data.result)
        }
    },
    async products(store,payload){
        let data = await products({
            pageIndex:store.state.page,
            orderStatus:store.state.key
        });    
        
        console.log('订单',data)
        if(data.res_code===1){
            store.commit('getProducts',data.result)
            // return 
        }else{
            store.commit('getProducts',[])
        }
    },
    async coupons(store,payload){
        let data = await coupons({
            state:store.state.state
        })
        console.log(data)
        if(data.res_code===1){
            store.commit('getCoupons',data.result)
        }else{
            store.commit('getCoupons',[])
        }
    },
    async getNum(store){
        let data = await nums();
        console.log('数量',data)
        store.commit('upNum',data.result)
    }
}
//同步改变，改变数据的唯一途径
const mutations = {
    //身份证正面
    changePositiveImg(state, payload) {
        state.positive = payload.positive
    },
    //身份证反面
    changeNegativeImg(state, payload) {
        state.negative = payload.negative
    },
    //更改span标签的样式以及获取内容
    changeActive(state, payload) {
        state.currentTab = payload.currentTab
        state.addRessObj.spn = payload.spn
    },
    //获取收货人名字
    saveObjName(state, payload) {
        state.addRessObj.name = payload.name;
    },
    //获取手机号
    saveObjTel(state, payload) {
        let tel = payload.tel;
        let reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
        if (!reg.test(tel)) {
            console.log('手机号错误')
        } else {
            state.addRessObj.tel = payload.tel;
            console.log('手机号正确')
        }
    },
    //获取详细地址
    saveObjdetailAddress(state, payload) {
        state.addRessObj.detailAddress = payload.detailAddress
    },
    //获取按钮状态
    saveObjstatus(state, payload) {
        state.addRessObj.status = payload.status
    },
    changeKey(state,payload){
        state.key = payload;
    },
    changeState(state,payload){
        state.state = payload;
    },
    getUsers(state,payload){
        state.user = payload
    },
    getProducts(state,payload){
        state.productsList = payload;
    },
    getCoupons(state,payload){
        state.couponList = payload;
    },
    upNum(state,payload){
        state.card.map(item=>{
            if(item.key===1){
                item.Number = payload.pendingDeliverNumber;
            }else if(item.key===2){
                item.Number = payload.pendingPaymentNumber;
            }else if(item.key===3){
                item.Number = payload.pendingReceivingNumber;
            }
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}