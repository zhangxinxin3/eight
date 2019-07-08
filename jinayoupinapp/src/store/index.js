import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

//引入子模块
import getRecommed from "./modules/getRecommed";


Vue.use(Vuex);
 
export default new Vuex.Store({
    modules:{
        getRecommed
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
