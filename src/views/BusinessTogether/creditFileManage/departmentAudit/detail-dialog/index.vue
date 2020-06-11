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
          { label: '信用主题类别', prop: 'xxx' },
          { label: '机构名/姓名', prop: 'xxx' },
          { label: '证件号码', prop: 'xxx' }
        ],
        [
          { label: '档案编码', prop: 'xxx' },
          { label: '信息类别', prop: 'xxx' },
          { label: '所属经办机构', prop: 'xxx' }
        ],
        [
          { label: '处理文号', prop: 'xxx' },
          { label: '处理日期', prop: 'xxx' },
          { label: '处理类型', prop: 'xxx' }
        ],
        [
          { label: '生效日期', prop: 'xxx' },
          { label: '失效日期', prop: 'xxx' },
          { label: '是否信息共享', prop: 'xxx' }
        ],
        [
          { label: '录入人', prop: 'xxx' },
          { label: '录入日期', prop: 'xxx' },
          { label: '', prop: '' }
        ],
        [
          { label: '处理事实', prop: 'xxx', colspan: 5 }
        ],
        [
          { label: '处理依据', prop: 'xxx', colspan: 5 }
        ],
        [
          { label: '处理决定', prop: 'xxx', colspan: 5 }
        ],
        [
          { label: '审核状态', prop: 'xxx' },
          { label: '审核人', prop: 'xxx' },
          { label: '审核日期', prop: 'xxx' }
        ],
        [
          { label: '审核意见', prop: 'xxx', colspan: 5 }
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
