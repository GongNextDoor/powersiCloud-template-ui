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

    <TreeTableTransfer />

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="saveEvent">保存</el-button>
    </span>
  </form-dialog>

</template>
<script>
import FormItems from '@/views/components/PageLayers/form-items'
import TreeTableTransfer from '@/components/TableTransfer/tree-list'
export default {
  components: {
    FormItems,
    TreeTableTransfer
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
        { label: '考试类别', prop: 'xxx', type: 'select', span: 7 },
        { label: '难易程度', prop: 'xxx', type: 'select', span: 7 },
        { label: '时间', prop: 'xxxx', type: 'dateTimeRange', span: 10 },
        { label: '考试名称', prop: 'xxx', type: 'input', span: 18 },
        { label: '考试时长', prop: 'xxx', type: 'number', span: 6, placeholder: '分钟' },
        { label: '试卷选择', prop: 'xxx', type: 'select', span: 24 }
      ],
      dataForm: {
        xxx: '',
        xxxx: [],
        testObj: []
      },
      rules: {
        xxx: [{ required: true, message: '请输入', trigger: 'blur' }],
        xxxx: [{ required: true, message: '请输入', trigger: 'blur' }],
        testObj: [{ required: true, message: '请添加', trigger: 'change' }]
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
    },
    addClick() {
      this.dataForm.optionsMaintain.push({
        score: 78,
        content: 'xxxxx测试'
      })
    },
    deleteClick(row) {
      this.dataForm.optionsMaintain.splice(0, 1)
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
  .tree-table-transfer-box{
    margin-top: 40px;
    margin-left: -84px;
  }
  .box-header {
    line-height: 18px !important;
  }
</style>
