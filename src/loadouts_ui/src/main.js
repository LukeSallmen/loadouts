// load code from other files --- ORDER MATTERS
import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
// this depends on Vue being loaded first
import './plugins/bootstrap-vue';
// import './plugins/vue-file-agent'
// this uses components defined in BootStrapVue
import App from './App.vue';

// use our global style for the app
// import './style.css';

// allow for debugging!
Vue.config.productionTip = false;

// create and mount our app's main component to "render" the HTML
new Vue({
    render: (h) => h(App),
}).$mount('#app');