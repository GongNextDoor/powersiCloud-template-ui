<!-- 考试信息维护 -->
<template>
  <normal-layer :search-number="5" title-name="考试信息维护列表" title-need-handle>
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
        <el-button v-if="!scope.row.releaseStatus" type="text" class="modify" @click="editClick(scope.row)">修改</el-button>
        <el-button v-if="!scope.row.releaseStatus" type="text" class="delete" @click="deleteClick(scope.row)">删除</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <detail-dialog v-model="showDetailDialog" dialog-title="考试信息维护详情" />
    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />
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
        { label: '考试类别', prop: 'xxx', type: 'select' },
        { label: '难易程度', prop: 'xxx', type: 'select' },
        { label: '发布状态', prop: 'xxx', type: 'select' },
        { label: '有效标志', prop: 'xxx', type: 'select' },
        { label: '考试名称', prop: 'xxx', type: 'input' }
      ],
      queryForm: {
        xxx: '',
        dateRange: []
      },
      columns: Columns,
      tableData: [
        { name: '白兰花', code: 'xxx', nameCode: 'xxx', releaseStatus: false },
        { name: '白兰花', code: 'xxx', nameCode: 'xxx', releaseStatus: true }
      ],
      showDetailDialog: false,
      showEditDialog: false,
      dialogTitle: '新增'
    }
  },
  methods: {
    addEvent() {
      this.dialogTitle = '考试信息维护新增'
      this.showEditDialog = true
    },
    editClick(row) {
      this.dialogTitle = '考试信息维护编辑'
      this.showEditDialog = true
    },
    detailsClick(row) {
      this.showDetailDialog = true
    },
    deleteEvent(row) {
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

