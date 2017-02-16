<template>
  <li class="todo">
    <div class="view">
      <input class="toggle" type="checkbox" @change="toggleTodo(todo)">
      <label v-text="todo.text"></label>
      <button @click="deleteTodo(todo)">删除</button>
    </div>
  </li>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
      name: 'Todo',
      props: ['todo'],
      methods: {
          ...mapMutations([
              'toggleTodo',
              'deleteTodo'
          ])
      }
  };
</script>



