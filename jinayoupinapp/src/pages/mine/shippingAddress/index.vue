<template>
    <div>
        <button @click="jumpAddress">新增收货地址</button>
    </div>
</template>

<script>
export default {
    methods:{
        jumpAddress(){
            wx.navigateTo({
                url: "/pages/mine/addAddress/main"
            });
        }
    }
}
</script>

<style lang="scss" scoped>
button{
    margin: 150rpx;
    background:gray;
    color:white;
    width: 94%;
    margin-left: 3%;
}
</style>
