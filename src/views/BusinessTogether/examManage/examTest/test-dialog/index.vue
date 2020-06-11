<!-- 开始考试 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    :new-class="'middle'"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >

    <question-test />

    <span slot="footer" class="dialog-footer">
      <el-button @click="submitClick">提交试卷</el-button>
      <el-button type="primary" @click="nextEvent">下一题</el-button>
    </span>
  </form-dialog>

</template>
<script>
import QuestionTest from '@/views/components/questionDetail/test'
export default {
  components: {
    QuestionTest
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
      default: '当前第1题/共3题/ 共3题 正确：0 / 错误：0 / 正确率： 0%'
    }
  },
  data() {
    return {

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
    },
    nextEvent() {

    },
    submitClick() {
      this.$msgConfirm('确认提交试卷吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.closeDialog()
      }).catch(() => {})
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
