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
    <div class="box">
      <table-items
        :item-datas="itemsDatas"
        :form-datas="formsDatas"
      />
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>

</template>
<script>
import TableItems from '@/views/components/PageLayers/table-items'
export default {
  components: {
    TableItems
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
      itemsDatas: [
        [
          { label: '参数代码', prop: 'xxx' },
          { label: '参数名称', prop: 'xxx' },
          { label: '参数值', prop: 'xxx' }
        ],
        [
          { label: '有效日期', prop: 'xxx', colspan: 5 }
        ],
        [
          { label: '备注', prop: 'xxx', colspan: 5 }
        ]
      ],
      formsDatas: {
        xxx: 'xxx'
      }
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
