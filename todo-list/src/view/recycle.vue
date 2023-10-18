<template>
  <h3>回收站</h3>
  <ritem v-for="item in recycles" :key="item.id" :item="item" @revertRecycle="revertRecycle" />
</template>

<script>
import Ritem from '@/components/ritem.vue'

/**
 * 回收站列表
 */
export default {
  name: 'recycle',
  props: {
    item: {
      type: Object
    }
  },
  components: { Ritem },
  data() {
    return {
      recycles: []
    }
  },
  mounted() {
    mitt.on('addRecycleEvent', (obj) => {
      this.addRecycle(obj)
    })
    mitt.on('clearRecyclesEvent', () => this.clearRecycles())
  },
  methods: {
    addRecycle(data) {
      this.recycles.push(data)
    },
    revertRecycle(obj) {
      this.recycles = this.recycles.filter((item) => item.id !== obj.id)
      mitt.emit('addTodoEvent', obj)
    },
    clearRecycles() {
      this.recycles = []
    }
  }
}
</script>

<style scoped></style>
