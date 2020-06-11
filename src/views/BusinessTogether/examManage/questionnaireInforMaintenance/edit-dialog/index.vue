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
      <div slot="questionOptions" class="table-box">
        <div style="text-align: right; margin-bottom: 10px;">
          <el-button type="primary" :disabled="showAutoInsetBox" @click="autoAddClick">自动抽取</el-button>
          <el-button type="primary" @click="addClick">新增题目</el-button>
        </div>

        <el-collapse-transition>
          <auto-inset v-show="showAutoInsetBox" :show.sync="showAutoInsetBox" @saveEvent="autoInsetSave" />
        </el-collapse-transition>

        <my-table-view
          :columns="cloumns"
          :data="dataForm.questionOptions"
          height=""
        >
          <template slot="content" slot-scope="scope">
            <el-input v-if="scope.row.isAdd" v-model="scope.row.content" type="textarea" placeholder="请输入" />
            <template v-else>
              {{ scope.row.content }}
            </template>
          </template>

          <template slot="operation" slot-scope="scope">
            <el-button v-if="!scope.row.isAdd" type="text" class="delete" @click="deleteClick(scope.row)">删除</el-button>
            <el-button v-else type="text" class="delete" @click="sureClick(scope.row)">确认</el-button>
          </template>
        </my-table-view>
      </div>
      <div slot="testObj" class="tree-table-transfer-box">
        <TreeTableTransfer />
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
import TreeTableTransfer from '@/components/TableTransfer/tree-list'
import AutoInset from '../autoInset-dialog/autoinset'
export default {
  components: {
    FormItems,
    TreeTableTransfer,
    AutoInset
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
        { label: '问卷名称', prop: 'xxx', type: 'input', span: 24 },
        { label: '题目选择', prop: 'questionOptions', type: 'custom', span: 24 },
        { label: '问卷人员', prop: 'testObj', type: 'custom', span: 24 }
      ],
      dataForm: {
        xxx: '',
        questionOptions: [
          { content: '关于新型冠状病毒预防不正确的为_______' }
        ],
        testObj: []
      },
      rules: {
        xxx: [{ required: true, message: '请输入', trigger: 'blur' }],
        questionOptions: [{ required: true, message: '请添加', trigger: 'change' }],
        testObj: [{ required: true, message: '请添加', trigger: 'change' }]
      },
      cloumns: [
        { type: 'index', label: '序号', width: '60px' },
        { type: 'custom', slotName: 'content', label: '题目内容' },
        { type: 'operation', label: '操作', width: '80px' }
      ],
      showAutoInsetBox: false
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
    autoAddClick() {
      this.showAutoInsetBox = true
    },
    addClick() {
      this.dataForm.questionOptions.push({
        content: '对于新型冠状病毒医疗政策中，国家对目录的支付规则为_________',
        isAdd: true
      })
    },
    deleteClick(row) {
      this.dataForm.questionOptions.splice(0, 1)
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
  .tree-table-transfer-box{
    margin-top: 40px;
    margin-left: -84px;
  }
  .box-header {
    line-height: 18px !important;
  }
  .table-box{
    margin-left: -74px;
  }
</style>
