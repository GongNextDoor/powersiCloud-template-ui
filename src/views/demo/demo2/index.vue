<template>
  <div class="night">
    <MenuLayout title="菜单">
      <template slot="left">
        1
      </template>
      <template slot="right">
        <el-tabs v-model="activeName">
          <el-tab-pane label="tab1" name="first">
            <demo-form />
          </el-tab-pane>
          <el-tab-pane label="tab2" name="second">tab2</el-tab-pane>
          <el-tab-pane label="tab3" name="third">tab3</el-tab-pane>
        </el-tabs>
      </template>
    </MenuLayout>
  </div>
</template>

<script>
import form from './components/form'
export default {
  components: {
    'demo-form': form
  },
  data() {
    return {
      activeName: 'first'
    }
  }
}
</script>
