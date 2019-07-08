<template>
    <view class="wrapper">
        <view class="header">
            <text v-for="item in coupon" 
            :key="item.key" 
            :class="state===item.key?'active':''" 
            @click="tabs(item.key)">{{item.title}}</text>
        </view>
        <view class="main" v-if="couponList.length">

        </view>
        <view class="mainsContent" v-else>
            <image src="/static/images/暂无.png" alt="" />
            <text>暂时没有可用优惠券噢~</text>
        </view>
    </view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    computed:{
        ...mapState({
            coupon:state=>state.mine.coupon,
            state:state=>state.mine.state,
            couponList:state=>state.mine.couponList
        })
    },
    methods:{
        ...mapActions({
            getCoupon:"mine/coupons"
        }),
        ...mapMutations({
            changeState:"mine/changeState"
        }),
        tabs(key){
            this.changeState(key);
            this.getCoupon();
        }
    },
    onShow(){
        this.getCoupon();
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 100%;
    height: 100%;
    background:#f3f7f7;
}
.header{
    width:100%;
    height:80rpx;
    background:#fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:0 30rpx;
    box-sizing: border-box;
    text{
        height:100%;
        padding:0 18rpx;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
    text.active{
        border-bottom:4rpx solid #33d6c5;
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
</style>

