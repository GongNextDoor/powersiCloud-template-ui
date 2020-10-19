<template>
  <div class="tableLayout">
    <div class="box" :class="isTop && 'top'">
      <operation :operation-config="operationConfig" />
    </div>
    <div class="box">
      <search ref="search" :search-config="searchConfig" />
    </div>
    <div class="box bottom">
      <slot v-if="tableConfig.type === 'custom'" :name="tableConfig.slotName" />
    </div>
  </div>
</template>

<script>
import operation from './components/operation'
import search from './components/search'
export default {
  name: 'TableLayout',
  components: {
    operation,
    search
  },
  props: {
    isTop: {
      type: Boolean,
      default: true
    },
    operationConfig: {
      type: Object,
      default: () => {
        return {
          type: 'custom',
          slotName: 'operation'
        }
      }
    },
    searchConfig: {
      type: Object,
      default: () => {
        return {
          type: 'custom',
          slotName: 'search'
        }
      }
    },
    tableConfig: {
      type: Object,
      default: () => {
        return {
          type: 'custom',
          slotName: 'table'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tableLayout {
  height:100%
}
</style>

