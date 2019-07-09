<template>
  <scroll-view class="wrap" scroll-y="true"
   @scrolltoupper="upper" 
   @scrolltolower="lower"
  >
    <div class="recommendList">
        <scroll-view class='scroll-view-list' scroll-x="true">
            <ul>
                <li :class="flag?'active':''" @click="today">今日推荐</li>
                <li v-for="(item,index) in recommendList" :key="index" @click="clickToItem(item,index)" :class="index===i?'active':''">
                   {{item.cname}}
                </li>
            </ul>
        </scroll-view>
    </div>
    <classify :data="saveItemList"></classify>
    <div class="menu">
        <section>综合</section>
        <section>最新</section>
        <section>
            价格
            <span class="top"></span>
            <span class="bottom"></span>
        </section>
    </div>
    <classifyList :data="getclassifyList"></classifyList>
  </scroll-view>
 
</template>

<script>

import classify from "@/components/classify"
import classifyList from "@/components/classifyList"
import { mapState, mapActions } from "vuex";


export default {
  data () {
      return {
          i:null,
          flag:true
      }
  },
  components: {
    classify,
    classifyList
  },
  computed: {
     ...mapState({
         recommendList:state=>state.index.recommendList,
         saveItemList:state=>state.index.saveItemList,
         cid:state=>state.index.cid,
         getclassifyList:state=>state.index.getclassifyList
     }) 
  },
  methods: {
    ...mapActions({
        // getRecommedList:"index/getRecommed",
        getClassifyList:"index/getClassifyList"
       
    }),
    today(){
       this.i=null;
       this.flag = true;
       wx.navigateBack({
         delta: 1
        })
    },
    clickToItem(item,index){
        this.i = index;
        this.flag = false;
      //到单独的组件里 将item保存到vuex里
      this.$store.commit('index/saveItem',item);
      this.$store.dispatch('index/getClassifyList',{
          pageIndex: 1,
          cid: item.cid,
          sortType: 1
      }); 
    },
    upper(){
      console.log("上拉")
    },
    lower(){
        console.log('下拉')
    //   console.log("下拉",++this.pageIndex);
    //   this.scrollTo(++this.pageIndex)
    },
    
  },
  
  created () {
   
  },
  onLoad(){
    let arr=JSON.parse(this.$root.$mp.query.arr)
    this.$store.commit('index/saveItem',arr[1]);
    this.getClassifyList({
        pageIndex: arr[0].pageIndex,
        cid: arr[0].cid,
        sortType: arr[0].sortType
    });
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
 .menu{
    width:100%;
    height:40px;
    background:#fff;
    margin-top:10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size:14px;
    section{   
        position:relative;   
        .top{
            display: inline-block;
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid #FC5D7B;
            position:absolute;
            top:4px;
            left:30px;
        }
        .bottom{
            display: inline-block;
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid #ccc;
            position:absolute;
            top:14px;
            left:30px;
        }

    }
 }
}
</style>