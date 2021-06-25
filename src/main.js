import '@/config';
import '@/scss/style.scss';
import App from './App.vue';
import Vue from 'vue';
import VueCookies from 'vue-cookies';
import ApiService from '@/services/ApiService';
import VueHotkey from 'v-hotkey'
import routes from '@/routes';


Vue.config.productionTip = false;
Vue.prototype.ENDPOINT = window.endpoint;
Vue.use(VueCookies);
Vue.use(VueHotkey);


window.$http = ApiService.init();

new Vue({
    render: (h) => h(App),
    router : routes
}).$mount('#app');
