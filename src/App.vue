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
          <todo v-for="todo in filteredTodos" :todo="todo"></todo>
        </ul>
      </section>
      <!-- footer -->
      <footer class="footer">
        <span class="todo-count">
          <strong v-show="undoneLen">{{ undoneLen }} item left</strong>
        </span>
        <ul>
          <li v-for="(val, key) in filters">
              <a href="#"
                  :class="{ selected:  visiblity === key }"
                  @click.prevent="visiblity = key">{{ key }}</a>
          </li>
        </ul>
      </footer>
    </section>
  </div>
</template>


<script>
import Todo from './components/Todo.vue';
// import { mapMutations } from 'vuex';

const filters = {
    all: todos => todos,
    active: todos => todos.filter(todo => !todo.done),
    completed: todos => todos.filter(todo => todo.done)
};

export default {
    components: { Todo },
    name: 'app',
    data () {
        return {
            visiblity: 'all',
            filters: filters
        };
    },
    computed: {
        todos () {
            return this.$store.state.todos;
        },
        filteredTodos () {
            return filters[this.visiblity](this.todos);
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
        },
        doneTask () {

        }
    }
};
</script>


