(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0a314a"],{"013f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh lpr lFf"}},[a("q-page-container",[a("q-page",{staticClass:"row flex-center text-white",staticStyle:{background:"url('statics/img/loginbg.jpg')"}},[a("div",{staticClass:"col-4"}),a("div",{staticClass:"col-4 column"},[a("div",{staticClass:"row text-h4 flex-center",staticStyle:{"padding-bottom":"1rem"}},[t._v("博客内容管理系统")]),a("div",{staticClass:"row flex-center",staticStyle:{"padding-top":"1rem"}},[a("q-input",{staticClass:"col-10",staticStyle:{border:"white"},attrs:{dark:"",rounded:"",outlined:"",placeholder:"用户名","input-class":"text-white"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"person"}})]},proxy:!0}]),model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("div",{staticClass:"row flex-center",staticStyle:{"padding-top":"1rem"}},[a("q-input",{staticClass:"col-10",staticStyle:{border:"white"},attrs:{dark:"",rounded:"",outlined:"",type:"password",placeholder:"密码","input-class":"text-white"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"lock"}})]},proxy:!0}]),model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1),a("div",{staticClass:"row flex-center",staticStyle:{"padding-top":"1rem"}},[a("q-btn",{staticClass:"col-10",staticStyle:{height:"3rem","font-size":"1rem"},attrs:{rounded:"",outline:"",color:"white",label:"登 录"},on:{click:t.login}})],1)]),a("div",{staticClass:"col-4"})])],1)],1)},s=[],i=(a("a481"),a("7f7f"),{name:"Login",data:function(){return{name:null,pwd:null}},methods:{login:function(){var t=this;this.Bmob.User.login(this.name,this.pwd).then(function(e){t.$router.replace("/")}).catch(function(e){console.log(e),t.$q.notify({message:"用户名或密码错误",color:"primary",timeout:1e3})})}}}),l=i,o=a("2877"),c=Object(o["a"])(l,n,s,!1,null,"6be50642",null);e["default"]=c.exports}}]);