<template>
  <div class="nav-header">
    <div class="nav-item" :class="{ active: currentPage === 'todo' }" @click="changePage('todo')">
      待办事项
    </div>
    |
    <div
      class="nav-item"
      :class="{ active: currentPage === 'recycle' }"
      @click="changePage('recycle')"
    >
      回收站
    </div>
    <div class="btn-clear" @click="clear">清空</div>
  </div>
</template>

<script>
export default {
  name: 'navheader',
  props: ['currentPage'],
  methods: {
    changePage(val) {
      this.$emit('setPage', val)
    },
    clear() {
      if (this.currentPage === 'todo') {
        window.mitt.emit('clearTodosEvent')
      } else {
        window.mitt.emit('clearRecyclesEvent')
      }
    }
  }
}
</script>

<style scoped>
.nav-header {
  position: relative;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
}

.nav-header .nav-item {
  margin: 0 10px;
}

.nav-header .nav-item.active {
  color: #e66465;
}

.btn-clear {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 14px;
}
</style>
