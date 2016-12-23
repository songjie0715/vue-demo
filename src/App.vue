<template>
  <div id="app">
    <section class="todoapp">
      <!-- header -->
      <header class="header">
        <h1>todos</h1>
        <input class="new-todo"
          @keyup.enter="addTodo">
      </header>
      <!-- main section -->
      <section class="main">
        <!-- <input class="toggle-all" type="checkbox"> -->
        <ul class="todo-list">
          <todo v-for="todo in todos" :todo="todo"></todo>
        </ul>
      </section>
      <!-- footer -->
      <footer class="footer">
        <span class="todo-count">
          <strong v-show="undoneLen">left {{ undoneLen }}</strong>
        </span>
      </footer>
    </section>
  </div>
</template>


<script>
import Todo from './components/Todo.vue';
export default {
    components: { Todo },
    name: 'app',
    computed: {
        todos () {
            return this.$store.state.todos;
        },
        doneLen () {
            return this.$store.state.todos.filter(todo => todo.done).length;
        },
        undoneLen () {
            return this.$store.state.todos.length - this.doneLen;
        }
    },
    methods: {
        addTodo (e) {
            var text = e.target.value;
            if (text.trim()) {
                this.$store.commit('addTodo', { text });
            }
            e.target.value = '';
        }
    }
};
</script>


