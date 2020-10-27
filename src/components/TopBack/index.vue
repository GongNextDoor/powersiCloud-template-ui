<template>
  <div class="box top" :class="isTop && 'top'">
    <el-button class="btn-dark" type="primary" @click="$router.back()"><i class="fa fa-chevron-left" />{{ title }}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    isTop: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/i {
  display: inline-block;
  margin-right: 5px;
}
</style>
