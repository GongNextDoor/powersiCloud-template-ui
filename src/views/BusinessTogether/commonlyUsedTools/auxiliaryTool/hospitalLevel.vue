<!-- 异地医院级别查询 -->
<template>
  <normal-layer :search-number="itemsDatas.length" title-name="异地医院级别查询">
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
    <Pagination />

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
        { label: '医疗机构编码', prop: 'xxx', type: 'input' },
        { label: '机构名称', prop: 'xxx', type: 'input' },
        { label: '异地类型', prop: 'xxx', type: 'input' },
        { label: '所属地区', prop: 'address', type: 'cascader', options: this.adress_options }
      ],
      adress_options: [],
      queryForm: {
        xxx: '',
        adress: []
      },
      columns: [
        { prop: 'nameCode', label: '省份', align: 'center' },
        { prop: 'nameCode', label: '城市', align: 'center' },
        { prop: 'code', label: '区县', align: 'center' },
        { prop: 'code', label: '异地医疗机构名称', align: 'center' },
        { prop: 'code', label: '医疗机构级别', align: 'center' },
        { prop: 'code', label: '医疗机构登记', align: 'center' },
        { prop: 'code', label: '医疗机构类别', align: 'center' },
        { prop: 'code', label: '异地类型', align: 'center' },
        { prop: 'code', label: '地址', align: 'center' },
        { prop: 'code', label: '审核标志', align: 'center' }
      ],
      tableData: [
        { name: '白兰花', code: 'xxx', nameCode: 'xxx' }
      ]
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

  }
}
</script>

<style lang="scss" scoped>
/deep/.el-divider{
  margin: 10px 0 !important;
}
</style>
