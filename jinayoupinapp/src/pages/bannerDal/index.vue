<template>
  <div class="wrap">
    <div class="topImg">
      <img :src="bannerToList.specialImg" alt="">
    </div>
    <scroll-view :scroll-x="true" class="topTit">
      <span v-for="(item,index) in bannerToList.anchors" :key="index" 
      :class="index===i?'active':''" 
      @click="clickItem(item,index)">
        {{item.anchorName}}
      </span>
    </scroll-view>
    <div class="content">
      <div class="header">
        <div class="child">
        <div class="left">
          <span class="line"></span>
          <div class="skew"></div>
        </div>
        <div class="center">{{bannerToList.specialName}}</div>
        <div  class="right">
          <div class="skew"></div>
          <span class="line"></span>
        </div>
        </div>
      </div>
      <div class="boxBig">

      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
  data(){
    return{
      i:0
    }
  },
  methods:{
   ...mapActions({
 
    }),
    clickItem(item,index){
      this.i=index;
      this.$store.commit("bannerItem",item)
    }
  },
   computed: {
   ...mapState({
     bannerToList:state=>state.index.bannerToList,
     DalList:state=>state.index.DalList,
   })
  },
  mounted() {
    //修改标题
    wx.setNavigationBarTitle({ title: this.bannerToList.specialName });
  },
}
</script>

<style scoped lang="scss">
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(243,247,247);
}
.content{
  width: 100%;
  flex:1;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .boxBig{
    width: 100%;
    flex:1;
  }
  .header{
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #484848;
    .child{
      height:100%;
      width: 245px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left,.right{
        display: flex;
        width: 48px;
        height: 100%;
        .line{
          width: 35px;
          height: 1px;
          background: #484848;
          margin-top: 37px;
        }
        .skew{
          width: 7px;
          height: 7px;
          background: #484848;
          transform: rotate(45deg);
          margin-top: 34px;
        }
      }
    }
  }
}
.topImg{
  width: 100%;
  height:250px;
  background: #fff;
  img{
    width: 100%;
    height: 100%;
  }
}
.topTit{
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #fff;
  white-space: nowrap;
  span{
     margin: 0 10px;
     display: inline-block;
  }
  .active{
    color: rgb(254,116,142);
  }
}
</style>
