<template>
  <li class="todo">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.done">
      <label v-text="todo.text"></label>
      <button @click="deleteItem">删除</button>
    </div>
  </li>
</template>

<script>
  export default {
      name: 'Todo',
      props: ['todo'],
      methods: {
          deleteItem: function (todo) {
              console.log(this);
              this.$emit('delete-todo', todo);
          }
      }
  };
</script>



