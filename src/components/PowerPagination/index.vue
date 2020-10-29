<template>
  <el-pagination
    :current-page="currentPage"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="pageSize"
    layout="prev, pager, next, sizes, total"
    :total="total"
    @size-change="$emit('handleSizeChange')"
    @current-change="$emit('handleCurrentChange')"
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
  }
}
</script>
