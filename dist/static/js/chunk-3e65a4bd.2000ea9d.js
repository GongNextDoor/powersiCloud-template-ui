(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e65a4bd"],{5408:function(t,e,l){"use strict";l.r(e);var o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("form-dialog",{staticClass:"audit-dialog",attrs:{title:t.dialogTitle,"is-show":t.isDialogVisible,"new-class":"middle"},on:{"update:isShow":t.isShow,resetForm:t.resetForm}},[l("div",{staticClass:"box"},[l("table-items",{attrs:{"item-datas":t.itemsDatas,"form-datas":t.formsDatas}},[l("template",{slot:"mainContent"},[l("el-input",{staticStyle:{border:"none"},attrs:{autosize:"",readonly:"",resize:"none",type:"textarea"},model:{value:t.formsDatas.xxx1,callback:function(e){t.$set(t.formsDatas,"xxx1",e)},expression:"formsDatas.xxx1"}})],1),t._v(" "),l("template",{slot:"files"},[l("a",{staticClass:"link",attrs:{href:"#",title:"xxx.doc"}},[t._v("xxx.doc")])])],2)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:t.closeDialog}},[t._v("关闭")])],1)])},a=[],s=l("66fc"),n={components:{TableItems:s["default"]},model:{prop:"isDialogVisible",event:"closeAll"},props:{isDialogVisible:{type:Boolean,default:!1},dialogTitle:{type:String,default:"标题"}},data:function(){return{itemsDatas:[[{label:"标题",prop:"xxx"},{label:"状态",prop:"xxx"},{label:"类型",prop:"xxx"}],[{label:"发布单位",prop:"xxx"},{label:"发布人",prop:"xxx"},{label:"发布日期",prop:"xxx"}],[{label:"关键字",prop:"xxx",colspan:5}],[{label:"内容主体",prop:"xxx1",slot:"mainContent",colspan:5}],[{label:"备注",prop:"xxx",colspan:5}],[{label:"上传文件",prop:"xxx",slot:"files",colspan:5}]],formsDatas:{xxx:"xxx",xxx1:"关于开展泌尿系“日间手术”病种按单病种\n          包干结算试点工作的通知\n          各三级定点医疗机构：\n          为进一步降低参保人员医疗费用负担，经我局研究，并报上级部门同意，决定在三级定点医疗机构开展泌尿系“日间手术”病种按单病种包干结算试点工作。现将具体事项通知如下：\n          一、适用对象长沙市市本级职工基本医疗保险参保人员。\n          二、日间手术病种\n          （一）经输尿管镜输尿管支架取出术。\n          （二）包皮环切术。\n          （三）体外碎石手术。\n          三、结算办法\n          （一）结算原则：严格按照“病种控制、包干结算、节余留院、超标不补”的原则进行住院医疗费用结算。\n          （二）结算标准：经输尿管镜输尿管支架取出术定额包干结算标准为1200元/人次；包皮环切术定额包干结算标准为1800元/人次；体外碎石手术定额包干结算标准为1200元/人次。\n          （三）参保人员做上述“日间手术”的，在职人员自负包干费用标准的15%，退休人员自负包干费用标准的10%，不再计算住院起付标准费用以及基本医疗保险药品目录、诊疗项目目录中规定的政策自负费用（医疗服务设施支付标准规定的自负费用除外）。实行医疗补助的国家公务员按相关规定执行。\n          （四）参保人员在住院治疗过程中发现合并其他疾病需要同时治疗或原发疾病病情加重的，可以改为按普通病种方式结算。\n          （五）参保人员患上述疾病住院治疗发生的医疗费用列入该参保人员本医疗保险结算年度住院医疗费用累计计算范围，不纳入该院年度人次费用考核指标。\n          四、就医管理\n          （一）各定点医疗机构必须严格按照各“日间手术”临床路径（见附件）为患者提供医疗服务。\n          （二）各定点医疗机构依据自身条件制定就医流程、“日间手术”管理制度，确保医疗安全。\n          （三）具备开展“日间手术”条件的三级医疗机构将相关申报资料报医疗监管科，经评审同意后实施。\n        "}}},methods:{resetForm:function(){this.$emit("closeAll",!1)},closeDialog:function(){this.$emit("closeAll",!1)},isShow:function(t){this.$emit("closeAll",!1)}}},i=n,x=(l("805e"),l("4023")),r=Object(x["a"])(i,o,a,!1,null,"f11e3488",null);e["default"]=r.exports},"78ac":function(t,e,l){},"805e":function(t,e,l){"use strict";var o=l("78ac"),a=l.n(o);a.a}}]);