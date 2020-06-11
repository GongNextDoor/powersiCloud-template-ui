<!-- 知识库信息查询 -->
<template>
  <normal-layer :search-number="itemsDatas.length" title-name="知识库信息查询列表">
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
      <template slot="collection" slot-scope="scope">
        <el-switch
          v-model="scope.row.collection"
          :active-text="scope.row.collection ? '是':'否'"
        />
      </template>

      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <detail-dialog v-model="showDetailDialog" dialog-title="知识库信息详情" />
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
        { label: '主题', prop: 'xxx', type: 'input' },
        { label: '关键字', prop: 'xxx', type: 'input' },
        { label: '日期', prop: 'dateRange', type: 'dateRange' },
        { label: '发布单位', prop: 'xxx', type: 'input' },
        { label: '状态', prop: 'xxx', type: 'select' }
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

