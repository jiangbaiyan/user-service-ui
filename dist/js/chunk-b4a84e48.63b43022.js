(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4a84e48"],{2142:function(t,e,a){},f695:function(t,e,a){"use strict";var n=a("2142"),l=a.n(n);l.a},fb02:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",[a("Header")],1),a("el-main",[a("Modify",{attrs:{form:t.row,dialogVisible:t.dialogVisible,resource:t.resource},on:{"reset-dialog":t.handleResetDialog,"on-submit":t.handleOnSubmit}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"id",width:"180"}}),a("el-table-column",{attrs:{prop:"cur_key",label:"节点名称",width:"180"}}),a("el-table-column",{attrs:{prop:"full_key",label:"完整节点",width:"180"}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"修改时间"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.handleModify(e.row)}}},[t._v("修改")]),a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:t.total,"page-size":t.length},on:{"current-change":t.pageChange}})],1),a("el-footer",[a("Footer")],1)],1)},l=[],o=(a("d3b7"),a("96cf"),a("0418")),r=a("fd2d"),i=a("51be"),s=i["a"].commonParams,u={name:"List",components:{Header:o["a"],Footer:r["a"]},data:function(){return{page:1,length:10,total:0,tableData:"",name:"",dialogVisible:!1,row:""}},methods:{query:function(){var t,e,a=arguments;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e=a.length>1&&void 0!==a[1]?a[1]:10,this.page=t,this.length=e,Object.assign(s,{page:t,length:e}),n.next=7,regeneratorRuntime.awrap(this.getUser());case 7:case"end":return n.stop()}}),null,this)},getUser:function(){var t=this;this.$axios.post("/v1/resource/query",s).then((function(e){t.tableData=e.data.data.data,t.total=e.data.data.total}))},pageChange:function(t){this.query(t)},handleModify:function(t){this.dialogVisible=!0,this.row=t},handleDelete:function(){},handleResetDialog:function(){this.dialogVisible=!1},handleOnSubmit:function(){this.initSelect(),this.query()}},mounted:function(){this.query()}},c=u,d=(a("f695"),a("2877")),h=Object(d["a"])(c,n,l,!1,null,"3139b014",null);e["default"]=h.exports}}]);