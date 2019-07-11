<template>
    <view class="wrapper">
        <view class="header">
            <view class="reach">
                <text>请在{{minutes}}:{{seconds}}内完成付款</text>
            </view>
            <view class="commodityTypes">
                <text>订单总计</text>
                <text class="prices"></text>
            </view>
            <view class="commodityTypes">
                <text>应付金额(含邮费)</text>
                <text class="prices"></text>
            </view>
        </view>
        <view class="pay">
            <view class="methods">
                <image src="/static/images/7.png" alt="" />
                <text>微信支付</text>    
            </view>
            <radio checked="true"/>
        </view>  
        <view class="return">
            <text>返回商城</text>
        </view>
        <button class="btn">去付款</button>
    </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    computed:{
        ...mapState({
            minutes:state=>state.shopDetail.minutes,
            seconds:state=>state.shopDetail.seconds
        }),
        second(){
            return this.num(this.seconds)
        },
        minute(){
            return this.num(this.minutes)
        }
    },
    methods:{
        ...mapMutations({
            changeTime:'shopDetail/changeTime'
        }),
        num(n) {
            return n < 10 ? '0' + n : '' + n
        },
        timer () {
            var _this = this;
            var time = setInterval(()=>{
                if (_this.seconds === 0 && _this.minutes !== 0) {
                    _this.changeTime({
                        key:'seconds',
                        value:59
                    })
                    _this.changeTime({
                        key:'minutes',
                        value:--_this.minutes
                    })
                } else if (_this.minutes === 0 && _this.seconds === 0) {
                    _this.changeTime({
                        key:'seconds',
                        value:0
                    })
                    clearInterval(time)
                } else {
                     _this.changeTime({
                        key:'seconds',
                        value:--_this.seconds
                    })
                }
            }, 1000)
        }
    },
    mounted() {
      this.timer()
    },
    watch: {
        second: {
            handler (newVal) {
                this.num(newVal)
            }
        },
        minute: {
            handler (newVal) {
                this.num(newVal)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
}
.header{
    width:100%;
    display: flex;
    flex-direction: column;
    .reach{
        width:100%;
        padding:20rpx 30rpx;
        box-sizing: border-box;
        background:chocolate;
    }
    .commodityTypes{
        width:100%;
        padding:30rpx;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
.pay{
    width: 100%;
    height:88rpx;
    font-size:30rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:20rpx 30rpx;
    box-sizing: border-box;
    image{
        width:28rpx;
        height:28rpx;
        margin-left:20rpx;
    }
    .methods{
        >image{
            margin:0 10rpx 0 0;
        }
    }
}
.return{
    width:100%;
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.btn{
    width:100%;
    height:100rpx;
    position: fixed;
    bottom: 0;
    left:0;
}
</style>

