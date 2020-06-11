<!-- 问卷调查 -->
<template>
  <normal-layer :search-number="4" title-name="问卷调查列表">
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
        <el-button v-else type="text" class="modify" @click="startTestClick(scope.row)">提交</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <detail-dialog v-model="showDetailDialog" dialog-title="问卷调查详情" />
    <test-dialog v-model="showTestDialog" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import DetailDialog from './detail-dialog'
import TestDialog from './test-dialog'
export default {
  components: {
    NormalLayer,
    FormItems,
    DetailDialog,
    TestDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      itemsDatas: [
        { label: '问卷主题', prop: 'xxx', type: 'select' },
        { label: '提交状态', prop: 'xxx', type: 'select' },
        { label: '问卷名称', prop: 'xxx', type: 'input' },
        { label: '问卷对象', prop: 'xxx', type: 'input' }
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
      showDetailDialog: false,
      showTestDialog: false
    }
  },
  methods: {
    detailsClick(row) {
      this.showDetailDialog = true
    },
    startTestClick(row) {
      this.showTestDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

