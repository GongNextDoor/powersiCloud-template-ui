(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3992d64e","chunk-12036246","chunk-fca9f7ec","chunk-e55ee866","chunk-2d0dd84f"],{"0488":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["third-index","item"+e.searchNumber]},[a("section",{staticClass:"layer layer-query"},[a("div",{staticClass:"box"},[a("div",{staticClass:"box-body"},[e._t("search-header")],2)])]),e._v(" "),a("section",{staticClass:"layer layer-result"},[a("div",{staticClass:"box"},[e._t("talbe-title",[a("box-title",e._b({},"box-title",this.$attrs,!1),[e._t("title-btns")],2)]),e._v(" "),a("div",{staticClass:"box-body"},[e._t("default")],2)],2)]),e._v(" "),e._t("other")],2)},o=[],r=(a("163d"),a("deae")),s={components:{BoxTitle:r["default"]},props:{searchNumber:{type:Number,default:2}}},i=s,n=a("4023"),c=Object(n["a"])(i,l,o,!1,null,null,null);t["default"]=c.exports},"11d3":function(e,t,a){},"17f2":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",e._g(e._b({ref:"elForm",attrs:{"label-width":e.labelWidth}},"el-form",this.$attrs,!1),e.$listeners),[a("el-row",{attrs:{gutter:12}},[e._l(e.itemsDatas,(function(t){return a("el-col",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!item.hidden"}],key:t.label,attrs:{md:t.md||e.md,lg:t.lg||e.lg,xl:t.xl||e.xl,span:t.span||e.span}},[a("el-form-item",{attrs:{label:t.label,prop:t.prop}},["input"===t.type?[a("el-input",{attrs:{disabled:t.disabled,clearable:"",placeholder:t.placeholder||"请输入"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:e._e(),e._v(" "),"number"===t.type?[a("el-input",{attrs:{disabled:t.disabled,clearable:"",placeholder:t.placeholder||"请输入"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,e._n(a))},expression:"formDatas[item.prop]"}})]:e._e(),e._v(" "),"textarea"===t.type?[a("el-input",{attrs:{disabled:t.disabled,autosize:t.autosize||!1,type:"textarea",placeholder:"请输入"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"select"===t.type?[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:t.disabled,placeholder:"请选择",filterable:t.filterable},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}},[a("el-option",{attrs:{label:"选项1",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"选项2",value:"1"}})],1)]:"radio"===t.type?[a("el-radio-group",{model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}},e._l(t.options,(function(t){return a("el-radio",{key:t.label,attrs:{label:t.label}},[e._v(e._s(t.name))])})),1)]:"cascader"===t.type?[a("el-cascader",{staticStyle:{width:"100%",height:"100%"},attrs:{props:{checkStrictly:!0},options:t.options,clearable:""},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"date"===t.type?[a("el-date-picker",{staticStyle:{width:"100%",height:"100%"},attrs:{disabled:t.disabled,type:"date",placeholder:"选择日期"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"dateMoon"===t.type?[a("el-date-picker",{staticStyle:{width:"100%",height:"100%"},attrs:{disabled:t.disabled,type:"month",placeholder:"选择月份"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"dateRange"===t.type?[a("el-date-picker",{staticStyle:{width:"100%",height:"100%"},attrs:{disabled:t.disabled,type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"dateTime"===t.type?[a("el-date-picker",{staticStyle:{width:"100%",height:"100%"},attrs:{disabled:t.disabled,type:"datetime",placeholder:"选择日期时间"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"dateTimeRange"===t.type?[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{disabled:t.disabled,type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.formDatas[t.prop],callback:function(a){e.$set(e.formDatas,t.prop,a)},expression:"formDatas[item.prop]"}})]:"file"==t.type?[a("el-button",{attrs:{type:"primary"}},[e._v("上传")])]:"custom"==t.type?[e._t(t.prop,null,{item:t,propData:e.formDatas[t.prop]})]:e._e()],2)],1)})),e._v(" "),a("el-col",{class:e.handleBtnPosition,attrs:{md:12,lg:8,xl:6}},[e._t("default")],2)],2)],1)},o=[],r={props:{isGrid:{type:Boolean,default:!0},labelWidth:{type:String,default:"105px"},itemsDatas:{type:Array,default:function(){return[]}},formDatas:{type:Object,default:function(){}}},data:function(){return{elForm:null}},computed:{md:function(){return this.isGrid?12:{}},lg:function(){return this.isGrid?8:{}},xl:function(){return this.isGrid?6:{}},span:function(){return this.isGrid?null:8},handleBtnPosition:function(){var e=this.itemsDatas.length;return e<=7?"":e%2===0&&e%3===0&&e%4===0?"handle-row-handle-right":"handle-right"}},mounted:function(){this.elForm=this.$refs.elForm}},s=r,i=(a("7556"),a("4023")),n=Object(i["a"])(s,l,o,!1,null,"1bbb3913",null);t["default"]=n.exports},"360b":function(e,t,a){},7556:function(e,t,a){"use strict";var l=a("360b"),o=a.n(l);o.a},8276:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form-dialog",{attrs:{title:e.dialogTitle,"is-show":e.isDialogVisible,"new-class":"middle"},on:{"update:isShow":e.isShow,resetForm:e.resetForm}},[a("div",{staticClass:"box-position"},[a("div",{staticClass:"box-body"},[a("my-table-view",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.tableData,columns:e.columns}}),e._v(" "),a("Pagination")],1)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeDialog}},[e._v("关闭")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.exportEvent}},[e._v("导出")])],1)])},o=[],r={components:{},model:{prop:"isDialogVisible",event:"closeAll"},props:{isDialogVisible:{type:Boolean,default:!1},dialogTitle:{type:String,default:"标题"}},data:function(){return{loading:!1,columns:[{type:"index",label:"序号",width:"55px"},{prop:"code",label:"账号",align:"center"},{prop:"code",label:"用户名",align:"center"},{prop:"code",label:"上线时间",align:"center"},{prop:"code",label:"下线时间",align:"center"},{prop:"code",label:"IP地址",align:"center"},{prop:"code",label:"登录时长",align:"center"}],tableData:[{code:"xxx"},{code:"xxx"},{code:"xxx"}]}},methods:{resetForm:function(){this.$emit("closeAll",!1)},closeDialog:function(){this.$emit("closeAll",!1)},isShow:function(e){this.$emit("closeAll",!1)},exportEvent:function(){this.$message({type:"success",message:"导出成功!"})}}},s=r,i=a("4023"),n=Object(i["a"])(s,l,o,!1,null,"d563932c",null);t["default"]=n.exports},af15:function(e,t,a){"use strict";var l=a("11d3"),o=a.n(l);o.a},dd8e:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("normal-layer",{attrs:{"search-number":e.itemsDatas.length,"title-name":"岗位上线记录列表","title-need-handle":""}},[a("template",{slot:"search-header"},[a("form-items",{ref:"queryForm",attrs:{model:e.queryForm,rules:e.rules,"items-datas":e.itemsDatas,"form-datas":e.queryForm}},[a("el-button",{on:{click:e.reset}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")])],1)],1),e._v(" "),a("template",{slot:"title-btns"},[a("el-button",{attrs:{type:"primary"},on:{click:e.exportEvent}},[e._v("导出")])],1),e._v(" "),a("my-table-view",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.tableData,columns:e.columns},scopedSlots:e._u([{key:"operation",fn:function(t){return[a("el-button",{staticClass:"modify",attrs:{type:"text"},on:{click:function(a){return e.detailsClick(t.row)}}},[e._v("详情")])]}}])}),e._v(" "),a("Pagination"),e._v(" "),a("detail-dialog",{attrs:{"dialog-title":"登录时长详情"},model:{value:e.showDetailDialog,callback:function(t){e.showDetailDialog=t},expression:"showDetailDialog"}})],2)},o=[],r=(a("6d57"),a("0488")),s=a("17f2"),i=a("fe9f"),n=[{type:"index",label:"序号",width:"55px"},{prop:"code",label:"账号",align:"center"},{prop:"nameCode",label:"用户名",align:"center"},{prop:"nameCode",label:"所属部门",align:"center"},{prop:"nameCode",label:"岗位",align:"center"},{prop:"nameCode",label:"在线时长",align:"center"},{type:"operation",label:"操作",width:"100px"}],c=a("8276"),p={components:{NormalLayer:r["default"],FormItems:s["default"],DetailDialog:c["default"]},mixins:[i["a"]],data:function(){return{loading:!1,adress_options:[],itemsDatas:[{label:"账号",prop:"xxx",type:"input"},{label:"用户名",prop:"xxx",type:"input"},{label:"所属部门",prop:"xxx",type:"select",filterable:!0},{label:"日期",prop:"dateRange",type:"dateRange"},{label:"医保区划",prop:"address",type:"cascader",options:this.adress_options},{label:"岗位",prop:"xxx",type:"select"}],queryForm:{xxx:"",dateRange:[]},rules:{dateRange:[{required:!0,message:"请选择",trigger:"change"}]},columns:n,tableData:[{name:"白兰花",code:"YUUDSWXX",nameCode:"IN12332"}],showDetailDialog:!1}},mounted:function(){var e=this;this.itemsDatas.forEach((function(t){"address"===t.prop&&e.$set(t,"options",[{value:"zhinan1",label:"长沙市",children:[{value:"zhinan2",label:"岳麓区"}]}])}))},methods:{search:function(){this.$refs.queryForm.elForm.validate((function(e){e&&console.log("查询")}))},exportEvent:function(){this.$message({type:"success",message:"导出成功!"})},detailsClick:function(){this.showDetailDialog=!0}}},d=p,u=a("4023"),m=Object(u["a"])(d,l,o,!1,null,"2b4c8f62",null);t["default"]=m.exports},deae:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.titleName.length>0?a("div",{class:["box-header",e.titleNeedHandle?"handle":""]},[a("span",{staticClass:"box-title"},[e._v(e._s(e.titleName))]),e._v(" "),e.titleNeedHandle?a("div",{staticClass:"box-tools"},[e._t("default")],2):e._e()]):e._e()},o=[],r=(a("163d"),{props:{titleName:{type:[Number,String],default:""},titleNeedHandle:{type:Boolean,default:!1}}}),s=r,i=(a("af15"),a("4023")),n=Object(i["a"])(s,l,o,!1,null,"96b5feec",null);t["default"]=n.exports},fe9f:function(e,t,a){"use strict";a("c0c3");t["a"]={data:function(){return{queryForm:{},pageTotal:0,currentPage:0,pageSize:15}},created:function(){},methods:{reset:function(){for(var e in this.queryForm)"string"===typeof this.queryForm[e]?this.$set(this.queryForm,e,""):this.queryForm[e].constructor===Array?this.$set(this.queryForm,e,[]):this.queryForm[e].constructor===Object?this.$set(this.queryForm,e,{}):this.$set(this.queryForm,e,null)},search:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1}),2e3)},pageChange:function(){this.currentPage=0,this.search()},deleteClick:function(e){var t=this;this.$msgConfirm("确认删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteEvent(e)})).catch((function(){}))}}}}}]);