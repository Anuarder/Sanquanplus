import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./stylesheets/main.scss"

import VNavigation from "./components/Navigation.vue"
import VSidebar from "./components/Sidebar.vue"
import VFooter from "./components/Footer.vue"

Vue.component('v-navigation', VNavigation);
Vue.component('v-sidebar', VSidebar);
Vue.component('v-footer', VFooter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
