(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bb9fec8"],{"04a5":function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("form-dialog",{attrs:{title:"入院登记","is-show":e.show,width:"1000px"},on:{"update:isShow":e.updateIsShow,resetForm:e.resetForm}},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"105px"}},[l("div",{staticClass:"box"},[l("div",{staticClass:"box-body query"},[l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"证件类型",prop:"type"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-option",{attrs:{label:"aa",value:"bb"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"证件号码",prop:"code"}},[l("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-button",[e._v("重置")]),e._v(" "),l("el-button",{attrs:{type:"primary"}},[e._v("查询")])],1)],1)],1)]),e._v(" "),l("div",{staticClass:"box"},[l("div",{staticClass:"box-header"},[l("span",{staticClass:"box-title"},[e._v("基本信息")])]),e._v(" "),l("div",{staticClass:"box-body result"},[l("el-row",{attrs:{gutter:10,type:"flex"}},[l("el-col",{attrs:{span:6}},[l("label",[e._v("姓名:")]),e._v(" "),l("span",[e._v("某某")])]),e._v(" "),l("el-col",{attrs:{span:4}},[l("label",[e._v("性别:")]),e._v(" "),l("span",[e._v("男")])]),e._v(" "),l("el-col",{attrs:{span:4}},[l("label",[e._v("年龄:")]),e._v(" "),l("span",[e._v("30")])]),e._v(" "),l("el-col",{attrs:{span:4}},[l("label",[e._v("联系电话:")]),e._v(" "),l("span",[e._v("30")])]),e._v(" "),l("el-col",{attrs:{span:6}},[l("label",[e._v("人员状态:")]),e._v(" "),l("span",[e._v("30")])])],1),e._v(" "),l("el-row",{attrs:{gutter:10,type:"flex"}},[l("el-col",{attrs:{span:6}},[l("label",[e._v("身份证号码:")]),e._v(" "),l("span",[e._v(" 298239238293 ")])]),e._v(" "),l("el-col",{attrs:{span:6}},[l("label",[e._v("困难人员类别:")]),e._v(" "),l("span",[e._v("一般")])]),e._v(" "),l("el-col",{attrs:{span:12}},[l("label",[e._v("所属单位:")]),e._v(" "),l("span",[e._v("一般")])])],1)],1)]),e._v(" "),l("div",{staticClass:"box",staticStyle:{"margin-top":"16px"}},[l("div",{staticClass:"box-header"},[l("span",{staticClass:"box-title"},[e._v("住院信息")])]),e._v(" "),l("div",{staticClass:"box-body"},[l("el-row",{attrs:{gutter:10}},[l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"住院号",prop:"no"}},[l("el-input",{attrs:{placeholder:"placeholder"},model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"医保就医号",prop:"type"}},[l("el-input",{attrs:{placeholder:"placeholder"},model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"待遇类别",prop:"type"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-option",{attrs:{label:"aa",value:"bb"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"转院申请",prop:"type"}},[l("el-input",{attrs:{placeholder:"placeholder"},model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"入院诊断",prop:"type"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-option",{attrs:{label:"aa",value:"bb"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"入院科室",prop:"type"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-option",{attrs:{label:"aa",value:"bb"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"入院病区",prop:"type"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-option",{attrs:{label:"aa",value:"bb"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"床位号",prop:"type"}},[l("el-input",{attrs:{placeholder:"placeholder"},model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"手术名称",prop:"type"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-option",{attrs:{label:"aa",value:"bb"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"联系人",prop:"type"}},[l("el-input",{attrs:{placeholder:"placeholder"},model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"联系电话",prop:"type"}},[l("el-input",{attrs:{placeholder:"placeholder"},model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"联系地址",prop:"type"}},[l("el-input",{attrs:{placeholder:"placeholder"},model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"代办人",prop:"type"}},[l("el-input",{attrs:{placeholder:"placeholder"},model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"临床试验",prop:"resource"}},[l("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[l("el-radio",{attrs:{label:0}},[e._v("是")]),e._v(" "),l("el-radio",{attrs:{label:1}},[e._v("否")])],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"病情备注",prop:"no"}},[l("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"其它诊断",prop:"type"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-option",{attrs:{label:"aa",value:"bb"}})],1)],1)],1)],1)],1)])]),e._v(" "),e._t("default"),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("登记")]),e._v(" "),l("el-button",{on:{click:e.close}},[e._v("取消")])],1)],2)},a=[],r={name:"Enter",mixins:[],props:{show:{type:Boolean,default:function(){return!1}}},data:function(){return{form:{date:null,cardNo:null,type:null,code:null,resource:0},select:"1",infoShow:!1,peopleInfo:{name:"张三",sex:"男",age:"58",IDCard:"430682193208080432",identity:"城镇职工",status:"在职",level:"正常",times:"1",unit:"广东省加多宝集团",mobile:"17788996162"}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{updateIsShow:function(e){this.$emit("update:show",e)},resetForm:function(){this.$refs.addForm.resetFields()},readCard:function(){this.infoShow=!0},close:function(){this.$emit("update:show",!1)},confirm:function(){}}},s=r,n=(l("c8ff"),l("4023")),p=Object(n["a"])(s,o,a,!1,null,"3417b40c",null);t["default"]=p.exports},"64ac":function(e,t,l){},c8ff:function(e,t,l){"use strict";var o=l("64ac"),a=l.n(o);a.a}}]);