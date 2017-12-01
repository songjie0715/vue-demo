import * as types from './mutation-types';

export const state = {
    todos: JSON.parse(window.localStorage.getItem('todoKey') || '[]'),
    count: 0,
    shoppingCartList: [],
    totalPrice: 0
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
    },
    getShoppingCartTotalPrice: (state, getters) => {
        state.totalPrice = 0;
        if (state.shoppingCartList.length === 0) {
            state.totalPrice = 0;
            return state.totalPrice;
        }
        state.shoppingCartList.forEach(function (d, i) {
            if (d.isChecked === true) {
                state.totalPrice += d.price * d.count;
            }
        });
        return state.totalPrice;
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
    },
    [types.ADD_TO_SHOPPINGCART] (state, {item}) {
        let single = state.shoppingCartList.find(d => d.id === item.id);
        if (!single) {
            state.shoppingCartList.push({
                ...item,
                count: 1,
                isChecked: false
            });
        } else {
            single.count++;
        };
    },
    [types.MINUS_FROM_SHOPPINGCART] (state, {item}) {
        let index = state.shoppingCartList.findIndex(d => d.id === item.id);
        let num = state.shoppingCartList[index].count;
        if (num > 1) {
            state.shoppingCartList[index].count--;
        } else {
            state.shoppingCartList.splice(index, 1);
        }
    },
    [types.CALC_PRICE] (state, {id}) {
        let index = state.shoppingCartList.findIndex(d => d.id === id);
        state.shoppingCartList[index].isChecked = !state.shoppingCartList[index].isChecked;
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
    },
    addToShoppingCart ({ commit }, item) {
        commit(types['ADD_TO_SHOPPINGCART'], item);
    },
    minusFromShoppingCart ({ commit }, item) {
        commit(types['MINUS_FROM_SHOPPINGCART'], item);
    },
    calcPrice ({ commit }, id) {
        commit(types['CALC_PRICE'], id);
    }

};
