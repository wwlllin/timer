import{u as ne}from"./settings-8cb7d8e9.js";import{p as R,I as x,a4 as ue,m as W,a5 as se,B as re,q as P,W as F,H as T,c as i,a6 as ie,a7 as de,K as v,v as B,f as t,o as ce,a8 as fe,a9 as H,r as ve,X,R as h,x as me,Y as ye,Q as U,aa as Ve,ab as be,ac as Ce,ad as A,L as ge,J as Se,ae as _e,n as Ie,af as ke,s as he,d as G,$ as Re,h as V,V as pe,u as w,ag as M,i as d,e as J,a1 as xe,t as Pe,ah as Be,ai as Ae}from"./index-85c0dfa4.js";import{a as p,V as Ge}from"./VRow-9d6bf952.js";import{V as Y,b as we,c as K,d as $e}from"./VInput-f8553875.js";const Fe=(e,u)=>{const s=e.__vccOpts||e;for(const[l,o]of u)s[l]=o;return s};const z=Symbol.for("vuetify:selection-control-group"),D=R({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:x,trueIcon:x,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:ue},...W(),...se(),...re()},"SelectionControlGroup"),Te=R({...D({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Ue=P()({name:"VSelectionControlGroup",props:Te(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:s}=u;const l=F(e,"modelValue"),o=T(),m=i(()=>e.id||`v-selection-control-group-${o}`),n=i(()=>e.name||m.value),a=new Set;return ie(z,{modelValue:l,forceUpdate:()=>{a.forEach(r=>r())},onForceUpdate:r=>{a.add(r),ce(()=>{a.delete(r)})}}),de({[e.defaultsTarget]:{color:v(e,"color"),disabled:v(e,"disabled"),density:v(e,"density"),error:v(e,"error"),inline:v(e,"inline"),modelValue:l,multiple:i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:n,falseIcon:v(e,"falseIcon"),trueIcon:v(e,"trueIcon"),readonly:v(e,"readonly"),ripple:v(e,"ripple"),type:v(e,"type"),valueComparator:v(e,"valueComparator")}}),B(()=>{var r;return t("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(r=s.default)==null?void 0:r.call(s)])}),{}}}),Z=R({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...W(),...D()},"VSelectionControl");function De(e){const u=be(z,void 0),{densityClasses:s}=Ce(e),l=F(e,"modelValue"),o=i(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),m=i(()=>e.falseValue!==void 0?e.falseValue:!1),n=i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=i({get(){const c=u?u.modelValue.value:l.value;return n.value?A(c).some(f=>e.valueComparator(f,o.value)):e.valueComparator(c,o.value)},set(c){if(e.readonly)return;const f=c?o.value:m.value;let y=f;n.value&&(y=c?[...A(l.value),f]:A(l.value).filter(g=>!e.valueComparator(g,o.value))),u?u.modelValue.value=y:l.value=y}}),{textColorClasses:r,textColorStyles:S}=ge(i(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:_,backgroundColorStyles:b}=Se(i(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),C=i(()=>a.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:s,trueValue:o,falseValue:m,model:a,textColorClasses:r,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,icon:C}}const ee=P()({name:"VSelectionControl",directives:{Ripple:fe},inheritAttrs:!1,props:Z(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:s,slots:l}=u;const{group:o,densityClasses:m,icon:n,model:a,textColorClasses:r,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,trueValue:C}=De(e),c=T(),f=i(()=>e.id||`input-${c}`),y=H(!1),g=H(!1),I=ve();o==null||o.onForceUpdate(()=>{I.value&&(I.value.checked=a.value)});function N(k){y.value=!0,_e(k.target,":focus-visible")!==!1&&(g.value=!0)}function E(){y.value=!1,g.value=!1}function le(k){e.readonly&&o&&Ie(()=>o.forceUpdate()),a.value=k.target.checked}return B(()=>{var j,q;const k=l.label?l.label({label:e.label,props:{for:f.value}}):e.label,[ae,te]=X(s),L=t("input",h({ref:I,checked:a.value,disabled:!!(e.readonly||e.disabled),id:f.value,onBlur:E,onFocus:N,onInput:le,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:C.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},te),null);return t("div",h({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":y.value,"v-selection-control--focus-visible":g.value,"v-selection-control--inline":e.inline},m.value,e.class]},ae,{style:e.style}),[t("div",{class:["v-selection-control__wrapper",r.value],style:S.value},[(j=l.default)==null?void 0:j.call(l,{backgroundColorClasses:_,backgroundColorStyles:b}),me(t("div",{class:["v-selection-control__input"]},[((q=l.input)==null?void 0:q.call(l,{model:a,textColorClasses:r,textColorStyles:S,backgroundColorClasses:_,backgroundColorStyles:b,inputNode:L,icon:n.value,props:{onFocus:N,onBlur:E,id:f.value}}))??t(U,null,[n.value&&t(Ve,{key:"icon",icon:n.value},null),L])]),[[ye("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),k&&t(Y,{for:f.value,clickable:!0,onClick:oe=>oe.stopPropagation()},{default:()=>[k]})])}),{isFocused:y,input:I}}}),Oe=R({...Z({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),$=P()({name:"VRadio",props:Oe(),setup(e,u){let{slots:s}=u;return B(()=>t(ee,h(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)),{}}});const Ne=R({height:{type:[Number,String],default:"auto"},...we(),...ke(D(),["multiple"]),trueIcon:{type:x,default:"$radioOn"},falseIcon:{type:x,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),Q=P()({name:"VRadioGroup",inheritAttrs:!1,props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:s,slots:l}=u;const o=T(),m=i(()=>e.id||`radio-group-${o}`),n=F(e,"modelValue");return B(()=>{const[a,r]=X(s),S=K.filterProps(e),_=ee.filterProps(e),b=l.label?l.label({label:e.label,props:{for:m.value}}):e.label;return t(K,h({class:["v-radio-group",e.class],style:e.style},a,S,{modelValue:n.value,"onUpdate:modelValue":C=>n.value=C,id:m.value}),{...l,default:C=>{let{id:c,messagesId:f,isDisabled:y,isReadonly:g}=C;return t(U,null,[b&&t(Y,{id:c.value},{default:()=>[b]}),t(Ue,h(_,{id:c.value,"aria-describedby":f.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:y.value,readonly:g.value,"aria-labelledby":b?c.value:void 0,multiple:!1},r,{modelValue:n.value,"onUpdate:modelValue":I=>n.value=I}),l)])}})}),{}}}),O=e=>(Be("data-v-17a3971a"),e=e(),Ae(),e),Ee=O(()=>d("h3",{class:"text-primary"},"通知設定",-1)),Le=O(()=>d("h3",{class:"text-primary"},"鈴聲設定",-1)),je=O(()=>d("thead",null,[d("tr",null,[d("th",null,"名稱"),d("th",null,"試聽"),d("th",null,"選擇")])],-1)),qe=["src"],He={__name:"SettingsView",setup(e){const u=ne(),{alarms:s,selectedAlarm:l,notify:o}=he(u);return(m,n)=>(G(),Re(pe,null,{default:V(()=>[t(Ge,null,{default:V(()=>[t(p,{cols:"12"},{default:V(()=>[Ee]),_:1}),t(p,{cols:"12"},{default:V(()=>[t(Q,{inline:"",modelValue:w(o),"onUpdate:modelValue":n[0]||(n[0]=a=>M(o)?o.value=a:null),class:"d-flex justify-star"},{default:V(()=>[t($,{label:"開啟",value:!0}),t($,{label:"關閉",value:!1})]),_:1},8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:V(()=>[Le]),_:1}),t(p,{cols:"12"},{default:V(()=>[t($e,null,{default:V(()=>[je,d("tbody",null,[(G(!0),J(U,null,xe(w(s),a=>(G(),J("tr",{key:a.id},[d("td",null,Pe(a.name),1),d("td",null,[d("audio",{src:a.file,controls:""},null,8,qe)]),d("td",null,[t(Q,{modelValue:w(l),"onUpdate:modelValue":n[1]||(n[1]=r=>M(l)?l.value=r:null)},{default:V(()=>[t($,{value:a.id},null,8,["value"])]),_:2},1032,["modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}},We=Fe(He,[["__scopeId","data-v-17a3971a"]]);export{We as default};
