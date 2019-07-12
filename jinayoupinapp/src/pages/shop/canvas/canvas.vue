<template>
    <view class="wrapper">
        <view class="title">{{shareData.title}}</view>
        <view class="price">【在售价】{{shareData.supplyPrice}}</view>
        <view class="main">
            <view class="canvas">
                <canvas style="width: 280px; height: 400px;" canvas-id="myCanvas">
                </canvas>
            </view>
            <view class="project">
                <image :src="shareData.mainImgUrl" alt="" />
                <image src="/static/images/true2.png" alt="" />
            </view>
        </view>
        <view class="share">
            <view class="share-item">
                <image src="/static/images/6.png" alt="" />
                <text>保存到相册</text>
            </view>
            <view class="share-item">
                <image src="/static/images/7.png" alt="" />
                <text>微信好友</text>
            </view>
        </view>
    </view>
</template>

<script>
import { mapState, mapActions } from 'vuex';
const user = {
    userImg : 'https://avatars2.githubusercontent.com/u/8192412?s=40&v=4',
    userName: '基纳优品'
}
const qrCode = 'https://upapi.jinaup.com/static/image/QRCode.png';
export default {
    methods:{
        ...mapActions({
            share:'shopDetail/share'
        })
    },
    computed:{
        ...mapState({
            shareData:state=>state.shopDetail.shareData,
            pid:state=>state.mine.pid,
            user:state=>state.mine.user
        })
    },
    created(){
        this.share()
    },
    async mounted(){
        let data = await this.share()
        console.log('this.shareData',data)
        var context = wx.createCanvasContext('myCanvas'); 
        context.rect(0, 0, 320, 520);
        context.drawImage(user.userImg, 0, 0, 40, 40, 20, 12, 34, 34);
        context.draw(true);
        context.save();
        context.setFontSize(12);
        context.fillText(`${user.userName}分享给你一个商品`, 80, 24)
        context.fillText(`邀请码: dasbdabdbaj`, 80, 42)
        context.draw(true);
        // 绘制商品大图和标题
        context.save();
        context.setFontSize(12);
        // 计算多行文本，自动换行
        let row = 0, pos = 0;
        for (let i=0; i<data.title.length; i++){
            let str = data.title.slice(pos, i);
            if (context.measureText(str).width > 266 && context.measureText(str).width < 280){
                context.fillText(data.title.slice(pos, i), 20, 300+15*row);
                row++;
                pos = i;
            }
        }
        if (pos < data.title.length){
            context.fillText(data.title.slice(pos, data.title.length), 20, 300+15*row);
        }
        context.draw(true);
        context.restore();
        // 拿到图片的宽高
        wx.getImageInfo({
            src: data.mainImgUrl, //图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径,
            complete: res => {
                console.log('res...', res);
                let rx, ry, rw, rh;
                if (res.width/res.height > 220/200){
                    ry = 0;
                    rh = res.height;
                    rw = res.height/220*200;
                    rx = (res.width - rw)/2;
                }else{
                    rx = 0;
                    rw = res.width;
                    rh = res.height/200*220;
                    ry = (res.height - rh)/2;
                }
                context.drawImage(data.mainImgUrl, 0, 0, res.width, res.height, 50, 80, 220, 200);
                // context.draw(true)
                context.draw(true, ()=>{
                    // 生成图片
                    wx.canvasToTempFilePath({
                        canvasId: 'myCanvas',
                        quality: 1,
                        fileType: 'jpg',
                        complete: res=>{
                            console.log('tmpFile...', res);
                            wx.previewImage({
                                urls: [res.tempFilePath] 
                            });
                            // 保存到本地
                            wx.setStorage({
                                key:"tempFilePath",
                                data:res.tempFilePath
                            })
                        }
                    })
                });
            }
        });
        // 绘制二维码
        context.save();
        context.setFontSize(15);
        context.fillText('长按识别二维码访问', 20, 370);
        context.restore();
        context.draw(true);
        context.save();
        context.drawImage(qrCode, 0, 0, 1000, 1000, 200, 320, 80, 80);
        context.draw(true);
        // 绘制商品价格
        context.save();
        context.setFontSize(10);
        context.setFillStyle('#ff0000');
        context.fillText('￥', 20, 340);
        context.setFontSize(18);
        context.fillText(data.salesPrice, 30, 340);
        context.setFontSize(10);
        context.setFillStyle('#999');
        // info.result.marketPrice = '88888.888888';
        context.fillText(`￥${data.marketPrice}`, 155-context.measureText(`￥${data.marketPrice}`).width, 340);
        context.restore();
        context.draw(true);
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    .title{
        padding:16rpx 30rpx;
        box-sizing: border-box;
        font-size:40rpx;
    }
    .price{
        padding:16rpx 30rpx;
        box-sizing: border-box;
        font-size:30rpx;
    }
    .main{
        flex:1;
        display: flex;
        justify-content: space-around;
        padding:16rpx 30rpx;
        box-sizing: border-box;
        .canvas{
            flex:1;
            height:100%;
        }
        .project{
            width:140rpx;
            height:140rpx;
            border:2rpx solid #ededed;
            margin-left:15rpx;
            display:flex;
            align-items:center;
            justify-content:center;
            position:relative;
            margin-bottom:18rpx;
            image:nth-child(1){
                width:120rpx;
                height:120rpx;
            }
            image:nth-child(2){
                width:42rpx;
                height:42rpx;
                position:absolute;
                top:4rpx;
                right:4rpx;
            }
        }
    }
    .share{
        width:100%;
        padding:30rpx 0;
        box-sizing: border-box;
        display: flex;
        .share-item{
            flex:1;
            display: flex;
            flex-direction: column;
            align-items: center;
            image{
                width:100rpx;
                height:100rpx;
                margin-bottom: 30rpx;
            }
        }
    }
}
</style>

