import { getUser, products, coupons, nums } from '@/api/mine'

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
    user:{}
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

export default {
    namespaced:true,
    state,
    mutations,
    actions
}