<template>
    <view class="wrapper">
        <scroll-view class="wrap" scroll-y="true" @scroll="scroll" @scrolltolower="lower">
            <view class="header">
                <div class="search">
                    <icon type="search" size="16" />
                    <input confirm-type="search" 
                    placeholder="搜索" 
                    v-model="value" 
                    @confirm="confirm($event)" />
                </div>
                <text>取消</text>
            </view>
            <view class="main">
                <view class="mainHis" v-if="hidden">
                    <view class="mainTop">
                        <text>历史搜索</text>
                        <image src="/static/images/del.png" alt="" @click="remove()" />
                    </view>
                    <view class="mains">
                        <text v-for="(item,index) in historyArr" :key="index" @click="bind(item)">{{item}}</text>
                    </view>    
                </view>
                <SearchList v-else></SearchList>
            </view>    
        </scroll-view>
        
    </view>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import SearchList from '@/components/searchList'
export default {
    data(){
        return {
            value:"",
            hidden:true
        }
    },
    components:{
        SearchList
    },
    computed:{
        ...mapState({
            search:state=>state.index.search,
            historyArr:state=>state.index.historyArr
        })
    },
    methods:{
        ...mapActions({
            getSearch:'index/search'
        }),
        ...mapMutations({
            changeScroll:'index/changeScroll'
        }),
        confirm(e){
            this.hidden = false;
            this.getSearch({
                queryWord:e.target.value,
                queryType:this.search.typesKey,
                querySort:this.search.typesSort,
                pageIndex:this.search.typesPage
            })
        },
        scroll(e){
            console.log('e.target.scrollTop',e.target.scrollTop)
            if(e.target.scrollTop>=45){
                this.changeScroll(2)
            }else{
                this.changeScroll(1)
            }
        },
        lower(){
            this.getSearch({
                queryWord:this.search.value,
                queryType:this.search.typesKey,
                querySort:this.search.typesSort,
                pageIndex:++this.search.typesPage
            })
        },
        remove(){
            wx.setStorage({
                key: "historyArr"
            })
            this.$store.commit('index/getHis')
        },
        bind(item){
            this.hidden = false;
            this.getSearch({
                queryWord:item,
                queryType:this.search.typesKey,
                querySort:this.search.typesSort,
                pageIndex:this.search.typesPage
            })
        }
    },
    onShow(){
        this.$store.commit('index/getHis')
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .wrap{
        width:100%;
        height:100%;
    }
}
.header{
    width:100%;
    height:100rpx;
    display: flex;
    align-items: center;
    padding:10rpx 30rpx;
    box-sizing: border-box;
    background:#f9f9f9;
    .search{
        height:70rpx;
        flex:1;
        background:#ededed;
        border-radius: 10rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 10rpx;
        box-sizing: border-box;
        icon{
            margin-right:10rpx;
        }
        input{
            flex:1;
        }
    }
    text{
        padding:0 10rpx;
        font-size:28rpx;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:#999da2;
        margin-left:32rpx;
    }
}
.main{
    width: 100%;
    background:#f9f9f9;
    .mainHis{
        width: 100%;
        height:100%;
        background:#fff;
        padding:20rpx 30rpx;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .mainTop{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            text{
                font-size:28rpx;
                color:#999;
                font-weight:400;
            }
            image{
                width:28rpx;
                height:28rpx;
            }
        }
        .mains{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            padding:30rpx 0;
            box-sizing: border-box;
            text{
                font-size:28rpx;
                font-weight:400;
                color:#333;
                padding:10rpx 38rpx 10rpx 34rpx;
                background:#f5f5f4;
                border-radius:12rpx;
                margin: 20rpx 20rpx 20rpx 0;
            }
        }    
    }
    
}
</style>

