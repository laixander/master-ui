import{_ as n,o as l,c as d,F as m,i as c,a as r,h as f,y as g,t as b}from"./CvBTzudG.js";const p={props:{items:{type:Array,required:!0,validator(e){return e.length>=2}},groupName:{type:String,required:!0},modelValue:{type:[String,Number],default:null}},computed:{selectedValue:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}}},x={class:"flex flex-col sm:flex-row"},_={class:"relative flex items-start w-full"},k={class:"flex items-center h-5"},h=["id","name","value","disabled"],y=["for"];function v(e,o,t,V,w,u){return l(),d("ul",x,[(l(!0),d(m,null,c(t.items,(a,s)=>(l(),d("li",{key:s,class:"w-full inline-flex items-center gap-x-2.5 py-2 px-3 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"},[r("div",_,[r("div",k,[f(r("input",{id:`${t.groupName}-item-${s}`,name:t.groupName,type:"radio",value:a.value,"onUpdate:modelValue":o[0]||(o[0]=i=>u.selectedValue=i),disabled:a.disabled||!1,class:"border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"},null,8,h),[[g,u.selectedValue]])]),r("label",{for:`${t.groupName}-item-${s}`,class:"ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500"},b(a.label),9,y)])]))),128))])}const D=n(p,[["render",v]]);export{D};