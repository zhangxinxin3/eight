<template>
    <div class="wrap">
        <div class="header">
            <image src="/static/images/logBg.png" alt="" />
            <div class="top">
                <image :src="user.headUrl" alt="" />
                <div class="topRight">
                    <b>{{user.nickName}}</b>
                    <p>邀请码:{{user.inviteCode}}<span>复制</span></p>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="card">
                <p :key='1' @click="cards(1)">我的订单</p>
                <div class="cardContent">
                    <div v-for="item in card" :key="item.key" @click="cards(item.key)" v-if="item.key!==0">
                        <image :src="item.img" alt="" />
                        <p>{{item.title}}</p>
                    </div>
                </div>
            </div>   
            <div class="list">
                <div @click="coupon">
                    <image src="/static/images/yhj.png" alt="" />
                    <p>我的优惠券</p>
                    <image src="/static/images/jt.png" alt="" />
                </div>
                <div @click="address">
                    <image src="/static/images/dz.png" alt="" />
                    <p>收货地址</p>
                    <image src="/static/images/jt.png" alt="" />
                </div>
                <div @click="service">
                    <image src="/static/images/kf.png" alt="" />
                    <p>联系客服</p>
                    <image src="/static/images/jt.png" alt="" />
                </div>
                <div @click="authentication">
                    <image src="/static/images/sm.png" alt="" />
                    <p>实名认证</p>
                    <image src="/static/images/jt.png" alt="" />
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    data(){
        return {
            payment:0,//付款
            shipped:0,//发货
            received:0 //收货
        }
    },
    onShow(){
        this.getUser();
        this.changeKey(0);
        this.products();
    },
    methods:{
        ...mapActions({
            getUser:"mine/getUser",
            products:'mine/products'
        }),
        ...mapMutations({
            changeKey:"mine/changeKey"
        }),
        //订单
        cards(key){
            this.changeKey(key);
            wx.redirectTo({
                url:"/pages/mine/card/main"
            })
        },
        //优惠券
        coupon(){
            wx.redirectTo({
                url:"/pages/mine/coupon/main"
            })
        }
        //添加地址
        // address(){
        //     wx.redirectTo({
        //         url:"/pages/mine/coupon/main"
        //     })
        // },
        // //客服
        // service(){
        //     wx.redirectTo({
        //         url:"/pages/mine/coupon/main"
        //     })
        // },
        // //实名认证
        // authentication(){
        //     wx.redirectTo({
        //         url:"/pages/mine/coupon/main"
        //     })
        // }
    },
    computed:{
        ...mapState({
            card:state=>state.mine.card,
            key:state=>state.mine.key,
            user:state=>state.mine.user,
            productsList:state=>state.mine.productsList
        })
    }
}
</script>

<style scoped lang="scss">
.wrap{
    width:100%;
    height:100%;
    position: fixed;
    background:#eee;
}
.header{
    width: 100%;
    height:220rpx;
    position:relative;
    >image{
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left:0;
        z-index: -999;
    }
    .top{
        width: 100%;
        height: 100%;
        display: flex;
        color:#fff;
        padding:0 60rpx;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-between;
        >image{
            width: 128rpx;
            height:128rpx;
            margin-right:38rpx;
            border-radius: 100%;
        }
        .topRight{
            height:100%;
            flex:1;
            display: flex;
            flex-direction: column;
            b{
                font-size:40rpx;
                margin-top:30rpx;
                line-height:2
            }
            p{
                font-size:28rpx;
                span{
                    margin-left:10rpx;
                    font-size:20rpx;
                    background:#35cdd0;
                    padding:6rpx 10rpx;
                    box-sizing:border-box;
                    border-radius:10rpx;
                    opacity:.7239;
                }
            }
        }
    }
}
.main{
    width:100%;
    padding:0 30rpx;
    box-sizing: border-box;
    position: absolute;
    top:190rpx;
    .card{
        width:100%;
        background:#fff;
        border-radius: 10rpx;
        padding:10rpx 0;
        box-sizing: border-box;
        p{
            line-height:2;
            padding-left:20rpx;
            box-sizing:border-box;
            font-size: 36rpx;
        }
        .cardContent{
            width:100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            >div{
                flex:1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                image{
                    width:80rpx;
                    height:80rpx;
                }
                p{
                    font-size:24rpx;
                    color:#70757d;
                    padding:0;
                }
            }
        }
    }
    .list{
        width:100%;
        margin-top:20rpx;
        background:#fff;
        padding:0 30rpx;
        box-sizing: border-box;
        border-radius: 10rpx;
        div{
            width:100%;
            padding:30rpx 0;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-around;
            image:nth-child(1){
                width:36rpx;
                height:36rpx;
                margin-right:30rpx;
            } 
            image:nth-child(3){
                width:16rpx;
                height:24rpx;
                margin-left:30rpx;
            }
            p{
                font-size:28rpx;
                flex:1;
            }
        }
    }
}
</style>
