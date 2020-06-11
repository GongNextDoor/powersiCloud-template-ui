<!-- 来访登记信息维护 -->
<template>
  <normal-layer :search-number="5" title-name="来访登记信息维护列表" title-need-handle>
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary" @click="addEvent">新增</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button>
        <el-button type="text" class="modify" @click="editClick(scope.row)">修改</el-button>
        <el-button type="text" class="modify" @click="returnClick(scope.row)">回访</el-button>
        <el-button type="text" class="modify" @click="transferClick(scope.row)">办结</el-button>
        <el-button type="text" class="delete" @click="deleteClick(scope.row)">删除</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />
    <detail-dialog v-model="showDetailDialog" dialog-title="来访登记信息详情" />
    <return-dialog v-model="showReturnDialog" dialog-title="来访登记信息回访" />
    <transferred-dialog v-model="showtransferrenDialog" dialog-title="来访登记信息办结" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import EditDialog from './edit-dialog'
import DetailDialog from './detail-dialog'
import ReturnDialog from './return-dialog'
import TransferredDialog from './transferred-dialog'
export default {
  components: {
    NormalLayer,
    FormItems,
    EditDialog,
    DetailDialog,
    ReturnDialog,
    TransferredDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      itemsDatas: [
        { label: '姓名', prop: 'xxx', type: 'input' },
        { label: '证件类型', prop: 'xxx', type: 'select' },
        { label: '证件号码', prop: 'xxx', type: 'input' },
        { label: '来访类型', prop: 'xxx1', type: 'select' },
        { label: '日期', prop: 'xxx2', type: 'dateRange' },
        { label: '电话号码', prop: 'xxx', type: 'input' }
      ],
      queryForm: {
        xxx: '',
        xxx1: '',
        xxx2: []
      },
      columns: Columns,
      tableData: [
        {
          name: '白兰花',
          code: 'YUUDSWXX',
          nameCode: 'IN12332'
        }
      ],
      showEditDialog: false,
      dialogTitle: '新增',
      showDetailDialog: false,
      showReturnDialog: false,
      showtransferrenDialog: false
    }
  },
  methods: {
    editClick(row) {
      this.showEditDialog = true
      this.dialogTitle = '来访登记信息修改'
    },
    deleteEvent() {
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
    },
    addEvent() {
      this.showEditDialog = true
      this.dialogTitle = '来访登记信息新增'
    },
    detailsClick(row) {
      this.showDetailDialog = true
    },
    returnClick(row) {
      this.showReturnDialog = true
    },
    transferClick(row) {
      this.showtransferrenDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
