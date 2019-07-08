import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

<<<<<<< HEAD
//引入子模块
import mine from "./modules/mine";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        mine
    },
    plugins: [createLogger]
})
=======
// 引入子模块
import index from './modules/index'
import mine from './modules/mine';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        index,
        mine
    },
    state: {
        info: {}  // 用户信息
    },
    mutations: {
        // 更新全局的state
        updateState(state, payload){
          state.info = payload;
        }
    },
    plugins:[createLogger()]
})
>>>>>>> 71744290b65d3a9102158eda11b83b4df3543f2b
