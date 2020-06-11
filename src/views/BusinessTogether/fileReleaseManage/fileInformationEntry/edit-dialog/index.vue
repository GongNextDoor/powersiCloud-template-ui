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
        { label: '发布级别', prop: 'xxx', type: 'select', span: 7 },
        { label: '文号', prop: 'xxx', type: 'input', span: 7 },
        { label: '有效期', prop: 'dateRange', type: 'dateRange', span: 10 },
        { label: '针对地区', prop: 'address', type: 'cascader', options: this.adress_options, span: 24 },
        { label: '主题词', prop: 'xxx', type: 'input', span: 16 },
        { label: '印发日期', prop: 'date', type: 'date', span: 8 },
        { label: '内容主体', prop: 'xxx1', type: 'textarea', autosize: { minRows: 6 }, span: 24 },
        { label: '备注', prop: 'xxx1', type: 'textarea', span: 24 },
        { label: '上传文件', prop: 'xxx', type: 'file', span: 24 }
      ],
      dataForm: {
        xxx: '',
        xxx1: '',
        dateRange: '',
        date: '',
        address: []
      },
      rules: {
        xxx: [{ required: true, message: '请输入', trigger: 'blur' }],
        dateRange: [{ required: true, message: '请选择', trigger: 'blur' }],
        date: [{ required: true, message: '请选择', trigger: 'blur' }],
        address: [{ required: true, message: '请选择', trigger: 'change' }]
      }
    }
  },
  mounted() {
    this.itemsDatas.forEach(item => {
      if (item.prop === 'address') {
        this.$set(item, 'options',
          [
            {
              value: 'zhinan',
              label: '湖南省',
              children: [{
                value: 'zhinan1',
                label: '长沙市',
                children: [{
                  value: 'zhinan2',
                  label: '岳麓区'
                }]
              }]
            }
          ]
        )
      }
    })
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
    sendEvent() {
      this.$refs.ruleFrom.elForm.validate((valid) => {
        if (valid) {
          this.$msgSuccess('发送成功')
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
