import Vue from 'vue'
import App from './index'

<<<<<<< HEAD
=======
// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

>>>>>>> np
const app = new Vue(App)
app.$mount();
