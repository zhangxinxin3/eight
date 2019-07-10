<template>
    <div class="wrap">
       <swiper class="swiperBox"
      :circular="true"
      :autoplay="true" :interval="5000" :duration="1000">
      <div class="itemDiv" v-for="(item,index) in getDetailList.supplierProductPictureVoList" :key="index">
        <swiper-item>
          <image :src="item.imgUrl" class="slide-image"/>
        </swiper-item> 
      </div>
    </swiper>
    <div class="pagination">2/3</div>
    </div>
</template>
<script>

import { mapState, mapActions } from "vuex"; 

export default {
    computed: {
       ...mapState({
         getDetailList:state=>state.shopDetail.getDetailList
       })
   },
    onShow(){
       wx.setNavigationBarTitle({
         title: '商品详情'
       });
    }
}
</script>

<style scoped lang="scss">
.wrap{
    width:100%;
    height:100%;
}
.swiperBox{
    width:100%;
    height:300px;
}
.pagination{
        position:fixed;
        top:240px;
        right:30px;
        width:30px;
        height:20px;
        line-height:20px;
        text-align: center;
        background:rgba(0,0,0,0.5);
        border-radius:10px;
        font-size:14px;
        color:#fff;
}
</style>

