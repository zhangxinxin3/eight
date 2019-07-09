<template>
  <div>
    <div class="detailMessage">
      <p>
        <input type="text" placeholder="收货人" @change="saveName" />
        <i class="iconfont icon-youjiantou"></i>
      </p>
      <p>
        <input type="text" placeholder="手机号码" @change="saveTel" maxlength="11" />
        <i class="iconfont icon-youjiantou"></i>
      </p>
      <p>
        <input type="text" placeholder="所在地区" @change="saveDetailAddress" />
        <i class="iconfont icon-youjiantou"></i>
      </p>
      <p>
        <input name id placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元 室等" @change="saveAddress" />
      </p>
    </div>
    <div class="tag">
      <p>标签</p>
      <div class="tagList">
        <span
          v-for="(item,index) in tagList"
          :key="index"
          :class="currentTab === index?'active':''"
          @click="changeActive"
          :data-item="item"
        >{{item.title}}</span>
      </div>
    </div>
    <view class="body-view">
      <p>设置默认地址</p>
      <switch @change="switchChange" />
    </view>
    <button class="btn" @click="saveObj">保存</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      tagList: state => state.mine.tagList,
      currentTab: state => state.mine.currentTab,
      address: state => state.mine.addRessObj.address,
      addressDetail: state => state.mine.addRessObj.addressDetail,
      areaId: state => state.mine.addRessObj.areaId,
      areaName: state => state.mine.addRessObj.areaName,
      cityId: state => state.mine.addRessObj.cityId,
      cityName: state => state.mine.addRessObj.cityName,
      consignee: state => state.mine.addRessObj.consignee,
      consigneePhone: state => state.mine.addRessObj.consigneePhone,
      provinceId: state => state.mine.addRessObj.provinceId,
      provinceName: state => state.mine.addRessObj.provinceName,
      state: state => state.mine.addRessObj.address,
      state: state => state.mine.addRessObj.address,
      uid: state => state.mine.addRessObj.uid
    })
  },
  methods: {
    ...mapActions({
      Cargoaddress: "mine/Cargoaddress"
    }),
    //更改样式以及获取标签名
    changeActive(e) {
      this.$store.commit("mine/changeActive", {
        currentTab: e.target.dataset.item.id,
        spn: e.target.dataset.item.title
      });
    },
    //获取收货人名字
    saveName(e) {
      this.$store.commit("mine/saveObjName", {
        consignee: e.mp.detail.value
      });
    },
    //获取手机号
    saveTel(e) {
      this.$store.commit("mine/saveObjTel", {
        consigneePhone: e.mp.detail.value
      });
    },
    //获取详细地址
    saveDetailAddress(e) {
      this.$store.commit("mine/saveObjDetailAddress", {
        addressDetail: e.mp.detail.value
      });
    },
    //获取地址
    saveAddress(e) {
      console.log(e);
      this.$store.commit("mine/saveObjAddress", {
        address: e.mp.detail.value
      });
    },
    //改变switch状态
    switchChange(e) {
      this.$store.commit("mine/saveObjstatus", {
        state: e.mp.detail.value
      });
    },
    //保存并返回
    saveObj() {
      // wx.setStorage({
      //   key: "key",
      //   data: this.addRessObj,
      // });
      this.Cargoaddress({
        address: this.address,
        addressDetail: this.addressDetail,
        areaId: this.areaId,
        areaName: this.areaName,
        cityId: this.cityId,
        cityName: this.cityName,
        consignee: this.consignee,
        consigneePhone: this.consigneePhone,
        provinceId: this.provinceId,
        provinceName: this.provinceName,
        state: this.state,
        uid: this.uid
      });
      wx.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.detailMessage {
  height: 430rpx;
  width: 94%;
  font-size: 32rpx;
  margin-left: 3%;
  p {
    height: 66rpx;
    line-height: 66rpx;
    width: 100%;
    border-bottom: 1rpx solid #eee;
    position: relative;
    &:last-child {
      border: none;
      margin-top: 3%;
    }
    textarea {
      height: 200rpx;
    }
    input {
      margin-top: 2.5%;
    }
    i {
      position: absolute;
      right: 20rpx;
      top: -8rpx;
    }
  }
}
.tag {
  border-top: 20rpx solid #eee;
  padding: 15rpx 35rpx;
  p {
    font-size: 34rpx;
    margin-bottom: 20rpx;
  }
  .tagList {
    display: flex;
    height: 100rpx;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    span {
      width: 130rpx;
      height: 50rpx;
      border: 1rpx solid #ccc;
      line-height: 50rpx;
      text-align: center;
      font-size: 30rpx;
      border-radius: 25rpx;
      margin-right: 30rpx;
    }
  }
}
.active {
  background: gray;
  color: white;
}
.body-view {
  display: flex;
  height: 100rpx;
  width: 100%;
  padding: 0 30rpx;
  line-height: 100rpx;
  font-size: 30rpx;
  position: relative;
  p {
    margin-right: 350rpx;
  }
}
.btn {
  width: 94%;
  height: 100rpx;
  margin-left: 3%;
  background: gray;
  color: white;
}
</style>
