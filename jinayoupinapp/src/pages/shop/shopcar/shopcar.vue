<template>
    <view class="wrapper">
        <view class="wrap" v-for="(item,index) in shopDetailList.subOrder" :key="index">
            <view class="top" v-if="shopDetailList.isOverseas">
                订单中包含海外购商品，海关要求必须提供真实姓名和身份证号进行实名认证，
                且实名人与支付人必须一致，错误信息可能导致无法清关，平台保证您的信息安全，
                绝不对外泄露！
            </view>
            <view class="header">
                <view class="back">
                    <view class="information">
                        <view class="mationLeft">
                            <view class="info">
                                <text>{{item.consignee}}</text>
                                <text>{{item.consigneePhone}}</text>
                            </view>
                            <view class="ress">
                                <image src="/static/images/locationIcon.png" alt="" />
                                <text>{{item.addressDetail}}</text>
                            </view> 
                        </view>
                        <image src="/static/images/jt.png" alt="" />   
                    </view>
                    <view class="decoration">
                    </view>    
                </view>
            </view>
            <view class="main" v-for="(items,i) in item.orderItemProductInfos" :key="i">
                <view class="mianMation">
                    <image :src="items.mainImgUrl" alt="" />
                    <view class="commodity">
                        <text>{{items.productTitle}}</text>
                        <text>规格：{{items.skuName}}</text>
                        <view class="commodityPrice">
                            <text>{{items.originalPrice}}</text>
                            <text>{{items.productNumber}}</text>
                        </view>
                    </view>
                </view>
                <view class="commodityTypes">
                    <text>发货方式</text>
                    <text>快递包邮：0元</text>
                </view>
                <view class="commodityTypes">
                    <text>订单总计</text>
                    <text class="prices">{{items.originalPrice*items.productNumber}}</text>
                </view>
                <view class="commodityTypes">
                    <text>优惠券</text>
                    <image src="/static/images/jt.png" alt="" />
                </view>
                <view class="commodityTypes payment ">
                    <view class="methods">
                        <image src="/static/images/7.png" alt="" />
                        <text>微信支付</text>    
                    </view>
                    <radio checked="true"/>
                </view>
            </view>
            <view class="pay" v-for="(items,i) in item.orderItemProductInfos" :key="i">
                <view class="payMoney">
                    <text>总计￥</text>
                    <text>{{items.originalPrice*items.productNumber}}</text>
                </view>
                <view class="payMethod">
                    <text>微信支付</text>
                    <button @click="pay">去支付</button>
                </view>
            </view>    
        </view>
    </view>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed:{
        ...mapState({
            shopDetailList:state=>state.shopDetail.shopDetailList
        })
    },
    methods:{
        ...mapActions({
            shopDetail:'shopDetail/shopDetail',
            pays:'shopDetail/pay'
        }),
        pay(){
            this.pays()
        }
    },
    onShow(options){
        console.log(options)
        this.shopDetail();
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width:100%;
    height:100%;
    .wrap{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        background:#f9f9f9;
    }
}
.top{
    width:100%;
    font-size:26rpx;
    background:#fff6f6;
    padding:20rpx;
    box-sizing: border-box;
    color:#484848;
}
.header{
    width:100%;
    padding:30rpx;
    box-sizing: border-box;
    .back{
        width:100%;
        height:100%;
        background:#fff;
        display: flex;
        flex-direction: column;
        border-radius: 10rpx;
        .information{
            width:100%;
            flex:1;
            padding:0 20rpx;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            >image{
                width:28rpx;
                height:28rpx;
                margin-left:30rpx;
            }
            .mationLeft{
                height:100%;
                flex:1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                // align-items: center;
                padding:30rpx;
                box-sizing: border-box;
                .info{
                    padding:20rpx 0;
                    box-sizing: border-box;
                    width:100%;
                    display: flex;
                    text{
                        font-size:30rpx;
                        margin:0 10rpx;
                    }
                }
                .ress{
                    display: flex;
                    padding:20rpx 0;
                    box-sizing: border-box;
                    align-items: center;
                    image{
                        width:28rpx;
                        height:28rpx;
                        margin-right:10rpx;
                    }
                    text{
                        flex:1;
                    }
                }
            }
        }
        .decoration{
            width:100%;
            height:8rpx;
            background:blue;
        }
    }
}
.main{
    width:100%;
    flex:1;
    background:#fff;
    padding:30rpx;
    box-sizing: border-box;
    .mianMation{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom:30rpx;
        box-sizing: border-box;
        >image{
            width:180rpx;
            height:180rpx;
            margin-right:20rpx;
        }
        .commodity{
            flex:1;
            display: flex;
            flex-direction: column;
            >text:nth-child(1){
                font-size:30rpx;
                margin-bottom:20rpx;
            }
            >text:nth-child(2){
                font-size: 26rpx;
                line-height: 2;
                color:#999da2;
            }
            .commodityPrice{
                width:100%;
                display: flex;
                line-height: 2;
                justify-content: space-between;
                font-size:28rpx;
            }
        }
    }
    .commodityTypes{
        width: 100%;
        height:88rpx;
        font-size:30rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        image{
            width:28rpx;
            height:28rpx;
            margin-left:20rpx;
        }
        .prices{
            font-size:48rpx;
            color:red;
        }
        .methods{
            >image{
                margin:0 10rpx 0 0;
            }
        }
    }
}
.pay{
    width:100%;
    height:110rpx;
    display: flex;
    justify-content: space-between;
    padding-left:20rpx;
    box-sizing: border-box;
    position: fixed;
    bottom:0;
    left:0;
    border-top:solid 1px #ccc;
    .payMoney{
        height:100%;
        display: flex;
        align-items: center;
        text{
            color:#fb2579;
        }
        text:nth-child(2){
            font-size:60rpx;
        }
    }
    .payMethod{
        display: flex;
        align-items: center;
        >button{
            width:224rpx;
            height:100%;
            background:#fb2579;
            color:#fff;
            font-size:36rpx;
            margin-left:10rpx;
            border:none;
        }
    }
}
</style>