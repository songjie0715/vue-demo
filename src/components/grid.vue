<template>
    <div id="demo">
        <form id="search">
            Search <input name="query" v-model="searchQuery">
        </form>
        <demo-grid
            :filter-data="gridData"
            :columns="gridColumns"
            :filter-key="searchQuery">
        </demo-grid>
    </div>
</template>

<style>

</style>

<script>
  import demoGrid from './demo-grid.vue';
  export default {
      name: 'grid',
      components: {
          'demo-grid': demoGrid
      },
      data () {
          return {
              searchQuery: '',
              gridColumns: ['name', 'power'],
              gridData: [
                  { name: 'Chuck Norris', power: Infinity },
                  { name: 'Bruce Lee', power: 9000 },
                  { name: 'Jackie Chan', power: 7000 },
                  { name: 'Jet Li', power: 8000 }
              ]
          };
      }
  };
</script>



