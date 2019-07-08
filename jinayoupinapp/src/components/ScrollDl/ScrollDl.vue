<template>
        <dl>
          <div class="dls" v-for="(item,index) in scrollToList" :key="index">
          <dt><img :src="item.productVo.mainImgUrl" alt=""></dt>
          <dd>
            <h3>{{item.productVo.title}}</h3>
            <div class="exempt">
              <span v-if="item.productVo.isFreeShipping===1?isFreeShipping:''">{{isFreeShipping}}</span>
              <span v-if="item.productVo.isFreeTax===1?isFreeTax:''">{{isFreeTax}}</span>
            </div>
            <div class="Pic">
              <b>￥{{item.productVo.salesPrice}}</b>
              <span class="span">￥{{item.productVo.vipPrice}}</span>
              <span class="color">
                赚￥{{item.productVo.earnMoney}}
              </span>
            </div>
          </dd>
          </div>
        </dl>
</template>

<script>
export default {
    props:["scrollToList","isFreeShipping","isFreeTax"]
}
</script>

<style lang="scss" scoped>
dl{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dls{
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    margin: 6px 0;
  }
  dt{
    width: 110px;
    height: 110px;
    margin-top: 5px;
    margin-right: 10px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  dd{
    flex:1;
    display: flex;
    flex-direction: column;
    .exempt{
      width: 100%;
      margin: 10px 0;
      span{
        color: rgb(254,116,142);
        border:1px solid rgb(254,116,142);
        padding:1px 2px;
        font-size: 10px;
        margin-right: 10px;
      }
    }
    .Pic{
      width: 100%;
      display: flex;
      align-items: center;
      b{
        font-size: 20px;
        color: rgb(254,116,142);
        margin-right: 5px;
      }
      span{
        margin-top: 3px;
      }
     .span{
        font-size: 11px;
        color: rgb(177,132,72);
        margin-right: 7px;

      }
      .color{
        color: rgb(254,116,142);
        background: rgb(255,232,237);
        font-size: 10px;
        padding: 1px;
      }
    }
  }
}

</style>
