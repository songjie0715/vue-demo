<template>
  <main>
    <header>购物车</header>
    <ul>
      <li v-for="item in list">
        <img :src="item.img" :alt="item.name">
        <p class="good-name">{{ item.name }}</p>
        <p class="good-price"> {{ item.price }} </p>
        <p><span>+</span><span>-</span></p>
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped></style>

<script>
  export default {
      data () {
          return {
              list: this.$store.state.shoppingCart
          };
      }
  };
</script>


