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
          { label: '信用主题类别', prop: 'xxx', colspan: 2 },
          { label: '代码类别', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '选择机构', prop: 'xxx', colspan: 2 },
          { label: '机构名称', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '机构编码', prop: 'xxx', colspan: 2 },
          { label: '单位电脑号', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '子条目数量', prop: 'xxx', colspan: 2 },
          { label: '分数', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '信用等级', prop: 'xxx', colspan: 2 },
          { label: '', prop: '', colspan: 2 }
        ]
      ],
      formsDatas: {
        xxx: 'xxx',
        xxx1: ''
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
