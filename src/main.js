// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: true, done: true },
      { id: 2, text: false, done: false },
      { id: 3, text: false, done: true }
    ]
  },
  getters: {
    undoTodos: state => {
      return state.todos.filter(todo => todo.text);
    },
    doneTodoCount: (state, getters) => {
      return getters.undoTodos.length;
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.count += payload.amount;
    },
    decrement: (state, payload) => {
      state.count -= payload.amount;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App />',
  components: { App }
});
