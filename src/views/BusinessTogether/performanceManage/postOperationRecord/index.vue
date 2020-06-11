<!-- 岗位操作记录 -->
<template>
  <auto-size-layer class="post-operation-record">

    <template slot="header">
      <collapse
        v-model="isCollapse"
        :height="100"
        @boxChange="headerBoxChange"
        @showAll="collapseHandleShowAll"
      >
        <form-items
          ref="queryForm"
          :model="queryForm"
          :rules="rules"
          :items-datas="itemsDatas"
          :form-datas="queryForm"
        >
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" @click="search">查询</el-button>
          <el-button class="collapse-btn" @click="collapseClick">
            <i :class="['el-icon-arrow-down', 'icon', isCollapse?'down':'up']" />
          </el-button>
        </form-items>
      </collapse>
    </template>

    <div class="box">
      <box-title title-name="岗位操作记录列表" title-need-handle>
        <el-button type="primary" @click="exportEvent">导出</el-button>
      </box-title>
      <div class="box-body">
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
      </div>
    </div>

    <detail-dialog v-model="showDetailDialog" dialog-title="岗位操作详情" />
  </auto-size-layer>
</template>

<script>
import AutoSizeLayer from '@/views/components/PageLayers/autoSizeLayer'
import Collapse from '@/components/Collapse'
import BoxTitle from '@/views/components/PageLayers/box-title'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import HeaderBoxChange from '@/mixins/headerBoxChange'
import Columns from './listCloumns'
import DetailDialog from './detail-dialog'
export default {
  components: {
    AutoSizeLayer,
    Collapse,
    BoxTitle,
    FormItems,
    DetailDialog
  },
  mixins: [PageHandle, HeaderBoxChange],
  data() {
    return {
      loading: false,
      itemsDatas: [
        { label: '操作名称', prop: 'xxx', type: 'input' },
        { label: '用户信息', prop: 'xxx', type: 'input', placeholder: '请输入账号/用户名' },
        { label: '所属部门', prop: 'xxx', type: 'select' },
        { label: 'IP地址', prop: 'xxx', type: 'select' },
        { label: '日期', prop: 'dateRange', type: 'dateRange' },
        { label: '事项编号', prop: 'xxx', type: 'input' },
        { label: '受理编号', prop: 'xxx', type: 'input' },
        { label: '证件号码', prop: 'xxx', type: 'input' },
        { label: '岗位', prop: 'xxx', type: 'select' }
      ],
      queryForm: {
        xxx: '',
        dateRange: []
      },
      rules: {
        dateRange: [{ required: true, message: '请选择', trigger: 'change' }]
      },
      columns: Columns,
      tableData: [
        { name: '白兰花', code: 'YUUDSWXX', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSWXX', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSWXX', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSWXX', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSWXX', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSWXX', nameCode: 'IN12332' }
      ],
      showDetailDialog: false
    }
  },
  methods: {
    search() {
      this.$refs.queryForm.elForm.validate((valid) => {
        if (valid) {
          console.log('查询')
        }
      })
    },
    exportEvent() {
      this.$message({
        type: 'success',
        message: '导出成功!'
      })
    },
    detailsClick() {
      this.showDetailDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.post-operation-record{
  overflow: hidden;
}
</style>
