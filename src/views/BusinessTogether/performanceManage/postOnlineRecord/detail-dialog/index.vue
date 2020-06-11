<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    :new-class="'middle'"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >

    <div class="box-position">
      <div class="box-body">
        <my-table-view
          v-loading="loading"
          :data="tableData"
          :columns="columns"
        />
        <Pagination />
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="exportEvent">导出</el-button>
    </span>
  </form-dialog>

</template>
<script>
export default {
  components: {

  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
      loading: false,
      columns: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'code', label: '账号', align: 'center' },
        { prop: 'code', label: '用户名', align: 'center' },
        { prop: 'code', label: '上线时间', align: 'center' },
        { prop: 'code', label: '下线时间', align: 'center' },
        { prop: 'code', label: 'IP地址', align: 'center' },
        { prop: 'code', label: '登录时长', align: 'center' }
      ],
      tableData: [
        { code: 'xxx' },
        { code: 'xxx' },
        { code: 'xxx' }
      ]
    }
  },
  methods: {
    resetForm() {
      this.$emit('closeAll', false)
    },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    isShow(v) {
      this.$emit('closeAll', false)
    },
    exportEvent() {
      this.$message({
        type: 'success',
        message: '导出成功!'
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
