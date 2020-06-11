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

    <div class="box" style="margin: 0 -10px; height: auto;">
      <box-title title-name="题目选择" />
      <my-table-view
        :data="tableData"
        :columns="columns"
        height=""
      />
      <Pagination />
    </div>

    <div class="box" style="margin: 0 -10px; height: auto;">
      <box-title title-name="问卷人员" />
      <my-table-view
        :data="tableData1"
        :columns="columns1"
        height=""
      />
      <Pagination />
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>

</template>
<script>
import TableItems from '@/views/components/PageLayers/table-items'
import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
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
      itemsDatas1: [
        [
          { label: '试卷名称', prop: 'xxx', colspan: 5 }
        ]
      ],
      formsDatas1: {
        xxx: '关于新型冠状病毒的了解'
      },
      columns: [
        { type: 'index', label: '序号', width: '80px' },
        { prop: 'content', label: '题目内容' }
      ],
      tableData: [
        { content: '关于新型冠状病毒预防不正确的为_______' },
        { content: '对于新型冠状病毒医疗政策中，国家对目录的支付规则为_________' }
      ],
      columns1: [
        { type: 'index', label: '序号', width: '80px' },
        { prop: 'kscc', label: '用户名' },
        { prop: 'yljgmc', label: '账户' }
      ],
      tableData1: [
        { kscc: 'xx市第二附属医院/ddxc', yljgmc: '医疗/药机构' },
        { kscc: 'xx市xxx中医附属/xxca', yljgmc: '医疗/药机构' }
      ]
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
  .link{
    color: #409EFF;
  }
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
