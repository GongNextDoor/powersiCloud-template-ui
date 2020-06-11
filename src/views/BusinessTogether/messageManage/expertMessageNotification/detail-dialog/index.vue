<!-- 新增 编辑 -->
<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    :new-class="'middle'"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <table-items
      :item-datas="itemsDatas1"
      :form-datas="formsDatas1"
    />

    <div class="box" style="margin: 0 -10px; height: auto;">
      <box-title title-name="专家列表" />
      <div class="box-body">
        <my-table-view
          :columns="columns"
          :data="tableData"
          height="auto"
        />
        <Pagination />
      </div>
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
          { label: '主题', prop: 'xxx', colspan: 5 }
        ],
        [
          { label: '通知业务类型', prop: 'xxx' },
          { label: '发送方式', prop: 'xxx' },
          { label: '专家消息', prop: 'xxx' }
        ],
        [
          { label: '消息内容', prop: 'xxx1', colspan: 5 }
        ],
        [
          { label: '发送人', prop: 'xxx' },
          { label: '发送时间', prop: 'time' },
          { label: '发送状态', prop: 'xxx' }
        ]
      ],
      formsDatas1: {
        xxx: 'xxx',
        xxx1: 'xx阿斯蒂芬阿斯蒂芬爱上砥砺奋进阿萨德六块腹肌屎大颗裸嫁时代拉开距离斯柯达发了多少咖啡机拉克丝打飞机拉萨的咖啡机拉速度快解放拉萨的空间法拉盛肯德基法拉盛贷款弗兰克斯的缴费拉克丝的缴费拉萨的咖啡机临时卡的缴费凉快点附近拉开发案例法拉盛贷款哈里斯父级拉速度快解放拉三等奖楼上的咖啡拉三等奖凉快圣诞节廊坊市看大家拉萨的空间拉萨的空间说'
      },
      columns: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'code', label: '姓名', align: 'center' },
        { prop: 'code', label: '联系电话', align: 'center' },
        { prop: 'code', label: '发送失败次数', align: 'center' }
      ],
      tableData: [
        { code: 'xxx' }
      ]
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
