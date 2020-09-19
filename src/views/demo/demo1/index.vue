<template>
  <div class="night isTabsMenu">
    <div class="box top">
      <el-button class="btn-dark" type="primary"><i class="iconfont icon-xinzeng-copy" />新增按钮</el-button>
    </div>
    <div class="box">
      <el-form>
        <el-form inline :model="formInline">
          <el-form-item label="lable：">
            <el-input v-model="formInline.user" placeholder="placeholder" />
          </el-form-item>
          <el-form-item label="lable：">
            <el-select v-model="formInline.region" placeholder="placeholder" clearable>
              <el-option label="select1" value="1" />
              <el-option label="select2" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button class="btn-search" type="primary"><i class="fa fa-search" />查询</el-button>
          </el-form-item>
        </el-form>
      </el-form>
    </div>
    <div class="box bottom">
      <MyTableView
        :columns="tableColumns"
        :have-pagination="false"
        :data="tableData"
      >
        <template slot="operation" slot-scope="scope">
          <div class="operate_box">
            <el-button type="text" @click="handleConfirm(scope.row)">删除</el-button>
          </div>
        </template>
      </MyTableView>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [
        { a: 'a', b: 'b', c: 'c' }
      ],
      tableColumns: [
        { label: 'column', prop: 'a', sortable: true, align: 'center' },
        { label: 'column', prop: 'b', sortable: true, align: 'center' },
        { label: 'column', prop: 'c', sortable: true, align: 'center' }
      ]
    }
  },
  methods: {
    // 成功提醒
    handleSuccess() {
      this.$msgSuccess('操作成功')
    },
    // 失败提醒
    handleError() {
      this.$msgError('操作失败')
    },
    // 确认框
    handleConfirm() {
      this.$msgConfirm('是否删除？').then(res => {
        this.$msgSuccess(res)
      }).catch(err => {
        this.$msgInfo(err)
      })
    }
  }
}
</script>
