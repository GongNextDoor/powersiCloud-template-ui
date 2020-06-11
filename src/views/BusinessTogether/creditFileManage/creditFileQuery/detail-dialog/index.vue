<!-- 新增 编辑 -->
<template>
  <form-dialog
    class="audit-dialog"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    :new-class="'middle'"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <my-table-view
      v-loading="loading"
      :columns="columns"
      :data="tableData"
      :max-cloumns="7"
    />
    <Pagination />

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>

</template>
<script>
export default {
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
        { type: 'index', label: '序号', width: '50px' },
        { prop: 'nameCode', label: '档案编码', align: 'center' },
        { prop: 'nameCode', label: '机构编码', minWidth: '140px', align: 'center' },
        { prop: 'code', label: '处理事实', minWidth: '200px', align: 'center' },
        { prop: 'nameCode', label: '处理依据', align: 'center' },
        { prop: 'nameCode', label: '处理日期', align: 'center' },
        { prop: 'nameCode', label: '处理文号', minWidth: '160px', align: 'center' },
        { prop: 'code', label: '处理类型', align: 'center' },
        { prop: 'code', label: '信息类别', align: 'center' },
        { prop: 'code', label: '信息共享', align: 'center' },
        { prop: 'code', label: '录入人', align: 'center' },
        { prop: 'code', label: '录入日期', align: 'center' },
        { prop: 'code', label: '审核人', align: 'center' },
        { prop: 'code', label: '审核日期', align: 'center' },
        { prop: 'code', label: '确认人', align: 'center' },
        { prop: 'code', label: '确认日期', align: 'center' },
        { prop: 'code', label: '生效日期', align: 'center' },
        { prop: 'code', label: '失效日期', align: 'center' },
        { prop: 'code', label: '审核状态', align: 'center' },
        { prop: 'code', label: '有效状态', align: 'center' }
      ],
      tableData: [
        { name: '白兰花', code: 'YUUDS', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDS', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDS', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDS', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDS', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDS', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDS', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDS', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDS', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDS', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDS', nameCode: 'IN12332' }
      ]
    }
  },
  methods: {
    resetForm() {
      this.$emit('closeAll', false)
      // this.$refs.dataFrom1.elForm.resetFields()
      // this.$refs.dataFrom2.elForm.resetFields()
    },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ .el-textarea__inner{
  border: none !important;
  color: #606266 !important;
}
.link{
  color: #409EFF;
}
  .special-form{
    /deep/.el-form {
      .el-form-item__label{
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 32px;
        line-height: 14px;
      }
    }
  }
  .table-transfer-box {
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #DCDFE6;
    border-radius: 5px;
  }
</style>
