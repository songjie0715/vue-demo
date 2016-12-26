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
          <strong v-show="undoneLen">All {{ todoLen }}</strong>
        </span>
        <span>已完成的 <i>{{ doneLen }}</i></span>
        <span>未完成的 <i>{{ undoneLen }}</i></span>
      </footer>
    </section>
  </div>
</template>


<script>
import Todo from './components/Todo.vue';
// import { mapMutations } from 'vuex';

export default {
    components: { Todo },
    name: 'app',
    computed: {
        todos () {
            return this.$store.state.todos;
        },
        todoLen () {
            return this.$store.state.todos.length;
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


