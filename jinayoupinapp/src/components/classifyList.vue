<template>
     <div class="classify-list">
      <section v-for="(item,index) in data" :key="index" @click="shopDetail(item)">
          <img :src="item.mainImgUrl" alt="">
          <h3 class="describe">{{item.title}}</h3>
          <div class="shui">包税</div>
          <div class="price"><span>￥</span>{{item.salesPrice}}</div>
          <div class="vipPrice">
            <span>￥{{item.vipPrice}}</span>
            <span>赚{{item.memberDiscountPrice}}</span>
          </div>
      </section>

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
   props: ['data'],
   methods:{
       shopDetail(item){
         this.$store.dispatch("shopDetail/shopItem",item.pid);
         wx.navigateTo({
             url:"/pages/shopDetail/main"
         })
       }
   }
}
</script>

<style lang="scss" scoped>
.classify-list{
    width:100%;
    margin-top:10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size:14px;
    section{
        width:47%;
        height:250px;
        background:#fff;
        border-radius:10px;
        margin-top:5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        img{
            width:150px;
            height:150px;
        }
        .describe{
            width:100%;
            padding-left: 5px;
            text-overflow:ellipsis;
            white-space:nowrap;
            overflow:hidden;
        }
        .shui{
           font-size:10px;
           width:30px;
           height:20px;
           line-height:20px;
           text-align: center;
           color:#FC5D7B;
           display: inline-block;
           border-radius:5px;
           border:1px solid #FC5D7B;
           margin-left:10px;
        }
        .price{
           margin-left:10px;
           color:#FC5D7B;
           font-size:16px;
           span{
               font-size:14px;
           }
        }
        .vipPrice{
            span:nth-child(1){
                margin-left:10px;
                color:#A87831;
                font-size:12px;
                margin-right:10px;
            }
            span:nth-child(2){
                display: inline-block;
                width:50px;
                height:20px;
                line-height:20px;
                text-align:center;
                font-size:12px;
                background:#FFE8ED;
                color:#FEADA0;
                font-size:12px;
            }
            
        }
    }
}
</style>
