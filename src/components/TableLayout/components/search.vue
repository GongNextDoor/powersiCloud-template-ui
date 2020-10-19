<template>
  <section>
    <slot v-if="searchConfig.type === 'slot'" :name="searchConfig.slotName" />
    <el-form v-else inline :model="searchForm" @keyup.enter.native="searchConfig.func(searchForm)">
      <el-form-item v-for="(item, index) in searchConfig.form" :key="index" :label="item.lable">
        <!-- input -->
        <el-input v-if="item.type === 'input'" v-model="searchForm[item.key]" :placeholder="item.placeholder || `请输入`" :style="`width:${item.width}`" clearable />
        <!-- select -->
        <el-select v-if="item.type === 'select'" v-model="searchForm[item.key]" :placeholder="item.placeholder || `请选择`" :style="`width:${item.width}`" clearable>
          <el-option v-for="(el, i) in item.option" :key="i" :label="item.labelKey ? el[el.labelKey] : el.text" :value="item.valueKey ? el[item.valueKey] : el.id" />
        </el-select>
      </el-form-item>
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
      if (this.searchConfig.type !== 'custom') {
        this.searchConfig.form.forEach(el => {
          this.$set(this.searchForm, el.key, el.value || '')
        })
      }
    }
  }
}
</script>
