<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    :new-class="'middle'"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <div class="box">
      <div style="border: 1px solid #E0E1E2; padding-top: 15px; border-radius: 2px">
        <form-items
          ref="ruleFrom"
          :model="dataForm"
          :rules="rules"
          :is-grid="false"
          :items-datas="itemsDatas"
          :form-datas="dataForm"
        >
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" @click="search">查询</el-button>
        </form-items>
      </div>
      <box-title title-name="人员信息" />

      <table-items
        :item-datas="infoItemsDatas"
        :form-datas="infoFormsDatas"
      />

      <box-title title-name="来访登记信息" />
      <form-items
        ref="ruleFrom1"
        :model="dataForm1"
        :rules="rules1"
        :is-grid="false"
        :items-datas="itemsDatas1"
        :form-datas="dataForm1"
      />
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="saveEvent">保存</el-button>
    </span>
  </form-dialog>

</template>
<script>
import FormItems from '@/views/components/PageLayers/form-items'
import TableItems from '@/views/components/PageLayers/table-items'
import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    FormItems,
    TableItems,
    BoxTitle
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
        { label: '查询条件', prop: 'xxx', type: 'input', placeholder: '请输入身份证或姓名' }
      ],
      infoItemsDatas: [
        [
          { label: '姓名', prop: 'xxx' },
          { label: '证件号码', prop: 'xxx' }
        ]
      ],
      infoFormsDatas: {
        xxx: 'xxx'
      },
      dataForm: {
        xxx: ''
      },
      rules: {
        xxx: [{ required: true, message: '请输入', trigger: 'blur' }]
      },
      itemsDatas1: [
        { label: '来访类型', prop: 'xxx1', type: 'select' },
        { label: '业务状态', prop: 'xxx', type: 'select' },
        { label: '接待日期', prop: 'xxx', type: 'date' },
        { label: '电话号码', prop: 'xxx', type: 'input' },
        { label: '来访信息', prop: 'xxx', type: 'textarea', autosize: { minRows: 5 }, span: 24 },
        { label: '备注', prop: 'xxxx', type: 'textarea', span: 24 }
      ],
      dataForm1: {
        xxx: '',
        xxx1: '',
        xxxx: ''
      },
      rules1: {
        xxx1: [{ required: true, message: '请选择', trigger: 'blur' }],
        xxx: [{ required: true, message: '请输入', trigger: 'blur' }]
      }
    }
  },
  methods: {
    resetForm() {
      this.$emit('closeAll', false)
      this.$refs.ruleFrom.elForm.resetFields()
      this.$refs.ruleFrom1.elForm.resetFields()
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
