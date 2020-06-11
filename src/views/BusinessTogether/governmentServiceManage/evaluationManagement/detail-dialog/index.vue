<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    :new-class="'middle'"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <table-items
      :item-datas="itemsDatas"
      :form-datas="formsDatas"
    />

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
          { label: '大厅编号', prop: 'xxx' },
          { label: '大厅名称', prop: 'xxx' },
          { label: '年份', prop: 'xxx' }
        ],
        [
          { label: '月份', prop: 'xxx' },
          { label: '服务人数', prop: 'xxx' },
          { label: '受理次数', prop: 'xxx' }
        ],
        [
          { label: '联系电话', prop: 'xxx' },
          { label: '有效投诉次数', prop: 'xxx' },
          { label: '表扬次数', prop: 'xxx' }
        ],
        [
          { label: '锦旗次数', prop: 'xxx' },
          { label: '超时次数', prop: 'xxx' },
          { label: '', prop: '' }
        ]
      ],
      formsDatas: {
        xxx: 'xxx',
        xxx1: 'xxxx'
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
