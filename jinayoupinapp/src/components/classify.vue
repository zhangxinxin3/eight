<template>
<div class="wrap">
  <div class="list-top">
    <section v-for="(item,index) in data" :key="index">
      <img :src="item.imgUrl" alt="">
      <span>{{item.cname}}</span>
    </section>
  </div>
  <div class="menu">
    <section>综合</section>
    <section>最新</section>
    <section>
        价格
        <div class="sanjiao">
           <span class="top"></span>
           <span class="bottom"></span>
        </div>

    </section>
  </div>
</div>
</template>

<script>
export default {
   props: ['data'],
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
        .sanjiao{
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 50px solid #FC5D7B;
             
        }
    }
}
</style>
