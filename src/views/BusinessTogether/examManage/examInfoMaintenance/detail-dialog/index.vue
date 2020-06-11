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
      <box-title title-name="考试对象" />
      <my-table-view
        :data="tableData"
        :columns="columns"
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
          { label: '考试类别', prop: 'xxx' },
          { label: '难易程度', prop: 'xxx' },
          { label: '时间', prop: 'xxx' }
        ],
        [
          { label: '考试名称', prop: 'xxx1', colspan: 3 },
          { label: '考试时长', prop: 'xxx1' }
        ],
        [
          { label: '试卷选择', prop: 'xxx1', colspan: 5 }
        ]
      ],
      formsDatas1: {
        xxx: 'xxx',
        xxx1: 'xxxxxxxxx'
      },
      columns: [
        { type: 'index', label: '序号', width: '80px' },
        { prop: 'content', label: '用户名' },
        { prop: 'user', label: '账户', width: '100px' }
      ],
      tableData: [
        { user: '医疗/药机构', content: 'xx市第二附属医院/ddxc' }
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
