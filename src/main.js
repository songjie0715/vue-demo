// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store/';
import VueRouter from 'vue-router';
import selectComponents from './components/select.vue';
import todoListComponents from './components/TodoList.vue';
import '../node_modules/select2/dist/js/select2.min';
import '../node_modules/select2/dist/css/select2.min.css';

Vue.use(VueRouter);

const Home = {
    template: `<div class="home">
                <h2>Home</h2>
                <p>hello</p>
              </div>`
};

const Parent = {
    data () {
        return {
            transitionName: 'slide-left'
        };
    },
    // dynamically set transition based on route change
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length;
            const fromDepth = from.path.split('/').length;
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        }
    },
    template: `<div class="parent">
        <h2>Parent</h2>
        <transition :name="transitionName">
          <router-view class="child-view"></router-view>
        </transition>
      </div>`
};

const Default = { template: '<div class="default">default</div>' };
const Foo = selectComponents;
const Bar = todoListComponents;

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/parent',
            component: Parent,
            children: [
                { path: '', component: Default },
                { path: 'foo', component: Foo },
                { path: 'bar', component: Bar }
            ]
        }
    ]
});

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    store,
    template: `<div id="app">
                <h1>Transitions</h1>
                <ul>
                  <li><router-link to="/">/</router-link></li>
                  <li><router-link to="/parent">/parent</router-link></li>
                  <li><router-link to="/parent/foo">/parent/foo</router-link></li>
                  <li><router-link to="/parent/bar">/parent/bar</router-link></li>
                </ul>
                <transition name="fade" mode="out-in">
                  <router-view class="view"></router-view>
                </transition>
              </div>`
});
