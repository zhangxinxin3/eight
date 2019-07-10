<template>
<div class="wrap">
  <div class="list-top">
    <section v-for="(item,index) in data" :key="index" @click="imgUrlClick(item)">
      <img :src="item.imgUrl" alt="">
      <span>{{item.cname}}</span>
    </section>
  </div>
  
 
</div>
</template>

<script>

import { mapState, mapActions } from "vuex";

export default {
   props: ['data'],
   computed: {
     ...mapState({
         recommendList:state=>state.index.recommendList,
         saveItemList:state=>state.index.saveItemList,
         cid:state=>state.index.cid,
         getclassifyList:state=>state.index.getclassifyList,
         pageIndex:state=>state.index.pageIndex
     }) 
   },
   methods:{
       ...mapActions({
        getClassifyList:"index/getClassifyList"
       
       }),
       imgUrlClick(item){
          this.getClassifyList({
              pageIndex: 1,
              cid: item.cid,
              sortType: 1
          })
       }
   }
}
</script>

<style lang="scss" scoped>

.list-top{
    width:100%;
    display: flex;
    align-items: center;
    text-align:center;
    flex-wrap:wrap;
    background:#fff;
    section{
        width:20%; 
        font-size:12px;
        margin:0px 9px;
       
        img{
            width:80px;
            height:80px;
        }
        span{
            width:100%;
        }
    }

}


</style>
