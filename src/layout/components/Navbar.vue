<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <search id="header-search" class="right-menu-item" />

        <error-log class="errLog-container right-menu-item hover-effect" />

        <screenfull id="screenfull" class="right-menu-item hover-effect" />

        <!-- <el-tooltip content="Global Size" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip> -->
        <!-- <el-tooltip content="选择主题" effect="dark" placement="bottom">
          <ThemePicker class="right-menu-item hover-effect" style="line-height:73px;" @change="themeChange" />
        </el-tooltip> -->

      </template>
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
          <i class="el-icon-s-grid" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="changeStyle('')">标准风格</el-dropdown-item>
          <el-dropdown-item divided @click.native="changeStyle('custom-blue','#49A1F9')">蓝色风格</el-dropdown-item>
          <el-dropdown-item divided @click.native="changeStyle('custom-darkblue','#014A9E')">深蓝风格</el-dropdown-item>
          <el-dropdown-item divided @click.native="changeStyle('custom-green','#108274')">
            <span style="display:block;">绿色风格</span>
          </el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
          <i class="el-icon-user-solid" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>主页</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
// import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'
// import ThemePicker from '@/components/ThemePicker'
import '@/assets/theme/custom-green/index.css'
import '@/assets/theme/custom-blue/index.css'
import '@/assets/theme/custom-darkblue/index.css'
export default {
  components: {
    // Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    // SizeSelect,
    Search
    // ThemePicker
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  methods: {
    // 切换皮肤
    changeStyle(val, color) {
      console.log(val)
      document.getElementsByTagName('body')[0].className = val
      if (val) {
        this.changeToOther(color)
      } else {
        this.changeToDefault('#49A1F9')
      }
    },
    // 修改scss变量方法
    modifyScss(scss, val) {
      document.getElementsByTagName('body')[0].style.setProperty(scss, val)
    },
    changeToDefault(val) {
      this.modifyScss('--primary-blue', val)
      this.modifyScss('--menu-bg', '#1B65B9')
      this.modifyScss('--menu-text', '#fff')
      this.modifyScss('--sub-menu-active-text', '#fff')
      this.modifyScss('--sub-menu-hover', '#014A9E')
      this.modifyScss('--sub-menu-bg', '#1B65B9')
      this.modifyScss('--menu-active-bg', val)
      this.modifyScss('--side-bar-arrow', val)
      this.modifyScss('--navbar-bg', 'linear-gradient(90deg, rgba(27, 101, 185, 1) 0%, rgba(60, 154, 244, 1) 100%)')
      this.modifyScss('--sidebar-logo-bg', '#014A9E')
      this.modifyScss('--nav-icon-color', '#fff')
      this.modifyScss('--nav-border', 'none')
      this.modifyScss('--logo-border', 'none')
    },
    changeToOther(val) {
      this.modifyScss('--primary-blue', val)
      this.modifyScss('--menu-bg', '#fff')
      this.modifyScss('--menu-text', '#333')
      this.modifyScss('--sub-menu-active-text', val)
      this.modifyScss('--sub-menu-hover', '#E8EBEF')
      this.modifyScss('--sub-menu-bg', '#fff')
      this.modifyScss('--menu-active-bg', val)
      this.modifyScss('--side-bar-arrow', val)
      this.modifyScss('--navbar-bg', '#fff')
      this.modifyScss('--sidebar-logo-bg', '#FFF')
      this.modifyScss('--nav-icon-color', val)
      this.modifyScss('--nav-border', '1px solid #E0E1E2')
      this.modifyScss('--logo-border', '1px solid #E0E1E2')
    },
    // 切换主题色
    themeChange(val) {
      if (val === '#49A1F9') {
        this.changeToDefault('#49A1F9')
        return
      }
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
      this.changeToOther(val)
    },

    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: $navbar;
  overflow: hidden;
  position: relative;
  background: $navbarBg;
  border-left:$navBorder;
  // background:linear-gradient(90deg,rgba(27,101,185,1) 0%,rgba(60,154,244,1) 100%);
  // box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: $navbar - 4px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
    /deep/.hamburger{
      color:$navIconColor;
      fill: $navIconColor
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: $navbar;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: $navIconColor;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
      .el-color-picker__trigger{
        margin-top: 17px;
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        // margin-top: 5px;
        position: relative;
        font-size: 26px;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
