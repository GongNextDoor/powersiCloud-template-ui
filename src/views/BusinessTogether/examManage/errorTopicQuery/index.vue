<!-- 错误题目查询 -->
<template>
  <normal-layer :search-number="4" title-name="错误题目查询列表">
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

    <detail-dialog v-model="showDetailDialog" dialog-title="错误题目详情" />
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
        { label: '类型', prop: 'xxx', type: 'select' },
        { label: '优先级', prop: 'xxx', type: 'select' },
        { label: '题目类别', prop: 'xxx', type: 'select' },
        { label: '错误率', prop: 'xxx', type: 'select' }
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

