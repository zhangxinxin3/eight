<template>
    <view class="wrapper">
        <view class="header">
            <text v-for="item in card" 
            :key="item.key" 
            :class="key===item.key? 'active':''" 
            @click="tabs(item.key)">{{item.title}}</text>
        </view>
        <view class="main" v-if="productsList.length">
            <view class="mainContent" v-for="item in productsList" :key="item.orderId">
                <view class="contentTop">
                    <text>{{item.createTime}}</text>
                    <text>{{item.cancleStatus?'已取消':'全部'}}</text>
                </view>
                <view class="contentMain">
                    <image :src="item.products[0].mainImgUrl" alt="" />
                    <view class="contentRight">
                        <text>{{item.products[0].productTitle}}</text>
                        <text>规格：{{item.products[0].skuName}}</text>
                        <view class="price">
                            <text>￥{{item.products[0].salesPrice}}</text>
                            <text>*{{item.products[0].productNumber}}</text>
                        </view>
                    </view>
                </view>
                <view class="contentBottom">
                    <text>共{{item.products[0].productNumber}}件商品 合计：￥{{item.products[0].productNumber*item.products[0].salesPrice}}</text>
                </view>
            </view>
        </view>
        <view class="mainsContent" v-else>
            <image src="/static/images/wudingdan.png" alt="" />
            <text>暂时没有订单噢~</text>
        </view>
    </view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    onShow(){
        this.products();
    },
    computed:{
        ...mapState({
            card:state=>state.mine.card,
            key:state=>state.mine.key,
            productsList:state=>state.mine.productsList
        })
    },
    methods:{
        ...mapActions({
            products:"mine/products"
        }),
        ...mapMutations({
            changeKey:"mine/changeKey"
        }),
        tabs(key){
            this.changeKey(key);
            this.products();
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 100%;
    height: 100%;
    background:#f3f7f7;
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    height:80rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:0 30rpx;
    box-sizing: border-box;
    position:fixed;
    top:0;
    left:0;
    background:#fff;
    text{
        padding:20rpx 10rpx;
        box-sizing: border-box;
    }
    text.active{
        border-bottom: 6rpx solid #33d6c5!important;
    }
}
.mainsContent{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    image{
        width:276rpx;
        height:276rpx;
        margin-bottom:30rpx;
    }
    text{
        color:grey;
    }
}
.main{
    width: 100%;
    padding:0 20rpx;
    box-sizing: border-box;
    margin-top:80rpx;
    overflow: auto;
    .mainContent{
        margin:20rpx 0;
        background:#fff;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 10rpx;
        .contentTop{
            width:100%;
            height:74rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:0 30rpx;
            box-sizing: border-box;
            text:nth-child(1){
                font-size:28rpx;
            }
            text:nth-child(2){
                font-size:32rpx;
            }
        }
        .contentMain{
            width:100%;
            height:220rpx;
            border-bottom:solid 1px #ccc;
            padding:12rpx 24rpx;
            box-sizing: border-box;
            display: flex;
            image{
                width:177rpx;
                height:100%;
                margin-right:24rpx;
            }
            .contentRight{
                flex:1;
                height:100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                >text:nth-child(1){
                    font-size:30rpx;
                }
                >text:nth-child(2){
                    font-size:24rpx;
                    color:#999DA2;
                }
                .price{
                    display: flex;
                    font-size:24rpx;
                    justify-content: space-between;
                }
            }
        }
        .contentBottom{
            width:100%;
            height:208rpx;
            padding:12rpx 24rpx;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-size:26rpx;
        }
    }
}
</style>
