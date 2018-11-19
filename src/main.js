import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Card from './components/Card.vue'
import Examples from './components/Examples.vue'



Vue.component('app-header', Header);
Vue.component('app-navigation', Navigation);
Vue.component('app-footer', Footer);
Vue.component('app-card', Card);
Vue.component('app-examples', Examples);




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
