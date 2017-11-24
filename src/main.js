import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import selectComponents from './components/select.vue';
import todoComponent from './components/TodoList.vue';
import HelloComponent from './components/Hello.vue';
import shoppingcarComponent from './components/shoppingCart.vue';

Vue.use(Element);
Vue.use(VueRouter);

const Home = {
    data () {
        return {
            visible: false
        };
    },
    template: '<div class="grid-content bg-purple">\n' +
    '          <el-button @click="visible = true">按钮</el-button>\n' +
    '          <el-dialog :visible.sync="visible" title="Hello world">\n' +
    '            <p>欢迎使用 Element</p>\n' +
    '          </el-dialog>\n' +
    '        </div>'
};

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/a', component: selectComponents },
      { path: '/', component: Home },
      { path: '/todolist', component: todoComponent },
      { path: '/hello', component: HelloComponent },
      { path: '/shoppingcart', component: shoppingcarComponent }
    ]
});

/* eslint-disable no-new */
new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
});
