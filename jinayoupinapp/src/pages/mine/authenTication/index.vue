<template>
  <div>
    <div class="header">
      <p>
        <b>真实姓名</b>
        <input type="text" />
      </p>
      <p>
        <b>身份证号</b>
        <input type="idcard" maxlength="18" />
      </p>
    </div>
    <div class="photo">
      <p>
        上传身份证照片
        <span>（图片png、jpg，大小不超过5M）</span>
      </p>
      <div class="zf">
        <div class="positive btn" @click="updataPositive">
          <span>点击上传身份证正面</span>
          <img :src="positive" alt />
        </div>
        <div class="negative btn" @click="updataNegative">
          <span>点击上传身份证反面</span>
          <img :src="negative" alt />
        </div>
      </div>
    </div>
    <div class="introduce">
      <span>为什么需要实名认证？</span>
      <p>根据海关规定，购买跨境商品需要办理清关手续，请您配合进行实名认证，以确保您购买分的商品顺利通过海关检查。（积纳有关海购承诺所传身份证明只用于办理跨境商品的情关手续，不做他途使用，其他任何人均法查看）</p>
      <p>实名认证的规则：购买跨境商品须填写积纳账号注册人的真实姓名、身份证号码及与实名一致的手机号，部分商品下单时需提供收货人的实名信息（含身份证照片），具体请已下单时的提示为准。</p>
    </div>
    <button>保存</button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      positive: state => state.mine.positive,
      negative: state => state.mine.negative
    })
  },
  methods: {
    updataPositive() {
      let that = this;
      wx.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: res => {
          const tempFilePaths = res.tempFilePaths[0];
          that.$store.commit("mine/changePositiveImg", {
            positive: tempFilePaths
          });
          console.log(tempFilePaths, this.data);
        },
        fail: function() {
          console.log("fail");
        },
        complete: function() {
          console.log("complete");
        }
      });
    },
    updataNegative() {
      let that = this;
      wx.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: res => {
          const tempFilePaths = res.tempFilePaths[0];
          that.$store.commit("mine/changeNegativeImg", {
            negative: tempFilePaths
          });
          console.log(tempFilePaths, this.data);
        },
        fail: function() {
          console.log("fail");
        },
        complete: function() {
          console.log("complete");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  height: 200rpx;
  width: 100%;
  border-bottom: 19rpx solid #ccc;
  p {
    display: flex;
    padding-left: 20rpx;
    height: 100rpx;
    border-bottom: 1rpx solid #eee;
    line-height: 100rpx;
    b {
      font-style: "微软雅黑";
      font-size: 34rpx;
      font-weight: bold;
    }
    input {
      margin-left: 30rpx;
      margin-top: 3.4%;
    }
  }
}
.photo {
  display: flex;
  flex-direction: column;
  p {
    display: flex;
    font-size: 30rpx;
    height: 80rpx;
    line-height: 80rpx;
    padding-left: 20rpx;
    span {
      color: #ccc;
      padding-left: 30rpx;
    }
  }
  .zf {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    .btn {
      height: 200rpx;
      width: 320rpx;
      border: 2rpx solid #ccc;
      border-radius: 20rpx;
      span {
        font-size: 30rpx;
        padding-left: 30rpx;
        line-height: 200rpx;
      }
    }
    .positive {
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 20rpx;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .negative {
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 20rpx;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
.introduce {
  flex: 1;
  padding: 20rpx;
  span {
    display: block;
    height: 80rpx;
    line-height: 80rpx;
    font-size: 35rpx;
    text-align: center;
  }
  p {
    text-indent: 60rpx;
    font-size: 30rpx;
    color: #ccc;
  }
}
button {
  height: 80rpx;
  line-height: 80rpx;
  background: gray;
  color: white;
}
</style>
