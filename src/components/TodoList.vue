<template>
    <div id="todoList">
        <input type="text" @keyup.enter="addToList" />
        <ul>
            <todo v-for="(item, index) in list" :todo="item" @delete-todo="deleteTodo(item,index)"></todo>
        </ul>
      <p>已完成{{ doneTodosCount }}， 未完成</p>
    </div>
</template>
<script>
    import todo from './Todo.vue';
    import { mapGetters } from 'vuex';
    export default{
        data () {
            return {
                list: this.$store.state.todos
            };
        },
        name: 'TodoList',
        components: {
            todo: todo
        },
        computed: {
            ...mapGetters(['doneTodosCount'])
        },
        methods: {
            addToList: function (e) {
                var text = e.target.value;
                if (text.trim()) {
                    this.$store.dispatch('addTodo', {
                        done: false,
                        text: text
                    });
                }
                e.target.value = '';
            },
            deleteTodo: function (item, index) {
                this.list.splice(index, 1);
            }
        }
    };
</script>
