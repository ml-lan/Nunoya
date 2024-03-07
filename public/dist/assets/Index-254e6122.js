import{i as s}from"./main-ce25b28f.js";import{i as r}from"./ipcRenderer-5e19eaee.js";import{_ as e,r as o,o as i,b as p,g as l,a as d,w as t,e as a,t as n,p as u,f as c}from"./index-265ac112.js";const g={data:()=>({processPids:"",progress1:0,progress2:0,progress3:0,progress4:0,progress5:0,progress6:0,progress1_pid:0,progress2_pid:0,progress3_pid:0,progress4_pid:0,progress5_pid:0,progress6_pid:0}),mounted(){this.init()},methods:{init(){r.removeAllListeners(s.timerJobProgress),r.removeAllListeners(s.createPoolNotice),r.on(s.timerJobProgress,((s,r)=>{switch(r.jobId){case 1:this.progress1=r.number,this.progress1_pid=0==r.pid?r.pid:this.progress1_pid;break;case 2:this.progress2=r.number,this.progress2_pid=0==r.pid?r.pid:this.progress2_pid;break;case 3:this.progress3=r.number,this.progress3_pid=0==r.pid?r.pid:this.progress3_pid;break;case 4:this.progress4=r.number,this.progress4_pid=0==r.pid?r.pid:this.progress4_pid;break;case 5:this.progress5=r.number,this.progress5_pid=0==r.pid?r.pid:this.progress5_pid;break;case 6:this.progress6=r.number,this.progress6_pid=0==r.pid?r.pid:this.progress6_pid}})),r.on(s.createPoolNotice,((s,r)=>{let e=JSON.stringify(r);this.processPids=e}))},runJob(e,o){let i={id:e,type:"timer",action:o};r.invoke(s.someJob,i).then((s=>{if("close"!=o)switch(s.jobId){case 1:this.progress1_pid=s.result.pid;break;case 2:this.progress2_pid=s.result.pid}}))},createPool(){r.send(s.createPool,{number:3})},runJobByPool(e,o){let i={id:e,type:"timer",action:o};r.invoke(s.someJobByPool,i).then((s=>{switch(s.jobId){case 3:this.progress3_pid=s.result.pid;break;case 4:this.progress4_pid=s.result.pid;break;case 5:this.progress5_pid=s.result.pid;break;case 6:this.progress6_pid=s.result.pid}}))}}},_=s=>(u("data-v-71705fa7"),s=s(),c(),s),b={id:"app-base-jobs"},h=_((()=>l("div",{class:"one-block-1"},[l("span",null," 1. 任务 / 并发任务 ")],-1))),f={class:"one-block-2"},k=_((()=>l("p",null,null,-1))),m=_((()=>l("div",{class:"one-block-1"},[l("span",null," 2. 任务池 / 并发任务 ")],-1))),P={class:"one-block-2"},J=_((()=>l("p",null,null,-1))),v=_((()=>l("p",null,null,-1))),y=_((()=>l("p",null,null,-1))),C=_((()=>l("p",null,null,-1)));const j=e(g,[["render",function(s,r,e,u,c,g){const _=o("a-button"),j=o("a-space");return i(),p("div",b,[h,l("div",f,[d(j,null,{default:t((()=>[d(_,{onClick:r[0]||(r[0]=s=>g.runJob(1,"create"))},{default:t((()=>[a("执行任务1")])),_:1}),a(" 进度："+n(c.progress1)+" ， 进程pid："+n(c.progress1_pid)+" ",1),d(_,{onClick:r[1]||(r[1]=s=>g.runJob(1,"close"))},{default:t((()=>[a("关闭")])),_:1})])),_:1}),k,d(j,null,{default:t((()=>[d(_,{onClick:r[2]||(r[2]=s=>g.runJob(2,"create"))},{default:t((()=>[a("执行任务2")])),_:1}),a(" 进度："+n(c.progress2)+" ， 进程pid："+n(c.progress2_pid)+" ",1),d(_,{onClick:r[3]||(r[3]=s=>g.runJob(2,"close"))},{default:t((()=>[a("关闭")])),_:1})])),_:1})]),m,l("div",P,[d(j,null,{default:t((()=>[d(_,{onClick:r[4]||(r[4]=s=>g.createPool())},{default:t((()=>[a("创建进程池")])),_:1}),a(" 进程pids："+n(c.processPids),1)])),_:1}),J,d(j,null,{default:t((()=>[d(_,{onClick:r[5]||(r[5]=s=>g.runJobByPool(3,"run"))},{default:t((()=>[a("执行任务3")])),_:1}),a(" 进度："+n(c.progress3)+" ，进程pid："+n(c.progress3_pid),1)])),_:1}),v,d(j,null,{default:t((()=>[d(_,{onClick:r[6]||(r[6]=s=>g.runJobByPool(4,"run"))},{default:t((()=>[a("执行任务4")])),_:1}),a(" 进度："+n(c.progress4)+" ，进程pid："+n(c.progress4_pid),1)])),_:1}),y,d(j,null,{default:t((()=>[d(_,{onClick:r[7]||(r[7]=s=>g.runJobByPool(5,"run"))},{default:t((()=>[a("执行任务5")])),_:1}),a(" 进度："+n(c.progress5)+" ，进程pid："+n(c.progress5_pid),1)])),_:1}),C,d(j,null,{default:t((()=>[d(_,{onClick:r[8]||(r[8]=s=>g.runJobByPool(6,"run"))},{default:t((()=>[a("执行任务6")])),_:1}),a(" 进度："+n(c.progress6)+" ，进程pid："+n(c.progress6_pid),1)])),_:1})])])}],["__scopeId","data-v-71705fa7"]]);export{j as default};
