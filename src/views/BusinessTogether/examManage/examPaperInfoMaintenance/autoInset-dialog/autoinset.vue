<!-- 非弹框自动抽取内容 -->
<template>
  <div class="box auto-inset">
    <box-title :title-name="dialogTitle" />
    <form-items
      ref="ruleFrom"
      :model="dataForm"
      :rules="rules"
      :is-grid="false"
      :items-datas="itemsDatas"
      :form-datas="dataForm"
    />

    <div style="text-align: right">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="saveEvent">保存</el-button>
    </div>
  </div>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    FormItems,
    BoxTitle
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: '自动抽取'
    }
  },
  data() {
    return {
      itemsDatas: [
        { label: '单选题数(个)', prop: 'xxx', type: 'number', span: 12 },
        { label: '单选题分值', prop: 'xxx', type: 'number', span: 12 },
        { label: '多选题数(个)', prop: 'xxx', type: 'number', span: 12 },
        { label: '多选题分值', prop: 'xxx', type: 'number', span: 12 },
        { label: '判断题数(个)', prop: 'xxx', type: 'number', span: 12 },
        { label: '判断题分值', prop: 'xxx', type: 'number', span: 12 }
      ],
      dataForm: {
        xxx: ''
      },
      rules: {
        // xxx: [{ required: true, message: '请输入', trigger: 'blur' }]
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit('update:show', false)
      this.$refs.ruleFrom.elForm.resetFields()
    },
    saveEvent() {
      this.$refs.ruleFrom.elForm.validate((valid) => {
        if (valid) {
          this.$msgSuccess('保存成功')
          this.$emit('update:show', false)
          this.$emit('saveSuccess')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.auto-inset {
  margin-bottom: 10px;
  padding: 10px;
  height: auto;
  box-sizing: border-box;
  border: 1px solid #E0E1E2 !important;
  border-radius: 2px;
}
</style>
