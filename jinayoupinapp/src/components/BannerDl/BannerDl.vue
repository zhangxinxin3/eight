<template>
    <dl>
        <div class="dls" v-for="(item,index) in DalList" :key="index">
            <dt>
                <img :src="item.mainImgUrl" alt="">
            </dt>
            <dd>
                <h3>{{item.title}}</h3>
                <div class="Pic">
                    <b>￥{{item.salesPrice}}</b>
                    <span class="color">
                        赚￥{{item.earnMoney}}
                    </span>
                </div>
            </dd>
        </div>
    </dl>
</template>

<script>
export default {
    props:["DalList"]
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
    .Pic{
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 30px;
      b{
        font-size: 15px;
        color: rgb(254,116,142);
        margin-right: 10px;
      }
      span{
        margin-top: 3px;
      }
      .color{
        color: rgb(254,116,142);
        background: rgb(255,232,237);
        font-size: 12px;
        padding: 1px;
      }
    }
  }
}
</style>
