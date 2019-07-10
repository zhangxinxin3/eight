<template>
    <view class="comWrapper">
        <view class="comWrapTop">
            <view v-for="(item,i) in types" 
            :key="i" 
            :class="item.key === search.typesKey?'active':''"
            @click="sort(item.key,item.sort)"
            >
                {{item.title}}
                <view 
                v-for="items in item.child" 
                :key="items.key" >
                    <text onClick="">{{item.title}}</text>
                </view>
            </view>
        </view>
        <view class="comMain">
            <view class="comWrap" v-for="item in searchArr" :key="item.cid">
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
            search:state=>state.index.search
        })
    },
    methods:{
        ...mapActions({
            searchs:'index/search'
        }),
        sort(key,sort){
            this.searchs({
                queryWord:this.search.value,
                queryType:key,
                querySort:sort,
                pageIndex:this.search.typesPage
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.comWrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
}
.comWrapTop{
    width:100%;
    height:80rpx;
    background:#fff;
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
.suctionTop{
    position: fixed;
    top:0;
    left:0;
}
.comMain{
    width:100%;
    padding: 20rpx 0;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    .comWrap{
        width:44%;
        // flex:1;
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

