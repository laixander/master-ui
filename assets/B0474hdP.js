import{_ as m,a as g,b as y}from"./DoQMwojH.js";import{_}from"./CGMJUDf1.js";import{_ as x}from"./D65Gmg2j.js";import{s as r,o as d,c as p,h as v,n as h,b as o,w as n,d as i,u as B,F as w}from"./D9bQWTo4.js";import{m as k}from"./KBW82MDn.js";import"./FCK28RRG.js";import"./CaratvA7.js";import"./CUXnjQBr.js";import"./6oj77RWt.js";import"./Bh-AGMKk.js";import"./UZ7DkShg.js";const C={__name:"Button",props:{solid:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1},soft:{type:Boolean,default:!1},white:{type:Boolean,default:!1},link:{type:Boolean,default:!1},sm:{type:Boolean,default:!1},lg:{type:Boolean,default:!1},block:{type:Boolean,default:!1},pilled:{type:Boolean,default:!1}},setup(e){const a=e,t=r(()=>a.sm?"py-2 px-3":a.lg?"p-4 sm:p-5":"py-3 px-4"),l=r(()=>a.pilled?"rounded-full":"rounded-lg");return(s,u)=>(d(),p("button",{type:"button",class:h([t.value,l.value,"inline-flex items-center gap-x-2 text-sm font-medium border",e.solid&&"border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none",e.outline&&"border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none",e.ghost&&"border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:bg-blue-100 focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none",e.soft&&"border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none",e.white&&"border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none",e.link&&"border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none",e.block&&"w-full justify-center"])},[v(s.$slots,"default")],2))}},j={__name:"index",setup(e){return(a,t)=>{const l=m,s=_,u=x,b=g,f=C,c=y;return d(),p(w,null,[o(l,null,{pageTitle:n(()=>t[0]||(t[0]=[i(" Analytics ")])),_:1}),o(b,{"app-name":"Course Management System"},{appLogo:n(()=>[o(s,{className:"size-16"})]),menu:n(()=>[o(u,{"menu-items":B(k)},null,8,["menu-items"])]),_:1}),o(c,null,{mainContent:n(()=>[o(f,{icon:""},{default:n(()=>t[1]||(t[1]=[i("Red Solid Button")])),_:1})]),_:1})],64)}}};export{j as default};