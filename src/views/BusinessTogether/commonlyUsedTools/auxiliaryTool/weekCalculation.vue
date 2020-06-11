<!-- 孕周计算 -->
<template>
  <normal-layer :search-number="itemsDatas.length" title-name="孕周计算">
    <template slot="search-header">
      <form-items
        ref="ruleFrom"
        :items-datas="itemsDatas"
        :form-datas="queryForm"
        :model="queryForm"
        :rules="rules"
      >
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>

      <el-divider />
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
    />
    <!-- <Pagination /> -->

  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
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
        { label: '计算类型', prop: 'xxx', type: 'select' },
        { label: '末次月经时间', prop: 'xxx1', type: 'date' },
        { label: '当前时间', prop: 'xxx1', type: 'date' }
      ],
      queryForm: {
        xxx: '',
        xxx1: ''
      },
      rules: {
        xxx: [{ required: true, message: '请选择', trigger: 'blur' }]
      },
      columns: [
        { prop: 'nameCode', label: '预产期', align: 'center' },
        { prop: 'nameCode', label: '怀孕周数', align: 'center' },
        { prop: 'code', label: '怀孕满12周日期', align: 'center' }
      ],
      tableData: [
        { name: '白兰花', code: 'xxx', nameCode: 'xxx' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
/deep/.el-divider{
  margin: 10px 0 !important;
}
</style>

