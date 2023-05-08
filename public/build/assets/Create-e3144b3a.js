import{d as s,e as b,a as e,b as r,i as m,l,q as c,s as p,v as _,F as v,o as f}from"./app-c52fd624.js";import{d as h}from"./index-d9b4a7bf.js";import{_ as x}from"./body-c75fcd7a.js";import{F as g}from"./Footer-3918fec9.js";import"./_plugin-vue_export-helper-c27b6911.js";const y={class:"container mx-auto px-4"},w=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight my-4"},"Create Blog",-1),k=["onSubmit"],B={class:"mb-4"},V=e("label",{for:"title",class:"block text-gray-700 text-sm font-bold mb-2"},"Title:",-1),C={class:"mb-4"},F=e("label",{for:"text",class:"block text-gray-700 text-sm font-bold mb-2"},"Content:",-1),M={class:"mb-4"},U=e("label",{for:"privacy",class:"block text-gray-700 text-sm font-bold mb-2"},"Privacy:",-1),q=e("option",{value:"public"},"Public",-1),E=e("option",{value:"private"},"Private",-1),P=e("option",{value:"favorites"},"Favorites",-1),S=e("option",{value:"link_only"},"Link-only",-1),N=[q,E,P,S],T={class:"mb-4"},z=e("label",{for:"comments_enabled",class:"block text-gray-700 text-sm font-bold mb-2"},"Enable comments:",-1),D=e("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Create Blog",-1),J={__name:"Create",setup(I){const n=s(""),a=s(""),i=s("public"),d=s(!0);function u(){h.Inertia.post("/blogs",{title:n.value,content:a.value,privacy:i.value,comments_enabled:d.value})}return(L,t)=>(f(),b(v,null,[e("div",null,[r(x),e("div",y,[w,e("div",null,[e("form",{onSubmit:m(u,["prevent"]),class:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},[e("div",B,[V,l(e("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o),required:"",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},null,512),[[c,n.value]])]),e("div",C,[F,l(e("textarea",{id:"text","onUpdate:modelValue":t[1]||(t[1]=o=>a.value=o),required:"",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48 resize-none"},null,512),[[c,a.value]])]),e("div",M,[U,l(e("select",{id:"privacy","onUpdate:modelValue":t[2]||(t[2]=o=>i.value=o),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},N,512),[[p,i.value]])]),e("div",T,[z,l(e("input",{type:"checkbox",id:"comments_enabled","onUpdate:modelValue":t[3]||(t[3]=o=>d.value=o),class:"form-checkbox h-5 w-5 text-blue-600"},null,512),[[_,d.value]])]),D],40,k)])])]),r(g)],64))}};export{J as default};