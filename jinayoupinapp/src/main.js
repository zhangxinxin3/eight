import Vue from 'vue'
import App from './App'
import store from "./store/index"

//引入store
import store from "@/store/index"

//引入vuex
import store from "./store/index";
Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store;
<<<<<<< HEAD
=======

>>>>>>> 71744290b65d3a9102158eda11b83b4df3543f2b
const app = new Vue(App)
app.$mount()
