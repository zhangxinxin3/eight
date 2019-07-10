import { getUser, products, coupons, Cargoaddress, authenTication } from '@/api/mine'
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
        address: "",
        addressDetail: "",
        areaId: 130304,
        areaName: "",
        cityId: 130300,
        cityName: "",
        consignee: "",
        consigneePhone: "",
        provinceId: 130000,
        provinceName: "",
        state: 1,
        uid: 191200
    },
    region: [],
    customItem: "全部",
    addressList: [],
    card: [{
        title: "全部",
        key: 0
    }, {
        title: "待付款",
        key: 1,
        img: "/static/images/dfk.png"
    }, {
        title: "待发货",
        key: 2,
        img: "/static/images/dfh.png"
    }, {
        title: "待收货",
        key: 3,
        img: "/static/images/dsh.png"
    }],
    key: 0,
    page: 1,
    productsList: [],
    coupon: [{
        title: "未使用",
        key: 0
    }, {
        title: "已使用",
        key: 1
    }, {
        title: "已过期",
        key: 2
    }],
    state: 0,
    couponList: [],
    user: {},
    Payment: 0, //待付款
    idObj: {
        idNumber: "",
        trueName: "",
        idFrontImgUrl: "",
        idReverseImgUrl: ""
    },
    newObj: {},
    invitationCode:""//邀请码
}
const actions = {
    async getUser(store, payload) {
        let data = await getUser();
        if (data.res_code === 1) {
            store.commit('getUsers', data.result)
        }
    },
    async products(store, payload) {
        let data = await products({
            pageIndex: store.state.page,
            orderStatus: store.state.key
        });

        console.log('订单', data)
        if (data.res_code === 1) {
            store.commit('getProducts', data.result)
            // return 
        } else {
            store.commit('getProducts', [])
        }
    },
    async coupons(store, payload) {
        let data = await coupons({
            state: store.state.state
        })
        console.log(data)
        if (data.res_code === 1) {
            store.commit('getCoupons', data.result)
        } else {
            store.commit('getCoupons', [])
        }
    },
    //添加收货地址
    async Cargoaddress(store, payload) {
        let data = await Cargoaddress(state.addRessObj)
        console.log(data)
        if (data.res_code === 1) {
            store.commit("updataList", data.result)
        } else {
            store.commit("updataList", {})
        }
    },
    async getNum(store) {
        let data = await nums();
        console.log('数量', data)
        store.commit('upNum', data.result)
    },
    //实名
    async authenTication(store, payload) {
        console.log("请求接口打印的...", store, payload, state.idObj)
        let data = await authenTication(payload)
        console.log(data)
        if (data.res_code === 1) {
            wx.showToast({
                title: '成功',
                icon: 'none',
            });
        } else {
            wx.showToast({
                title: '失败',
                icon: 'none',
            });
        }
    }
}
//同步改变，改变数据的唯一途径
const mutations = {
    //复制邀请码
    saveInvitationCode(state,payload){
        state.invitationCode = payload.invitationCode
        console.log(state.invitationCode)
    },
    //身份证正面
    changePositiveImg(state, payload) {
        state.idObj.idFrontImgUrl = payload.idFrontImgUrl
    },
    //身份证反面
    changeNegativeImg(state, payload) {
        state.idObj.idReverseImgUrl = payload.idReverseImgUrl
    },
    //真实姓名
    saveTrueName(state, payload) {
        state.idObj.trueName = payload.trueName
    },
    saveIdNumber(state, payload) {
        state.idObj.idNumber = payload.idNumber
    },
    showMessage(state, payload) {
        state.idObj = payload.idObj
        console.log("showMessage...", state)
    },
    //更改span标签的样式以及获取内容
    changeActive(state, payload) {
        state.currentTab = payload.currentTab
        state.addRessObj.spn = payload.spn
        state.addressList.spn = payload.spn
    },
    //获取收货人名字
    saveObjName(state, payload) {
        state.addRessObj.consignee = payload.consignee;
    },
    //获取手机号
    saveObjTel(state, payload) {
        let tel = payload.consigneePhone;
        let reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
        if (!reg.test(tel)) {
            console.log('手机号错误')
        } else {
            state.addRessObj.consigneePhone = payload.consigneePhone;
            console.log('手机号正确')
        }
    },
    //获取地址
    saveObjAddress(state, payload) {
        state.addRessObj.address = payload.address
    },
    changeRegion(state, payload) {
        state.addRessObj.provinceName = payload.region[0]
        state.addRessObj.cityName = payload.region[1]
        state.addRessObj.areaName = payload.region[2]
        state.region = payload.region
    },
    //详细地址
    getDetailAddress(state, payload) {
        let newDetil = payload.addressDetail[0] + "" + payload.addressDetail[1] + "" + payload.addressDetail[2] + "" + state.addRessObj.address;
        state.addRessObj.addressDetail = newDetil
    },
    //获取按钮状态
    saveObjstatus(state, payload) {
        if (payload.state === true) {
            payload.state = 1
        } else {
            payload.state = 0
        }
        state.addRessObj.state = payload.state
    },
    //添加收货地址列表
    updataList(state, payload) {
        console.log(state.addressList, payload)
        state.addressList = state.addressList.push(payload)
    },
    getAddressList(state, payload) {
        console.log("xiaosanba", state, payload)
        state.addressList = payload.addressList
    },
    changeKey(state, payload) {
        state.key = payload;
    },
    changeState(state, payload) {
        state.state = payload;
    },
    getUsers(state, payload) {
        state.user = payload
    },
    getProducts(state, payload) {
        state.productsList = payload;
    },
    getCoupons(state, payload) {
        state.couponList = payload;
    },
    upNum(state, payload) {
        state.card.map(item => {
            if (item.key === 1) {
                item.Number = payload.pendingDeliverNumber;
            } else if (item.key === 2) {
                item.Number = payload.pendingPaymentNumber;
            } else if (item.key === 3) {
                item.Number = payload.pendingReceivingNumber;
            }
        })
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations

}