<template>
    <view class="wrapper">
        <view class="header">
            <view class="reach">
                <text>请在15:00内完成付款</text>
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
            <text>返回上城</text>
        </view>
        <button class="btn">去付款</button>
    </view>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>

