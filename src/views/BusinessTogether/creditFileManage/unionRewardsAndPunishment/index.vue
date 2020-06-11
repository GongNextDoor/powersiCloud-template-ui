<!-- 联合奖罚查询 -->
<template>
  <normal-layer :search-number="itemsDatas.length" title-name="联合奖罚查询列表" title-need-handle>
    <template slot="search-header">
      <form-items
        label-width="200px"
        :items-datas="itemsDatas"
        :form-datas="queryForm"
      >
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary">奖惩措施查询</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="backClick(scope.row)">反馈</el-button>
      </template>
    </my-table-view>
    <Pagination />

  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
export default {
  components: {
    NormalLayer,
    FormItems
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      itemsDatas: [
        { label: '统一社会信用代码/证件号码', prop: 'xxx', type: 'input', lg: 12, xl: 12 }
      ],
      queryForm: {
        xxx: ''
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
    backClick(row) {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>

