<template>
  <main>
    <header>购物车</header>
    <ul>
      <li v-for="item in list">
        <img :src="item.img" :alt="item.name">
        <p class="good-name">{{ item.name }}</p>
        <p><input type="checkbox" checked="item.isChecked" @change="select(item.id)"></p>
        <p class="good-price"> {{ item.price }} </p>
        <p class="good-num">{{ item.count }}</p>
        <p><span @click="addToShoppingCart({item: item})">+</span><span @click="minusFromShoppingCart({item: item})">-</span></p>
      </li>
    </ul>
    <div class="total-price">共计：<span>{{ totalNum }}</span>元</div>
  </main>
</template>

<style lang="scss" scoped></style>

<script>
  import { mapActions } from 'vuex';
  export default {
      data () {
          return {
              list: this.$store.state.shoppingCartList,
              totalNum: this.$store.state.totalPrice
          };
      },
      methods: {
          ...mapActions(['addToShoppingCart', 'minusFromShoppingCart']),
          select (id) {
              this.$store.dispatch('calcPrice', {
                  id: id
              });
          }
      }
  };
</script>


