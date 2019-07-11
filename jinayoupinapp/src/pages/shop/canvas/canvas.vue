<template>
    <view class="wrapper">
        <view class="title">{{shareData.title}}</view>
        <view class="price">【在售价】{{shareData.supplyPrice}}</view>
        <view class="main">
            <view class="canvas">
                <canvas class="myCanvas" style="width:290rpx;height:346rpx;">
                </canvas>
            </view>
            <view class="project">
                <image :src="shareData.mainImgUrl" alt="" />
                <image src="/static/images/true2.png" alt="" />
            </view>
        </view>
        
        <view class="share">
            <view class="share-item">
                <image src="/static/images/6.png" alt="" />
                <text>保存到相册</text>
            </view>
            <view class="share-item">
                <image src="/static/images/7.png" alt="" />
                <text>微信好友</text>
            </view>
        </view>
    </view>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    methods:{
        ...mapActions({
            share:'shopDetail/share'
        })
    },
    computed:{
        ...mapState({
            shareData:state=>state.shopDetail.shareData
        })
    },
    onShow(){
        this.share();
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    .title{
        padding:30rpx;
        box-sizing: border-box;
        font-size:40rpx;
    }
    .price{
        padding:30rpx;
        box-sizing: border-box;
        font-size:30rpx;
    }
    .main{
        flex:1;
        display: flex;
        justify-content: space-around;
        .canvas{
            flex:1;
            height:100%;
        }
        .project{
            width:140rpx;
            height:140rpx;
            border:2rpx solid #ededed;
            margin-left:15rpx;
            display:flex;
            align-items:center;
            justify-content:center;
            position:relative;
            margin-bottom:18rpx;
            image:nth-child(1){
                width:120rpx;
                height:120rpx;
            }
            image:nth-child(2){
                width:42rpx;
                height:42rpx;
                position:absolute;
                top:4rpx;
                right:4rpx;
            }
        }
    }
    .share{
        width:100%;
        padding:40rpx 0;
        box-sizing: border-box;
        display: flex;
        .share-item{
            flex:1;
            display: flex;
            flex-direction: column;
            align-items: center;
            image{
                width:100rpx;
                height:100rpx;
                margin:40rpx 0;
            }
        }
    }
}
</style>

