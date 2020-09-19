<template>
  <section>
    <slot v-if="operationConfig.type === 'slot'" name="operation" />
    <section v-else>
      <el-button
        v-for="(item, index) in operationConfig.operations"
        :key="index"
        class="btn-dark"
        :class="computeClass(index)"
        type="primary"
        @click="item.func"
      >
        <i :class="item.icon || 'iconfont icon-xinzeng-copy'" />
        {{ item.lable }}
      </el-button>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Operation',
  props: {
    operationConfig: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    computeClass(index) {
      if (this.operationConfig.operations.length < 2) {
        return ''
      }
      if (index === 0) {
        return 'group-left'
      }
      if (index === this.operationConfig.operations.length - 1) {
        return 'group-right'
      }
      return 'group-center'
    }
  }
}
</script>
