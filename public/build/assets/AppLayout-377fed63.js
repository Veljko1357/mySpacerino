import{o as s,e as r,a as e,d as M,k as x,K as L,C as N,u as i,n as f,f as h,t as m,i as k,D as P,E,r as g,m as j,l as B,H as F,b as d,w as a,G as O,c as _,j as S,Z as V,g as c,F as $,h as z,O as A}from"./app-ee76bfaf.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";const U={},H={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),G=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),K=[I,G];function Z(l,n){return s(),r("svg",H,K)}const q=R(U,[["render",Z]]),J={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},Q={class:"flex items-center justify-between flex-wrap"},W={class:"w-0 flex-1 flex items-center min-w-0"},X={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Y=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ee=[Y],te={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},se=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),oe=[se],re={class:"ml-3 font-medium text-sm text-white truncate"},ne={class:"shrink-0 sm:ml-3"},ae=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ie=[ae],le={__name:"Banner",setup(l){const n=M(!0),o=x(()=>{var t;return((t=L().props.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),p=x(()=>{var t;return((t=L().props.jetstream.flash)==null?void 0:t.banner)||""});return N(p,async()=>{n.value=!0}),(t,b)=>(s(),r("div",null,[n.value&&i(p)?(s(),r("div",{key:0,class:f({"bg-indigo-500":i(o)=="success","bg-red-700":i(o)=="danger"})},[e("div",J,[e("div",Q,[e("div",W,[e("span",{class:f(["flex p-2 rounded-lg",{"bg-indigo-600":i(o)=="success","bg-red-600":i(o)=="danger"}])},[i(o)=="success"?(s(),r("svg",X,ee)):h("",!0),i(o)=="danger"?(s(),r("svg",te,oe)):h("",!0)],2),e("p",re,m(i(p)),1)]),e("div",ne,[e("button",{type:"button",class:f(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":i(o)=="success","hover:bg-red-600 focus:bg-red-600":i(o)=="danger"}]),"aria-label":"Dismiss",onClick:b[0]||(b[0]=k(u=>n.value=!1,["prevent"]))},ie,2)])])])],2)):h("",!0)]))}},de={class:"relative"},D={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(l){const n=l;let o=M(!1);const p=u=>{o.value&&u.key==="Escape"&&(o.value=!1)};P(()=>document.addEventListener("keydown",p)),E(()=>document.removeEventListener("keydown",p));const t=x(()=>({48:"w-48"})[n.width.toString()]),b=x(()=>n.align==="left"?"origin-top-left left-0":n.align==="right"?"origin-top-right right-0":"origin-top");return(u,v)=>(s(),r("div",de,[e("div",{onClick:v[0]||(v[0]=T=>j(o)?o.value=!i(o):o=!i(o))},[g(u.$slots,"trigger")]),B(e("div",{class:"fixed inset-0 z-40",onClick:v[1]||(v[1]=T=>j(o)?o.value=!1:o=!1)},null,512),[[F,i(o)]]),d(O,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[B(e("div",{class:f(["absolute z-50 mt-2 rounded-md shadow-lg",[i(t),i(b)]]),style:{display:"none"},onClick:v[2]||(v[2]=T=>j(o)?o.value=!1:o=!1)},[e("div",{class:f(["rounded-md ring-1 ring-black ring-opacity-5",l.contentClasses])},[g(u.$slots,"content")],2)],2),[[F,i(o)]])]),_:3})]))}},ue={key:0,type:"submit",class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},ce=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(l){return(n,o)=>(s(),r("div",null,[l.as=="button"?(s(),r("button",ue,[g(n.$slots,"default")])):l.as=="a"?(s(),r("a",{key:1,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},[g(n.$slots,"default")],8,ce)):(s(),_(i(S),{key:2,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:a(()=>[g(n.$slots,"default")]),_:3},8,["href"]))]))}},C={__name:"NavLink",props:{href:String,active:Boolean},setup(l){const n=l,o=x(()=>n.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(p,t)=>(s(),_(i(S),{href:l.href,class:f(i(o))},{default:a(()=>[g(p.$slots,"default")]),_:3},8,["href","class"]))}},y={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(l){const n=l,o=x(()=>n.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(p,t)=>(s(),r("div",null,[l.as=="button"?(s(),r("button",{key:0,class:f([i(o),"w-full text-left"])},[g(p.$slots,"default")],2)):(s(),_(i(S),{key:1,href:l.href,class:f(i(o))},{default:a(()=>[g(p.$slots,"default")]),_:3},8,["href","class"]))]))}},he={class:"min-h-screen bg-gray-100"},pe={class:"bg-white border-b border-gray-100"},fe={class:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"},ge={class:"flex justify-between h-16"},me={class:"flex"},ve={class:"flex items-center shrink-0"},_e={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},be={class:"hidden sm:flex sm:items-center sm:ml-6"},ye={class:"relative ml-3"},we={class:"inline-flex rounded-md"},xe={type:"button",class:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50"},ke=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),$e={class:"w-60"},Se=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),je=e("div",{class:"border-t border-gray-200"},null,-1),Ce=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Me=["onSubmit"],Te={class:"flex items-center"},Le={key:0,class:"w-5 h-5 mr-2 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Be=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Fe=[Be],ze=["src"],Ae={class:"relative ml-3"},De={key:0,class:"flex text-sm transition border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"},Ne={key:1,class:"inline-flex rounded-md"},Pe={type:"button",class:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50"},Ee=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Oe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ve=e("div",{class:"border-t border-gray-200"},null,-1),Re=["onSubmit"],Ue={class:"flex items-center -mr-2 sm:hidden"},He={class:"w-6 h-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ie={class:"pt-2 pb-3 space-y-1"},Ge={class:"pt-4 pb-1 border-t border-gray-200"},Ke={class:"flex items-center px-4"},Ze={key:0,class:"mr-3 shrink-0"},qe=["src","alt"],Je={class:"text-base font-medium text-gray-800"},Qe={class:"text-sm font-medium text-gray-500"},We={class:"mt-3 space-y-1"},Xe=["onSubmit"],Ye=e("div",{class:"border-t border-gray-200"},null,-1),et=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),tt=e("div",{class:"border-t border-gray-200"},null,-1),st=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ot=["onSubmit"],rt={class:"flex items-center"},nt={key:0,class:"w-5 h-5 mr-2 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},at=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),it=[at],lt={key:0,class:"bg-white shadow"},dt={class:"px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8"},ut={key:0,class:"py-4 text-center bg-indigo-900 lg:px-4"},ct={style:{"background-color":"#6875F5"},class:"flex items-center p-2 leading-none text-indigo-100 lg:rounded-full lg:inline-flex",role:"alert"},ht=e("span",{class:"flex px-2 py-1 mr-3 text-xs font-bold uppercase bg-indigo-500 rounded-full"},"Success",-1),pt={class:"flex-auto mr-2 font-semibold text-left"},ft={key:1,class:"py-4 text-center bg-indigo-900 lg:px-4"},gt={style:{"background-color":"#6875F5"},class:"flex items-center p-2 leading-none text-indigo-100 lg:rounded-full lg:inline-flex",role:"alert"},mt=e("span",{class:"flex px-2 py-1 mr-3 text-xs font-bold uppercase bg-indigo-500 rounded-full"},"Success",-1),vt={class:"flex-auto mr-2 font-semibold text-left"},yt={__name:"AppLayout",props:{title:String},setup(l){const n=M(!1),o=t=>{A.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},p=()=>{A.post(route("logout"))};return(t,b)=>(s(),r("div",null,[d(i(V),{title:l.title},null,8,["title"]),d(le),e("div",he,[e("nav",pe,[e("div",fe,[e("div",ge,[e("div",me,[e("div",ve,[d(i(S),{href:t.route("dashboard")},{default:a(()=>[d(q,{class:"block w-auto h-9"})]),_:1},8,["href"])]),e("div",_e,[d(C,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[c(" Dashboard ")]),_:1},8,["href","active"]),d(C,{href:t.route("users.index"),active:t.route().current("users.index")},{default:a(()=>[c(" Users ")]),_:1},8,["href","active"]),d(C,{href:t.route("roles.index"),active:t.route().current("roles.index")},{default:a(()=>[c(" Roles ")]),_:1},8,["href","active"])])]),e("div",be,[e("div",ye,[t.$page.props.jetstream.hasTeamFeatures?(s(),_(D,{key:0,align:"right",width:"60"},{trigger:a(()=>[e("span",we,[e("button",xe,[c(m(t.$page.props.auth.user.current_team.name)+" ",1),ke])])]),content:a(()=>[e("div",$e,[t.$page.props.jetstream.hasTeamFeatures?(s(),r($,{key:0},[Se,d(w,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:a(()=>[c(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),_(w,{key:0,href:t.route("teams.create")},{default:a(()=>[c(" Create New Team ")]),_:1},8,["href"])):h("",!0),je,Ce,(s(!0),r($,null,z(t.$page.props.auth.user.all_teams,u=>(s(),r("form",{key:u.id,onSubmit:k(v=>o(u),["prevent"])},[d(w,{as:"button"},{default:a(()=>[e("div",Te,[u.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",Le,Fe)):h("",!0),e("div",null,m(u.name),1)])]),_:2},1024)],40,Me))),128))],64)):h("",!0)])]),_:1})):h("",!0)]),e("img",{class:"object-cover w-8 h-8 rounded-full",src:t.$page.props.auth.user.avatar!="placeholder"?t.$page.props.auth.user.avatar:t.$page.props.avatar,alt:"User profile image"},null,8,ze),e("div",Ae,[d(D,{align:"right",width:"48"},{trigger:a(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),r("button",De)):(s(),r("span",Ne,[e("button",Pe,[c(m(t.$page.props.auth.user.name)+" ",1),Ee])]))]),content:a(()=>[Oe,d(w,{href:t.route("profile.show")},{default:a(()=>[c(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(s(),_(w,{key:0,href:t.route("api-tokens.index")},{default:a(()=>[c(" API Tokens ")]),_:1},8,["href"])):h("",!0),Ve,e("form",{onSubmit:k(p,["prevent"])},[d(w,{as:"button"},{default:a(()=>[c(" Log Out ")]),_:1})],40,Re)]),_:1})])]),e("div",Ue,[e("button",{class:"inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500",onClick:b[0]||(b[0]=u=>n.value=!n.value)},[(s(),r("svg",He,[e("path",{class:f({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:f({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:f([{block:n.value,hidden:!n.value},"sm:hidden"])},[e("div",Ie,[d(y,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[c(" Dashboard ")]),_:1},8,["href","active"])]),e("div",Ge,[e("div",Ke,[t.$page.props.jetstream.managesProfilePhotos?(s(),r("div",Ze,[e("img",{class:"object-cover w-10 h-10 rounded-full",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,qe)])):h("",!0),e("div",null,[e("div",Je,m(t.$page.props.auth.user.name),1),e("div",Qe,m(t.$page.props.auth.user.email),1)])]),e("div",We,[d(y,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:a(()=>[c(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(s(),_(y,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:a(()=>[c(" API Tokens ")]),_:1},8,["href","active"])):h("",!0),e("form",{method:"POST",onSubmit:k(p,["prevent"])},[d(y,{as:"button"},{default:a(()=>[c(" Log Out ")]),_:1})],40,Xe),t.$page.props.jetstream.hasTeamFeatures?(s(),r($,{key:1},[Ye,et,d(y,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:a(()=>[c(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(s(),_(y,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:a(()=>[c(" Create New Team ")]),_:1},8,["href","active"])):h("",!0),tt,st,(s(!0),r($,null,z(t.$page.props.auth.user.all_teams,u=>(s(),r("form",{key:u.id,onSubmit:k(v=>o(u),["prevent"])},[d(y,{as:"button"},{default:a(()=>[e("div",rt,[u.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",nt,it)):h("",!0),e("div",null,m(u.name),1)])]),_:2},1024)],40,ot))),128))],64)):h("",!0)])])],2)]),t.$slots.header?(s(),r("header",lt,[e("div",dt,[g(t.$slots,"header")]),t.$page.props.flash.success?(s(),r("div",ut,[e("div",ct,[ht,e("span",pt,m(t.$page.props.flash.success),1)])])):h("",!0),t.$page.props.flash.delete?(s(),r("div",ft,[e("div",gt,[mt,e("span",vt,m(t.$page.props.flash.delete),1)])])):h("",!0)])):h("",!0),e("main",null,[g(t.$slots,"default")])])]))}};export{yt as _};
