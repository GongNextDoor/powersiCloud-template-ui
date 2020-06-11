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
    >
      <template slot="files">
        <a class="link" href="#" title="xxx.doc">xxx.doc</a>
      </template>
    </table-items>

    <div class="box" style="height: auto; margin-bottom: 10px;">
      <box-title title-name="选项维护" />
      <my-table-view
        :data="optionToMaintain"
        :columns="columns"
        height=""
      >
        <template slot="radioSelect" slot-scope="scope">
          <span v-if="scope.row.isSure">
            正确
          </span>
          <span v-else>
            错误
          </span>
        </template>
      </my-table-view>
    </div>

    <table-items
      :item-datas="itemsDatas2"
      :form-datas="formsDatas2"
    />
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
          { label: '类型', prop: 'xxx' },
          { label: '优先级', prop: 'xxx' },
          { label: '题目类别', prop: 'xxx' }
        ],
        [
          { label: '生效日期', prop: 'xxx1', colspan: 5 }
        ],
        [
          { label: '内容', prop: 'xxx', colspan: 5 }
        ],
        [
          { label: '学习文件', prop: 'xxx', slot: 'files', colspan: 5 }
        ]
      ],
      formsDatas1: {
        xxx: 'xxx',
        xxx1: 'xx阿斯蒂芬阿斯蒂芬爱上砥砺奋进阿萨德六块腹肌屎大颗裸嫁时代拉开距离斯柯达发了多少咖啡机拉克丝打飞机拉萨的咖啡机拉速度快解放拉萨的空间法拉盛肯德基法拉盛贷款弗兰克斯的缴费拉克丝的缴费拉萨的咖啡机临时卡的缴费凉快点附近拉开发案例法拉盛贷款哈里斯父级拉速度快解放拉三等奖楼上的咖啡拉三等奖凉快圣诞节廊坊市看大家拉萨的空间拉萨的空间说'
      },
      itemsDatas2: [
        [
          { label: '解释', prop: 'xxx', colspan: 5 }
        ]
      ],
      formsDatas2: {
        xxx: 'xxx',
        time: 'xxx'
      },
      columns: [
        { type: 'index', label: '序号', width: '80px' },
        { prop: 'content', label: '内容' },
        { type: 'custom', label: '是否正确', slotName: 'radioSelect' }
      ],
      optionToMaintain: [
        { isSure: false, content: 'xxxxx测试' }
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
  .link{
    color: #409EFF;
  }
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
