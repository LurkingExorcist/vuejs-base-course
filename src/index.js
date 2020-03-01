import Vue from 'vue'
import VueRouter from 'vue-router'
import SuiVue from 'semantic-ui-vue'
import Vuelidate from 'vuelidate'
import 'semantic-ui-css/semantic.min.css'

import App from './App.vue'
import store from './store';
import router from './router';

Vue.use(Vuelidate)
Vue.use(SuiVue)
Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
});