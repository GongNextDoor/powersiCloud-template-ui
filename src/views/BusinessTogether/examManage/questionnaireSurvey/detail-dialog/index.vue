<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    :new-class="'middle'"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <table-items
      :item-datas="itemsDatas1"
      :form-datas="formsDatas1"
    />

    <!-- <el-alert
      class="alert-info"
      :closable="false"
      type="success"
    >
      <template slot="title">
        <span>共3题</span>
        <span>正确：2 / <span style="color: red">错误：1</span> /正确率：66.67%</span>
      </template>
    </el-alert> -->

    <question-detail />
    <question-detail />

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>

</template>
<script>
import TableItems from '@/views/components/PageLayers/table-items'
import QuestionDetail from '@/views/components/questionDetail'
export default {
  components: {
    TableItems,
    QuestionDetail
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
      itemsDatas1: [
        [
          { label: '考试对象', prop: 'xxx', colspan: 5 }
        ]
      ],
      formsDatas1: {
        xxx: 'xxx',
        xxx1: 'xxxxxxxxx'
      }
    }
  },
  methods: {
    resetForm() {
      this.$emit('closeAll', false)
      // this.$refs.dataFrom1.elForm.resetFields()
      // this.$refs.dataFrom2.elForm.resetFields()
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
  .alert-info {
    margin-bottom: 15px;
    background-color: rgb(198, 226, 255) !important;
    color: #409EFF !important;
    font-size: 14px !important;
    line-height: 24px !important;
  }
</style>
