<!-- 岗位上线记录 -->
<template>
  <normal-layer :search-number="itemsDatas.length" title-name="岗位上线记录列表" title-need-handle>
    <template slot="search-header">
      <form-items
        ref="queryForm"
        :model="queryForm"
        :rules="rules"
        :items-datas="itemsDatas"
        :form-datas="queryForm"
      >
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <template slot="title-btns">
      <el-button type="primary" @click="exportEvent">导出</el-button>
    </template>

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

    <detail-dialog v-model="showDetailDialog" dialog-title="登录时长详情" />
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
      adress_options: [],
      itemsDatas: [
        { label: '账号', prop: 'xxx', type: 'input' },
        { label: '用户名', prop: 'xxx', type: 'input' },
        { label: '所属部门', prop: 'xxx', type: 'select', filterable: true },
        { label: '日期', prop: 'dateRange', type: 'dateRange' },
        { label: '医保区划', prop: 'address', type: 'cascader', options: this.adress_options },
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
        {
          name: '白兰花',
          code: 'YUUDSWXX',
          nameCode: 'IN12332'
        }
      ],
      showDetailDialog: false
    }
  },
  mounted() {
    this.itemsDatas.forEach(item => {
      if (item.prop === 'address') {
        this.$set(item, 'options',
          [
            {
              value: 'zhinan1',
              label: '长沙市',
              children: [{
                value: 'zhinan2',
                label: '岳麓区'
              }]
            }
          ]
        )
      }
    })
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

</style>
