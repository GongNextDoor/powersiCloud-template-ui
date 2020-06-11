<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    :new-class="'middle'"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >

    <div class="box">
      <box-title title-name="人员信息" />
      <table-items
        :item-datas="itemsDatas1"
        :form-datas="formsDatas1"
      />
      <box-title title-name="来访登记信息" />
      <table-items
        :item-datas="itemsDatas2"
        :form-datas="formsDatas2"
      />
      <box-title title-name="回访信息" />
      <table-items
        :item-datas="itemsDatas3"
        :form-datas="formsDatas3"
      />
      <box-title title-name="办结信息" />
      <table-items
        :item-datas="itemsDatas4"
        :form-datas="formsDatas4"
      />
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>

</template>
<script>
import TableItems from '@/views/components/PageLayers/table-items'
import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    TableItems,
    BoxTitle
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
      itemsDatas1: [
        [
          { label: '姓名', prop: 'xxx' },
          { label: '证件号码', prop: 'xxx' }
        ]
      ],
      formsDatas1: {
        xxx: 'xxx'
      },
      itemsDatas2: [
        [
          { label: '来访类型', prop: 'xxx' },
          { label: '电话号码', prop: 'xxx' },
          { label: '接待日期', prop: 'xxx' }
        ],
        [
          { label: '来访信息', prop: 'xxx', colspan: 5 }
        ],
        [
          { label: '备注信息', prop: 'xxx', colspan: 5 }
        ]
      ],
      formsDatas2: {
        xxx: 'xxx'
      },
      itemsDatas3: [
        [
          { label: '回访日期', prop: 'xxx' },
          { label: '回访方式', prop: 'xxx' }
        ],
        [
          { label: '回访信息', prop: 'xxx', colspan: 5 }
        ]
      ],
      formsDatas3: {
        xxx: 'xxx'
      },
      itemsDatas4: [
        [
          { label: '业务状态', prop: 'xxx' }
        ]
      ],
      formsDatas4: {
        xxx: 'xxx'
      }
    }
  },
  methods: {
    resetForm() {
      this.$emit('closeAll', false)
      // this.$refs.dataFrom1.elForm.resetFields()
      // this.$refs.dataFrom2.elForm.resetFields()
    },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    isShow(v) {
      this.$emit('closeAll', false)
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
  .table-transfer-box {
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #DCDFE6;
    border-radius: 5px;
  }
</style>
