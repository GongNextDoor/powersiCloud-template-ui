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
      <div slot="optionsMaintain" style="margin-left: -80px;">
        <div style="text-align: right; margin-bottom: 10px;">
          <el-button type="primary" :disabled="showAutoInset" @click="autoAddClick()">自动抽取</el-button>
          <el-button type="primary" @click="addClick()">新增题目</el-button>
        </div>

        <el-collapse-transition>
          <auto-inset v-show="showAutoInset" :show.sync="showAutoInset" @saveEvent="autoInsetSave" />
        </el-collapse-transition>

        <my-table-view
          :data="dataForm.optionsMaintain"
          :columns="columns"
          height=""
        >
          <template slot="content" slot-scope="scope">
            <el-input v-if="scope.row.isAdd" v-model="scope.row.content" type="textarea" placeholder="请输入" />
            <template v-else>
              {{ scope.row.content }}
            </template>
          </template>

          <template slot="score" slot-scope="scope">
            <el-input v-if="scope.row.isAdd" v-model.number="scope.row.score" placeholder="请输入" />
            <template v-else>
              {{ scope.row.score }}
            </template>
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
import AutoInset from '../autoInset-dialog/autoinset'
export default {
  components: {
    FormItems,
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
        { label: '试卷类型', prop: 'xxx', type: 'select' },
        { label: '难易程度', prop: 'xxx', type: 'select' },
        { label: '生效日期', prop: 'xxx', type: 'date' },
        { label: '试卷名称', prop: 'xxx', type: 'input', span: 24 },
        { label: '选项维护', prop: 'optionsMaintain', type: 'custom', span: 24 }
      ],
      dataForm: {
        xxx: '',
        optionsMaintain: []
      },
      rules: {
        xxx: [{ required: true, message: '请输入', trigger: 'blur' }],
        optionsMaintain: [{ required: true, message: '请添加', trigger: 'change' }]
      },
      columns: [
        { type: 'index', label: '序号', width: '80px' },
        { type: 'custom', slotName: 'content', label: '题目内容' },
        { type: 'custom', slotName: 'score', label: '分值', width: '80px' },
        { type: 'operation', label: '操作', width: '80px' }
      ],
      showAutoInset: false
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
      this.showAutoInset = true
    },
    addClick() {
      this.dataForm.optionsMaintain.push({
        score: 78,
        content: 'xxxxx测试',
        isAdd: true
      })
    },
    deleteClick(row) {
      this.dataForm.optionsMaintain.splice(0, 1)
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
