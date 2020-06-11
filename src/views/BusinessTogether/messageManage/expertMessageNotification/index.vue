<!-- 专家消息通知 -->
<template>
  <normal-layer :search-number="itemsDatas.length" title-name="消息通知列表" title-need-handle>
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary" @click="addEvent">新增</el-button>
      <el-button type="primary">发送</el-button>
      <el-button type="danger" @click="batchDeleteClick">批量删除</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :multiple-selection.sync="multipleSelection"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="editClick(scope.row)">修改</el-button>
        <el-button type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button>
        <el-button type="text" class="delete" @click="deleteClick(scope.row)">删除</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />
    <detail-dialog v-model="showDetailDialog" dialog-title="消息通知详情" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import EditDialog from './edit-dialog'
import DetailDialog from './detail-dialog'
export default {
  components: {
    NormalLayer,
    FormItems,
    EditDialog,
    DetailDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      multipleSelection: [],
      itemsDatas: [
        { label: '姓名', prop: 'xxx', type: 'input' },
        { label: '主题', prop: 'xxx', type: 'input' },
        { label: '通知业务类型', prop: 'xxx', type: 'select' },
        { label: '发送状态', prop: 'xxx', type: 'select' }
      ],
      queryForm: {
        xxx: ''
      },
      columns: Columns,
      tableData: [
        {
          name: '白兰花',
          code: 'YUUDS',
          nameCode: 'IN12332'
        }
      ],
      showEditDialog: false,
      dialogTitle: '新增',
      showDetailDialog: false
    }
  },
  methods: {
    addEvent() {
      this.showEditDialog = true
      this.dialogTitle = '消息通知新增'
    },
    editClick() {
      this.showEditDialog = true
      this.dialogTitle = '消息通知修改'
    },
    detailsClick() {
      this.showDetailDialog = true
    },
    deleteEvent(row) {
      this.$msgSuccess('删除成功')
    },
    batchDeleteClick() {
      if (this.multipleSelection.length <= 0) {
        this.$msgInfo('请选择')
      } else {
        this.$msgSuccess('删除成功')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

