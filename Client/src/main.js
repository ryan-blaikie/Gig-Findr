import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueMobileDetection from 'vue-mobile-detection'


Vue.config.productionTip = false
Vue.use(VueMobileDetection)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
