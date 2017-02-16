
export const state = {
    todos: JSON.parse(window.localStorage.getItem('todoKey') || '[]')
};

let updateState = () => {
    window.localStorage.setItem('todoKey', JSON.stringify(state.todos));
};

export const mutations = {
    addTodo: (state, {text}) => {
        state.todos.push({
            text,
            done: false
        });
        updateState();
    },
    deleteTodo: (state, {todo}) => {
        state.todos.splice(state.todos.indexOf(todo), 1);
        updateState();
    },
    toggleTodo: (state, {todo}) => {
        console.log(todo);
        let todoItem = state.todos[state.todos.indexOf(todo)];
        todoItem.done = !todoItem.done;
        updateState();
    }
};
