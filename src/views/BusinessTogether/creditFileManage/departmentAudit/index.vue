<!-- 信用档案部门审核 -->
<template>
  <auto-size-layer class="post-operation-record">

    <template slot="header">
      <collapse
        v-model="isCollapse"
        :height="100"
        @boxChange="headerBoxChange"
        @showAll="collapseHandleShowAll"
      >
        <form-items
          ref="queryForm"
          :model="queryForm"
          :items-datas="itemsDatas"
          :form-datas="queryForm"
        >
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" @click="search">查询</el-button>
          <el-button class="collapse-btn" @click="collapseClick">
            <i :class="['el-icon-arrow-down', 'icon', isCollapse?'down':'up']" />
          </el-button>
        </form-items>
      </collapse>
    </template>

    <div class="box">
      <box-title title-name="信用档案部门审核列表" title-need-handle>
        <el-button type="primary" @click="batchAuditClick">批量审核</el-button>
      </box-title>
      <div class="box-body">
        <my-table-view
          v-loading="loading"
          :multiple-selection.sync="multipleSelection"
          :columns="columns"
          :data="tableData"
        >
          <template slot="operation" slot-scope="scope">
            <el-button type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button>
            <el-button type="text" class="modify" @click="auditClick(scope.row)">审核</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </div>
    </div>

    <batch-audit-dialog v-model="showBatchAuditDialog" dialog-title="批量审核" />
    <audit-dialog v-model="showAuditDialog" dialog-title="信用档案部门审核" />
    <detail-dialog v-model="showDetailDialog" dialog-title="信用档案部门审核详情" />
  </auto-size-layer>
</template>

<script>
import AutoSizeLayer from '@/views/components/PageLayers/autoSizeLayer'
import Collapse from '@/components/Collapse'
import BoxTitle from '@/views/components/PageLayers/box-title'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import HeaderBoxChange from '@/mixins/headerBoxChange'
import Columns from './listCloumns'
import BatchAuditDialog from '@/views/components/AuditDialog'
import AuditDialog from './audit-dialog'
import DetailDialog from './detail-dialog'
export default {
  components: {
    AutoSizeLayer,
    Collapse,
    BoxTitle,
    FormItems,
    BatchAuditDialog,
    AuditDialog,
    DetailDialog
  },
  mixins: [PageHandle, HeaderBoxChange],
  data() {
    return {
      loading: false,
      multipleSelection: [],
      itemsDatas: [
        { label: '身份证号码', prop: 'xxx', type: 'input' },
        { label: '机构名称(姓名)', prop: 'xxx', type: 'input' },
        { label: '信用主体类别', prop: 'xxx', type: 'select' },
        { label: '处理日期', prop: 'dateRange', type: 'dateRange' },
        { label: '处理文号', prop: 'xxx', type: 'input' },
        { label: '机构编码', prop: 'xxx', type: 'input' },
        { label: '信息类别', prop: 'xxx', type: 'select' },
        { label: '信息共享', prop: 'xxx', type: 'select' },
        { label: '处理类型', prop: 'xxx', type: 'select' },
        { label: '档案编码', prop: 'xxx', type: 'input' },
        { label: '审核状态', prop: 'xxx', type: 'select' }
      ],
      queryForm: {
        xxx: '',
        dateRange: []
      },
      columns: Columns,
      tableData: [
        { name: '白兰花', code: 'YUUDSW', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSW', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSW', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSW', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSW', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSW', nameCode: 'IN12332' }
      ],
      showDetailDialog: false,
      showBatchAuditDialog: false,
      showAuditDialog: false
    }
  },
  methods: {
    batchAuditClick() {
      if (this.multipleSelection.length > 0) {
        this.showBatchAuditDialog = true
      } else {
        this.$msgInfo('请选择')
      }
    },
    auditClick() {
      // this.showAuditDialog = true
      this.showBatchAuditDialog = true
    },
    detailsClick(row) {
      this.showDetailDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.post-operation-record{
  overflow: hidden;
}
</style>
