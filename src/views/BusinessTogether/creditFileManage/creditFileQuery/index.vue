<!-- 信用档案查询 -->
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
      <box-title title-name="信用档案查询列表" />
      <div class="box-body">
        <my-table-view
          v-loading="loading"
          :columns="columns"
          :data="tableData"
        >
          <template slot="operation" slot-scope="scope">
            <el-button type="text" class="modify" @click="detailsClick(scope.row)">查看子条目</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </div>
    </div>

    <detail-dialog v-model="showDetailDialog" dialog-title="信用档案详情" />
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
        { label: '身份证号码', prop: 'xxx', type: 'input' },
        { label: '机构名称(姓名)', prop: 'xxx', type: 'input' },
        { label: '单位电脑号', prop: 'xxx', type: 'input' },
        { label: '信用主体类别', prop: 'xxx', type: 'select' },
        { label: '信用等级', prop: 'xxx', type: 'select' },
        { label: '机构编码', prop: 'xxx', type: 'input' },
        { label: '处理文号', prop: 'xxx', type: 'input' },
        { label: '处理类型', prop: 'xxx', type: 'select' },
        { label: '处理日期', prop: 'dateRange', type: 'dateRange' },
        { label: '信息类别', prop: 'xxx', type: 'select' },
        { label: '信息共享', prop: 'xxx', type: 'select' },
        { label: '审核状态', prop: 'xxx', type: 'select' },
        { label: '档案编码', prop: 'xxx', type: 'input' }
      ],
      queryForm: {
        xxx: '',
        dateRange: []
      },
      columns: Columns,
      tableData: [
        { name: '白兰花', code: 'YUUDSW', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSW', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSW', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSW', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSW', nameCode: 'IN12332' },
        { name: '白兰花', code: 'YUUDSW', nameCode: 'IN12332' }
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
.post-operation-record{
  overflow: hidden;
}
</style>
