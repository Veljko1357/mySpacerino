import{d as s,e as u,b,a as e,i as p,l,q as c,s as m,v as _,o as v}from"./app-ee76bfaf.js";import{d as f}from"./index-db7ea5e0.js";import{_ as h}from"./body-c9ebbe2f.js";const x={class:"container mx-auto px-4"},g=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight my-4"},"Create Blog",-1),y=["onSubmit"],w={class:"mb-4"},k=e("label",{for:"title",class:"block text-gray-700 text-sm font-bold mb-2"},"Title:",-1),B={class:"mb-4"},V=e("label",{for:"text",class:"block text-gray-700 text-sm font-bold mb-2"},"Content:",-1),C={class:"mb-4"},M=e("label",{for:"privacy",class:"block text-gray-700 text-sm font-bold mb-2"},"Privacy:",-1),U=e("option",{value:"public"},"Public",-1),q=e("option",{value:"private"},"Private",-1),E=e("option",{value:"favorites"},"Favorites",-1),P=e("option",{value:"link_only"},"Link-only",-1),S=[U,q,E,P],N={class:"mb-4"},T=e("label",{for:"comments_enabled",class:"block text-gray-700 text-sm font-bold mb-2"},"Enable comments:",-1),z=e("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Create Blog",-1),j={__name:"Create",setup(D){const n=s(""),a=s(""),i=s("public"),d=s(!0);function r(){f.Inertia.post("/blogs",{title:n.value,content:a.value,privacy:i.value,comments_enabled:d.value})}return(F,t)=>(v(),u("div",null,[b(h),e("div",x,[g,e("div",null,[e("form",{onSubmit:p(r,["prevent"]),class:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},[e("div",w,[k,l(e("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o),required:"",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},null,512),[[c,n.value]])]),e("div",B,[V,l(e("textarea",{id:"text","onUpdate:modelValue":t[1]||(t[1]=o=>a.value=o),required:"",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48 resize-none"},null,512),[[c,a.value]])]),e("div",C,[M,l(e("select",{id:"privacy","onUpdate:modelValue":t[2]||(t[2]=o=>i.value=o),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},S,512),[[m,i.value]])]),e("div",N,[T,l(e("input",{type:"checkbox",id:"comments_enabled","onUpdate:modelValue":t[3]||(t[3]=o=>d.value=o),class:"form-checkbox h-5 w-5 text-blue-600"},null,512),[[_,d.value]])]),z],40,y)])])]))}};export{j as default};
