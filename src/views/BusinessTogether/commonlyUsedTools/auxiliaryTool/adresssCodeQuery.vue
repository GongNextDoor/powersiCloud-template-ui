<!-- 医保区划代码查询 -->
<template>
  <normal-layer :search-number="itemsDatas.length" title-name="医保区划代码">
    <template slot="search-header">
      <form-items
        ref="ruleFrom"
        :items-datas="itemsDatas"
        :form-datas="queryForm"
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
        { label: '医保区划名称', prop: 'xxx', type: 'input' },
        { label: '医保区划代码', prop: 'xxx', type: 'input' }
      ],
      queryForm: {
        xxx: ''
      },
      columns: [
        { prop: 'nameCode', label: '医保区划代码', align: 'center' },
        { prop: 'nameCode', label: '所属省、自治区、直辖市', align: 'center' },
        { prop: 'nameCode', label: '所属地级市、地区、自治州、盟', align: 'center' },
        { prop: 'nameCode', label: '所属市辖区、县级市、县', align: 'center' }
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
