<template>
  <scroll-view class="wrap" :scroll-y="true"
  @scrolltoupper="upper" 
  @scrolltolower="lower">
    <div class="searchBox">
       <icon type="search" size="18"/>
       <input type="text" placeholder="搜索">
    </div> 
    <ul class="recommendList">
      <li class="active">今日推荐</li>
      <li v-for="(item,index) in recommendList" :key="index">
          <span @click="clickCid(item)">{{item.cname}}</span>
      </li>
    </ul>
    <swiper class="swiperBox"
      :circular="true"
      :indicator-dots="true"
      :autoplay="true" :interval="5000" :duration="1000">
      <div class="itemDiv" v-for="(item,index) in swiperList" :key="index">
        <swiper-item @click="clickSwiperId(item.contentValue)">
          <image :src="item.imgUrl" class="slide-image" height="150"/>
        </swiper-item>
      </div>  
    </swiper> 
    <div class="botBox">
      <img class="left" :src="botList[0].imgUrl" alt="">
      <div class="right">
        <img :src="botList[1].imgUrl" alt="">
        <img :src="botList[2].imgUrl" alt="">
      </div>
    </div>
    <div class="BigBox">
      <Commodity :data="sixProductList[0]" :img="adOneList[0]"></Commodity>
      <Commodity :data="sixProductList[1]" :img="adOneList[1]"></Commodity>
      <Commodity :data="sixProductList[2]" :img="adOneList[2]"></Commodity>
      <Commodity :data="sixProductList[3]" :img="adOneList[3]"></Commodity>
      <Commodity :data="sixProductList[4]" :img="adOneList[4]"></Commodity>
    </div>
    <div class="center">
      <div class="centTop">
        <h2>为你精选</h2>
        <span>等你来抢</span>
      </div>
      <div class="lowerScroll">
        <ScrollDl :scrollToList="scrollToList" 
        :isFreeShipping="isFreeShipping" 
        :isFreeTax="isFreeTax"></ScrollDl>
      </div>
    </div>
  </scroll-view>
</template>

<script>
import {mapState,mapActions} from "vuex"
import Commodity from '@/components/Commodity/Commodity'
import ScrollDl from '@/components/ScrollDl/ScrollDl'

export default {
  data () {
    return {
      isFreeShipping:"包邮",
      isFreeTax:"包税"
    }
  },

  methods: {
   ...mapActions({
      swiperImg: 'index/swiperImg',
      getRecommed:"index/getRecommed",
      scrollTo:"index/scrollTo",
      bannerTo:"index/bannerTo"
    }),
    //下拉加载
    lower(){
      this.scrollTo(++this.pageIndex)
    },
    //点击banner图进入详情
    clickSwiperId(siid){
      this.bannerTo(siid);
      wx.navigateTo({
        url:"/pages/bannerDal/main?siid="+siid
      })
    },
    //click横向滚动的每一项获取cid
    clickCid(item){
      let objs={
        pageIndex:1,
        cid:item.cid,
        sortType:1
      }
      let arr=[objs,item]
      let arrs=JSON.stringify(arr);
      wx.navigateTo({
      url: '/pages/classify/main?arr='+arrs
      })
    }
  },
 computed: {
   ...mapState({
      swiperList:state=>state.index.swiperList,
      botList:state=>state.index.botList,
      sixProductList:state=>state.index.sixProductList,
      adOneList:state=>state.index.adOneList,
      recommendList:state=>state.index.recommendList,
      scrollToList:state=>state.index.scrollToList,
      pageIndex:state=>state.index.pageIndex
   })
  },
  created () {
    this.swiperImg();
    //scroll的横向数据
    this.getRecommed();
    //scroll数据滚动加载的数据
    this.scrollTo(this.pageIndex);
  },

  components: {
      Commodity,
      ScrollDl
  }
}
</script>

<style lang="scss"> 
.center{
  width: 100%;
  margin-top: 10px;
}
 .centTop{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    h2{
        font-size: 20px;
        margin-right: 7px;
    }
    span::before{
      content:"";
      border:1.3px solid #ccc;
      height: 10px;
      margin-right: 7px;
  }
}
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
}
.BigBox{
  width:100%;
}
.botBox{
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  overflow: hidden;
  z-index: 999;
  .left{
    width: 159px;
    height: 200px;
    margin-right: 3px;
  }
 .right{
   flex:1;
   height: 100%;
   display: flex;
   flex-direction: column;
   img:nth-child(1){
     width: 100%;
     height: 103px;
     margin-bottom: 3px;
   }
  img:nth-child(2){
     width: 100%;
     height: 103px;
   }
  }
}
.searchBox{
  width: 100%;
  height:35px;
  z-index: 999;
  background: rgb(246,246,246);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  icon{
    margin: 0 10px;
  }
  input{
    flex:1;
    height: 90%;
    color: rgb(246,246,246);
    input::-webkit-input-placeholder {
    color: rgb(246,246,246) !important; 
    } 
  }
}
.recommendList{
  width: 100%;
  height: 50px !important;
  margin-top: 10px;
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  li{
    width:100px;
    height: 40px;
    line-height: 40px; 
    display: inline-block;
    margin-right: 32px;
    color: rgb(86,86,86);
    font-size: 16px;
  }
   .active{
      color:#94E2D6;
      border-bottom: 2px solid #94E2D6 !important;
  }
}
.swiperBox{
  width: 100%;
  height: 155px !important;
  margin-top: 5px;
  border-radius: 7px;
  overflow: hidden;
  z-index: 999;
  .slide-image{
    width: 100%;
    height: 100%;
  }
}
</style>
