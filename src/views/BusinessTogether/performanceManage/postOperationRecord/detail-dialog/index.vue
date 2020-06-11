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

    <div class="box" style="margin: 0 -10px; height: auto">
      <box-title title-name="对应业务详情" />

      <table-items
        :item-datas="itemsDatas2"
        :form-datas="formsDatas2"
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
          { label: '事项编号', prop: 'xxx' },
          { label: '事项名称', prop: 'xxx' },
          { label: '操作时间', prop: 'xxx' }
        ],
        [
          { label: '账号', prop: 'xxx' },
          { label: '用户名', prop: 'xxx' },
          { label: '所属部门', prop: 'xxx' }
        ],
        [
          { label: '操作名称', prop: 'xxx', colspan: 5 }
        ],
        [
          { label: '备注', prop: 'xxx1', colspan: 5 }
        ]
      ],
      formsDatas1: {
        xxx: 'xxx',
        xxx1: 'xx阿斯蒂芬阿斯蒂芬爱上砥砺奋进阿萨德六块腹肌屎大颗裸嫁时代拉开距离斯柯达发了多少咖啡机拉克丝打飞机拉萨的咖啡机拉速度快解放拉萨的空间法拉盛肯德基法拉盛贷款弗兰克斯的缴费拉克丝的缴费拉萨的咖啡机临时卡的缴费凉快点附近拉开发案例法拉盛贷款哈里斯父级拉速度快解放拉三等奖楼上的咖啡拉三等奖凉快圣诞节廊坊市看大家拉萨的空间拉萨的空间说'
      },
      itemsDatas2: [
        [
          { label: '个人电脑号', prop: 'xxx' },
          { label: '证件号码', prop: 'xxx' },
          { label: '姓名', prop: 'xxx' }
        ],
        [
          { label: '性别', prop: 'xxx' },
          { label: '人员类别', prop: 'xxx' },
          { label: '申请医院', prop: 'xxx' }
        ],
        [
          { label: '申请日期', prop: 'xxx' },
          { label: '生效日期', prop: 'xxx' },
          { label: '失效日期', prop: 'xxx' }
        ],
        [
          { label: '审核状态', prop: 'xxx' },
          { label: '申请病种', prop: 'xxx' },
          { label: '专家鉴定病种', prop: 'xxx' }
        ]
      ],
      formsDatas2: {
        xxx: 'xxx',
        time: 'xxx'
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
