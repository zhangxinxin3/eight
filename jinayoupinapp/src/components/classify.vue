<template>
<div class="wrap">
  <div class="list-top">
    <section v-for="(item,index) in data" :key="index">
      <img :src="item.imgUrl" alt="">
      <span>{{item.cname}}</span>
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


</style>
