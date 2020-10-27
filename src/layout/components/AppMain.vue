<template>
  <section class="app-main">
    <tabs-menu v-if="false" />
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
import tabsMenu from './tabsMenu/index'
export default {
  name: 'AppMain',
  components: {
    tabsMenu
  },
  data() {
    return {
      tabsMenuFlag: true
    }
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  watch: {
    $route(to, from) {
      if (to.name !== 'info') {
        this.tabsMenuFlag = false
        this.$nextTick(() => {
          this.tabsMenuFlag = true
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
  overflow: auto;
  box-sizing: border-box;
}
</style>
