<template>
    <div id="todoList">
        <input type="text" @keyup.enter="addToList" />
        <ul>
            <todo v-for="todo in list" :todo = todo></todo>
        </ul>
    </div>
</template>
<script>
    import todo from './Todo.vue';
    export default{
        data () {
            return {
                list: []
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
                    this.list.push({
                        done: false,
                        text: text
                    });
                }
                e.target.value = '';
            },
            deleteTodo: function (todo) {
                console.log(todo);
                this.list.splice(todo, 1);
            }
        }
    };
</script>
