<!-- 查看字条目 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="字条目列表"
    title-need-handle
    class="credit-file-maintenance"
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary" @click="addEvent">新增字条目</el-button>
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

    <detail-dialog v-model="showDetailDialog" dialog-title="字条目详情" />
    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />

  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import DetailDialog from './detail-dialog'
import EditDialog from './edit-dialog'
export default {
  components: {
    FormItems,
    NormalLayer,
    DetailDialog,
    EditDialog
  },
  mixins: [PageHandle],
  props: {

  },
  data() {
    return {
      loading: false,
      itemsDatas: [
        { label: '处理类型', prop: 'xxx', type: 'select' },
        { label: '处理依据', prop: 'xxx', type: 'select' },
        { label: '处理文号', prop: 'xxx', type: 'input' },
        { label: '信用主题类别', prop: 'xxx', type: 'select' },
        { label: '生效日期', prop: 'dateRange', type: 'dateRange' }
      ],
      queryForm: {
        xxx: '',
        dateRange: []
      },
      columns: Columns,
      tableData: [
        { name: '白兰花', code: 'xxx', nameCode: 'xxx' },
        { name: '白兰花', code: 'xxx', nameCode: 'xxx' }
      ],
      showDetailDialog: false,
      dialogTitle: '新增',
      showEditDialog: false
    }
  },
  methods: {
    addEvent() {
      this.dialogTitle = '字条目新增'
      this.showEditDialog = true
    },
    editClick(row) {
      this.dialogTitle = '字条目编辑'
      this.showEditDialog = true
    },
    detailsClick(row) {
      this.showDetailDialog = true
    },
    deleteEvent(row) {
      this.$msgSuccess('删除成功')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
