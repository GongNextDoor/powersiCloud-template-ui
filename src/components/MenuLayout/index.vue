<template>
  <div class="menuLayout">
    <div class="left">
      <titleMenu type="dark" :title="title">
        <slot name="left" />
      </titleMenu>
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
import titleMenu from './titleMenu'
export default {
  components: {
    titleMenu
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.menuLayout {
  height: 100%;
  width: 100%;
  display: flex;
  .left {
    height: 100%;
    width: 20%;
    margin-right: 5px;
  }
  .right {
    background: #344a5f;
    height: 100%;
    flex: 1;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
