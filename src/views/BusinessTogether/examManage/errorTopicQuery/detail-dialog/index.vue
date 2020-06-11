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
      <box-title title-name="选项维护" />
      <my-table-view
        :data="tableData"
        :columns="columns"
        height=""
      >
        <template slot="isSure" slot-scope="scope">
          <el-radio v-model="scope.row.isSure" label="1" disabled>{{ '' }}</el-radio>
        </template>
      </my-table-view>
      <Pagination />
    </div>

    <div class="box" style="margin: 0 -10px; height: auto;">
      <box-title title-name="错误场次与医院" />
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
          { label: '题目内容', prop: 'xxx', colspan: 5 }
        ]
      ],
      formsDatas1: {
        xxx: '以下关于TokenBus局域网特点的描述中,哪个是错误的?'
      },
      columns: [
        { type: 'index', label: '序号', width: '80px' },
        { prop: 'content', label: '内容' },
        { prop: 'isSure', type: 'custom', slotName: 'isSure', label: '是否正确', width: '100px' }
      ],
      tableData: [
        { content: '令牌是一种特殊结构的帧,用来控制结点对总线的访问权', isSure: '0' },
        { content: '令牌总线必须周期性地为新结点加入环提供机会', isSure: '1' }
      ],
      columns1: [
        { type: 'index', label: '序号', width: '80px' },
        { prop: 'kscc', label: '考试场次' },
        { prop: 'yljgmc', label: '医疗机构名称' },
        { prop: 'xwxx', label: '错误选项' }
      ],
      tableData1: [
        { kscc: '新型冠状病毒的了解与考核', yljgmc: 'XX市第一人民医院', xwxx: '令牌是一种特殊结构的帧,用来控制结点对总线的访问权' },
        { kscc: '新型冠状病毒的了解与考核', yljgmc: 'XX市中医医院', xwxx: '令牌总线不需要进行环维护' }
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
