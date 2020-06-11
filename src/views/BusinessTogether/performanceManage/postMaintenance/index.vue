<!-- 岗位维护 -->
<template>
  <normal-layer :search-number="itemsDatas.length" title-name="岗位维护列表" title-need-handle>
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary" @click="addEvent">新增</el-button>
      <el-button type="primary">导出</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
    >
      <template slot="operation" slot-scope="scope">
        <el-button type="text" class="modify" @click="editClick(scope.row)">修改</el-button>
        <el-button type="text" class="delete" @click="deleteClick(scope.row)">删除</el-button>
      </template>
    </my-table-view>

    <Pagination />

    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import EditDialog from './edit-dialog'
export default {
  components: {
    NormalLayer,
    FormItems,
    EditDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      itemsDatas: [
        { label: '岗位编号', prop: 'xxx', type: 'input' },
        { label: '岗位名称', prop: 'xxx', type: 'input' }
      ],
      queryForm: {
        xxx: ''
      },
      columns: Columns,
      tableData: [
        {
          name: '白兰花',
          code: 'YUUDSWXX',
          nameCode: 'IN12332'
        }
      ],
      showEditDialog: false,
      dialogTitle: '岗位新增'
    }
  },
  methods: {
    editClick(row) {
      this.showEditDialog = true
      this.dialogTitle = '岗位修改'
    },
    deleteEvent() {
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
    },
    addEvent() {
      this.showEditDialog = true
      this.dialogTitle = '岗位新增'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

