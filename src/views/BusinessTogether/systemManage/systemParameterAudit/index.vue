<!-- 系统参数审核 -->
<template>
  <normal-layer :search-number="itemsDatas.length" title-name="系统参数审核列表" title-need-handle>
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary" @click="auditEvent">批量审核</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :multiple-selection.sync="multipleSelection"
    />
    <Pagination />

    <mulit-audit-dialog v-model="showDialog" dialog-title="系统参数审核" />
    <!-- <detail-dialog v-model="showDetailDialog" dialog-title="详情" />
    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" /> -->

  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import MulitAuditDialog from '@/views/components/AuditDialog/index'
// import DetailDialog from './detail-dialog'
// import EditDialog from './edit-dialog'
export default {
  components: {
    NormalLayer,
    FormItems,
    MulitAuditDialog
    // DetailDialog,
    // EditDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      multipleSelection: [],
      itemsDatas: [
        { label: '参数代码', prop: 'xxx', type: 'input' },
        { label: '审核状态', prop: 'xxx', type: 'select' },
        { label: '有效日期', prop: 'dateRange', type: 'dateRange' },
        { label: '参数名称', prop: 'xxx', type: 'input' }
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
      dialogTitle: '新增',
      showDialog: false
    }
  },
  methods: {
    auditEvent() {
      if (this.multipleSelection.length <= 0) {
        this.$msgInfo('请选择')
      } else {
        this.showDialog = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

