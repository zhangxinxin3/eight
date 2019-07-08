import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

//引入子模块
import mine from "./modules/mine";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        mine
    },
    plugins: [createLogger]
})