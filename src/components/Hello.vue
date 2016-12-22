<template>
  <div class="hello">
    <p>{{ count }}</p>
    <p>{{ doneTodoCount }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex';
  export default {
    name: 'hello',
    computed: {
      num () { return 3; },
      ...mapState(['count']),
      ...mapGetters(['doneTodoCount'])
    },
    methods: {
      ...mapMutations(['increment', 'decrement'])
    }
  };
</script>
