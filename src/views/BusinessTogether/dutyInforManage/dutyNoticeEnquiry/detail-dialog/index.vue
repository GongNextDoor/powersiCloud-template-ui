<!-- 新增 编辑 -->
<template>
  <form-dialog
    class="audit-dialog"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    :new-class="'middle'"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <div class="box">
      <table-items
        :item-datas="itemsDatas"
        :form-datas="formsDatas"
      >
        <template slot="mainContent">
          <el-input
            v-model="formsDatas.xxx1"
            autosize
            readonly
            resize="none"
            type="textarea"
            style="border: none"
          />
        </template>

        <template slot="files">
          <a class="link" href="#" title="xxx.doc">xxx.doc</a>
        </template>
      </table-items>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">关闭</el-button>
    </span>
  </form-dialog>

</template>
<script>
import TableItems from '@/views/components/PageLayers/table-items'
export default {
  components: {
    TableItems
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
        [
          { label: '接收对象', prop: 'xxx', colspan: 5 }
        ],
        [
          { label: '标题', prop: 'xxx', colspan: 5 }
        ],
        [
          { label: '内容主体', prop: 'xxx1', slot: 'mainContent', colspan: 5 }
        ],
        [
          { label: '备注', prop: 'xxx', colspan: 5 }
        ],
        [
          { label: '上传文件', prop: 'xxx', slot: 'files', colspan: 5 }
        ]
      ],
      formsDatas: {
        xxx: 'xxx',
        xxx1: `关于开展泌尿系“日间手术”病种按单病种
          包干结算试点工作的通知
          各三级定点医疗机构：
          为进一步降低参保人员医疗费用负担，经我局研究，并报上级部门同意，决定在三级定点医疗机构开展泌尿系“日间手术”病种按单病种包干结算试点工作。现将具体事项通知如下：
          一、适用对象长沙市市本级职工基本医疗保险参保人员。
          二、日间手术病种
          （一）经输尿管镜输尿管支架取出术。
          （二）包皮环切术。
          （三）体外碎石手术。
          三、结算办法
          （一）结算原则：严格按照“病种控制、包干结算、节余留院、超标不补”的原则进行住院医疗费用结算。
          （二）结算标准：经输尿管镜输尿管支架取出术定额包干结算标准为1200元/人次；包皮环切术定额包干结算标准为1800元/人次；体外碎石手术定额包干结算标准为1200元/人次。
          （三）参保人员做上述“日间手术”的，在职人员自负包干费用标准的15%，退休人员自负包干费用标准的10%，不再计算住院起付标准费用以及基本医疗保险药品目录、诊疗项目目录中规定的政策自负费用（医疗服务设施支付标准规定的自负费用除外）。实行医疗补助的国家公务员按相关规定执行。
          （四）参保人员在住院治疗过程中发现合并其他疾病需要同时治疗或原发疾病病情加重的，可以改为按普通病种方式结算。
          （五）参保人员患上述疾病住院治疗发生的医疗费用列入该参保人员本医疗保险结算年度住院医疗费用累计计算范围，不纳入该院年度人次费用考核指标。
          四、就医管理
          （一）各定点医疗机构必须严格按照各“日间手术”临床路径（见附件）为患者提供医疗服务。
          （二）各定点医疗机构依据自身条件制定就医流程、“日间手术”管理制度，确保医疗安全。
          （三）具备开展“日间手术”条件的三级医疗机构将相关申报资料报医疗监管科，经评审同意后实施。
        `
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
/deep/ .el-textarea__inner{
  border: none !important;
  color: #606266 !important;
}
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
