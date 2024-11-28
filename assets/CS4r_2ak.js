import{X as V,C as z,_ as B,U as D,a as E,G as T,b as q}from"./BqQtgOkm.js";import{G as M,M as N,B as U,a as P,_ as G}from"./BGy3p6p7.js";import{_ as A}from"./Djune2Ek.js";import{P as I}from"./DNRzGuVU.js";import{o as g,c as b,a as e,r as h,d as r,b as s,u as o,e as O,F as _,f as x,g as R,h as F,v as H,w as l,t as p,i as W,n as X}from"./CvBTzudG.js";import{_ as J,B as K}from"./3VkRFFZV.js";import{_ as Q}from"./DRaT8n5z.js";import{D as Y}from"./BTHZDg2o.js";import{c as Z,S as ee}from"./BNnNSrQZ.js";import"./CFlTN1_x.js";/**
 * @license lucide-vue-next v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=Z("PenLineIcon",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]),se={type:"button",class:"py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none","aria-haspopup":"dialog","aria-expanded":"false","aria-controls":"hs-slide-down-animation-modal","data-hs-overlay":"#hs-slide-down-animation-modal"},ae={id:"hs-slide-down-animation-modal",class:"hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none",role:"dialog",tabindex:"-1","aria-labelledby":"hs-slide-down-animation-modal-label"},re={class:"hs-overlay-animation-target hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"},le={class:"flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70"},ne={class:"flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700"},oe={id:"hs-slide-down-animation-modal-label",class:"font-bold text-gray-800 dark:text-white"},ie={class:"flex justify-end items-center gap-2 py-3 px-4 border-t dark:border-neutral-700"},de={__name:"DsModal",setup(k){return(i,a)=>(g(),b(_,null,[e("button",se,[h(i.$slots,"buttonLabel",{},()=>[a[0]||(a[0]=r(" Create Data "))]),s(o(I),{class:"shrink-0 size-4"})]),e("div",ae,[e("div",re,[e("div",le,[e("div",ne,[e("h3",oe,[h(i.$slots,"modalTitle",{},()=>[a[1]||(a[1]=r(" Modal title "))])]),a[2]||(a[2]=O('<button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-slide-down-animation-modal"><span class="sr-only">Close</span><svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>',1))]),h(i.$slots,"modalContent",{},()=>[a[3]||(a[3]=e("div",{class:"p-4 overflow-y-auto"},[e("p",{class:"mt-1 text-gray-800 dark:text-neutral-400"}," This is a wider card with supporting text below as a natural lead-in to additional content. ")],-1))]),e("div",ie,[h(i.$slots,"drawerButtons",{},()=>[a[4]||(a[4]=e("button",{type:"button",class:"py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700","data-hs-overlay":"#hs-slide-down-animation-modal"}," Cancel ",-1)),a[5]||(a[5]=e("button",{type:"button",class:"py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"}," Save ",-1))])])])])])],64))}},ue={class:"relative inline-block"},ce={class:"peer-checked:text-white text-amber-500 w-6 h-6 absolute top-0.5 left-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500"},pe={class:"peer-checked:text-green-600 text-white w-6 h-6 absolute top-0.5 right-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500"},xe={__name:"DsToggleSwitch",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(k,{emit:i}){const a=k,v=i,m=x(a.modelValue);return R(m,u=>v("update:modelValue",u)),(u,c)=>(g(),b("div",ue,[F(e("input",{type:"checkbox",id:"hs-default-switch-with-icons",class:"peer relative w-[3.25rem] h-7 p-px bg-amber-400 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-600 before:inline-block before:size-6 before:bg-white checked:before:bg-green-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-green-200","onUpdate:modelValue":c[0]||(c[0]=f=>m.value=f)},null,512),[[H,m.value]]),c[1]||(c[1]=e("label",{for:"hs-default-switch-with-icons",class:"sr-only"},"Switch Status",-1)),e("span",ce,[s(o(V),{class:"shrink-0 w-3 h-3"})]),e("span",pe,[s(o(z),{class:"shrink-0 w-3 h-3"})])]))}},me={class:"hs-accordion-group p-3 w-full flex flex-col flex-wrap","data-hs-accordion-always-open":""},ge={class:"flex flex-col space-y-1"},be={class:"flex flex-col xl:flex-row gap-4"},fe={class:"w-full xl:max-w-md bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"},ye={class:"relative"},he={class:"absolute right-4 top-4"},ke={class:"inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white"},ve={class:"p-4 space-y-5"},we={class:"flex justify-between items-start"},_e={class:"w-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"},Se={class:"flex items-center justify-between p-4 border-b border-gray-200"},Ce={class:"p-4"},Le={class:"flex flex-col gap-6"},je={class:"space-y-1"},$e={class:"mt-4 hidden"},Ve={class:"space-y-1"},ze={class:"p-4"},Be={class:"flex flex-col"},De={class:"-m-1.5 overflow-x-auto"},Ee={class:"p-1.5 min-w-full inline-block align-middle"},Te={class:"overflow-hidden"},qe={class:"min-w-full divide-y divide-gray-200 dark:divide-neutral-700"},Me={class:"divide-y divide-gray-200 dark:divide-neutral-700"},Ne={class:"hidden px-6 py-4 whitespace-nowrap text-sm font-medium uppercase text-gray-800 dark:text-neutral-200"},Ue={class:"px-6 py-4 whitespace-nowrap text-sm font-medium uppercase text-gray-800 dark:text-neutral-200"},Pe={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"},Ge={class:"flex items-center gap-3"},Ae={class:"inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white"},Ie={class:"px-6 py-4 whitespace-nowrap text-end text-sm font-medium"},Ze={__name:"details",setup(k){const i=x([{title:"Courses",href:"./"},{title:"Details"}]),a=x([{id:1,type:"Prerequisite",subject:"English Communication Skills",tag:"ENG 101",status:!0},{id:2,type:"Co-requisite",subject:"Introduction to English Language Studies",tag:"ELS 101",status:!1},{id:3,type:"Substitute",subject:"Elementary Communication Skills",tag:"ELC 101",status:!1}]),v=(S,t)=>{const y=a.value.find(w=>w.id===S);y&&(y.status=t)},m=[{label:"Prerequisite",value:"prerequisite"},{label:"Co-Requisite",value:"corequisite"},{label:"Substitute",value:"substitute"}],u=x(null),c=x(["Basic Algebra","Natural Science","Computer Programming","English Literature"]),f=x(null);return(S,t)=>{const y=B,w=G,d=A,C=E,L=de,j=q;return g(),b(_,null,[s(y,null,{pageTitle:l(()=>[s(Q,{items:i.value},null,8,["items"])]),_:1}),s(C,{"app-name":"Course Management System"},{appLogo:l(()=>[s(w,{className:"size-16"})]),menu:l(()=>[e("nav",me,[e("ul",ge,[e("li",null,[s(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms"},{default:l(()=>[s(o(M),{class:"shrink-0 size-4"}),t[2]||(t[2]=r(" Analytics "))]),_:1})]),e("li",null,[s(d,{class:"flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white",to:"/cms/courses"},{default:l(()=>[s(o(ee),{class:"shrink-0 size-4"}),t[3]||(t[3]=r(" Courses "))]),_:1})]),e("li",null,[s(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/course-offerings"},{default:l(()=>[s(o(N),{class:"shrink-0 size-4"}),t[4]||(t[4]=r(" Course Offerings "))]),_:1})]),e("li",null,[s(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/program-offerings"},{default:l(()=>[s(o(U),{class:"shrink-0 size-4"}),t[5]||(t[5]=r(" Program Offerings "))]),_:1})]),e("li",null,[s(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/curricula"},{default:l(()=>[s(o(P),{class:"shrink-0 size-4"}),t[6]||(t[6]=r(" Curricula "))]),_:1})]),e("li",null,[s(d,{class:"w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300",to:"/cms/block-sections"},{default:l(()=>[s(o(D),{class:"shrink-0 size-4"}),t[7]||(t[7]=r(" Block Sections "))]),_:1})])])])]),_:1}),s(j,null,{mainContent:l(()=>[e("div",be,[e("div",fe,[e("div",ye,[t[9]||(t[9]=e("img",{class:"w-full object-cover h-32",src:J,alt:"Blog Image"},null,-1)),e("div",he,[e("span",ke,[s(o(K),{class:"shrink-0 size-3.5"}),t[8]||(t[8]=r(" Lecture "))])])]),e("div",ve,[e("div",we,[t[11]||(t[11]=e("div",{class:"space-y-2"},[e("p",{class:"text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"},"English Department"),e("div",{class:"flex items-center gap-3"},[e("span",{class:"inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white"}," ELS 102 "),e("h3",{class:"font-semibold text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white"}," Structure of English ")])],-1)),s(d,{to:"edit-details",class:"py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"},{default:l(()=>[s(o(te),{class:"shrink-0 size-4"}),t[10]||(t[10]=r(" Edit "))]),_:1})]),t[12]||(t[12]=e("p",{class:"text-sm text-gray-600 mt-3"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam eligendi adipisci.",-1)),t[13]||(t[13]=e("div",{class:"w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"},[e("ul",{class:"min-w-full flex flex-col divide-y divide-gray-200 dark:divide-neutral-700 *:inline-flex *:items-center *:justify-between *:gap-3 *:py-3 *:px-4"},[e("li",null,[e("span",{class:"text-sm font-medium text-gray-800 dark:text-neutral-800"},"Lecture Unit:"),e("span",{class:"text-sm text-gray-600 truncate dark:text-neutral-200"},"2")]),e("li",null,[e("span",{class:"text-sm font-medium text-gray-800 dark:text-neutral-800"},"Lecture Hours:"),e("span",{class:"text-sm text-gray-600 truncate dark:text-neutral-200"},"1")]),e("li",null,[e("span",{class:"text-sm font-medium text-gray-800 dark:text-neutral-800"},"Lecture Faculty Unit:"),e("span",{class:"text-sm text-gray-600 truncate dark:text-neutral-200"},"2")])])],-1)),t[14]||(t[14]=e("div",{class:"w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"},[e("ul",{class:"min-w-full flex flex-col divide-y divide-gray-200 dark:divide-neutral-700 *:inline-flex *:items-center *:justify-between *:gap-3 *:py-3 *:px-4"},[e("li",null,[e("span",{class:"text-sm font-medium text-gray-800 dark:text-neutral-800"},"Laboratory Unit:"),e("span",{class:"text-sm text-gray-600 truncate dark:text-neutral-200"},"3")]),e("li",null,[e("span",{class:"text-sm font-medium text-gray-800 dark:text-neutral-800"},"Laboratory Hours:"),e("span",{class:"text-sm text-gray-600 truncate dark:text-neutral-200"},"3")]),e("li",null,[e("span",{class:"text-sm font-medium text-gray-800 dark:text-neutral-800"},"Laboratory Type:"),e("span",{class:"text-sm text-gray-600 truncate dark:text-neutral-200"},"---")]),e("li",null,[e("span",{class:"text-sm font-medium text-gray-800 dark:text-neutral-800"},"Laboratory Faculty Unit:"),e("span",{class:"text-sm text-gray-600 truncate dark:text-neutral-200"},"3")])])],-1)),t[15]||(t[15]=e("div",{class:"w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"},[e("ul",{class:"min-w-full flex flex-col divide-y divide-gray-200 dark:divide-neutral-700 *:inline-flex *:items-center *:justify-between *:gap-3 *:py-3 *:px-4"},[e("li",null,[e("span",{class:"text-sm font-medium text-gray-800 dark:text-neutral-800"},"Grade Type:"),e("span",{class:"text-sm text-gray-600 truncate dark:text-neutral-200"},"Points")]),e("li",null,[e("span",{class:"text-sm font-medium text-gray-800 dark:text-neutral-800"},"Week Duration:"),e("span",{class:"text-sm text-gray-600 truncate dark:text-neutral-200"},"5")])])],-1))])]),e("div",_e,[e("div",Se,[t[20]||(t[20]=e("h3",{class:"font-semibold text-gray-800"}," Course Requirements ",-1)),s(L,null,{buttonLabel:l(()=>t[16]||(t[16]=[r(" New Requirement ")])),modalTitle:l(()=>t[17]||(t[17]=[r(" New Requirement ")])),modalContent:l(()=>[e("div",Ce,[e("div",Le,[e("div",je,[t[18]||(t[18]=e("label",{class:"block text-sm font-medium mb-2 dark:text-white"},[e("span",{class:"text-red-600"},"*"),r("Type:")],-1)),s(Y,{items:m,groupName:"userSelection",modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=n=>u.value=n)},null,8,["modelValue"]),e("p",$e,"Selected: "+p(u.value),1)]),e("div",Ve,[t[19]||(t[19]=e("label",{class:"block text-sm font-medium mb-2 dark:text-white"},[e("span",{class:"text-red-600"},"*"),r("Subject:")],-1)),s(T,{modelValue:f.value,"onUpdate:modelValue":t[1]||(t[1]=n=>f.value=n),options:c.value,placeholder:"Select Subject"},null,8,["modelValue","options"])])])])]),_:1})]),e("div",ze,[e("div",Be,[e("div",De,[e("div",Ee,[e("div",Te,[e("table",qe,[t[21]||(t[21]=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"hidden px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"}," ID"),e("th",{scope:"col",class:"px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"}," Type"),e("th",{scope:"col",class:"px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"}," Subject"),e("th",{scope:"col",class:"px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"}," Status"),e("th",{scope:"col",class:"px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"}," Action")])],-1)),e("tbody",Me,[(g(!0),b(_,null,W(a.value,n=>(g(),b("tr",{key:n.id},[e("td",Ne,p(n.id),1),e("td",Ue,p(n.type),1),e("td",Pe,[e("div",Ge,[e("span",Ae,p(n.tag),1),r(" "+p(n.subject),1)])]),e("td",{class:X(["px-6 py-4 whitespace-nowrap text-sm dark:text-neutral-200",n.status?"text-green-500":"text-amber-500"])},p(n.status?"Active":"Suspended"),3),e("td",Ie,[s(xe,{modelValue:n.status,"onUpdate:modelValue":$=>v(n.id,$)},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])])])])])])])])])]),_:1})],64)}}};export{Ze as default};
