<!-- 内容处理 比如说表格里的时间，金额等 -->
<template>
  <!-- 时间 -->
  <span v-if="item.customProp === 'date'">
    {{ content | momentDate('YYYY-MM-DD') }}
  </span>
  <span v-else-if="item.customProp === 'sex'">
    {{ content | sexFilter() }}
  </span>
  <span v-else-if="item.customProp === 'mom-date'">
    {{ content | momentDate(item.format) }}
  </span>
  <span v-else-if="item.customProp === 'true-false'">
    {{ content | transFlag() }}
  </span>
  <span v-else-if="item.customProp === 'percent'" :style="{color: item.textColor || '#000'}">
    {{ (content === null || content === '') ? '--' : content + '%' }}
  </span>
  <!-- 颜色字体内容(仅金额) -->
  <!--  <span v-else-if="item.customProp == 'color-text'" :style="{color: item.textColor || '#000'}">-->
  <!--    {{ (content | toThousandFilter) || '&#45;&#45;' }}-->
  <!--  </span>-->
  <span v-else-if="item.customProp === 'color-text'" :style="{color: item.textColor || '#000'}">
    {{ (content === null || content === '') ? '0.00' : parseFloat(content).toFixed(2) }}
  </span>
  <!-- 通用的颜色文字 -->
  <span v-else-if="item.customProp === 'color'" :style="{color: item.textColor || '#000'}">
    {{ content }}
  </span>
  <!-- 小数精度 -->
  <span v-else-if="item.customProp == 'precision'">
    {{ parseFloat((content === null || content === '') ? 0 : content).toFixed(item.precision) }}
  </span>
  <!-- 其他 -->
  <span v-else>{{ content || '--' }}</span>
</template>

<script>
import moment from 'moment'
import { transFlag, toThousandFilter, sexFilter } from '@/filters'

moment.locale('zh-cn')
export default {
  filters: { transFlag, toThousandFilter, sexFilter },
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    content: {
      type: [String, Number, Boolean],
      default: ''
    }
  },
  methods: {
  }
}
</script>
