import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        'todos': []
    },
    mutations: {
        addTodo: (state, {text}) => {
            state.todos.push({
                text,
                done: false
            });
        },
        deleteTodo: (state, {todo}) => {
            state.todos.splice(state.todos.indexOf(todo), 1);
        },
        toggleTodo: (state, {todo}) => {
            let todoItem = state.todos[state.todos.indexOf(todo)];
            todoItem.done = !todoItem.done;
        }
    }
});
