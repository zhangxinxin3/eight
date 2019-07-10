<template>
    <div class="wrap">
        <swiper  autoplay circular class="swiperView" @change="changePagination">
            <block v-for="(item,index) in getDetailList.supplierProductPictureVoList" :key="index">
                <swiper-item>
                    <img :src="item.imgUrl"/>
                </swiper-item>
            </block>
        </swiper>
        <div class="pagination">{{current}}/{{getDetailList.supplierProductPictureVoList.length}}</div>
         <div class="price">
            <h4><span>￥</span>{{getDetailList.salesPrice}}</h4>
            <h3>{{getDetailList.vipPrice}}</h3>
            <img src="/static/images/黑卡@2x.png" alt="">
            <div class="share">分享赚{{getDetailList.earnMoney}}</div>
        </div>
        <div class="title">{{getDetailList.title}}</div>
        <div class="kuaidi">快递包邮</div>
        <div class="choose">
            <h3>选择</h3>
            <block v-for="(item,index) in chooseList" :key="index">
            <span>{{item.aname}}</span>
            <block v-if="item.attributeValueRelationVoList">
                <i>{{item.attributeValueRelationVoList[0].vname}}></i>
            </block>
            </block>
        </div>
        <div class="hint">
            <i>提示</i><span>{{hintAddress}}</span>
        </div>
        <div class="picDownList">
           <block v-for="(item,index) in picDownList" :key="index">
               <img :src="item.imgUrl" alt=""  :style="'height:'+item.imgHeight+'px'">
           </block>
        </div>
        <div class="btn">
            <div class="left">分享赚0</div>
            <div class="right">立即购买</div>
        </div> 
    </div>
</template>
<script>

import { mapState, mapActions } from "vuex"; 

export default {
    data(){
      return {
          current:1
      }
    },
    computed: {
       ...mapState({
         currentpid:state=>state.shopDetail.currentpid,//获取当前的pid
         getDetailList:state=>state.shopDetail.getDetailList,//获取swiper的图片
         chooseList:state=>state.shopDetail.chooseList,//选择是默认还是颜色规格
         hintAddress:state=>state.shopDetail.hintAddress,//获取偏远地区的地址
         picDownList:state=>state.shopDetail.picDownList//获取下边的图片
       })
   },

    methods:{
        ...mapActions({
         choose:'shopDetail/choose',//选择是默认还是颜色规格
         hintContent:'shopDetail/hintContent',//获取偏远地区的地址
         picDown:'shopDetail/picDown'//获取下边的图片
        }),
        changePagination(e){
            this.current = e.mp.detail.current+1;
        },
        
    },

    onShow(){
       wx.setNavigationBarTitle({
         title: '商品详情'
       });
       this.choose();
       this.hintContent(this.getDetailList.sstid);
       this.picDown({
           pid:this.currentpid,
           basePid:this.getDetailList.basePid,
           userIdentity:this.getDetailList.userIdentity
       })
    },
}
</script>

<style scoped lang="scss">
.wrap{
    width:100%;
    height:100%;
    position:relative;
    overflow-y:scroll;
    
}
.swiperView{
    width:100%;
    height:340px;
    img{
        width:100%;
        height:100%;
    }
}
.pagination{
    position:absolute;
    top:300px;
    right:30px;
    width:30px;
    height:20px;
    line-height:20px;
    text-align: center;
    background:rgba(0,0,0,0.5);
    border-radius:5px;
    font-size:14px;
    color:#fff;
}
.price{
    width:100%;
    height:27px;
    display: flex;
    align-items: center;
    margin:20px 0px;
    h4{
       font-size:24px;
       color:#FCB0E1;
       padding-left:20px;
       box-sizing: border-box;
       span{
           font-size:14px;
       } 
    }
    h3{
        font-size:14px;
        color:#a97a33;
        padding:0px 10px;
    }
    img{
        width:30px;
        height:10px;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .share{
        font-size:12px;
        width:100px;
        height:25px;
        line-height:25px;
        text-align:center;
        border:1px solid  #fc5d7b;
        border-radius:20px;
        color:#fc5d7b;
        margin-left:80px;
    }
}
.title{
    width:100%;
    font-size:16px;
    padding-left:10px;
    box-sizing: border-box;
    margin:20px 0px;
}
.kuaidi{
    width:100%;
    margin:20px 0px;
    padding-left:10px;
    color:#ccc;
    font-size:14px;
    box-sizing: border-box;
}
.choose{
    width:100%;
    margin:15px 0px 20px 0px;
    padding-left:10px;
    box-sizing: border-box;
    color:#333;
    font-size:14px;
    h3{
        float:left;
        font-weight:lighter;
    }
    span{
        float:left;
        padding-left:5px;
        box-sizing: border-box;
    }
    i{
        float:right;
    }
}
.hint{
    width:100%;
    height:30px;
    line-height:30px;
    margin:10px 0px;
    font-size:14px;
    display:flex;
    align-items: center;
    i{
        width:10%;
        padding-left:10px;
        box-sizing: border-box;
    }
    span{
        width:90%;
        color:#fc5d7b;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
.picDownList{
    width:100%;
    display: flex;
    flex-direction: column;
    img{
        width:100%;
    }
}
.btn{
    width:100%;
    height:50px;
    background:#eee;
    position: fixed;
    font-size:16px;
    bottom:0px;
    left:0px;
    display: flex;
    line-height:50px;
    .left,.right{
        flex:1;
        text-align:center;
        color:#fff;
        border-radius:5px;
        background:linear-gradient(217deg,#f86367,#fb2579);
    }

}
</style>

