import{d,e as u,a as e,l as s,q as a,i as p,o as m}from"./app-ee76bfaf.js";import{u as c,d as _}from"./index-db7ea5e0.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const P={setup(){const l=d({username:"",bio:"",profile_picture:""}),{flash:r}=c().props;return{form:l,flash:r,onFileSelected:n=>{const i=n.target.files[0],o=new FileReader;o.onloadend=()=>{l.value.profile_picture=o.result},i&&o.readAsDataURL(i)},storeProfile:()=>{_.Inertia.post("/profiles",l.value)}}}},h=e("h1",null,"Create New Profile",-1),v=e("label",{for:"username"},"Username:",-1),x=e("br",null,null,-1),F=e("label",{for:"bio"},"Bio:",-1),S=e("br",null,null,-1),w=e("label",{for:"profile_picture"},"Profile Picture:",-1),B=e("br",null,null,-1),C=e("button",{type:"submit"},"Create Profile",-1);function U(l,r,f,t,n,i){return m(),u("div",null,[h,e("form",{onSubmit:r[3]||(r[3]=p((...o)=>t.storeProfile&&t.storeProfile(...o),["prevent"]))},[v,s(e("input",{type:"text",id:"username","onUpdate:modelValue":r[0]||(r[0]=o=>t.form.username=o)},null,512),[[a,t.form.username]]),x,F,s(e("textarea",{id:"bio","onUpdate:modelValue":r[1]||(r[1]=o=>t.form.bio=o)},null,512),[[a,t.form.bio]]),S,w,e("input",{type:"file",id:"profile_picture",ref:"profile_picture",onChange:r[2]||(r[2]=(...o)=>t.onFileSelected&&t.onFileSelected(...o))},null,544),B,C],32)])}const k=b(P,[["render",U]]);export{k as default};