import{_ as fe}from"./body-ee08d14f.js";import{d as de,e as pe,b as lt,a as i,i as ge,l as y,q as m,F as be,o as he,z as ut}from"./app-703427ef.js";import{d as ye}from"./index-21abbddf.js";import{F as me}from"./Footer-92427b74.js";import{_ as _e}from"./_plugin-vue_export-helper-c27b6911.js";var ve=typeof global=="object"&&global&&global.Object===Object&&global;const Nt=ve;var Te=typeof self=="object"&&self&&self.Object===Object&&self,$e=Nt||Te||Function("return this")();const g=$e;var we=g.Symbol;const p=we;var Dt=Object.prototype,je=Dt.hasOwnProperty,xe=Dt.toString,C=p?p.toStringTag:void 0;function Oe(t){var e=je.call(t,C),r=t[C];try{t[C]=void 0;var n=!0}catch{}var o=xe.call(t);return n&&(e?t[C]=r:delete t[C]),o}var Se=Object.prototype,Ae=Se.toString;function Pe(t){return Ae.call(t)}var Ie="[object Null]",Ce="[object Undefined]",ft=p?p.toStringTag:void 0;function w(t){return t==null?t===void 0?Ce:Ie:ft&&ft in Object(t)?Oe(t):Pe(t)}function j(t){return t!=null&&typeof t=="object"}var Ee="[object Symbol]";function Y(t){return typeof t=="symbol"||j(t)&&w(t)==Ee}function Bt(t,e){for(var r=-1,n=t==null?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}var Fe=Array.isArray;const x=Fe;var Me=1/0,dt=p?p.prototype:void 0,pt=dt?dt.toString:void 0;function Lt(t){if(typeof t=="string")return t;if(x(t))return Bt(t,Lt)+"";if(Y(t))return pt?pt.call(t):"";var e=t+"";return e=="0"&&1/t==-Me?"-0":e}function U(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function Ue(t){return t}var Ne="[object AsyncFunction]",De="[object Function]",Be="[object GeneratorFunction]",Le="[object Proxy]";function Gt(t){if(!U(t))return!1;var e=w(t);return e==De||e==Be||e==Ne||e==Le}var Ge=g["__core-js_shared__"];const z=Ge;var gt=function(){var t=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function ze(t){return!!gt&&gt in t}var Re=Function.prototype,Ve=Re.toString;function O(t){if(t!=null){try{return Ve.call(t)}catch{}try{return t+""}catch{}}return""}var He=/[\\^$.*+?()[\]{}|]/g,Ke=/^\[object .+?Constructor\]$/,We=Function.prototype,Ye=Object.prototype,qe=We.toString,Xe=Ye.hasOwnProperty,Ze=RegExp("^"+qe.call(Xe).replace(He,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Je(t){if(!U(t)||ze(t))return!1;var e=Gt(t)?Ze:Ke;return e.test(O(t))}function Qe(t,e){return t==null?void 0:t[e]}function S(t,e){var r=Qe(t,e);return Je(r)?r:void 0}var ke=S(g,"WeakMap");const V=ke;var bt=Object.create,tr=function(){function t(){}return function(e){if(!U(e))return{};if(bt)return bt(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const er=tr;function rr(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function nr(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var or=800,ar=16,ir=Date.now;function sr(t){var e=0,r=0;return function(){var n=ir(),o=ar-(n-r);if(r=n,o>0){if(++e>=or)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function cr(t){return function(){return t}}var lr=function(){try{var t=S(Object,"defineProperty");return t({},"",{}),t}catch{}}();const B=lr;var ur=B?function(t,e){return B(t,"toString",{configurable:!0,enumerable:!1,value:cr(e),writable:!0})}:Ue;const fr=ur;var dr=sr(fr);const pr=dr;function gr(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var br=9007199254740991,hr=/^(?:0|[1-9]\d*)$/;function yr(t,e){var r=typeof t;return e=e??br,!!e&&(r=="number"||r!="symbol"&&hr.test(t))&&t>-1&&t%1==0&&t<e}function zt(t,e,r){e=="__proto__"&&B?B(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function Rt(t,e){return t===e||t!==t&&e!==e}var mr=Object.prototype,_r=mr.hasOwnProperty;function Vt(t,e,r){var n=t[e];(!(_r.call(t,e)&&Rt(n,r))||r===void 0&&!(e in t))&&zt(t,e,r)}function N(t,e,r,n){var o=!r;r||(r={});for(var a=-1,s=e.length;++a<s;){var l=e[a],c=n?n(r[l],t[l],l,r,t):void 0;c===void 0&&(c=t[l]),o?zt(r,l,c):Vt(r,l,c)}return r}var ht=Math.max;function vr(t,e,r){return e=ht(e===void 0?t.length-1:e,0),function(){for(var n=arguments,o=-1,a=ht(n.length-e,0),s=Array(a);++o<a;)s[o]=n[e+o];o=-1;for(var l=Array(e+1);++o<e;)l[o]=n[o];return l[e]=r(s),rr(t,this,l)}}var Tr=9007199254740991;function Ht(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Tr}function Kt(t){return t!=null&&Ht(t.length)&&!Gt(t)}var $r=Object.prototype;function q(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||$r;return t===r}function wr(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var jr="[object Arguments]";function yt(t){return j(t)&&w(t)==jr}var Wt=Object.prototype,xr=Wt.hasOwnProperty,Or=Wt.propertyIsEnumerable,Sr=yt(function(){return arguments}())?yt:function(t){return j(t)&&xr.call(t,"callee")&&!Or.call(t,"callee")};const Yt=Sr;function Ar(){return!1}var qt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,mt=qt&&typeof module=="object"&&module&&!module.nodeType&&module,Pr=mt&&mt.exports===qt,_t=Pr?g.Buffer:void 0,Ir=_t?_t.isBuffer:void 0,Cr=Ir||Ar;const Xt=Cr;var Er="[object Arguments]",Fr="[object Array]",Mr="[object Boolean]",Ur="[object Date]",Nr="[object Error]",Dr="[object Function]",Br="[object Map]",Lr="[object Number]",Gr="[object Object]",zr="[object RegExp]",Rr="[object Set]",Vr="[object String]",Hr="[object WeakMap]",Kr="[object ArrayBuffer]",Wr="[object DataView]",Yr="[object Float32Array]",qr="[object Float64Array]",Xr="[object Int8Array]",Zr="[object Int16Array]",Jr="[object Int32Array]",Qr="[object Uint8Array]",kr="[object Uint8ClampedArray]",tn="[object Uint16Array]",en="[object Uint32Array]",f={};f[Yr]=f[qr]=f[Xr]=f[Zr]=f[Jr]=f[Qr]=f[kr]=f[tn]=f[en]=!0;f[Er]=f[Fr]=f[Kr]=f[Mr]=f[Wr]=f[Ur]=f[Nr]=f[Dr]=f[Br]=f[Lr]=f[Gr]=f[zr]=f[Rr]=f[Vr]=f[Hr]=!1;function rn(t){return j(t)&&Ht(t.length)&&!!f[w(t)]}function X(t){return function(e){return t(e)}}var Zt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,E=Zt&&typeof module=="object"&&module&&!module.nodeType&&module,nn=E&&E.exports===Zt,R=nn&&Nt.process,on=function(){try{var t=E&&E.require&&E.require("util").types;return t||R&&R.binding&&R.binding("util")}catch{}}();const P=on;var vt=P&&P.isTypedArray,an=vt?X(vt):rn;const sn=an;var cn=Object.prototype,ln=cn.hasOwnProperty;function Jt(t,e){var r=x(t),n=!r&&Yt(t),o=!r&&!n&&Xt(t),a=!r&&!n&&!o&&sn(t),s=r||n||o||a,l=s?wr(t.length,String):[],c=l.length;for(var d in t)(e||ln.call(t,d))&&!(s&&(d=="length"||o&&(d=="offset"||d=="parent")||a&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||yr(d,c)))&&l.push(d);return l}function Qt(t,e){return function(r){return t(e(r))}}var un=Qt(Object.keys,Object);const fn=un;var dn=Object.prototype,pn=dn.hasOwnProperty;function gn(t){if(!q(t))return fn(t);var e=[];for(var r in Object(t))pn.call(t,r)&&r!="constructor"&&e.push(r);return e}function Z(t){return Kt(t)?Jt(t):gn(t)}function bn(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var hn=Object.prototype,yn=hn.hasOwnProperty;function mn(t){if(!U(t))return bn(t);var e=q(t),r=[];for(var n in t)n=="constructor"&&(e||!yn.call(t,n))||r.push(n);return r}function J(t){return Kt(t)?Jt(t,!0):mn(t)}var _n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,vn=/^\w*$/;function Tn(t,e){if(x(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||Y(t)?!0:vn.test(t)||!_n.test(t)||e!=null&&t in Object(e)}var $n=S(Object,"create");const F=$n;function wn(){this.__data__=F?F(null):{},this.size=0}function jn(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var xn="__lodash_hash_undefined__",On=Object.prototype,Sn=On.hasOwnProperty;function An(t){var e=this.__data__;if(F){var r=e[t];return r===xn?void 0:r}return Sn.call(e,t)?e[t]:void 0}var Pn=Object.prototype,In=Pn.hasOwnProperty;function Cn(t){var e=this.__data__;return F?e[t]!==void 0:In.call(e,t)}var En="__lodash_hash_undefined__";function Fn(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=F&&e===void 0?En:e,this}function $(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}$.prototype.clear=wn;$.prototype.delete=jn;$.prototype.get=An;$.prototype.has=Cn;$.prototype.set=Fn;function Mn(){this.__data__=[],this.size=0}function L(t,e){for(var r=t.length;r--;)if(Rt(t[r][0],e))return r;return-1}var Un=Array.prototype,Nn=Un.splice;function Dn(t){var e=this.__data__,r=L(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():Nn.call(e,r,1),--this.size,!0}function Bn(t){var e=this.__data__,r=L(e,t);return r<0?void 0:e[r][1]}function Ln(t){return L(this.__data__,t)>-1}function Gn(t,e){var r=this.__data__,n=L(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function b(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}b.prototype.clear=Mn;b.prototype.delete=Dn;b.prototype.get=Bn;b.prototype.has=Ln;b.prototype.set=Gn;var zn=S(g,"Map");const M=zn;function Rn(){this.size=0,this.__data__={hash:new $,map:new(M||b),string:new $}}function Vn(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function G(t,e){var r=t.__data__;return Vn(e)?r[typeof e=="string"?"string":"hash"]:r.map}function Hn(t){var e=G(this,t).delete(t);return this.size-=e?1:0,e}function Kn(t){return G(this,t).get(t)}function Wn(t){return G(this,t).has(t)}function Yn(t,e){var r=G(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function _(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}_.prototype.clear=Rn;_.prototype.delete=Hn;_.prototype.get=Kn;_.prototype.has=Wn;_.prototype.set=Yn;var qn="Expected a function";function Q(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(qn);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var s=t.apply(this,n);return r.cache=a.set(o,s)||a,s};return r.cache=new(Q.Cache||_),r}Q.Cache=_;var Xn=500;function Zn(t){var e=Q(t,function(n){return r.size===Xn&&r.clear(),n}),r=e.cache;return e}var Jn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qn=/\\(\\)?/g,kn=Zn(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Jn,function(r,n,o,a){e.push(o?a.replace(Qn,"$1"):n||r)}),e});const to=kn;function eo(t){return t==null?"":Lt(t)}function k(t,e){return x(t)?t:Tn(t,e)?[t]:to(eo(t))}var ro=1/0;function kt(t){if(typeof t=="string"||Y(t))return t;var e=t+"";return e=="0"&&1/t==-ro?"-0":e}function no(t,e){e=k(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[kt(e[r++])];return r&&r==n?t:void 0}function tt(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}var Tt=p?p.isConcatSpreadable:void 0;function oo(t){return x(t)||Yt(t)||!!(Tt&&t&&t[Tt])}function te(t,e,r,n,o){var a=-1,s=t.length;for(r||(r=oo),o||(o=[]);++a<s;){var l=t[a];e>0&&r(l)?e>1?te(l,e-1,r,n,o):tt(o,l):n||(o[o.length]=l)}return o}function ao(t){var e=t==null?0:t.length;return e?te(t,1):[]}function io(t){return pr(vr(t,void 0,ao),t+"")}var so=Qt(Object.getPrototypeOf,Object);const et=so;var co="[object Object]",lo=Function.prototype,uo=Object.prototype,ee=lo.toString,fo=uo.hasOwnProperty,po=ee.call(Object);function go(t){if(!j(t)||w(t)!=co)return!1;var e=et(t);if(e===null)return!0;var r=fo.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&ee.call(r)==po}function bo(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),r=r>o?o:r,r<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var a=Array(o);++n<o;)a[n]=t[n+e];return a}function ho(){this.__data__=new b,this.size=0}function yo(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function mo(t){return this.__data__.get(t)}function _o(t){return this.__data__.has(t)}var vo=200;function To(t,e){var r=this.__data__;if(r instanceof b){var n=r.__data__;if(!M||n.length<vo-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new _(n)}return r.set(t,e),this.size=r.size,this}function I(t){var e=this.__data__=new b(t);this.size=e.size}I.prototype.clear=ho;I.prototype.delete=yo;I.prototype.get=mo;I.prototype.has=_o;I.prototype.set=To;function $o(t,e){return t&&N(e,Z(e),t)}function wo(t,e){return t&&N(e,J(e),t)}var re=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$t=re&&typeof module=="object"&&module&&!module.nodeType&&module,jo=$t&&$t.exports===re,wt=jo?g.Buffer:void 0,jt=wt?wt.allocUnsafe:void 0;function xo(t,e){if(e)return t.slice();var r=t.length,n=jt?jt(r):new t.constructor(r);return t.copy(n),n}function Oo(t,e){for(var r=-1,n=t==null?0:t.length,o=0,a=[];++r<n;){var s=t[r];e(s,r,t)&&(a[o++]=s)}return a}function ne(){return[]}var So=Object.prototype,Ao=So.propertyIsEnumerable,xt=Object.getOwnPropertySymbols,Po=xt?function(t){return t==null?[]:(t=Object(t),Oo(xt(t),function(e){return Ao.call(t,e)}))}:ne;const rt=Po;function Io(t,e){return N(t,rt(t),e)}var Co=Object.getOwnPropertySymbols,Eo=Co?function(t){for(var e=[];t;)tt(e,rt(t)),t=et(t);return e}:ne;const oe=Eo;function Fo(t,e){return N(t,oe(t),e)}function ae(t,e,r){var n=e(t);return x(t)?n:tt(n,r(t))}function Mo(t){return ae(t,Z,rt)}function ie(t){return ae(t,J,oe)}var Uo=S(g,"DataView");const H=Uo;var No=S(g,"Promise");const K=No;var Do=S(g,"Set");const W=Do;var Ot="[object Map]",Bo="[object Object]",St="[object Promise]",At="[object Set]",Pt="[object WeakMap]",It="[object DataView]",Lo=O(H),Go=O(M),zo=O(K),Ro=O(W),Vo=O(V),T=w;(H&&T(new H(new ArrayBuffer(1)))!=It||M&&T(new M)!=Ot||K&&T(K.resolve())!=St||W&&T(new W)!=At||V&&T(new V)!=Pt)&&(T=function(t){var e=w(t),r=e==Bo?t.constructor:void 0,n=r?O(r):"";if(n)switch(n){case Lo:return It;case Go:return Ot;case zo:return St;case Ro:return At;case Vo:return Pt}return e});const nt=T;var Ho=Object.prototype,Ko=Ho.hasOwnProperty;function Wo(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&Ko.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var Yo=g.Uint8Array;const Ct=Yo;function ot(t){var e=new t.constructor(t.byteLength);return new Ct(e).set(new Ct(t)),e}function qo(t,e){var r=e?ot(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var Xo=/\w*$/;function Zo(t){var e=new t.constructor(t.source,Xo.exec(t));return e.lastIndex=t.lastIndex,e}var Et=p?p.prototype:void 0,Ft=Et?Et.valueOf:void 0;function Jo(t){return Ft?Object(Ft.call(t)):{}}function Qo(t,e){var r=e?ot(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var ko="[object Boolean]",ta="[object Date]",ea="[object Map]",ra="[object Number]",na="[object RegExp]",oa="[object Set]",aa="[object String]",ia="[object Symbol]",sa="[object ArrayBuffer]",ca="[object DataView]",la="[object Float32Array]",ua="[object Float64Array]",fa="[object Int8Array]",da="[object Int16Array]",pa="[object Int32Array]",ga="[object Uint8Array]",ba="[object Uint8ClampedArray]",ha="[object Uint16Array]",ya="[object Uint32Array]";function ma(t,e,r){var n=t.constructor;switch(e){case sa:return ot(t);case ko:case ta:return new n(+t);case ca:return qo(t,r);case la:case ua:case fa:case da:case pa:case ga:case ba:case ha:case ya:return Qo(t,r);case ea:return new n;case ra:case aa:return new n(t);case na:return Zo(t);case oa:return new n;case ia:return Jo(t)}}function _a(t){return typeof t.constructor=="function"&&!q(t)?er(et(t)):{}}var va="[object Map]";function Ta(t){return j(t)&&nt(t)==va}var Mt=P&&P.isMap,$a=Mt?X(Mt):Ta;const wa=$a;var ja="[object Set]";function xa(t){return j(t)&&nt(t)==ja}var Ut=P&&P.isSet,Oa=Ut?X(Ut):xa;const Sa=Oa;var Aa=1,Pa=2,Ia=4,se="[object Arguments]",Ca="[object Array]",Ea="[object Boolean]",Fa="[object Date]",Ma="[object Error]",ce="[object Function]",Ua="[object GeneratorFunction]",Na="[object Map]",Da="[object Number]",le="[object Object]",Ba="[object RegExp]",La="[object Set]",Ga="[object String]",za="[object Symbol]",Ra="[object WeakMap]",Va="[object ArrayBuffer]",Ha="[object DataView]",Ka="[object Float32Array]",Wa="[object Float64Array]",Ya="[object Int8Array]",qa="[object Int16Array]",Xa="[object Int32Array]",Za="[object Uint8Array]",Ja="[object Uint8ClampedArray]",Qa="[object Uint16Array]",ka="[object Uint32Array]",u={};u[se]=u[Ca]=u[Va]=u[Ha]=u[Ea]=u[Fa]=u[Ka]=u[Wa]=u[Ya]=u[qa]=u[Xa]=u[Na]=u[Da]=u[le]=u[Ba]=u[La]=u[Ga]=u[za]=u[Za]=u[Ja]=u[Qa]=u[ka]=!0;u[Ma]=u[ce]=u[Ra]=!1;function D(t,e,r,n,o,a){var s,l=e&Aa,c=e&Pa,d=e&Ia;if(r&&(s=o?r(t,n,o,a):r(t)),s!==void 0)return s;if(!U(t))return t;var at=x(t);if(at){if(s=Wo(t),!l)return nr(t,s)}else{var A=nt(t),it=A==ce||A==Ua;if(Xt(t))return xo(t,l);if(A==le||A==se||it&&!o){if(s=c||it?{}:_a(t),!l)return c?Fo(t,wo(s,t)):Io(t,$o(s,t))}else{if(!u[A])return o?t:{};s=ma(t,A,l)}}a||(a=new I);var st=a.get(t);if(st)return st;a.set(t,s),Sa(t)?t.forEach(function(h){s.add(D(h,e,r,h,t,a))}):wa(t)&&t.forEach(function(h,v){s.set(v,D(h,e,r,v,t,a))});var ue=d?c?ie:Mo:c?J:Z,ct=at?void 0:ue(t);return gr(ct||t,function(h,v){ct&&(v=h,h=t[v]),Vt(s,v,D(h,e,r,v,t,a))}),s}function ti(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}function ei(t,e){return e.length<2?t:no(t,bo(e,0,-1))}function ri(t,e){return e=k(e,t),t=ei(t,e),t==null||delete t[kt(ti(e))]}function ni(t){return go(t)?void 0:t}var oi=1,ai=2,ii=4,si=io(function(t,e){var r={};if(t==null)return r;var n=!1;e=Bt(e,function(a){return a=k(a,t),n||(n=a.length>1),a}),N(t,ie(t),r),n&&(r=D(r,oi|ai|ii,ni));for(var o=e.length;o--;)ri(r,e[o]);return r});const ci=si,li={props:{profile:Object},components:{Footer:me,Header:fe},setup(t){const e=de({...t.profile});return{form:e,updateProfile:()=>{const n=ci(e.value,"id");ye.Inertia.put(`/profiles/${e.value.id}`,n,{onSuccess:()=>{console.log("Profile updated successfully")}})}}}},ui={class:"container bg-gray-100 mx-auto px-4 py-8 w-[50em]"},fi={class:"text-center"},di=i("h2",{class:"text-2xl font-semibold mb-2"},"Edit Your Profile",-1),pi=i("p",{class:"mb-4"},"All fields are optional and can be left empty if you want.",-1),gi=i("input",{type:"hidden",name:"_method",value:"PUT"},null,-1),bi=i("button",{type:"submit",class:"bg-gray-500 text-white px-4 py-2 rounded"},"Save All",-1),hi=i("h3",{class:"text-xl font-semibold mb-2"},[i("u",null,"Blurbs:")],-1),yi={class:"space-y-4"},mi={class:"flex flex-col"},_i=i("label",{for:"bio",class:"text-lg font-medium mb-2"},"About me:",-1),vi={class:"flex flex-col"},Ti=i("label",{for:"bucket_list",class:"text-lg font-medium mb-2"},"Who I'd like to meet and I would like to do:",-1),$i={class:"flex flex-col"},wi=i("label",{for:"general_interests",class:"text-lg font-medium mb-2"},"What I am interested in:",-1),ji={class:"flex flex-col"},xi=i("label",{for:"music",class:"text-lg font-medium mb-2"},"Music I like to listen to:",-1),Oi={class:"flex flex-col"},Si=i("label",{for:"movies",class:"text-lg font-medium mb-2"},"Movies I like to watch:",-1),Ai={class:"flex flex-col"},Pi=i("label",{for:"series",class:"text-lg font-medium mb-2"},"Series I like to watch",-1),Ii={class:"flex flex-col"},Ci=i("label",{for:"books",class:"text-lg font-medium mb-2"},"Books I like to read:",-1),Ei={class:"flex flex-col"},Fi=i("label",{for:"heroes",class:"text-lg font-medium mb-2"},"My Favourite Heroes:",-1);function Mi(t,e,r,n,o,a){const s=ut("Header"),l=ut("Footer");return he(),pe(be,null,[lt(s),i("div",ui,[i("div",fi,[di,pi,i("form",{onSubmit:e[8]||(e[8]=ge((...c)=>n.updateProfile&&n.updateProfile(...c),["prevent"])),class:"space-y-6"},[gi,bi,hi,i("div",yi,[i("div",mi,[_i,y(i("textarea",{id:"bio","onUpdate:modelValue":e[0]||(e[0]=c=>n.form.bio=c),class:"border border-gray-300 w-full h-32 p-2 rounded"},null,512),[[m,n.form.bio]])]),i("div",vi,[Ti,y(i("textarea",{id:"bucket_list","onUpdate:modelValue":e[1]||(e[1]=c=>n.form.bucket_list=c),class:"border border-gray-300 w-full h-32 p-2 rounded"},null,512),[[m,n.form.bucket_list]])]),i("div",$i,[wi,y(i("textarea",{id:"general_interests","onUpdate:modelValue":e[2]||(e[2]=c=>n.form.general_ineterests=c),class:"border border-gray-300 w-full h-32 p-2 rounded"},null,512),[[m,n.form.general_ineterests]])]),i("div",ji,[xi,y(i("textarea",{id:"music","onUpdate:modelValue":e[3]||(e[3]=c=>n.form.music=c),class:"border border-gray-300 w-full h-32 p-2 rounded"},":",512),[[m,n.form.music]])]),i("div",Oi,[Si,y(i("textarea",{id:"movies","onUpdate:modelValue":e[4]||(e[4]=c=>n.form.movies=c),class:"border border-gray-300 w-full h-32 p-2 rounded"},null,512),[[m,n.form.movies]])]),i("div",Ai,[Pi,y(i("textarea",{id:"series","onUpdate:modelValue":e[5]||(e[5]=c=>n.form.series=c),class:"border border-gray-300 w-full h-32 p-2 rounded"},null,512),[[m,n.form.series]])]),i("div",Ii,[Ci,y(i("textarea",{id:"books","onUpdate:modelValue":e[6]||(e[6]=c=>n.form.books=c),class:"border border-gray-300 w-full h-32 p-2 rounded"},null,512),[[m,n.form.books]])]),i("div",Ei,[Fi,y(i("textarea",{id:"heroes","onUpdate:modelValue":e[7]||(e[7]=c=>n.form.heroes=c),class:"border border-gray-300 w-full h-32 p-2 rounded"},null,512),[[m,n.form.heroes]])])])],32)])]),lt(l)],64)}const Gi=_e(li,[["render",Mi]]);export{Gi as default};
