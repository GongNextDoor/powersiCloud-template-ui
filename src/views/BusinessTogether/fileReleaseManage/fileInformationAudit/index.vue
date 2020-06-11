<!-- 文件信息审核 -->
<template>
  <normal-layer :search-number="5" title-name="文件信息审核列表" title-need-handle>
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary" @click="batchAuditEvent">批量审核</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :multiple-selection.sync="multipleSelection"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="auditClick(scope.row)">审核</el-button>
        <el-button type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <detail-dialog v-model="showDetailDialog" dialog-title="文件详情" />

    <mulit-audit-dialog v-model="showDialog" dialog-title="文件审核" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import DetailDialog from './detail-dialog'
import MulitAuditDialog from '@/views/components/AuditDialog/index'
export default {
  components: {
    NormalLayer,
    FormItems,
    DetailDialog,
    MulitAuditDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      multipleSelection: [],
      itemsDatas: [
        { label: '发布级别', prop: 'xxx', type: 'select' },
        { label: '主题词', prop: 'xxx', type: 'input' },
        { label: '文号', prop: 'xxx', type: 'input' },
        { label: '审核状态', prop: 'xxx', type: 'select' },
        { label: '日期', prop: 'dateRange', type: 'dateRange' }
      ],
      queryForm: {
        xxx: '',
        dateRange: []
      },
      columns: Columns,
      tableData: [
        {
          name: '白兰花',
          code: 'xxx',
          nameCode: 'xxx'
        }
      ],
      showDetailDialog: false,
      showDialog: false
    }
  },
  methods: {
    batchAuditEvent() {
      if (this.multipleSelection.length > 0) {
        this.showDialog = true
      } else {
        this.$msgInfo('请选择')
      }
    },
    detailsClick(row) {
      this.showDetailDialog = true
    },
    auditClick(row) {
      this.showDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
