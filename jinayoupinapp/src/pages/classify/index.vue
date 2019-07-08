<template>
  <div class="wrap">
    <div class="recommendList">
        <scroll-view class='scroll-view-list' scroll-x="true">
            <ul>
                <li class="active" @click="today">今日推荐</li>
                <li v-for="(item,index) in recommedList" :key="index" @click="clickToItem(item)">
                   {{item.cname}}
                </li>
            </ul>
        </scroll-view>
    </div>
    <classify :data="saveItemList"></classify>
  </div>
 
</template>

<script>

import classify from "@/components/classify"
import { mapState, mapActions } from "vuex";


export default {
  data () {
  },
  components: {
    classify
  },
  computed: {
     ...mapState({
         recommedList:state=>state.index.recommedList,
         saveItemList:state=>state.index.saveItemList
     }) 
  },
  methods: {
    ...mapActions({
        getRecommedList:"index/getRecommedList"
    }),
    today(){
        console.log(1)
    },
    clickToItem(item){
      //到单独的组件里 将item保存到vuex里
      this.$store.commit('index/saveItem',item);
    }
  },
  
  created () {
   
  },
  onShow(){
   this.getRecommedList();
  
  }
}
</script>

<style scoped lang="scss">
.wrap{
 width:100%;
 height:100%;
 background:#eee;
 .recommendList{
     width:100%;
     .scroll-view-list{
         width:201%;
     }
     ul{
        background: #fff;
        width:201%;
        height:40px;
        display: flex;
        align-items: center;
        li{
            margin:0px 6px;
            display: inline;
            font-size: 16px;
            line-height:40px;
            text-align: center;
        }
        .active{
            color:#94E2D6;
            border-bottom: 2px solid #94E2D6;
        }
     }
 }
}
</style>