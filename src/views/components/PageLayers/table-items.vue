<!-- 表格详情 适用于详情查看 -->
<!--
colspan: 1-5, 自己看着调试吧
itemDatas:
[
  [
    { label: '1', prop: '', colspan: 1, rowspan: 1 },
    { label: '2', prop: '', colspan: 1, rowspan: 1 },
    { label: '3', prop: '', colspan: 1, rowspan: 1 }
  ],
  [
    { label: '1', prop: '', colspan: 1, rowspan: 1 },
    { label: '1', prop: '', colspan: 1, rowspan: 1 },
    { label: '1', prop: '', colspan: 1, rowspan: 1 }
  ]
]
-->
<template>
  <table class="table-data">
    <tbody>
      <tr v-for="(row, index) in itemDatas" :key="index">
        <template v-for="item in row">
          <td
            :key="item.label + item.prop"
            :rowspan="item.rowspan || 1"
          >
            {{ item.label }}
          </td>

          <td
            :key="item.label"
            :colspan="item.colspan || 1"
            :rowspan="item.rowspan || 1"
          >
            <template v-if="item.slot">
              <slot :name="item.slot" :item="item" />
            </template>
            <template v-else>
              {{ item.prop ? formDatas[item.prop] : '' }}
            </template>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    itemDatas: {
      type: Array,
      default: () => []
    },
    formDatas: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.table-data tr>td{
  line-height: 30px !important;
}
</style>
