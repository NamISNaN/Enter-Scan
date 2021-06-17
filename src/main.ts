import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vant/lib/button/style';
import { Dialog } from 'vant';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.use(Dialog);

Vue.directive('alterELDialogMarginTop'/*修改elementUI中el-dialog顶部的距离,传入值eg:{marginTop:'5vh'} */, {
  inserted(el, binding, vnode) {
    (el.firstElementChild as any).style.marginTop = binding.value.marginTop
  }
})



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
