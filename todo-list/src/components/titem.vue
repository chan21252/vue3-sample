<template>
  <div class="t-item" :class="{ completed: item.isCompleted }">
    <input type="checkbox" v-model="item.isCompleted" />
    <div class="content">{{ item.content }}</div>
    <div class="delete" @click="deleteTodoItem(item)"></div>
  </div>
</template>

<script>
/**
 * todo事项
 */
export default {
  name: 'titem',
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    deleteTodoItem(obj) {
      this.$emit('deleteTodo', obj)
    }
  }
}
</script>

<style scoped>
.t-item {
  width: 90%;
  height: 30px;
  background: #fff;
  margin: 10px 5% 10px 5%;
  padding: 5px;
  border-radius: 5px;
  line-height: 20px;
}

.t-item input[type='checkbox'],
.t-item .content {
  height: 100%;
  display: block;
  margin-right: 10px;
  float: left;
}

.t-item .content {
  max-width: 80%;
  overflow-x: scroll;
  overflow-y: hidden;
}

.t-item.completed .content {
  text-decoration-line: line-through;
  opacity: 0.5;
}

.t-item .delete {
  float: right;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background: url(../assets/delete.png) no-repeat;
  background-size: 100%;
}
</style>
