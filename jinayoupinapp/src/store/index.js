import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

// 引入子模块
import index from './modules/index';
import mine from './modules/mine';
import shopDetail from "./modules/shopDetail"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        index,
        mine,
        shopDetail
    },
<<<<<<< HEAD
=======
    state: {
        info: {}  // 用户信息
    },
    mutations: {
        // 更新全局的state
        updateState(state, payload){
          state.info = payload;
        }
    },
>>>>>>> np
    plugins:[createLogger()]
})
