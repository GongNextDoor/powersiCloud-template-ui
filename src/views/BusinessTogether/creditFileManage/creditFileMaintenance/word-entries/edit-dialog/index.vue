<!-- 新增 编辑 -->
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
      <el-button type="primary" @click="saveEvent">保存</el-button>
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
        { label: '信用主题类别', prop: 'xxx', type: 'select' },
        { label: '处理类型', prop: 'xxx', type: 'select' },
        { label: '处理依据', prop: 'xxx1', type: 'select' },
        { label: '机构名称', prop: 'xxx', type: 'input' },
        { label: '机构编码', prop: 'xxx1', type: 'input' },
        { label: '处理日期', prop: 'xxx', type: 'date' },
        { label: '是否信息共享', prop: 'xxx1', type: 'select' },
        { label: '处理文号', prop: 'xxx', type: 'input' },
        { label: '生效日期', prop: 'xxx2', type: 'date' },
        { label: '失效日期', prop: 'xxx2', type: 'date' },
        { label: '处理事实', prop: 'xxx', type: 'input' }
      ],
      dataForm: {
        xxx: '',
        xxx1: '',
        xxx2: ''
      },
      rules: {
        xxx: [{ required: true, message: '请输入', trigger: 'blur' }],
        xxx1: [{ required: true, message: '请输入', trigger: 'blur' }],
        xxx2: [{ required: true, message: '请选择', trigger: 'blur' }]
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
    saveEvent() {
      this.$refs.ruleFrom.elForm.validate((valid) => {
        if (valid) {
          this.$msgSuccess('保存成功')
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
