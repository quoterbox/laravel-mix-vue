import Vue from 'vue'

import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

Vue.component('deposit-calc', require('./components/DepositCalcComponent.vue').default);

const app = new Vue({
    el: '#app',
});
