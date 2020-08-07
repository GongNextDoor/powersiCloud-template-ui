<template>
  <div class="tabsMenu">
    <el-menu
      :default-active="activeItem"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      router
      mode="horizontal"
    >
      <el-menu-item v-for="(item, index) in menuItems" :key="index" :index="routeHead+'/'+item.path">{{ item.meta.title }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'
import constantRoutes from '@/router/index'
export default {
  name: 'TabsMenu',
  data() {
    return {
      routeHead: '',
      menuItems: '',
      activeItem: ''
    }
  },
  computed: {
    variables() {
      return variables
    },
    permission_routes() {
      return constantRoutes.options.routes
    }
  },
  mounted() {
    this.getItems(this.$route.path)
  },
  methods: {
    getItems(path) {
      var routeArr = path.split('/')
      if (routeArr[2] === 'info') {
        this.permission_routes.forEach(el => {
          if (el.children) {
            el.children.forEach(ele => {
              if (ele.name === routeArr[1]) {
                this.menuItems = el.children
                this.routeHead = el.path
                this.activeItem = el.path + '/' + ele.name
                return false
              }
            })
          }
        })
      } else {
        this.routeHead = '/' + routeArr[1]
        this.permission_routes.forEach(el => {
          if (el.name === routeArr[1]) {
            this.menuItems = el.children
            this.activeItem = path
            return false
          }
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .tabsMenu {
    height: 40px !important;
    margin-bottom: 10px;
    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
  }
</style>
