import Vue from 'vue';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(Element);
Vue.use(VueRouter);

const router = new VueRouter();

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
