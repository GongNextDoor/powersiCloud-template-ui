<template>
  <el-pagination
    :current-page="currentPage"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="pageSize"
    layout="prev, pager, next, sizes, total"
    :total="total"
    @size-change="sizeChange"
    @current-change="currentChange"
  />
</template>

<script>
export default {
  name: 'PowerPagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    total: {
      type: Number,
      default: 0
    }
  },
  methods: {
    sizeChange(val) {
      this.$emit('sizeChange', val)
    },
    currentChange(val) {
      this.$emit('currentChange', val)
    }
  }
}
</script>
