import{d as u,e as _,a as e,i as m,l as a,q as f,b as p,F as c,o as b,z as F}from"./app-c52fd624.js";import{u as v,d as P}from"./index-d9b4a7bf.js";import{F as x}from"./Footer-3918fec9.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const C={components:{Footer:x},setup(){const n=u({username:"",bio:"",profile_picture:""}),{flash:o}=v().props;return{form:n,flash:o,onFileSelected:s=>{const i=s.target.files[0],l=new FileReader;l.onloadend=()=>{n.value.profile_picture=l.result},i&&l.readAsDataURL(i)},storeProfile:()=>{P.Inertia.post("/profiles",n.value)}}}},g=e("h1",null,"Create New Profile",-1),y=e("label",{for:"username"},"Username:",-1),S=e("br",null,null,-1),w=e("label",{for:"bio"},"Bio:",-1),B=e("br",null,null,-1),U=e("label",{for:"profile_picture"},"Profile Picture:",-1),V=e("br",null,null,-1),N=e("button",{type:"submit"},"Create Profile",-1);function k(n,o,d,t,s,i){const l=F("Footer");return b(),_(c,null,[e("div",null,[g,e("form",{onSubmit:o[3]||(o[3]=m((...r)=>t.storeProfile&&t.storeProfile(...r),["prevent"]))},[y,a(e("input",{type:"text",id:"username","onUpdate:modelValue":o[0]||(o[0]=r=>t.form.username=r)},null,512),[[f,t.form.username]]),S,w,a(e("textarea",{id:"bio","onUpdate:modelValue":o[1]||(o[1]=r=>t.form.bio=r)},null,512),[[f,t.form.bio]]),B,U,e("input",{type:"file",id:"profile_picture",ref:"profile_picture",onChange:o[2]||(o[2]=(...r)=>t.onFileSelected&&t.onFileSelected(...r))},null,544),V,N],32)]),p(l)],64)}const z=h(C,[["render",k]]);export{z as default};
