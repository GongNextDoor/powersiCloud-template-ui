<!-- 考试查询 -->
<template>
  <normal-layer :search-number="6" title-name="考试查询列表">
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
        <el-button v-if="scope.row.tested" type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <detail-dialog v-model="showDetailDialog" dialog-title="考试详情" />
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
        { label: '考试类别', prop: 'xxx', type: 'select' },
        { label: '难易程度', prop: 'xxx', type: 'select' },
        { label: '考试状态', prop: 'xxx', type: 'select' },
        { label: '分值区间', prop: 'xxx', type: 'input' },
        { label: '考试名称', prop: 'xxx', type: 'select' },
        { label: '考试对象', prop: 'xxx', type: 'input' }
      ],
      queryForm: {
        xxx: '',
        dateRange: []
      },
      columns: Columns,
      tableData: [
        { name: '白兰花', code: 'xxx', nameCode: 'xxx', tested: false },
        { name: '白兰花', code: 'xxx', nameCode: 'xxx', tested: true }
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

