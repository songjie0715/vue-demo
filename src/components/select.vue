<template>
  <div>
    <p>Selected: {{ selected }}</p>
    <select2 :options="options" v-model="selected">
      <option disabled value="0">Select one</option>
    </select2>
  </div>
</template>

<script>
    import select2Component from './select2.vue';
    export default{
        data () {
            return {
                selected: 0,
                options: [
                    { id: 1, text: 'Hello' },
                    { id: 2, text: 'World' }
                ]
            };
        },
        components: {
            'select2': select2Component
        }
    };
</script>
