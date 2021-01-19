<template>
  <div class="night serverManage">
    <TableLayout :operation-config="operationConfig" :search-config="searchConfig">
      <MyTableView
        slot="table"
        :columns="tableColumns"
        :have-pagination="false"
        :data="tableData"
      >
        <template slot="operation" slot-scope="scope">
          <el-button type="text" @click="modify(scope.row)">修改</el-button>
          <el-button type="text" @click="handleConfirm(scope.row)">删除</el-button>
        </template>
      </MyTableView>
    </TableLayout>
    <edit :show="serveVisible" :edit-data="serveSelectRow" @update:show="editExample" @getServeTableData="getServeTableData" />
  </div>
</template>

<script>
import edit from './components/edit'
export default {
  name: 'ServerManage',
  components: {
    edit
  },
  data() {
    return {
      operationConfig: {
        operations: [
          { lable: '添加服务器', func: this.add },
          { lable: '刷新服务器信息', icon: 'iconfont icon-reset', func: this.refresh }
        ]
      },
      searchConfig: {
        form: [
          { lable: '主机名', key: 'host', type: 'input', placeholder: '请输入主机名，模糊匹配', width: '160px' },
          { lable: 'CPU', key: 'cpu', value: '222', type: 'input' },
          { lable: '内存', key: 'ram', type: 'input' },
          { lable: '磁盘', key: 'rom', type: 'input' }
        ],
        func: this.search
      },

      tableData: [
        { a: 'a', b: 'b', c: 'c' }
      ],
      tableColumns: [
        { label: '主机名', prop: 'a' },
        { label: '端口', prop: 'b' },
        { label: 'SSH用户', prop: 'c' },
        { label: 'SSH密码', prop: 'b' },
        { label: 'CPU（核）', prop: 'c' },
        { label: '内存（G）', prop: 'c' },
        { label: '磁盘（G）', prop: 'c' },
        { label: '操作', type: 'operation', fixed: 'right', width: '140px' }
      ],

      serveVisible: false,
      serveSelectRow: {}
    }
  },
  methods: {
    getServeTableData() {

    },
    add() {
      this.serveSelectRow = { type: 'add' }
      this.serveVisible = true
    },
    modify(row) {
      this.serveSelectRow = { type: 'modify', data: row }
      this.serveVisible = true
    },
    refresh() {
      console.log(22)
    },
    search(val) {
      console.log(val)
    },
    // 确认框
    handleConfirm() {
      this.$msgConfirm('是否删除？').then(res => {
        this.$msgSuccess(res)
      })
    },

    editExample(val, b) {
      this[val] = b
    }
  }
}
</script>
