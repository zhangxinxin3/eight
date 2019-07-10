<template>
    <div class="box">
        <img @click="ImgDal(img.jumpUrl)" class="topImg"  :src="img.pictUrl" alt="">
        <div class="recommendation">
            <div class="left"> 
                <h2>精选好物</h2>
                <span>等你来抢</span>
            </div>
            <div class="right">
                <span>更多</span>
                <b>></b>
            </div>
        </div>
        <div class="content">
            <div class="itemCont" v-for="(item,index) in data.items" :key="index" @click="clickDetail(item.jumpUrl)">
                <img :src="item.imgUrl" alt="">
                <div class="bom">
                    <div>{{item.title}}</div>
                    <p>${{item.salesPrice}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["data","img","submit","shopDeatil"],
    methods:{
        ImgDal(url){
            let data=url.split('&')[1].split('=')[1]
            this.submit(data);
        },
        clickDetail(pid){
            let data=pid.split("&")[1].split('=')[1]
            this.shopDeatil(data)
        }
    }
}
</script>

<style scoped lang="scss">
.content{
    width: 100%;
    flex:1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .itemCont{
        width: 31%;
        height: 185px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        img{
            width: 100%;
            height: 124px;
        }
        .bom{
            width:100%;
            flex:1;
            div{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                width: 100%;
            }
            p{
                color: rgb(254,116,142);
                margin-top: 2px;
            }
        }
    }
}
.box{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    padding: 3px 0;
}
.topImg{
    width: 100%;
    height: 114px;
    border-radius: 15px;
}
.recommendation{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    .left{
        flex:1;
        height: 100%;
        display: flex;
        align-items: center;
        h2{
           font-size: 20px;
           margin-right: 7px;
        }
        span::before{
            content:"";
            border:1.3px solid #ccc;
            height: 10px;
            margin-right: 7px;
        }
    }
    .right{
        color: rgb(254,116,142);
        height: 100%;
        display: flex;
        align-items: center;
        span{
            margin-right: 5px;
        }
    }
}
</style>
