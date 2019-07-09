import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

// 引入子模块
import index from './modules/index';
import mine from './modules/mine';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        index,
        mine
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
