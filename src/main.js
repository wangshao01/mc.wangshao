import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import rem from '../rem'

import { NavBar } from 'vant';
Vue.use(NavBar);
// main.js
import { Button } from "vant";
Vue.use(Button);
import { Calendar } from 'vant';
Vue.use(Calendar);

import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

import { Toast } from 'vant';
Vue.use(Toast)

import { IndexBar, IndexAnchor } from 'vant';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);




Vue.config.productionTip = false

new Vue({
  router,
  store,
  rem,

  render: h => h(App)
}).$mount('#app')
