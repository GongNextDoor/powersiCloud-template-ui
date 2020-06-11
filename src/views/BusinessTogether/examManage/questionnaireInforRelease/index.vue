<!-- 题目信息发布 -->
<template>
  <normal-layer :search-number="4" title-name="题目信息发布列表">
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
        <el-button v-if="scope.row.isRelease" type="text" class="modify" @click="cancelReleaseClick(scope.row)">取消发布</el-button>
        <el-button v-else type="text" class="modify" @click="releaseClick(scope.row)">发布</el-button>
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
        { label: '问卷主题', prop: 'xxx', type: 'select' },
        { label: '发布状态', prop: 'xxx', type: 'select' },
        { label: '有效标志', prop: 'xxx', type: 'select' },
        { label: '问卷名称', prop: 'xxx', type: 'input' }
      ],
      queryForm: {
        xxx: '',
        dateRange: []
      },
      columns: Columns,
      tableData: [
        { name: '白兰花', code: 'xxx', nameCode: 'xxx', isRelease: false },
        { name: '白兰花', code: 'xxx', nameCode: 'xxx', isRelease: true }
      ],
      showDetailDialog: false
    }
  },
  methods: {
    releaseClick(row) {
      this.$msgSuccess('操作成功')
    },
    cancelReleaseClick(row) {
      this.$msgConfirm('确认取消发布吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$msgSuccess('操作成功')
      }).catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

