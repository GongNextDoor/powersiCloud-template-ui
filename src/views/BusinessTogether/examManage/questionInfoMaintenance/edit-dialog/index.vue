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
    >
      <div slot="optionToMaintain">
        <div style="text-align: right; margin-bottom: 10px;">
          <el-button type="primary" @click="addClick()">新增</el-button>
        </div>
        <my-table-view
          :data="dataForm.optionToMaintain"
          :columns="columns"
          height=""
        >
          <template slot="content" slot-scope="scope">
            <el-input v-if="scope.row.isAdd" v-model="scope.row.content" type="textarea" placeholder="请输入" />
            <template v-else>
              {{ scope.row.content }}
            </template>
          </template>
          <template slot="radioSelect" slot-scope="scope">
            <el-checkbox v-model="scope.row.isSure" :disabled="!scope.row.isAdd" />
          </template>
          <template slot="operation" slot-scope="scope">
            <el-button v-if="!scope.row.isAdd" type="text" class="delete" @click="deleteClick(scope.row)">删除</el-button>
            <el-button v-else type="text" class="delete" @click="sureClick(scope.row)">确认</el-button>
          </template>
        </my-table-view>
      </div>
    </form-items>

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
      itemsDatas: [
        { label: '类型', prop: 'xxx', type: 'select' },
        { label: '优先级', prop: 'xxx', type: 'select' },
        { label: '题目类别', prop: 'xxx', type: 'select' },
        { label: '生效日期', prop: 'xxx', type: 'date' },
        { label: '内容', prop: 'xxx', type: 'textarea', autosize: { minRows: 4 }, span: 24 },
        { label: '学习文件', prop: 'files', type: 'file', span: 24 },
        { label: '选项维护', prop: 'optionToMaintain', type: 'custom', span: 24 },
        { label: '解释', prop: 'xxx', type: 'textarea', autosize: { minRows: 2 }, span: 24 }
      ],
      dataForm: {
        xxx: '',
        files: [],
        optionToMaintain: []
      },
      rules: {
        xxx: [{ required: true, message: '请输入', trigger: 'blur' }],
        optionToMaintain: [{ required: true, message: '请输入', trigger: 'change' }]
      },
      columns: [
        { type: 'index', label: '序号', width: '80px' },
        { type: 'custom', label: '内容', slotName: 'content' },
        { type: 'custom', label: '是否正确', slotName: 'radioSelect', width: '110px' },
        { type: 'operation', label: '操作', width: '80px' }
      ]
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
      this.dataForm.optionToMaintain.push({
        isSure: false,
        content: 'xxxxx测试',
        isAdd: true
      })
    },
    deleteClick(row) {
      this.dataForm.optionToMaintain.splice(0, 1)
    },
    sureClick(row) {
      row.isAdd = false
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
</style>
