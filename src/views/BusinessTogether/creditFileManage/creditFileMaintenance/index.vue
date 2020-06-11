<!-- 信用档案维护 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="信用档案维护列表"
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
      <el-button type="primary">字条目模板下载</el-button>
      <el-button type="primary">批量上传子条目</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="detailsClick(scope.row)">查看字条目</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <children-page slot="other" v-model="showWordEntries" title="子条目详情">
      <word-entries />
    </children-page>

  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import ChildrenPage from '@/views/components/ChildrenPage'
import WordEntries from './word-entries'
export default {
  components: {
    NormalLayer,
    FormItems,
    ChildrenPage,
    WordEntries
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      itemsDatas: [
        { label: '机构编码', prop: 'xxx', type: 'input' },
        { label: '机构名称', prop: 'xxx', type: 'input' },
        { label: '信用主题类别', prop: 'xxx', type: 'select' },
        { label: '姓名', prop: 'xxx', type: 'input' },
        { label: '证件号码', prop: 'xxx', type: 'input' },
        { label: '有效状态', prop: 'xxx', type: 'select' }
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
      showWordEntries: false
    }
  },
  methods: {
    detailsClick(row) {
      this.showWordEntries = true
    }
  }
}
</script>

<style lang="scss" scoped>
.credit-file-maintenance{
  position: relative;
}
</style>

