(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{164:function(t,e,i){t.exports=i.p+"img/b6a2bb5.png"},165:function(t,e,i){"use strict";i.r(e);i(94),i(95),i(24);var o={data:function(){return{image:i(164),topstories:[],githubstories:[]}},mounted:function(){var t=this;this.$axios.$get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then(function(e){t.topstories=e,t.topstories.forEach(function(e){t.$axios.$get("https://hacker-news.firebaseio.com/v0/item/".concat(e,".json?print=pretty")).then(function(e){e.url&&e.url.includes("github")&&t.githubstories.push(e)})})}).catch(function(t){console.log(t)})}},n=i(21),r=Object(n.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[i("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[i("v-card",[i("v-container",{attrs:{fluid:"","grid-list-md":""}},[i("v-layout",{attrs:{row:"",wrap:""}},t._l(t.githubstories,function(e){return i("v-flex",t._b({key:e.title},"v-flex",((o={}).xs4=!0,o),!1),[i("v-card",{attrs:{color:"black"}},[i("v-img",{attrs:{src:t.image,height:"200px"}},[i("v-container",{attrs:{"fill-height":"",fluid:"","pa-2":""}},[i("v-layout",{attrs:{"fill-height":""}},[i("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[i("a",{attrs:{href:e.url,target:"_blank"}},[i("span",{staticClass:"headline white--text",domProps:{textContent:t._s(e.title)}})])])],1)],1)],1),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{icon:"",color:"white"}},[i("v-icon",[t._v("favorite")])],1),t._v(" "),i("v-btn",{attrs:{icon:"",color:"white"}},[i("v-icon",[t._v("bookmark")])],1),t._v(" "),i("v-btn",{attrs:{icon:"",color:"white"}},[i("v-icon",[t._v("share")])],1)],1)],1)],1);var o}),1)],1)],1)],1)],1)},[],!1,null,null,null);r.options.__file="index.vue";e.default=r.exports}}]);