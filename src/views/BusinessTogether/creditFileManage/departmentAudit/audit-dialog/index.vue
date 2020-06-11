<!-- 审核 弹框 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    :new-class="'middle'"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <form-items
      ref="ruleFrom"
      :model="dataForm"
      :rules="rules"
      :is-grid="false"
      :items-datas="itemsDatas"
      :form-datas="dataForm"
    />

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="passEvent">审核通过</el-button>
      <el-button type="primary" @click="notPassEvent">审核不通过</el-button>
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
      adress_options: [],
      itemsDatas: [
        { label: '信用主题类别', prop: 'xxx', type: 'input' },
        { label: '机构名/姓名', prop: 'xxx', type: 'input' },
        { label: '证件号码', prop: 'xxx1', type: 'input' },
        { label: '档案编码', prop: 'xxx', type: 'input' },
        { label: '信息类别', prop: 'xxx1', type: 'input' },
        { label: '所属经办机构', prop: 'xxx', type: 'input' },
        { label: '处理文号', prop: 'xxx1', type: 'input' },
        { label: '处理日期', prop: 'date', type: 'date' },
        { label: '处理类型', prop: 'xxx1', type: 'select' },
        { label: '生效日期', prop: 'date', type: 'date' },
        { label: '失效日期', prop: 'date', type: 'date' },
        { label: '是否信息共享', prop: 'xxx1', type: 'select' },
        { label: '录入人', prop: 'xxx', type: 'input' },
        { label: '录入日期', prop: 'date', type: 'date' },
        { label: '处理事实', prop: 'xxx', type: 'textarea', autosize: { minRows: 3 }, span: 24 },
        { label: '处理依据', prop: 'xxx', type: 'textarea', autosize: { minRows: 3 }, span: 24 },
        { label: '处理决定', prop: 'xxx', type: 'textarea', autosize: { minRows: 3 }, span: 24 },
        { label: '审核意见', prop: 'xxx', type: 'textarea', autosize: { minRows: 3 }, span: 24 }
      ],
      dataForm: {
        xxx: '',
        xxx1: '',
        date: ''
      },
      rules: {
        xxx: [{ required: true, message: '请输入', trigger: 'blur' }],
        date: [{ required: true, message: '请选择', trigger: 'blur' }],
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
    passEvent() {
      this.$refs.ruleFrom.elForm.validate((valid) => {
        if (valid) {
          this.$msgSuccess('操作成功')
          this.$emit('closeAll', false)
        }
      })
    },
    notPassEvent() {
      this.$refs.ruleFrom.elForm.validate((valid) => {
        if (valid) {
          this.$msgSuccess('操作成功')
          this.$emit('closeAll', false)
        }
      })
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
