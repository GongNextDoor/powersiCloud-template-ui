(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7de3b20","chunk-2e1212c5","chunk-12036246","chunk-e0613262","chunk-fca9f7ec","chunk-e55ee866"],{"0488":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["third-index","item"+e.searchNumber]},[a("section",{staticClass:"layer layer-query"},[a("div",{staticClass:"box"},[a("div",{staticClass:"box-body"},[e._t("search-header")],2)])]),e._v(" "),a("section",{staticClass:"layer layer-result"},[a("div",{staticClass:"box"},[e._t("talbe-title",[a("box-title",e._b({},"box-title",this.$attrs,!1),[e._t("title-btns")],2)]),e._v(" "),a("div",{staticClass:"box-body"},[e._t("default")],2)],2)]),e._v(" "),e._t("other")],2)},o=[],s=(a("163d"),a("deae")),i={components:{BoxTitle:s["default"]},props:{searchNumber:{type:Number,default:2}}},r=i,n=a("4023"),c=Object(n["a"])(r,l,o,!1,null,null,null);t["default"]=c.exports},"0be6":function(e,t,a){"use strict";var l=a("437b"),o=a.n(l);o.a},"11d3":function(e,t,a){},"17f2":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",e._g(e._b({ref:"elForm",attrs:{"label-width":e.labelWidth}},"el-form",this.$attrs,!1),e.$listeners),[a("el-row",{attrs:{gutter:12}},[e._l(e.itemsDatas,(function(t){return a("el-col",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!item.hidden"}],key:t.label,attrs:{md:t.md||e.md,lg:t.lg||e.lg,xl:t.xl||e.xl,span:t.span||e.span}},[a("el-form-item",{attrs:{label:t.label,prop:t.prop}},["input"===t.type?[a("el-input",{attrs:{disabled:t.disabled,clearable:"",placeholder:t.placeholder||"请输入"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:e._e(),e._v(" "),"number"===t.type?[a("el-input",{attrs:{disabled:t.disabled,clearable:"",placeholder:t.placeholder||"请输入"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,e._n(a))},expression:"formDatas[item.prop]"}})]:e._e(),e._v(" "),"textarea"===t.type?[a("el-input",{attrs:{disabled:t.disabled,autosize:t.autosize||!1,type:"textarea",placeholder:"请输入"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"select"===t.type?[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:t.disabled,placeholder:"请选择",filterable:t.filterable},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}},[a("el-option",{attrs:{label:"选项1",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"选项2",value:"1"}})],1)]:"radio"===t.type?[a("el-radio-group",{model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}},e._l(t.options,(function(t){return a("el-radio",{key:t.label,attrs:{label:t.label}},[e._v(e._s(t.name))])})),1)]:"cascader"===t.type?[a("el-cascader",{staticStyle:{width:"100%",height:"100%"},attrs:{props:{checkStrictly:!0},options:t.options,clearable:""},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"date"===t.type?[a("el-date-picker",{staticStyle:{width:"100%",height:"100%"},attrs:{disabled:t.disabled,type:"date",placeholder:"选择日期"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"dateMoon"===t.type?[a("el-date-picker",{staticStyle:{width:"100%",height:"100%"},attrs:{disabled:t.disabled,type:"month",placeholder:"选择月份"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"dateRange"===t.type?[a("el-date-picker",{staticStyle:{width:"100%",height:"100%"},attrs:{disabled:t.disabled,type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"dateTime"===t.type?[a("el-date-picker",{staticStyle:{width:"100%",height:"100%"},attrs:{disabled:t.disabled,type:"datetime",placeholder:"选择日期时间"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"dateTimeRange"===t.type?[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{disabled:t.disabled,type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"file"==t.type?[a("el-button",{attrs:{type:"primary"}},[e._v("上传")])]:"custom"==t.type?[e._t(t.prop,null,{item:t,propData:e.formDatas[t.prop]})]:e._e()],2)],1)})),e._v(" "),a("el-col",{class:e.handleBtnPosition,attrs:{md:12,lg:8,xl:6}},[e._t("default")],2)],2)],1)},o=[],s={props:{isGrid:{type:Boolean,default:!0},labelWidth:{type:String,default:"105px"},itemsDatas:{type:Array,default:function(){return[]}},formDatas:{type:Object,default:function(){}}},data:function(){return{elForm:null}},computed:{md:function(){return this.isGrid?12:{}},lg:function(){return this.isGrid?8:{}},xl:function(){return this.isGrid?6:{}},span:function(){return this.isGrid?null:8},handleBtnPosition:function(){var e=this.itemsDatas.length;return e<=7?"":e%2===0&&e%3===0&&e%4===0?"handle-row-handle-right":"handle-right"}},mounted:function(){this.elForm=this.$refs.elForm}},i=s,r=(a("7556"),a("4023")),n=Object(r["a"])(i,l,o,!1,null,"1bbb3913",null);t["default"]=n.exports},"2e45":function(e,t,a){},"360b":function(e,t,a){},"437b":function(e,t,a){},"6a8f":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("normal-layer",{attrs:{"search-number":5,"title-name":"文件信息审核列表","title-need-handle":""}},[a("template",{slot:"search-header"},[a("form-items",{attrs:{"items-datas":e.itemsDatas,"form-datas":e.queryForm}},[a("el-button",{on:{click:e.reset}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")])],1)],1),e._v(" "),a("template",{slot:"title-btns"},[a("el-button",{attrs:{type:"primary"},on:{click:e.batchAuditEvent}},[e._v("批量审核")])],1),e._v(" "),a("my-table-view",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.tableData,columns:e.columns,"multiple-selection":e.multipleSelection},on:{"update:multipleSelection":function(t){e.multipleSelection=t},"update:multiple-selection":function(t){e.multipleSelection=t}},scopedSlots:e._u([{key:"operation",fn:function(t){return[a("el-button",{staticClass:"modify",attrs:{type:"text"},on:{click:function(a){return e.auditClick(t.row)}}},[e._v("审核")]),e._v(" "),a("el-button",{staticClass:"modify",attrs:{type:"text"},on:{click:function(a){return e.detailsClick(t.row)}}},[e._v("详情")])]}}])}),e._v(" "),a("Pagination"),e._v(" "),a("detail-dialog",{attrs:{"dialog-title":"文件详情"},model:{value:e.showDetailDialog,callback:function(t){e.showDetailDialog=t},expression:"showDetailDialog"}}),e._v(" "),a("mulit-audit-dialog",{attrs:{"dialog-title":"文件审核"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}})],2)},o=[],s=a("0488"),i=a("17f2"),r=a("fe9f"),n=[{type:"selection"},{type:"index",label:"序号",width:"55px"},{prop:"code",label:"主题词",align:"center"},{prop:"nameCode",label:"发布级别",align:"center"},{prop:"nameCode",label:"文号",align:"center"},{prop:"code",label:"印发日期",align:"center"},{prop:"nameCode",label:"开始日期",align:"center",expand:!0},{prop:"nameCode",label:"结束日期",align:"center",expand:!0},{prop:"code",label:"内容主体",width:"400",align:"center"},{prop:"nameCode",label:"审核状态",align:"center"},{type:"operation",label:"操作",fixed:"right",width:"100px"}],c=a("bb74"),p=a("82cf"),d={components:{NormalLayer:s["default"],FormItems:i["default"],DetailDialog:c["default"],MulitAuditDialog:p["default"]},mixins:[r["a"]],data:function(){return{loading:!1,multipleSelection:[],itemsDatas:[{label:"发布级别",prop:"xxx",type:"select"},{label:"主题词",prop:"xxx",type:"input"},{label:"文号",prop:"xxx",type:"input"},{label:"审核状态",prop:"xxx",type:"select"},{label:"日期",prop:"dateRange",type:"dateRange"}],queryForm:{xxx:"",dateRange:[]},columns:n,tableData:[{name:"白兰花",code:"xxx",nameCode:"xxx"}],showDetailDialog:!1,showDialog:!1}},methods:{batchAuditEvent:function(){this.multipleSelection.length>0?this.showDialog=!0:this.$msgInfo("请选择")},detailsClick:function(e){this.showDetailDialog=!0},auditClick:function(e){this.showDialog=!0}}},u=d,m=a("4023"),f=Object(m["a"])(u,l,o,!1,null,"26859d2f",null);t["default"]=f.exports},7556:function(e,t,a){"use strict";var l=a("360b"),o=a.n(l);o.a},"82cf":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form-dialog",{staticClass:"audit-dialog-wrapper",attrs:{title:e.dialogTitle,"is-show":e.isDialogVisible,"new-class":"middle",width:"450px"},on:{"update:isShow":e.isShow,resetForm:e.resetForm}},[a("form-items",{ref:"ruleFrom",attrs:{model:e.dataForm,rules:e.rules,"is-grid":!1,"items-datas":e.formItemsDatas,"form-datas":e.dataForm}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeDialog}},[e._v("关闭")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.closeDialog}},[e._v("确认")])],1)],1)},o=[],s=a("17f2"),i={components:{FormItems:s["default"]},model:{prop:"isDialogVisible",event:"closeAll"},props:{isDialogVisible:{type:Boolean,default:!1},dialogTitle:{type:String,default:"标题"}},data:function(){return{formsDatas:{xxx:"xxx"},formItemsDatas:[{label:"审核状态",prop:"xxx",type:"radio",options:[{label:"1",name:"审核通过"},{label:"2",name:"审核不通过"}],span:24},{label:"审核意见",prop:"xxx1",type:"textarea",autosize:{minRows:3},span:24}],dataForm:{xxx:"",xxx1:""},rules:{xxx:[{required:!0,message:"请输入",trigger:"blur"}],xxx1:[{required:!0,message:"请输入",trigger:"blur"}]}}},methods:{resetForm:function(){this.$emit("closeAll",!1),this.$refs.ruleFrom.elForm.resetFields()},closeDialog:function(){this.$emit("closeAll",!1)},isShow:function(e){this.$emit("closeAll",!1)}}},r=i,n=(a("0be6"),a("4023")),c=Object(n["a"])(r,l,o,!1,null,"acfac91c",null);t["default"]=c.exports},af15:function(e,t,a){"use strict";var l=a("11d3"),o=a.n(l);o.a},bb74:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form-dialog",{staticClass:"audit-dialog",attrs:{title:e.dialogTitle,"is-show":e.isDialogVisible,"new-class":"middle"},on:{"update:isShow":e.isShow,resetForm:e.resetForm}},[a("div",{staticClass:"box"},[a("table-items",{attrs:{"item-datas":e.itemsDatas,"form-datas":e.formsDatas}},[a("template",{slot:"mainContent"},[a("el-input",{staticStyle:{border:"none"},attrs:{autosize:"",readonly:"",resize:"none",type:"textarea"},model:{value:e.formsDatas.xxx1,callback:function(t){e.$set(e.formsDatas,"xxx1",t)},expression:"formsDatas.xxx1"}})],1),e._v(" "),a("template",{slot:"files"},[a("a",{staticClass:"link",attrs:{href:"#",title:"xxx.doc"}},[e._v("xxx.doc")])])],2)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeDialog}},[e._v("关闭")])],1)])},o=[],s=a("66fc"),i={components:{TableItems:s["default"]},model:{prop:"isDialogVisible",event:"closeAll"},props:{isDialogVisible:{type:Boolean,default:!1},dialogTitle:{type:String,default:"标题"}},data:function(){return{itemsDatas:[[{label:"发布级别",prop:"xxx"},{label:"文号",prop:"xxx"},{label:"日期",prop:"xxx"}],[{label:"针对地区",prop:"xxx",colspan:5}],[{label:"主题词",prop:"xxx",colspan:3},{label:"印发日期",prop:"xxx",colspan:1}],[{label:"内容主体",prop:"xxx1",slot:"mainContent",colspan:5}],[{label:"备注",prop:"xxx",colspan:5}],[{label:"上传文件",prop:"xxx",slot:"files",colspan:5}]],formsDatas:{xxx:"xxx",xxx1:"关于开展泌尿系“日间手术”病种按单病种\n          包干结算试点工作的通知\n          各三级定点医疗机构：\n          为进一步降低参保人员医疗费用负担，经我局研究，并报上级部门同意，决定在三级定点医疗机构开展泌尿系“日间手术”病种按单病种包干结算试点工作。现将具体事项通知如下：\n          一、适用对象长沙市市本级职工基本医疗保险参保人员。\n          二、日间手术病种\n          （一）经输尿管镜输尿管支架取出术。\n          （二）包皮环切术。\n          （三）体外碎石手术。\n          三、结算办法\n          （一）结算原则：严格按照“病种控制、包干结算、节余留院、超标不补”的原则进行住院医疗费用结算。\n          （二）结算标准：经输尿管镜输尿管支架取出术定额包干结算标准为1200元/人次；包皮环切术定额包干结算标准为1800元/人次；体外碎石手术定额包干结算标准为1200元/人次。\n          （三）参保人员做上述“日间手术”的，在职人员自负包干费用标准的15%，退休人员自负包干费用标准的10%，不再计算住院起付标准费用以及基本医疗保险药品目录、诊疗项目目录中规定的政策自负费用（医疗服务设施支付标准规定的自负费用除外）。实行医疗补助的国家公务员按相关规定执行。\n          （四）参保人员在住院治疗过程中发现合并其他疾病需要同时治疗或原发疾病病情加重的，可以改为按普通病种方式结算。\n          （五）参保人员患上述疾病住院治疗发生的医疗费用列入该参保人员本医疗保险结算年度住院医疗费用累计计算范围，不纳入该院年度人次费用考核指标。\n          四、就医管理\n          （一）各定点医疗机构必须严格按照各“日间手术”临床路径（见附件）为患者提供医疗服务。\n          （二）各定点医疗机构依据自身条件制定就医流程、“日间手术”管理制度，确保医疗安全。\n          （三）具备开展“日间手术”条件的三级医疗机构将相关申报资料报医疗监管科，经评审同意后实施。\n        "}}},methods:{resetForm:function(){this.$emit("closeAll",!1)},closeDialog:function(){this.$emit("closeAll",!1)},isShow:function(e){this.$emit("closeAll",!1)}}},r=i,n=(a("f568"),a("4023")),c=Object(n["a"])(r,l,o,!1,null,"6e47b488",null);t["default"]=c.exports},deae:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.titleName.length>0?a("div",{class:["box-header",e.titleNeedHandle?"handle":""]},[a("span",{staticClass:"box-title"},[e._v(e._s(e.titleName))]),e._v(" "),e.titleNeedHandle?a("div",{staticClass:"box-tools"},[e._t("default")],2):e._e()]):e._e()},o=[],s=(a("163d"),{props:{titleName:{type:[Number,String],default:""},titleNeedHandle:{type:Boolean,default:!1}}}),i=s,r=(a("af15"),a("4023")),n=Object(r["a"])(i,l,o,!1,null,"96b5feec",null);t["default"]=n.exports},f568:function(e,t,a){"use strict";var l=a("2e45"),o=a.n(l);o.a},fe9f:function(e,t,a){"use strict";a("c0c3");t["a"]={data:function(){return{queryForm:{},pageTotal:0,currentPage:0,pageSize:15}},created:function(){},methods:{reset:function(){for(var e in this.queryForm)"string"===typeof this.queryForm[e]?this.$set(this.queryForm,e,""):this.queryForm[e].constructor===Array?this.$set(this.queryForm,e,[]):this.queryForm[e].constructor===Object?this.$set(this.queryForm,e,{}):this.$set(this.queryForm,e,null)},search:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1}),2e3)},pageChange:function(){this.currentPage=0,this.search()},deleteClick:function(e){var t=this;this.$msgConfirm("确认删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteEvent(e)})).catch((function(){}))}}}}}]);