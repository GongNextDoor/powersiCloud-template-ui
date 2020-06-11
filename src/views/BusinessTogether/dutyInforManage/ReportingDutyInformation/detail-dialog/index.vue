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
      :item-datas="itemsDatas"
      :form-datas="formsDatas"
    />

    <div
      v-for="item in addDatas"
      :key="item.title"
      class="box"
      style="margin: 8px 0px; height: auto;"
    >
      <box-title :title-name="item.title" />
      <my-table-view
        :data="item.datas"
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
      itemsDatas: [
        [
          { label: '所属分中心', prop: 'xxx', colspan: 2 },
          { label: '机构名称', prop: 'xxx', colspan: 2 }
        ],
        [
          { label: '备注', prop: 'xxx', colspan: 5 }
        ]
      ],
      formsDatas: {
        xxx: 'xxxx'
      },
      columns: [
        { type: 'index', label: '序号', width: '50px' },
        { prop: 'xxx', label: '姓名' },
        { prop: 'xxx', label: '电话' },
        { prop: 'xxx', label: '手机号' },
        { prop: 'xxx', label: '日期' }
      ],
      addDatas: [
        { title: '医保办负责人', datas: [
          { xxx: '测试' }
        ] },
        { title: '医务部门', datas: [
          { xxx: '测试' }
        ] },
        { title: '值班院领导', datas: [
          { xxx: '测试' }
        ] }
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
