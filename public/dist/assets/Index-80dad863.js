import{i as a}from"./main-ce25b28f.js";import{i as e}from"./ipcRenderer-5e19eaee.js";import{_ as s,r as t,o as n,b as c,g as l,a as o,w as d,e as i,F as r,d as f,p,f as u,c as b,t as k}from"./index-265ac112.js";const m={data:()=>({data:[]}),methods:{getScreen(s){e.invoke(a.getScreen,s).then((a=>{this.data=a}))}}},v=a=>(p("data-v-5c2facb0"),a=a(),u(),a),_={id:"app-base-screen"},g=v((()=>l("div",{class:"one-block-1"},[l("span",null," 1. 屏幕信息 ")],-1))),S={class:"one-block-2"},h=v((()=>l("div",{class:"one-block-1"},[l("span",null," 结果： ")],-1))),j={class:"one-block-2"};const C=s(m,[["render",function(a,e,s,p,u,m){const v=t("a-button"),C=t("a-space"),w=t("a-descriptions-item"),x=t("a-descriptions");return n(),c("div",_,[g,l("div",S,[o(C,null,{default:d((()=>[o(v,{onClick:e[0]||(e[0]=a=>m.getScreen(0))},{default:d((()=>[i("获取当前鼠标位置")])),_:1}),o(v,{onClick:e[1]||(e[1]=a=>m.getScreen(1))},{default:d((()=>[i("获取主屏幕")])),_:1}),o(v,{onClick:e[2]||(e[2]=a=>m.getScreen(2))},{default:d((()=>[i("获取所有屏幕")])),_:1})])),_:1})]),h,l("div",j,[o(x,{title:""},{default:d((()=>[(n(!0),c(r,null,f(u.data,((a,e)=>(n(),b(w,{key:e,label:a.title},{default:d((()=>[i(k(a.desc),1)])),_:2},1032,["label"])))),128))])),_:1})])])}],["__scopeId","data-v-5c2facb0"]]);export{C as default};