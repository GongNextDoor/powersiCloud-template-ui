<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    :new-class="'middle'"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <form-items
      ref="ruleFrom"
      :model="dataForm"
      :rules="rules"
      :is-grid="false"
      :items-datas="itemsDatas"
      :form-datas="dataForm"
    />

    <div class="box tab-wrapper">
      <div class="box-body">
        <div class="bg">&nbsp;</div>
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane
            v-for="item in addDatas"
            :key="item.title"
            :label="item.title"
            :name="item.name"
          >

            <!-- <box-title :title-name="item.title" title-need-handle>
              <el-button type="primary" @click="addClick(item)">新增</el-button>
            </box-title> -->
            <div style="text-align: right; padding: 10px">
              <el-button type="primary" @click="addClick(item)">新增</el-button>
            </div>
            <div style="padding: 0 10px">
              <my-table-view
                :data="item.datas"
                :columns="columns"
                height=""
              >
                <template slot="operation" slot-scope="scope">
                  <el-button type="text" class="delete" @click="deleteClick(scope.row, item)">删除</el-button>
                </template>
              </my-table-view>
              <Pagination />

            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
      <el-button type="primary" @click="saveEvent">保存</el-button>
    </span>
  </form-dialog>

</template>
<script>
import FormItems from '@/views/components/PageLayers/form-items'
// import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    FormItems
    // BoxTitle
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
      itemsDatas: [
        { label: '所属分中心', prop: 'xxx', type: 'input', span: 12 },
        { label: '机构名称', prop: 'xxx', type: 'input', span: 12 },
        { label: '标题', prop: 'xxxx', type: 'input', span: 24 },
        { label: '备注', prop: 'note', type: 'textarea', span: 24, autosize: { minRows: 3 }}
      ],
      dataForm: {
        xxx: '',
        xxxx: '',
        note: ''
      },
      rules: {
        xxx: [{ required: true, message: '请输入', trigger: 'blur' }],
        xxxx: [{ required: true, message: '请输入', trigger: 'blur' }]
      },
      columns: [
        { type: 'index', label: '序号', width: '50px' },
        { prop: 'xxx', label: '姓名' },
        { prop: 'xxx', label: '电话' },
        { prop: 'xxx', label: '手机号' },
        { prop: 'xxx', label: '日期' },
        { type: 'operation', label: '操作', width: '80px' }
      ],
      activeName: 'ybbfzr',
      addDatas: [
        { title: '医保办负责人', name: 'ybbfzr', datas: [{ xxx: '医保办负责人' }] },
        { title: '医务部门', name: 'ywbm', datas: [{ xxx: '医务部门' }] },
        { title: '值班院领导', name: 'zbyld', datas: [{ xxx: '值班院领导' }] }
      ]
    }
  },
  methods: {
    resetForm() {
      this.$emit('closeAll', false)
      this.$refs.ruleFrom.elForm.resetFields()
    },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    saveEvent() {
      this.$refs.ruleFrom.elForm.validate((valid) => {
        if (valid) {
          this.$msgSuccess('保存成功')
          this.$emit('closeAll', false)
        }
      })
    },
    isShow(v) {
      this.$emit('closeAll', false)
    },
    addClick(item) {
      item.datas.push({
        xxx: 'xxxx'
      })
    },
    deleteClick(row, item) {
      item.datas.splice(0, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
  .special-form{
    /deep/.el-form {
      .el-form-item__label{
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 32px;
        line-height: 14px;
      }
    }
  }
  .tree-table-transfer-box{
    margin-top: 40px;
    margin-left: -84px;
  }
  .box-header {
    line-height: 18px !important;
  }
  .tab-wrapper {
    height: auto !important;
    border: 1px solid #E4E7ED !important;
    .box-body {
      padding: 0 !important;
      height: 100%;
      position: relative;

      .bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 35px;
        color: #fafafa;
        background-color: #fafafa;
        border-bottom: 1px solid #E4E7ED;
      }

      /deep/.el-tabs {
        height: 100%;

        .el-tabs__content {
          height: calc(100% - 36px);

          .el-tab-pane {
            height: 100%;
          }
        }
        .el-tabs__nav {
          margin-left: 0 !important;
          // border: none !important;
        }
        .el-tabs__item {
          height: 35px !important;
        }
      }
    }
  }
</style>
