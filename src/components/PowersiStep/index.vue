<template>
  <ul class="powersiStep">
    <li
      v-for="(item, index) in steps"
      :key="index"
      :style="`width:${100 / steps.length}%`"
      :class="active === index && 'active'"
    >
      <span class="powersiStep-badge">{{ index + 1 }}</span>
      <span class="powersiStep-title">{{ item }}</span>
      <div v-if="index!==steps.length-1" class="powersiStep-right-bg" />
      <div v-if="index!==steps.length-1" class="powersiStep-right" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PowersiStep',
  props: {
    active: {
      type: Number,
      default: () => 0
    },
    steps: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.powersiStep {
  overflow: hidden;
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 0 0 10px 0;
  text-align: center;
  color: #333;
  font-size: 12px;
  li {
    display: list-item;
    list-style: none;
    float: left;
    line-height: 36px;
    background: #eee;
    position: relative;
    .powersiStep-badge {
      display: inline-block;
      width: 18px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      background-color: #fff;
      border-radius: 50%;
      color: #333;
    }
    .powersiStep-right-bg {
      border-bottom: 24px solid transparent;
      border-top: 24px solid transparent;
      border-left: 20px solid #fff;
      position: absolute;
      top: -6px;
      right: -20px;
      z-index: 2;
    }
    .powersiStep-right {
      border-bottom: 18px solid transparent;
      border-top: 18px solid transparent;
      border-left: 15px solid #eee;
      position: absolute;
      top: 0;
      right: -15px;
      z-index: 2;
    }
  }
  .active {
    background: #5cace7;
    color: #fff;
    .powersiStep-badge {
      color: #5cace7;
    }
    .powersiStep-right {
      border-left-color: #5cace7;
    }
  }
}
</style>
