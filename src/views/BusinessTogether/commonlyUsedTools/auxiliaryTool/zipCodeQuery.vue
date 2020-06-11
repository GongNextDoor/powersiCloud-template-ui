<!-- 邮政编码查询 -->
<template>
  <normal-layer :search-number="itemsDatas.length" title-name="邮政编码查询">
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
        { label: '邮政编码', prop: 'xxx', type: 'input' },
        { label: '地区', prop: 'xxx', type: 'input' }
      ],
      queryForm: {
        xxx: ''
      },
      columns: [
        { prop: 'nameCode', label: '邮政编码', align: 'center' },
        { prop: 'nameCode', label: '省份', align: 'center' },
        { prop: 'nameCode', label: '城市', align: 'center' },
        { prop: 'nameCode', label: '地址', align: 'center' }
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
