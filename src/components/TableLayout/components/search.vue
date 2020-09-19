<template>
  <section>
    <slot v-if="searchConfig.type === 'slot'" :name="searchConfig.slotName" />
    <el-form v-else inline :model="searchForm">
      <el-form-item v-for="(item, index) in searchConfig.form" :key="index" :label="`${item.lable}：`">
        <el-input v-if="item.type === 'input'" v-model="searchForm[item.key]" :placeholder="item.placeholder || `请输入${item.lable}`" :style="`width:${item.width}`" clearable />
      </el-form-item>
      <!-- <el-form-item label="lable：">
        <el-select v-model="searchForm.region" placeholder="placeholder" clearable>
          <el-option label="select1" value="1" />
          <el-option label="select2" value="2" />
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button class="btn-search" type="primary" @click="searchConfig.func(searchForm)"><i class="fa fa-search" />查询</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'Search',
  props: {
    searchConfig: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      searchForm: {}
    }
  },
  watch: {
    searchConfig: {
      handler: function() {
        this.init()
      },
      deep: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (this.searchConfig.type === 'default') {
        this.searchConfig.form.forEach(el => {
          this.$set(this.searchForm, el.key, el.value || '')
        })
      }
    }
  }
}
</script>
