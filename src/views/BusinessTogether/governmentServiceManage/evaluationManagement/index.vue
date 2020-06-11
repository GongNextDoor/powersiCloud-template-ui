<!-- 服务评价管理 -->
<template>
  <normal-layer :search-number="3" title-name="政务服务好差评列表" title-need-handle>
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
        <el-button type="text" class="delete" @click="deleteClick(scope.row)">删除</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />
    <detail-dialog v-model="showDetailDialog" dialog-title="政务服务好差评详情" />
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
      itemsDatas: [
        { label: '大厅编码', prop: 'xxx', type: 'input' },
        { label: '大厅名称', prop: 'xxx', type: 'input' },
        { label: '月份', prop: 'xxx', type: 'dateMoon' }
      ],
      queryForm: {
        xxx: ''
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
      showDetailDialog: false
    }
  },
  methods: {
    editClick(row) {
      this.showEditDialog = true
      this.dialogTitle = '政务服务好差评修改'
    },
    deleteEvent() {
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
    },
    addEvent() {
      this.showEditDialog = true
      this.dialogTitle = '政务服务好差评新增'
    },
    detailsClick() {
      this.showDetailDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

