// 每个菜单页面，有头部搜索和列表以及分页的，可以用混入来代替
export default {
  data() {
    return {
      queryForm: {},
      pageTotal: 0,
      currentPage: 0,
      pageSize: 15
    }
  },
  created() {

  },
  methods: {
    reset() {
      for (const key in this.queryForm) {
        if (typeof (this.queryForm[key]) === 'string') {
          this.$set(this.queryForm, key, '')
        } else if (this.queryForm[key].constructor === Array) {
          this.$set(this.queryForm, key, [])
        } else if (this.queryForm[key].constructor === Object) {
          this.$set(this.queryForm, key, {})
        } else {
          this.$set(this.queryForm, key, null)
        }
      }
    },
    search() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    pageChange() {
      this.currentPage = 0
      this.search()
    },
    deleteClick(row) {
      this.$msgConfirm('确认删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteEvent(row)
      }).catch(() => {})
    }
  }
}
