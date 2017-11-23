<template>
  <li class="todo" :class="{ done: todo.done }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.done" @change="toggleTodo({ todo: todo })">
      <label v-text="todo.text"></label>
      <button @click="deleteTodo({ todo: todo })">删除</button>
    </div>
  </li>
</template>

<style>
    .done{
        text-decoration: line-through;
        color: #ccc;
    }
</style>

<script>
  import { mapActions } from 'vuex';
  export default {
      name: 'Todo',
      props: ['todo'],
      methods: {
          ...mapActions(['toggleTodo', 'deleteTodo'])
      }
  };
</script>



