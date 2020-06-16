<template>
  <section class="app-main">
    <tabs-menu v-if="tabsMenuFlag" />
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
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
  position: relative;
  overflow: auto;
}
</style>
