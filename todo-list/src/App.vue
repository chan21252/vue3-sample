<template>
  <div class="container">
    <navheader :currentPage="currentPage" @setPage="setPage" />
    <div v-show="currentPage === 'todo'">
      <todo />
    </div>
    <div v-show="currentPage === 'recycle'">
      <recycle />
    </div>
  </div>
</template>

<script>
import Navheader from './components/navheader.vue'
import Todo from './view/todo.vue'
import Recycle from './view/recycle.vue'

export default {
  name: 'App',
  components: { Navheader, Todo, Recycle },
  data() {
    return {
      currentPage: 'todo'
    }
  },
  methods: {
    setPage(val) {
      this.currentPage = val
    }
  },
  mounted() {
    window.mitt.on('changePageEvent', (data) => {
      this.changePage(data)
    })
  }
}
</script>

<style scoped></style>
