<template>
    <view class="comWrapper">
        <view :class="scroll===2?'suctionTop':'comWrapTop'">
            <view class="comTop">
                <text v-for="(item,index) in types" 
                :key="index" 
                :class="item.key === search.typesKey?'active':''"
                @click="sortType(item.key,item.sort)"
                >{{item.title}}</text> 
            </view>
            <view class="sho"
                v-if="flag">
                <text
                v-for="(items,index) in child" 
                :key="index" 
                @click="sorts(items.key,items.sort)">{{items.title}}</text>
            </view>
        </view>
        <view class="comMain">
            <view class="comWrap" v-for="(item,index) in searchArr" :key="index" @click="detail(item)">
                <image :src="item.mainImgUrl" alt="" />
                <text>{{item.title}}</text>
                <view>
                    <text>￥{{item.salesPrice}}</text>
                    <text>￥{{item.vipPrice}}</text>
                </view>
            </view>
        </view>    
    </view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    computed:{
        ...mapState({
            types:state=>state.index.types,
            searchArr:state=>state.index.searchArr,
            search:state=>state.index.search,
            child:state=>state.index.child,
            flag:state=>state.index.flag,
            scroll:state=>state.index.scroll
        })
    },
    methods:{
        ...mapActions({
            searchs:'index/search'
        }),
        sortType(key,sort){
            console.log('key,sort',key,sort)
            this.searchs({
                queryWord:this.search.value,
                queryType:key,
                querySort:sort,
                pageIndex:this.search.typesPage
            })
        },
        sorts(key,sort){
            console.log('key,sort',key,sort)
            console.log('this.search',this.search)
            this.searchs({
                queryWord:this.search.value,
                queryType:key,
                querySort:sort,
                pageIndex:this.search.typesPage
            })
        },
        detail(item){
            console.log(item)
            // wx.navigateTo({
            //     url:'/pages/shop/shopDetail/main?pid'=
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
.comWrapper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.comWrapTop{
    width:100%;
    height:80rpx;
    background:#fff;
}
.suctionTop{
    width:100%;
    height:80rpx;
    background:#fff;
    position: fixed;
    top:0;
    left:0;
}
.comTop{
    width: 100%;
    height:100%;
    display: flex;
    align-items: center;
    text{
        flex:1;
        text-align: center;
        font-size: 26rpx;
        color:#666;
    }
    text.active{
        color:skyblue!important;
    }    
}
.sho{
    position: fixed;
    right:0;
    top:180rpx;
    z-index: 999;
    width:250rpx;
    height:100rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background:#fff;
    padding:0 20rpx;
    box-sizing: border-box;
    text{
        width:100%;
        flex:1;
    }
}
.comMain{
    width:100%;
    padding: 20rpx 0;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    .comWrap{
        width:44%;
        margin:20rpx;
        background:#fff;
        display: flex;
        flex-direction: column;
        image{
            width:100%;
            height:288rpx;
            margin-bottom:112rpx;
        }
        >text{
            width:100%;
            font-size:24rpx;
            padding-left:10rpx;
            color:#323a45;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
        }
        view{
            display: flex;
            align-items: flex-end;
            text:nth-child(1){
                font-size:36rpx;
                color:red;
                margin-right:10rpx;
            }
            text:nth-child(2){
                font-size:22rpx;
                color:#a87831;
            }
        }
    }
}
</style>

