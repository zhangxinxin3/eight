<template>
  <div>
    <ul>
      <li>
        <p class="xx">
          <span class="name">{{addressList.consignee}}</span>
          <span class="tel">{{addressList.consigneePhone}}</span>
        </p>
        <p class="dz">
          <span class="address">{{addressList.addressDetail}}</span>
          <span class="mr" v-if="addressList.state">默认</span>
          <span class="tit" v-if="addressList.spn">{{addressList.spn}}</span>
        </p>
      </li>
    </ul>
    <button @click="jumpAddress">新增收货地址</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      addressList: state => state.mine.addressList
    })
  },
  methods: {
    ...mapActions({
      Cargoaddress: "mine/Cargoaddress"
    }),
    jumpAddress() {
      wx.redirectTo({
        url: "/pages/mine/addAddress/main"
      });
    }
  },
  onLoad() {
    wx.getStorage({
      key: "addressList",
      success: res => {
        console.log("254", res.data);
        this.Cargoaddress(res.data);
        this.$store.commit("mine/getAddressList", {
          addressList: res.data
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
button {
  margin: 150rpx;
  background: gray;
  color: white;
  width: 94%;
  margin-left: 3%;
}
.xx {
  font-weight: 600;
  .tel {
    padding-left: 20rpx;
  }
}
.dz {
  .spn {
    border: 1rpx solid blue;
  }
}
.del {
  padding-left: 30rpx;
}
ul {
  li {
    padding-left: 80rpx;
    margin: 30rpx 0;
    position: relative;
  }
}
.mr {
  border: 1rpx solid blueviolet;
  font-size: 30rpx;
  background: #ccc;
}
.tit {
  font-size: 30rpx;
  position: absolute;
  left: 0;
  top: 50rpx;
  border: 1rpx solid black;
  display: block;
  background: black;
  color: white;
  border-radius: 30rpx;
}
</style>
