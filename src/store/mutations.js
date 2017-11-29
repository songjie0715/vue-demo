import * as types from './mutation-types';

export const state = {
    todos: JSON.parse(window.localStorage.getItem('todoKey') || '[]'),
    count: 0,
    shoppingCart: []
};

let updateState = () => {
    window.localStorage.setItem('todoKey', JSON.stringify(state.todos));
    window.localStorage.setItem('count', JSON.stringify(state.count));
};

export const getters = {
    doneTodos: (state, getters) => {
        return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length;
    }
};

export const mutations = {
    [types.ADD_TODO] (state, {text}) {
        state.todos.push({
            text,
            done: false
        });
        updateState();
    },
    [types.DELETE_TODO] (state, {todo}) {
        state.todos.splice(state.todos.indexOf(todo), 1);
        updateState();
    },
    [types.TOGGLE_TODO] (state, {todo}) {
        let todoItem = state.todos[state.todos.indexOf(todo)];
        todoItem.done = !todoItem.done;
        updateState();
    },
    [types.INCREMENT] (state) {
        state.count++;
    },
    [types.DECREMENT] (state) {
        state.count--;
    }
};

export const actions = {
    addTodo ({ commit }, text) {
        commit(types['ADD_TODO'], text);
    },
    deleteTodo ({ commit }, todo) {
        commit(types['DELETE_TODO'], todo);
    },
    toggleTodo ({ commit }, todo) {
        commit(types['TOGGLE_TODO'], todo);
    },
    increment ({ commit }) {
        commit(types['INCREMENT']);
    },
    decrement ({ commit }) {
        commit(types['DECREMENT']);
    }

};
