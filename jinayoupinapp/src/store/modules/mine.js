import { getUser, products, coupons } from '@/api/mine'

const state = {
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
    user:{},
    Payment:0 //待付款
}

const mutations = {
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
    }
}

const actions = {
    async getUser(store,payload){
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
        console.log(data)
        if(data.res_code===1){
            store.commit('getProducts',data.result)
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
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}