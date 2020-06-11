<!-- 值班填报确认 -->
<template>
  <normal-layer :search-number="itemsDatas.length" title-name="值班填报确认列表" title-need-handle>
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary" @click="sureEvent">批量确认</el-button>
      <el-button type="primary" :loading="exportLoading" @click="exportEvent">批量导出</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :multiple-selection.sync="multipleSelection"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <detail-dialog v-model="showDetailDialog" dialog-title="值班填报详情" />
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
      exportLoading: false,
      multipleSelection: [],
      itemsDatas: [
        { label: '标题', prop: 'xxx', type: 'input' },
        { label: '值班人员', prop: 'xxx', type: 'input' },
        { label: '医疗机构', prop: 'xxx', type: 'input', placeholder: '医疗机构编码/名称' },
        { label: '确认状态', prop: 'xxx', type: 'select' }
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
    },
    sureEvent() {
      if (this.multipleSelection.length > 0) {
        this.$msgSuccess('操作成功')
      } else {
        this.$msgInfo('请选择')
      }
    },
    exportEvent() {
      this.exportLoading = true
      setTimeout(() => {
        this.exportLoading = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

