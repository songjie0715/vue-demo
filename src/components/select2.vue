<template>
  <select>
    <slot></slot>
  </select>
</template>

<script>
    import $ from 'jquery';

    export default{
        props: ['options'],
        mounted: function () {
            $(this.$el).select2({
                data: this.options });
        }
    };
</script>
