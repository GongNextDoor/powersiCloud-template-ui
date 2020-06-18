<template>
  <div class="titleMenu" :class="type">
    <div class="tm-header">{{ title }}</div>
    <div class="tm-body">
      <!-- <el-menu default-active="1">
        <el-menu-item index="1">
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleMenu',
  props: {
    type: {
      type: String,
      default: 'dark'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  methods: {

  }

}
</script>

<style lang="scss" scoped>
.titleMenu {
  width: 100%;
  height: 100%;
  .tm-header {
    width: 100%;
    height: 46px;
    text-align: center;
    padding: 15px;
    box-sizing: border-box;
    line-height: 16px;
    font-size: 14px;
    font-weight: bold;
  }
  .tm-body {
    height: calc(100% - 46px);
  }
}
.dark {
  .tm-header {
    background: #223a51;
  }
  .tm-body {
    background: #344a5f;
  }
  .el-menu {
    background: #344a5f;
    .el-menu-item {
      color: #fff;
    }
    .el-menu-item + .is-active {
        color: #ff851b;
      }
  }
}
.light {
  color: #000;
  .tm-header {
    background: #ecedef;
  }
  .tm-body {
    background: #fff;
  }
}
</style>
