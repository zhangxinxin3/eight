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
        <div class="choose" @click="choice">
            <h3>选择</h3>
            <block v-for="(item,index) in chooseList" :key="index">
            <span>{{item.aname}}</span>
            <block v-if="item.attributeValueRelationVoList">
                <i>{{item.attributeValueRelationVoList[0].vname}}></i>
            </block>
            </block>
        </div>
        
        <div class="hint" v-if="getDetailList.sstid">
            <i>提示</i><span>{{hintAddress}}</span>
        </div>
        
        <div class="picDownList">
           <block v-for="(item,index) in picDownList" :key="index">
               <img :src="item.imgUrl" alt=""  :style="'height:'+item.imgHeight+'px'">
           </block>
        </div>
        
        <div class="btn">
            <div class="left" @click="share">分享赚{{getDetailList.earnMoney}}</div>
            <div class="right" @click="buy">立即购买</div>
        </div>
        
        <div class="mask" v-if="show">
            <div :class="show?'addTranslate':'reduceTranslate'">

              <div class="center">
                <div class="shop-title">
                    <div class="guige">
                        <block v-for="(item,index) in chooseList" :key="index">
                            <span>{{item.aname}}</span>
                        </block>
                    </div>
                    <div class="close" @click="close">X</div>
                </div>
                <div class="shop-pic">
                  <img :src="getDetailList.mainImgUrl" alt="">
                  <div class="shop-price">
                    <h3>￥{{getDetailList.salesPrice}}</h3>
                    <h4>库存：{{getDetailList.supplierProductSkuVoList[0].store}}</h4>
                  </div>
                </div>
                <div class="typeList" v-for="(item,index) in chooseList" :key="index">
                    <div class="color">{{item.aname}}</div>
                    <div class="colorList">
                        <block v-for="(ite,ind) in item.attributeValueRelationVoList" :key="ind">
                            <span 
                            :class="{Gaol:Arrays[index]===ind}"
                            @click="Gaol(ind,index,ite.pid,ite.vid)"
                            >
                            {{ite.vname}}
                            </span>
                        </block>
                    </div>
                </div>
                <div class="num">
                  <span class="num-text">数量</span>
                  <div class="num-btn">
                      <span @click="reduce">-</span>
                      <input type="text" :value="value">
                      <span @click="add">+</span>
                  </div>
                </div>
              </div> 
            <div class="sure" @click="sure">确定</div>   
        </div>
        </div>
    </div>
    
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      current: 1,
      show: false,
      value:1,
      Arrays:[],
      activeCurrent:1,
      Indexs:[]
    };
  },
  computed: {
    ...mapState({
      currentpid: state => state.shopDetail.currentpid, //获取当前的pid
      getDetailList: state => state.shopDetail.getDetailList, //获取swiper的图片
      chooseList: state => state.shopDetail.chooseList, //选择是默认还是颜色规格
      hintAddress: state => state.shopDetail.hintAddress, //获取偏远地区的地址
      picDownList: state => state.shopDetail.picDownList, //获取下边的图片
      getKuangList:state =>state.shopDetail.getKuangList
    })
  },

  methods: {
    ...mapActions({
      choose: "shopDetail/choose", //选择是默认还是颜色规格
      //获取偏远地区的地址
      picDown: "shopDetail/picDown", //获取下边的图片
      hintContent: "shopDetail/hintContent",//获取提示内容
      getKuang:'shopDetail/getKuang'//获取弹框的内容
    }),
    changePagination(e) {
      this.current = e.mp.detail.current + 1;
    },
    choice() {
      //点击出现弹框
      this.show = true;
      let ArrVid=this.chooseList.map((item,index)=>{
          return this.chooseList[index].attributeValueRelationVoList[this.Arrays[index]].vid 
      })
      let pid = this.chooseList[0].pid;
      this.getKuang({
        pid,
        vids: JSON.stringify(ArrVid)
      });
    },
    close(){
      this.show = false;
        
    },
    reduce(){
        this.value--;
      if(this.value<0){
          this.value = 0
      }
    },
    add(){
      this.value++;
    },
    sure(){
        //点击确定 弹框消失
        this.show = false;
        // 进行跳转页面  做本地存储
        this.$store.commit('shopDetail/save',{
            pid:this.getDetailList.pid,
            skuKey:this.getKuangList.skuKey,
            buyNum:this.value
        })
        wx.navigateTo({
            url:"/pages/shop/shopcar/main"
        });
    },
    buy(){
        //点击购买判断
        this.show = true;
    },
    Gaol(i, index, pid){
    //  console.log(i,index,pid);
      console.log(this.$set(this.Arrays, index, i));
      let  ArrVid=this.chooseList.map((item,index)=>{
          return this.chooseList[index].attributeValueRelationVoList[this.Arrays[index]].vid 
      });
      this.getKuang({
         pid,
         vids:JSON.stringify(ArrVid)
      })
    },
    //分享
    share(){
        this.$store.commit('shopDetail/saves',{
            pid:this.getDetailList.pid
        })
        wx.navigateTo({
            url:"/pages/shop/canvas/main"
        })
    },
  },
  
  created(){
  },
  onShow() {
    wx.setNavigationBarTitle({
      title: "商品详情"
    });
    this.choose();
    this.hintContent(this.getDetailList.sstid);
    this.picDown({
      pid: this.currentpid,
      basePid: this.getDetailList.basePid,
      userIdentity: this.getDetailList.userIdentity
    });
  },
  onLoad(){
    this.activeCurrent = 1;
    this.$set(this.Arrays, index, i);
    this.Arrays = [];
    for (var i = 0; i < this.chooseList.length; i++) {
      this.Arrays.push(0);
      this.Indexs.push(i)
    }
  }
};
</script>

<style scoped lang="scss">
@-webkit-keyframes addTranslate
{
from {height: 0;}
to {height: 450px;}
}
@-webkit-keyframes reduceTranslate
{
from {height: 450px;}
to {height: 0;}
}
.wrap {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
}
.swiperView {
  width: 100%;
  height: 340px;
  img {
    width: 100%;
    height: 100%;
  }
}
.pagination {
  position: absolute;
  top: 300px;
  right: 30px;
  width: 30px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
}
.price {
  width: 100%;
  height: 27px;
  display: flex;
  align-items: center;
  margin: 20px 0px;
  h4 {
    font-size: 24px;
    color: #fcb0e1;
    padding-left: 20px;
    box-sizing: border-box;
    span {
      font-size: 14px;
    }
  }
  h3 {
    font-size: 14px;
    color: #a97a33;
    padding: 0px 10px;
  }
  img {
    width: 30px;
    height: 10px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .share {
    font-size: 12px;
    width: 100px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid #fc5d7b;
    border-radius: 20px;
    color: #fc5d7b;
    margin-left: 80px;
  }
}
.title {
  width: 100%;
  font-size: 16px;
  padding-left: 10px;
  box-sizing: border-box;
  margin: 20px 0px;
}
.kuaidi {
  width: 100%;
  margin: 20px 0px;
  padding-left: 10px;
  color: #ccc;
  font-size: 14px;
  box-sizing: border-box;
}
.choose {
  width: 100%;
  margin: 15px 0px 20px 0px;
  padding-left: 10px;
  box-sizing: border-box;
  color: #333;
  font-size: 14px;
  h3 {
    float: left;
    font-weight: lighter;
  }
  span {
    float: left;
    padding-left: 5px;
    box-sizing: border-box;
  }
  i {
    float: right;
  }
}
.hint {
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin: 10px 0px;
  font-size: 14px;
  display: flex;
  align-items: center;
  i {
    width: 10%;
    padding-left: 10px;
    box-sizing: border-box;
  }
  span {
    width: 90%;
    color: #fc5d7b;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.picDownList {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  img {
    width: 100%;
  }
}
.btn {
  width: 100%;
  height: 40px;
  background: #eee;
  font-size: 16px;
  display: flex;
  position:fixed;
  left:0;
  bottom:0;
  line-height: 40px;
  .left,
  .right {
    flex: 1;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    background: linear-gradient(217deg, #f86367, #fb2579);
  }
}
.mask {
  width: 100%;
  height: 100%;
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
    .center {
      width: 90%;
      height:400px;
      margin: 0 auto;
      .shop-title {
        width: 100%;
        height: 30px;
        line-height: 30px;
        .guige {
          float: left;
          box-sizing: border-box;
          span{
              padding:0px 5px;
              margin:0px 5px;
          }
        }
        .close {
          float: right;
          padding-right: 10px;
          box-sizing: border-box;
        }
      }
      .shop-pic {
        width: 100%;
        height: 72px;
        display: flex;
        align-items: center;
        img {
          width: 65px;
          height: 65px;
        }
        .shop-price {
            margin-left:10px;
        }
      }
      .typeList{
          width:100%;
          margin:10px 0px;
      }
      .color {
        width: 100%;
        height: 24px;
        line-height: 24px;
      }
      .colorList {
        width:100%;
        display: flex;
        margin:5px 0px;
        span {
          display: inline-block;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          padding:0px 3px;
          margin:0px 10px;
          border-radius:3px;
        }
      }
      .num {
        width: 100%;
        height:24px;
        margin-top:5px;
        .num-text{
          float:left;
        }
        .num-btn{
          float:right;
          display:flex;
          span{
              display: inline-block;
              width:22px;
              height:22px;
              border:1px solid #ccc;
              text-align:center;
              line-height:22px;
              font-size:14px;
          }
          input{
              width:24px;
              height:22px;
              border:1px solid #ccc;
              text-align:center;
              line-height:22px;
              font-size:14px;

          }
        }
      }
      
    }
    .sure {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: linear-gradient(217deg, #f86367, #fb2579);
        border-radius: 10px;
        color:#fff;
        font-size:18px;
      }

  .addTranslate{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    animation: addTranslate 3s;
  }
  .reduceTranslate{
    width: 100%;
    height: 254px;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    animation: reduceTranslate 3s;  
  }
  .Gaol {
    background: #33d6c5;
    color: #fff;
  }
}
</style>

