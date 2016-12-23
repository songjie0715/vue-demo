<template>
  <li class="todo">
    <div class="view">
      <input class="toggle"
        type="checkbox">
      <label v-text="todo.text"></label>
    </div>
  </li>
</template>

<script>
  export default {
      name: 'Todo',
      props: ['todo']
  };
</script>



