<template>
  <div class="night isTabsMenu">
    <div class="dm2">
      <div class="dm2-left">
        <titleMenu type="dark" title="标题">1</titleMenu>
      </div>
      <div class="dm2-right">
        <div class="dm2-content">
          <el-tabs v-model="activeName">
            <el-tab-pane label="tab1" name="first">
              <demo-form />
            </el-tab-pane>
            <el-tab-pane label="tab2" name="second">tab2</el-tab-pane>
            <el-tab-pane label="tab3" name="third">tab3</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titleMenu from '@/views/components/titleMenu/index'
import form from './components/form'
export default {
  components: {
    titleMenu,
    'demo-form': form
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  mounted() {

  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .dm2 {
    height: 100%;
    width: 100%;
    .dm2-left {
      height: 100%;
      width: 22%;
      float: left;
      margin-right: 10px;
    }
    .dm2-right {
      height: 100%;
      float: right;
      width: calc(78% - 10px);
    }
  }
  .dm2-content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: $night-bg3;
    padding: 10px;
  }
</style>
