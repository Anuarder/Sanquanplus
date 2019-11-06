import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from "./plugins/i18n";

import VSidebar from './components/Sidebar.vue'
import VNavigation from './components/Navigation.vue'
import VFooter from './components/Footer.vue'
import VProductCard from './components/ProductCard.vue'

Vue.component('v-sidebar', VSidebar);
Vue.component('v-navigation', VNavigation);
Vue.component('v-footer', VFooter);
Vue.component('v-product-card', VProductCard);

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
