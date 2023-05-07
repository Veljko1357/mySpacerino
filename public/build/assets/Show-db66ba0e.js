import{d as h,x,e as a,b as c,a as o,t as n,w as p,u as w,g as u,i as v,l as _,q as y,f as k,F as C,h as $,o as r}from"./app-ee76bfaf.js";import{u as D,I as V,d as N}from"./index-db7ea5e0.js";import{_ as f}from"./body-c9ebbe2f.js";const S={class:"container mx-auto px-4 bg-gray-100"},j={class:"bg-white shadow-md rounded p-8 mt-8"},B={class:"text-3xl mb-4"},F={class:"text-gray-600 mb-4"},I={class:"text-gray-700 text-lg leading-relaxed"},M=o("label",{for:"comment",class:"block text-sm font-medium text-gray-700"},"Add a comment:",-1),q=o("button",{type:"submit",class:"inline-flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Submit Comment",-1),E={components:{Header:f},props:{blog:Object}},A=Object.assign(E,{__name:"Show",setup(e){const d=e,{newComment:m}=D().props,i=h("");x(()=>{m&&d.blog.comments.unshift(m)});function g(){N.Inertia.post(route("comments.store",d.blog.id),{content:i.value})}const b=l=>{const t=new Date(l);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`};return(l,t)=>(r(),a("div",S,[c(f),o("div",j,[o("h1",B,n(e.blog.title),1),o("p",F,[c(w(V),{href:`/profile/${e.blog.user.profile.id}/show`},{default:p(()=>[u(n(e.blog.user.profile.username),1)]),_:1},8,["href"]),u(" - posted on "+n(b(e.blog.created_at)),1)]),o("div",I,n(e.blog.text),1)]),e.blog.comments_enabled?(r(),a("form",{key:0,onSubmit:t[1]||(t[1]=v(s=>g(),["prevent"])),class:"bg-white shadow-md rounded p-8 mt-8",novalidate:""},[M,_(o("textarea",{id:"comment","onUpdate:modelValue":t[0]||(t[0]=s=>i.value=s),required:"",class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"},null,512),[[y,i.value]]),q],32)):k("",!0),(r(!0),a(C,null,$(e.blog.comments,s=>(r(),a("div",{key:s.id},[o("p",null,n(s.user.profile.username)+": "+n(s.content),1)]))),128))]))}});export{A as default};