(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e65c8e92","chunk-fca9f7ec"],{"11d3":function(t,e,a){},"2d40":function(t,e,a){"use strict";var l=a("6efe"),s=a.n(l);s.a},"6efe":function(t,e,a){},af15:function(t,e,a){"use strict";var l=a("11d3"),s=a.n(l);s.a},deae:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.titleName.length>0?a("div",{class:["box-header",t.titleNeedHandle?"handle":""]},[a("span",{staticClass:"box-title"},[t._v(t._s(t.titleName))]),t._v(" "),t.titleNeedHandle?a("div",{staticClass:"box-tools"},[t._t("default")],2):t._e()]):t._e()},s=[],i=(a("163d"),{props:{titleName:{type:[Number,String],default:""},titleNeedHandle:{type:Boolean,default:!1}}}),o=i,n=(a("af15"),a("4023")),c=Object(n["a"])(o,l,s,!1,null,"96b5feec",null);e["default"]=c.exports},e822:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form-dialog",{attrs:{title:t.dialogTitle,"is-show":t.isDialogVisible,"new-class":"middle"},on:{"update:isShow":t.isShow,resetForm:t.resetForm}},[a("table-items",{attrs:{"item-datas":t.itemsDatas1,"form-datas":t.formsDatas1}}),t._v(" "),a("div",{staticClass:"box",staticStyle:{margin:"0 -10px",height:"auto"}},[a("box-title",{attrs:{"title-name":"选项维护"}}),t._v(" "),a("my-table-view",{attrs:{data:t.tableData,columns:t.columns,height:""},scopedSlots:t._u([{key:"isSure",fn:function(e){return[a("el-radio",{attrs:{label:"1",disabled:""},model:{value:e.row.isSure,callback:function(a){t.$set(e.row,"isSure",a)},expression:"scope.row.isSure"}},[t._v(t._s(""))])]}}])}),t._v(" "),a("Pagination")],1),t._v(" "),a("div",{staticClass:"box",staticStyle:{margin:"0 -10px",height:"auto"}},[a("box-title",{attrs:{"title-name":"错误场次与医院"}}),t._v(" "),a("my-table-view",{attrs:{data:t.tableData1,columns:t.columns1,height:""}}),t._v(" "),a("Pagination")],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.closeDialog}},[t._v("关闭")])],1)],1)},s=[],i=a("66fc"),o=a("deae"),n={components:{TableItems:i["default"],BoxTitle:o["default"]},model:{prop:"isDialogVisible",event:"closeAll"},props:{isDialogVisible:{type:Boolean,default:!1},dialogTitle:{type:String,default:"标题"}},data:function(){return{itemsDatas1:[[{label:"题目内容",prop:"xxx",colspan:5}]],formsDatas1:{xxx:"以下关于TokenBus局域网特点的描述中,哪个是错误的?"},columns:[{type:"index",label:"序号",width:"80px"},{prop:"content",label:"内容"},{prop:"isSure",type:"custom",slotName:"isSure",label:"是否正确",width:"100px"}],tableData:[{content:"令牌是一种特殊结构的帧,用来控制结点对总线的访问权",isSure:"0"},{content:"令牌总线必须周期性地为新结点加入环提供机会",isSure:"1"}],columns1:[{type:"index",label:"序号",width:"80px"},{prop:"kscc",label:"考试场次"},{prop:"yljgmc",label:"医疗机构名称"},{prop:"xwxx",label:"错误选项"}],tableData1:[{kscc:"新型冠状病毒的了解与考核",yljgmc:"XX市第一人民医院",xwxx:"令牌是一种特殊结构的帧,用来控制结点对总线的访问权"},{kscc:"新型冠状病毒的了解与考核",yljgmc:"XX市中医医院",xwxx:"令牌总线不需要进行环维护"}]}},methods:{resetForm:function(){this.$emit("closeAll",!1)},closeDialog:function(){this.$emit("closeAll",!1)},isShow:function(t){this.$emit("closeAll",!1)}}},c=n,r=(a("2d40"),a("4023")),u=Object(r["a"])(c,l,s,!1,null,"8041681a",null);e["default"]=u.exports}}]);