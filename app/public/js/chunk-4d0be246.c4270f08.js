(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d0be246"],{1704:function(e,t,o){"use strict";o("aefe")},a358:function(e,t,o){"use strict";o.d(t,"b",(function(){return c})),o.d(t,"a",(function(){return l})),o.d(t,"c",(function(){return r}));var n=o("b775"),a={uploadFile:"/api/example/uploadFile",openSoftware:"/api/example/openSoftware",messageShow:"/api/example/messageShow",messageShowConfirm:"/api/example/messageShowConfirm",dbOperation:"/api/example/dbOperation",test1:"/api/example/test1"},l={messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",socketMessageStart:"controller.example.socketMessageStart",socketMessageStop:"controller.example.socketMessageStop",hello:"controller.example.hello",executeJS:"controller.example.executeJS",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp"},r={appUpdater:"app.updater"},c=function(e,t){return Object(n["b"])({url:a[e],method:"post",data:t})}},ae87:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app-base-window-view"}},[e._m(0),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:function(t){return e.loadViewContent(0)}}},[e._v("加载百度页面")]),o("a-button",{on:{click:function(t){return e.removeViewContent(0)}}},[e._v("移除百度页面")])],1)],1),e._m(1),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:function(t){return e.loadViewContent(1)}}},[e._v("加载html页面")]),o("a-button",{on:{click:function(t){return e.removeViewContent(1)}}},[e._v("移除html页面")])],1)],1)])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 1. 嵌入web内容 ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 2. 嵌入html内容 ")])])}],l=o("a358"),r={data:function(){return{views:[{type:"web",content:"https://www.baidu.com/"},{type:"html",content:"/public/html/view_example.html"}]}},methods:{loadViewContent:function(e){var t=this;t.$ipcCall(l["a"].loadViewContent,this.views[e]).then((function(e){console.log(e)}))},removeViewContent:function(e){var t=this;t.$ipcCall(l["a"].removeViewContent,t.views[e]).then((function(e){console.log(e)}))}}},c=r,i=(o("1704"),o("2877")),s=Object(i["a"])(c,n,a,!1,null,"5946c2ed",null);t["default"]=s.exports},aefe:function(e,t,o){}}]);
//# sourceMappingURL=chunk-4d0be246.c4270f08.js.map