<template>
  <div>
    <ul>
      <li v-for="(item,index) in addressList" :key="index">
        <p class="xx">
          <span class="name">{{item.consignee}}</span>
          <span class="tel">{{item.consigneePhone}}</span>
        </p>
        <p class="dz">
          <span class="address">{{item.addressDetail}}</span>
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
      wx.navigateTo({
        url: "/pages/mine/addAddress/main"
      });
    }
  },
  mounted() {
    this.Cargoaddress();
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
</style>
