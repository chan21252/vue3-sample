<template>
  <div class="r-item" :class="{ completed: item.isCompleted }">
    <div class="content">{{ item.content }}</div>
    <div class="revert" @click="revertItem(item)"></div>
  </div>
</template>

<script>
export default {
  name: 'ritem',
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    revertItem(obj) {
      this.$emit('revertRecycle', obj)
    }
  }
}
</script>

<style scoped>
.r-item {
  width: 90%;
  height: 30px;
  background: #fff;
  margin: 10px 5% 10px 5%;
  padding: 5px;
  border-radius: 5px;
  line-height: 20px;
}

.r-item .content {
  max-width: 80%;
  height: 100%;
  display: block;
  margin-right: 10px;
  float: left;
  overflow-x: scroll;
  overflow-y: hidden;
}

.r-item.completed .content {
  text-decoration-line: line-through;
  opacity: 0.5;
}

.r-item .revert {
  float: right;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background: url(../assets/revert.png) no-repeat;
  background-size: 100%;
}
</style>
