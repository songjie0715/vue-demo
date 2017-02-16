<template>
    <div id="todoList">
        <input type="text" @keyup.enter="addToList" />
        <ul>
            <todo v-for="(item, index) in list" :todo="item" @delete-todo="deleteTodo(item,index)"></todo>
        </ul>
    </div>
</template>
<script>
    import todo from './Todo.vue';
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
        methods: {
            addToList: function (e) {
                var text = e.target.value;
                if (text.trim()) {
                    this.$store.commit('addTodo', {
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
