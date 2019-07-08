<template>
  <div class="wrap">
    <div class="searchBox">
       <icon type="search" size="18"/>
       <input type="text" placeholder="搜索">
    </div>
    <div class="recommendList">
    </div>
    <swiper class="swiperBox" :indicator-dots="true"
      :autoplay="true" :interval="5000" :duration="1000">
      <div class="itemDiv" v-for="(item,index) in swiperList" :key="index">
        <swiper-item>
          <image :src="item.imgUrl" class="slide-image" height="150"/>
        </swiper-item>
      </div>  
    </swiper>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"

export default {
  data () {
    return {
    
    }
  },

  methods: {
   ...mapActions({
      swiperImg: 'index/swiperImg'
    }),
  },
 computed: {
   ...mapState({
      swiperList:state=>state.index.swiperList
   })
  },
  created () {
    this.swiperImg();
  },

  components: {
      
  }
}
</script>

<style lang="scss"> 
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
}
.searchBox{
  width: 100%;
  height:40px;
  background: rgb(246,246,246);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
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
  height: 50px;
  background: red;
  margin-top: 10px;
}
.swiperBox{
  width: 100%;
  height: 155px;
  margin-top: 5px;
  border-radius: 7px;
  overflow: hidden;
  .slide-image{
    width: 100%;
    height: 100%;
  }
}
</style>
