<template>
    <div class="modal">
        <button @click="showModal = true">show modal</button>
        <modal v-if="showModal" @close="showModal = false"></modal>
    </div>
</template>

<script>
    import modal from './modal-pop.vue';
    export default {
        data () {
            return {
                showModal: false
            };
        },
        components: {
            modal: modal
        }
    };
</script>

<style>

</style>


