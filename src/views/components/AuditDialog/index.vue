<!-- 审核 确认框 -->
<template>
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    :new-class="'middle'"
    width="450px"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <form-items
      ref="ruleFrom"
      :model="dataForm"
      :rules="rules"
      :is-grid="false"
      :items-datas="formItemsDatas"
      :form-datas="dataForm"
    />

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="closeDialog">确认</el-button>
    </span>
  </form-dialog>

</template>
<script>
import FormItems from '@/views/components/PageLayers/form-items'
export default {
  components: {
    FormItems
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
      formsDatas: {
        xxx: 'xxx'
      },

      formItemsDatas: [
        { label: '审核状态', prop: 'xxx', type: 'radio', options: [
          { label: '1', name: '审核通过' },
          { label: '2', name: '审核不通过' }
        ], span: 24 },
        { label: '审核意见', prop: 'xxx1', type: 'textarea', autosize: { minRows: 3 }, span: 24 }
      ],
      dataForm: {
        xxx: '',
        xxx1: ''
      },
      rules: {
        xxx: [{ required: true, message: '请输入', trigger: 'blur' }],
        xxx1: [{ required: true, message: '请输入', trigger: 'blur' }]
      }
    }
  },
  methods: {
    resetForm() {
      this.$emit('closeAll', false)
      this.$refs.ruleFrom.elForm.resetFields()
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
/deep/.el-radio+.el-radio {
  margin-left: 30px !important;
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
