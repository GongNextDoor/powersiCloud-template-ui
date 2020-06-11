<!-- 信用档案建档 -->
<template>
  <normal-layer :search-number="itemsDatas.length" title-name="信用档案建档列表" title-need-handle>
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary">模板下载</el-button>
      <el-button type="primary" @click="batchUploadClick">批量上传</el-button>
      <el-button type="primary" @click="addEvent">新增</el-button>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
    >
      <template slot="operation" slot-scope="scope">
        <!-- <el-button type="text" class="modify" @click="detailsClick(scope.row)">详情</el-button> -->
        <el-button type="text" class="modify" @click="editClick(scope.row)">修改</el-button>
        <el-button type="text" class="delete" @click="deleteClick(scope.row)">删除</el-button>
      </template>
    </my-table-view>
    <Pagination />

    <detail-dialog v-model="showDetailDialog" dialog-title="档案建档详情" />
    <edit-dialog v-model="showEditDialog" :dialog-title="dialogTitle" />
  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './listCloumns'
import DetailDialog from './detail-dialog'
import EditDialog from './edit-dialog'
export default {
  components: {
    NormalLayer,
    FormItems,
    DetailDialog,
    EditDialog
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      itemsDatas: [
        { label: '选择机构', prop: 'xxx', type: 'input', placeholder: '请输入单位名称或编码' },
        { label: '机构名称', prop: 'xxx', type: 'input' },
        { label: '机构编码', prop: 'xxx', type: 'input' },
        { label: '信用主题类别', prop: 'xxx', type: 'select' },
        { label: '选择人员', prop: 'xxx', type: 'input', placeholder: '请输入身份证或姓名' },
        { label: '姓名', prop: 'xxx', type: 'input' },
        { label: '证件号码', prop: 'xxx', type: 'input' }
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
      showDetailDialog: false,
      dialogTitle: '新增',
      showEditDialog: false
    }
  },
  methods: {
    addEvent() {
      this.dialogTitle = '档案建档新增'
      this.showEditDialog = true
    },
    editClick(row) {
      this.dialogTitle = '档案建档编辑'
      this.showEditDialog = true
    },
    detailsClick(row) {
      this.showDetailDialog = true
    },
    deleteEvent(row) {
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
    },
    batchUploadClick() {
      if (this.multipleSelection.length <= 0) {
        this.$msgInfo('请选择')
      } else {
        this.$msgSuccess('上传成功')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

