<template>
  <h3>事项列表</h3>
  <input type="text" placeholder="请输入内容" v-model="newTodoContent" @keyup.enter="addTodo" />
  <titem v-for="item in todos" :key="item.id" :item="item" @deleteTodo="deleteTodo" />
</template>

<script>
import Titem from '@/components/titem.vue'

/**
 * todo事项列表
 */
export default {
  name: 'todo',
  components: { Titem },
  data() {
    return {
      newTodoContent: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoContent !== '') {
        let todo = {
          id: Math.random().toString(36).substr(2, 5),
          content: this.newTodoContent,
          isCompleted: false
        }
        this.todos.push(todo)
        this.newTodoContent = ''
      }
    },
    clearTodos() {
      this.todos = []
    },
    deleteTodo(obj) {
      this.todos = this.todos.filter((todo) => todo.id !== obj.id)
      window.mitt.emit('addRecycleEvent', obj)
    }
  },
  mounted() {
    window.mitt.on('clearTodosEvent', () => {
      this.clearTodos()
    })
    window.mitt.on('addTodoEvent', (obj) => {
      this.todos.push(obj)
    })
  }
}
</script>

<style scoped>
input[type='text'] {
  width: 90%;
  height: 30px;
  margin: 10px 5% 10px 5%;
  padding: 5px;
  border: 1px solid #333;
  border-radius: 5px;
}
</style>
