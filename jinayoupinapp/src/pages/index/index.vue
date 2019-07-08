<template>
  <div class="wrap">
    <div class="recommendList">
        <scroll-view class='scroll-view-list' scroll-x="true">
            <ul>
                <li class="active">今日推荐</li>
                <li>奶粉</li>
                <li>今日推荐</li>
                <li>奶粉</li>
                <li>今日推荐</li>
                <li>奶粉</li>
                <li>今日推荐</li>
                <li>奶粉</li>
                <li>今日推荐</li>
                <li>奶粉</li>
                <li>今日推荐</li>
                <li>奶粉</li>
            </ul>
        </scroll-view>
        
    </div>
  </div>
 
</template>

<script>
import card from '@/components/card'
import {mapState, mapMutations, mapActions} from "@/store/index"
export default {
  data () {
  },

  components: {
    card
  },

  methods: {
    ...mapActions({
        getRecommend:"getRecommed/getRecommend"
    })
  },

  created () {
   
  },
  onShow(){
      this.getRecommend();
  }
}
</script>

<style scoped lang="scss">
.wrap{
 width:100%;
 height:100%;
 .recommendList{
     width:100%;
     ul{
        width:200%;
        height:40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        li{
           margin:0px 5px;
            display: inline-block;
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
