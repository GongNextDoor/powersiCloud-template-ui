<!-- 来访登记信息查询 -->
<template>
  <normal-layer :search-number="7" title-name="来访登记信息查询列表">
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <detail-dialog v-model="showDetailDialog" dialog-title="来访登记信息详情" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import DetailDialog from './detail-dialog'
export default {
  components: {
    NormalLayer,
    FormItems,
    DetailDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      itemsDatas: [
        { label: '姓名', prop: 'xxx', type: 'input' },
        { label: '证件号码', prop: 'xxx', type: 'input' },
        { label: '来访类型', prop: 'xxx1', type: 'select' },
        { label: '日期', prop: 'xxx2', type: 'dateRange' },
        { label: '电话号码', prop: 'xxx', type: 'input' },
        { label: '回访状态', prop: 'xxx', type: 'select' },
        { label: '办结状态', prop: 'xxx', type: 'select' }
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
      showDetailDialog: false
    }
  },
  methods: {
    detailsClick(row) {
      this.showDetailDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

