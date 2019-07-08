<template>
        <dl>
          <div v-for="(item,index) in scrollToList" :key="index">
          <dt><img :src="item.productVo.mainImgUrl" alt=""></dt>
          <dd>
            <h3>{{item.productVo.title}}</h3>
            <div class="exempt">
              <span v-if="item.productVo.isFreeShipping===1?isFreeShipping:''">{{isFreeShipping}}</span>
              <span v-if="item.productVo.isFreeTax===1?isFreeTax:''">{{isFreeTax}}</span>
            </div>
            <div class="Pic">
              <b>￥{{item.productVo.salesPrice}}</b>
              <span>￥{{item.productVo.vipPrice}}</span>
              <span class="color">
                赚￥{{item.productVo.earnMoney}}
              </span>
            </div>
          </dd>
          </div>
        </dl>
    </div>
</template>

<script>
export default {
    props:["scrollToList"]
}
</script>

<style>

</style>
