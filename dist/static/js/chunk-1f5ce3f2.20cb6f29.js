(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f5ce3f2","chunk-12036246","chunk-0cf1d074","chunk-fca9f7ec","chunk-e55ee866"],{"0488":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["third-index","item"+t.searchNumber]},[a("section",{staticClass:"layer layer-query"},[a("div",{staticClass:"box"},[a("div",{staticClass:"box-body"},[t._t("search-header")],2)])]),t._v(" "),a("section",{staticClass:"layer layer-result"},[a("div",{staticClass:"box"},[t._t("talbe-title",[a("box-title",t._b({},"box-title",this.$attrs,!1),[t._t("title-btns")],2)]),t._v(" "),a("div",{staticClass:"box-body"},[t._t("default")],2)],2)]),t._v(" "),t._t("other")],2)},o=[],s=(a("163d"),a("deae")),r={components:{BoxTitle:s["default"]},props:{searchNumber:{type:Number,default:2}}},i=r,n=a("4023"),c=Object(n["a"])(i,l,o,!1,null,null,null);e["default"]=c.exports},"11d3":function(t,e,a){},"17f2":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",t._g(t._b({ref:"elForm",attrs:{"label-width":t.labelWidth}},"el-form",this.$attrs,!1),t.$listeners),[a("el-row",{attrs:{gutter:12}},[t._l(t.itemsDatas,(function(e){return a("el-col",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!item.hidden"}],key:e.label,attrs:{md:e.md||t.md,lg:e.lg||t.lg,xl:e.xl||t.xl,span:e.span||t.span}},[a("el-form-item",{attrs:{label:e.label,prop:e.prop}},["input"===e.type?[a("el-input",{attrs:{disabled:e.disabled,clearable:"",placeholder:e.placeholder||"请输入"},model:{value:t.formDatas[e.prop],callback:function(a){t.$set(t.formDatas,e.prop,a)},expression:"formDatas[item.prop]"}})]:t._e(),t._v(" "),"number"===e.type?[a("el-input",{attrs:{disabled:e.disabled,clearable:"",placeholder:e.placeholder||"请输入"},model:{value:t.formDatas[e.prop],callback:function(a){t.$set(t.formDatas,e.prop,t._n(a))},expression:"formDatas[item.prop]"}})]:t._e(),t._v(" "),"textarea"===e.type?[a("el-input",{attrs:{disabled:e.disabled,autosize:e.autosize||!1,type:"textarea",placeholder:"请输入"},model:{value:t.formDatas[e.prop],callback:function(a){t.$set(t.formDatas,e.prop,a)},expression:"formDatas[item.prop]"}})]:"select"===e.type?[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:e.disabled,placeholder:"请选择",filterable:e.filterable},model:{value:t.formDatas[e.prop],callback:function(a){t.$set(t.formDatas,e.prop,a)},expression:"formDatas[item.prop]"}},[a("el-option",{attrs:{label:"选项1",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"选项2",value:"1"}})],1)]:"radio"===e.type?[a("el-radio-group",{model:{value:t.formDatas[e.prop],callback:function(a){t.$set(t.formDatas,e.prop,a)},expression:"formDatas[item.prop]"}},t._l(e.options,(function(e){return a("el-radio",{key:e.label,attrs:{label:e.label}},[t._v(t._s(e.name))])})),1)]:"cascader"===e.type?[a("el-cascader",{staticStyle:{width:"100%",height:"100%"},attrs:{props:{checkStrictly:!0},options:e.options,clearable:""},model:{value:t.formDatas[e.prop],callback:function(a){t.$set(t.formDatas,e.prop,a)},expression:"formDatas[item.prop]"}})]:"date"===e.type?[a("el-date-picker",{staticStyle:{width:"100%",height:"100%"},attrs:{disabled:e.disabled,type:"date",placeholder:"选择日期"},model:{value:t.formDatas[e.prop],callback:function(a){t.$set(t.formDatas,e.prop,a)},expression:"formDatas[item.prop]"}})]:"dateMoon"===e.type?[a("el-date-picker",{staticStyle:{width:"100%",height:"100%"},attrs:{disabled:e.disabled,type:"month",placeholder:"选择月份"},model:{value:t.formDatas[e.prop],callback:function(a){t.$set(t.formDatas,e.prop,a)},expression:"formDatas[item.prop]"}})]:"dateRange"===e.type?[a("el-date-picker",{staticStyle:{width:"100%",height:"100%"},attrs:{disabled:e.disabled,type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.formDatas[e.prop],callback:function(a){t.$set(t.formDatas,e.prop,a)},expression:"formDatas[item.prop]"}})]:"dateTime"===e.type?[a("el-date-picker",{staticStyle:{width:"100%",height:"100%"},attrs:{disabled:e.disabled,type:"datetime",placeholder:"选择日期时间"},model:{value:t.formDatas[e.prop],callback:function(a){t.$set(t.formDatas,e.prop,a)},expression:"formDatas[item.prop]"}})]:"dateTimeRange"===e.type?[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{disabled:e.disabled,type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.formDatas[e.prop],callback:function(a){t.$set(t.formDatas,e.prop,a)},expression:"formDatas[item.prop]"}})]:"file"==e.type?[a("el-button",{attrs:{type:"primary"}},[t._v("上传")])]:"custom"==e.type?[t._t(e.prop,null,{item:e,propData:t.formDatas[e.prop]})]:t._e()],2)],1)})),t._v(" "),a("el-col",{class:t.handleBtnPosition,attrs:{md:12,lg:8,xl:6}},[t._t("default")],2)],2)],1)},o=[],s={props:{isGrid:{type:Boolean,default:!0},labelWidth:{type:String,default:"105px"},itemsDatas:{type:Array,default:function(){return[]}},formDatas:{type:Object,default:function(){}}},data:function(){return{elForm:null}},computed:{md:function(){return this.isGrid?12:{}},lg:function(){return this.isGrid?8:{}},xl:function(){return this.isGrid?6:{}},span:function(){return this.isGrid?null:8},handleBtnPosition:function(){var t=this.itemsDatas.length;return t<=7?"":t%2===0&&t%3===0&&t%4===0?"handle-row-handle-right":"handle-right"}},mounted:function(){this.elForm=this.$refs.elForm}},r=s,i=(a("7556"),a("4023")),n=Object(i["a"])(r,l,o,!1,null,"1bbb3913",null);e["default"]=n.exports},"1d98":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form-dialog",{staticClass:"audit-dialog",attrs:{title:t.dialogTitle,"is-show":t.isDialogVisible,"new-class":"middle"},on:{"update:isShow":t.isShow,resetForm:t.resetForm}},[a("div",{staticClass:"box"},[a("table-items",{attrs:{"item-datas":t.itemsDatas,"form-datas":t.formsDatas}},[a("template",{slot:"mainContent"},[a("el-input",{staticStyle:{border:"none"},attrs:{autosize:"",readonly:"",resize:"none",type:"textarea"},model:{value:t.formsDatas.xxx1,callback:function(e){t.$set(t.formsDatas,"xxx1",e)},expression:"formsDatas.xxx1"}})],1),t._v(" "),a("template",{slot:"files"},[a("a",{staticClass:"link",attrs:{href:"#",title:"xxx.doc"}},[t._v("xxx.doc")])])],2)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.closeDialog}},[t._v("关闭")])],1)])},o=[],s=a("66fc"),r={components:{TableItems:s["default"]},model:{prop:"isDialogVisible",event:"closeAll"},props:{isDialogVisible:{type:Boolean,default:!1},dialogTitle:{type:String,default:"标题"}},data:function(){return{itemsDatas:[[{label:"接收对象",prop:"xxx",colspan:5}],[{label:"标题",prop:"xxx",colspan:5}],[{label:"内容主体",prop:"xxx1",slot:"mainContent",colspan:5}],[{label:"备注",prop:"xxx",colspan:5}],[{label:"上传文件",prop:"xxx",slot:"files",colspan:5}]],formsDatas:{xxx:"xxx",xxx1:"关于开展泌尿系“日间手术”病种按单病种\n          包干结算试点工作的通知\n          各三级定点医疗机构：\n          为进一步降低参保人员医疗费用负担，经我局研究，并报上级部门同意，决定在三级定点医疗机构开展泌尿系“日间手术”病种按单病种包干结算试点工作。现将具体事项通知如下：\n          一、适用对象长沙市市本级职工基本医疗保险参保人员。\n          二、日间手术病种\n          （一）经输尿管镜输尿管支架取出术。\n          （二）包皮环切术。\n          （三）体外碎石手术。\n          三、结算办法\n          （一）结算原则：严格按照“病种控制、包干结算、节余留院、超标不补”的原则进行住院医疗费用结算。\n          （二）结算标准：经输尿管镜输尿管支架取出术定额包干结算标准为1200元/人次；包皮环切术定额包干结算标准为1800元/人次；体外碎石手术定额包干结算标准为1200元/人次。\n          （三）参保人员做上述“日间手术”的，在职人员自负包干费用标准的15%，退休人员自负包干费用标准的10%，不再计算住院起付标准费用以及基本医疗保险药品目录、诊疗项目目录中规定的政策自负费用（医疗服务设施支付标准规定的自负费用除外）。实行医疗补助的国家公务员按相关规定执行。\n          （四）参保人员在住院治疗过程中发现合并其他疾病需要同时治疗或原发疾病病情加重的，可以改为按普通病种方式结算。\n          （五）参保人员患上述疾病住院治疗发生的医疗费用列入该参保人员本医疗保险结算年度住院医疗费用累计计算范围，不纳入该院年度人次费用考核指标。\n          四、就医管理\n          （一）各定点医疗机构必须严格按照各“日间手术”临床路径（见附件）为患者提供医疗服务。\n          （二）各定点医疗机构依据自身条件制定就医流程、“日间手术”管理制度，确保医疗安全。\n          （三）具备开展“日间手术”条件的三级医疗机构将相关申报资料报医疗监管科，经评审同意后实施。\n        "}}},methods:{resetForm:function(){this.$emit("closeAll",!1)},closeDialog:function(){this.$emit("closeAll",!1)},isShow:function(t){this.$emit("closeAll",!1)}}},i=r,n=(a("7360"),a("4023")),c=Object(n["a"])(i,l,o,!1,null,"b83be1ec",null);e["default"]=c.exports},"360b":function(t,e,a){},5659:function(t,e,a){},7360:function(t,e,a){"use strict";var l=a("5659"),o=a.n(l);o.a},"745c":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("normal-layer",{attrs:{"search-number":t.itemsDatas.length,"title-name":"值班通知查询列表"}},[a("template",{slot:"search-header"},[a("form-items",{attrs:{"items-datas":t.itemsDatas,"form-datas":t.queryForm}},[a("el-button",{on:{click:t.reset}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)],1),t._v(" "),a("my-table-view",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.tableData,columns:t.columns},scopedSlots:t._u([{key:"operation",fn:function(e){return[a("el-button",{staticClass:"modify",attrs:{type:"text"},on:{click:function(a){return t.detailsClick(e.row)}}},[t._v("详情")])]}}])}),t._v(" "),a("Pagination"),t._v(" "),a("detail-dialog",{attrs:{"dialog-title":"值班通知详情"},model:{value:t.showDetailDialog,callback:function(e){t.showDetailDialog=e},expression:"showDetailDialog"}})],2)},o=[],s=a("0488"),r=a("17f2"),i=a("fe9f"),n=[{type:"selection"},{type:"index",label:"序号",width:"50px"},{prop:"nameCode",label:"标题",align:"center"},{prop:"nameCode",label:"发布日期",align:"center"},{prop:"code",label:"发布部门",align:"center"},{prop:"nameCode",label:"接收对象",width:"400",align:"center"},{type:"operation",label:"操作",fixed:"right",width:"120px"}],c=a("1d98"),p={components:{NormalLayer:s["default"],FormItems:r["default"],DetailDialog:c["default"]},mixins:[i["a"]],data:function(){return{loading:!1,itemsDatas:[{label:"发布部门",prop:"xxx",type:"input"},{label:"标题",prop:"xxx",type:"input"},{label:"日期",prop:"dateRange",type:"dateRange"}],queryForm:{xxx:"",dateRange:[]},columns:n,tableData:[{name:"白兰花",code:"xxx",nameCode:"xxx"},{name:"白兰花",code:"xxx",nameCode:"xxx"}],showDetailDialog:!1}},methods:{detailsClick:function(t){this.showDetailDialog=!0}}},d=p,u=a("4023"),m=Object(u["a"])(d,l,o,!1,null,"1f015533",null);e["default"]=m.exports},7556:function(t,e,a){"use strict";var l=a("360b"),o=a.n(l);o.a},af15:function(t,e,a){"use strict";var l=a("11d3"),o=a.n(l);o.a},deae:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.titleName.length>0?a("div",{class:["box-header",t.titleNeedHandle?"handle":""]},[a("span",{staticClass:"box-title"},[t._v(t._s(t.titleName))]),t._v(" "),t.titleNeedHandle?a("div",{staticClass:"box-tools"},[t._t("default")],2):t._e()]):t._e()},o=[],s=(a("163d"),{props:{titleName:{type:[Number,String],default:""},titleNeedHandle:{type:Boolean,default:!1}}}),r=s,i=(a("af15"),a("4023")),n=Object(i["a"])(r,l,o,!1,null,"96b5feec",null);e["default"]=n.exports},fe9f:function(t,e,a){"use strict";a("c0c3");e["a"]={data:function(){return{queryForm:{},pageTotal:0,currentPage:0,pageSize:15}},created:function(){},methods:{reset:function(){for(var t in this.queryForm)"string"===typeof this.queryForm[t]?this.$set(this.queryForm,t,""):this.queryForm[t].constructor===Array?this.$set(this.queryForm,t,[]):this.queryForm[t].constructor===Object?this.$set(this.queryForm,t,{}):this.$set(this.queryForm,t,null)},search:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1}),2e3)},pageChange:function(){this.currentPage=0,this.search()},deleteClick:function(t){var e=this;this.$msgConfirm("确认删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.deleteEvent(t)})).catch((function(){}))}}}}}]);