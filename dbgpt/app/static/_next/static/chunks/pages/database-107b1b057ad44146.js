(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5498],{55286:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/database",function(){return l(99473)}])},26892:function(e,s,l){"use strict";var t=l(85893),a=l(67294),r=l(66309),n=l(83062),i=l(94184),d=l.n(i),c=l(25675),o=l.n(c);s.Z=(0,a.memo)(function(e){let{icon:s,iconBorder:l=!0,title:i,desc:c,tags:m,children:u,disabled:x,operations:b,className:p,...h}=e,f=(0,a.useMemo)(()=>s?"string"==typeof s?(0,t.jsx)(o(),{className:d()("w-11 h-11 rounded-full mr-4 object-contain bg-white",{"border border-gray-200":l}),width:44,height:44,src:s,alt:i}):s:null,[s]),j=(0,a.useMemo)(()=>m&&m.length?(0,t.jsx)("div",{className:"flex items-center mt-1 flex-wrap",children:m.map((e,s)=>{var l;return"string"==typeof e?(0,t.jsx)(r.Z,{className:"text-xs",bordered:!1,color:"default",children:e},s):(0,t.jsx)(r.Z,{className:"text-xs",bordered:null!==(l=e.border)&&void 0!==l&&l,color:e.color,children:e.text},s)})}):null,[m]);return(0,t.jsxs)("div",{className:d()("group/card relative flex flex-col w-72 rounded justify-between text-black bg-white shadow-[0_8px_16px_-10px_rgba(100,100,100,.08)] hover:shadow-[0_14px_20px_-10px_rgba(100,100,100,.15)] dark:bg-[#232734] dark:text-white dark:hover:border-white transition-[transfrom_shadow] duration-300 hover:-translate-y-1 min-h-fit",{"grayscale cursor-no-drop":x,"cursor-pointer":!x&&!!h.onClick},p),...h,children:[(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsxs)("div",{className:"flex items-center",children:[f,(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("h2",{className:"text-sm font-semibold",children:i}),j]})]}),c&&(0,t.jsx)(n.Z,{title:c,children:(0,t.jsx)("p",{className:"mt-2 text-sm text-gray-500 font-normal line-clamp-2",children:c})})]}),(0,t.jsxs)("div",{children:[u,b&&!!b.length&&(0,t.jsx)("div",{className:"flex flex-wrap items-center justify-center border-t border-solid border-gray-100 dark:border-theme-dark",children:b.map((e,s)=>(0,t.jsx)(n.Z,{title:e.label,children:(0,t.jsxs)("div",{className:"relative flex flex-1 items-center justify-center h-11 text-gray-400 hover:text-blue-500 transition-colors duration-300 cursor-pointer",onClick:s=>{var l;s.stopPropagation(),null===(l=e.onClick)||void 0===l||l.call(e)},children:[e.children,s<b.length-1&&(0,t.jsx)("div",{className:"w-[1px] h-6 absolute top-2 right-0 bg-gray-100 rounded dark:bg-theme-dark"})]})},"operation-".concat(s)))})]})]})})},45247:function(e,s,l){"use strict";var t=l(85893),a=l(50888);s.Z=function(e){let{visible:s}=e;return s?(0,t.jsx)("div",{className:"absolute w-full h-full top-0 left-0 flex justify-center items-center z-10 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm text-3xl animate-fade animate-duration-200",children:(0,t.jsx)(a.Z,{})}):null}},99473:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return C},isFileDb:function(){return k}});var t=l(85893),a=l(67294),r=l(2093),n=l(36147),i=l(2453),d=l(71577),c=l(40411),o=l(85265),m=l(85813),u=l(32983),x=l(39479),b=l(51009),p=l(79531),h=l(48928),f=l(89182),j=l(67421),y=function(e){let{open:s,choiceDBType:l,dbTypeList:r,editValue:c,dbNames:o,onClose:m,onSuccess:u}=e,[y,v]=(0,a.useState)(!1),{t:_}=(0,j.$G)(),[N]=x.Z.useForm(),Z=x.Z.useWatch("db_type",N),g=(0,a.useMemo)(()=>k(r,Z),[r,Z]);(0,a.useEffect)(()=>{l&&N.setFieldValue("db_type",l)},[l]),(0,a.useEffect)(()=>{c&&N.setFieldsValue({...c})},[c]),(0,a.useEffect)(()=>{s||N.resetFields()},[s]);let w=async e=>{let{db_host:s,db_path:l,db_port:t,...a}=e;if(!c&&o.some(e=>e===a.db_name)){i.ZP.error("The database already exists!");return}let r={db_host:g?void 0:s,db_port:g?void 0:t,file_path:g?l:void 0,...a};v(!0);try{let[e]=await(0,f.Vx)((0,f.KS)(r));if(e)return;let[s]=await(0,f.Vx)((c?f.mR:f.b_)(r));if(s){i.ZP.error(s.message);return}i.ZP.success("success"),null==u||u()}catch(e){i.ZP.error(e.message)}finally{v(!1)}},C=(0,a.useMemo)(()=>!!c||!!l,[c,l]);const isRequired=['hive'].every(item=>item!==Z);return(0,t.jsx)(n.default,{open:s,width:400,title:_(c?"Edit":"create_database"),maskClosable:!1,footer:null,onCancel:m,children:(0,t.jsxs)(x.Z,{form:N,className:"pt-2",labelCol:{span:6},labelAlign:"left",onFinish:w,children:[(0,t.jsx)(x.Z.Item,{name:"db_type",label:"DB Type",className:"mb-3",rules:[{required:!0}],children:(0,t.jsx)(b.default,{"aria-readonly":C,disabled:C,options:r})}),(0,t.jsx)(x.Z.Item,{name:"db_name",label:"DB Name",className:"mb-3",rules:[{required:!0}],children:(0,t.jsx)(p.default,{readOnly:!!c,disabled:!!c})}),!0===g&&(0,t.jsx)(x.Z.Item,{name:"db_path",label:"Path",className:"mb-3",rules:[{required:!0}],children:(0,t.jsx)(p.default,{})}),!1===g&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.Z.Item,{name:"db_user",label:"Username",className:"mb-3",rules:isRequired?[{required:!0}]:[],children:(0,t.jsx)(p.default,{})}),(0,t.jsx)(x.Z.Item,{name:"db_pwd",label:"Password",className:"mb-3",rules:isRequired?[{required:!0}]:[],children:(0,t.jsx)(p.default,{type:"password"})}),(0,t.jsx)(x.Z.Item,{name:"db_host",label:"Host",className:"mb-3",rules:[{required:!0}],children:(0,t.jsx)(p.default,{})}),(0,t.jsx)(x.Z.Item,{name:"db_port",label:"Port",className:"mb-3",rules:[{required:!0}],children:(0,t.jsx)(h.Z,{min:1,step:1,max:65535})})]}),(0,t.jsx)(x.Z.Item,{name:"comment",label:"Remark",className:"mb-3",children:(0,t.jsx)(p.default,{})}),(0,t.jsxs)(x.Z.Item,{className:"flex flex-row-reverse pt-1 mb-0",children:[(0,t.jsx)(d.ZP,{htmlType:"submit",type:"primary",size:"middle",className:"mr-1",loading:y,children:"Save"}),(0,t.jsx)(d.ZP,{size:"middle",onClick:m,children:"Cancel"})]})]})})},v=l(24969),_=l(36531),N=l(27704),Z=l(45247),g=l(98399),w=l(26892);function k(e,s){var l;return null===(l=e.find(e=>e.value===s))||void 0===l?void 0:l.isFileDb}var C=function(){var e;let{t:s}=(0,j.$G)(),[l,x]=(0,a.useState)([]),[b,p]=(0,a.useState)([]),[h,k]=(0,a.useState)(!1),[C,P]=(0,a.useState)({open:!1}),[E,S]=(0,a.useState)({open:!1}),F=async()=>{let[,e]=await(0,f.Vx)((0,f.Jm)());p(null!=e?e:[])},T=async()=>{k(!0);let[,e]=await(0,f.Vx)((0,f.Bw)());x(null!=e?e:[]),k(!1)},I=(0,a.useMemo)(()=>{let e=b.map(e=>{let{db_type:s,is_file_db:l}=e;return{...g.S$[s],value:s,isFileDb:l}}),s=Object.keys(g.S$).filter(s=>!e.some(e=>e.value===s)).map(e=>({...g.S$[e],value:g.S$[e].label,disabled:!0}));return[...e,...s]},[b]),D=e=>{P({open:!0,info:e})},V=e=>{n.default.confirm({title:"Tips",content:"Do you Want to delete the ".concat(e.db_name,"?"),onOk:()=>new Promise(async(s,l)=>{try{let[t]=await(0,f.Vx)((0,f.J5)(e.db_name));if(t){i.ZP.error(t.message),l();return}i.ZP.success("success"),T(),s()}catch(e){l()}})})},q=(0,a.useMemo)(()=>{let e=I.reduce((e,s)=>(e[s.value]=l.filter(e=>e.db_type===s.value),e),{});return e},[l,I]);(0,r.Z)(async()=>{await T(),await F()},[]);let M=e=>{let s=l.filter(s=>s.db_type===e.value);S({open:!0,dbList:s,name:e.label,type:e.value})};return(0,t.jsxs)("div",{className:"relative p-4 md:p-6 min-h-full overflow-y-auto",children:[(0,t.jsx)(Z.Z,{visible:h}),(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(d.ZP,{type:"primary",className:"flex items-center",icon:(0,t.jsx)(v.Z,{}),onClick:()=>{P({open:!0})},children:s("create")})}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2 md:gap-4",children:I.map(s=>(0,t.jsx)(c.Z,{count:q[s.value].length,className:"min-h-fit",children:(0,t.jsx)(w.Z,{className:"h-full",title:s.label,desc:null!==(e=s.desc)&&void 0!==e?e:"",disabled:s.disabled,icon:s.icon,onClick:()=>{s.disabled||M(s)}})},s.value))}),(0,t.jsx)(y,{open:C.open,dbTypeList:I,choiceDBType:C.dbType,editValue:C.info,dbNames:l.map(e=>e.db_name),onSuccess:()=>{P({open:!1}),T()},onClose:()=>{P({open:!1})}}),(0,t.jsx)(o.Z,{title:E.name,placement:"right",onClose:()=>{S({open:!1})},open:E.open,children:E.type&&q[E.type]&&q[E.type].length?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.ZP,{type:"primary",className:"mb-4 flex items-center",icon:(0,t.jsx)(v.Z,{}),onClick:()=>{P({open:!0,dbType:E.type})},children:"Create"}),q[E.type].map(e=>(0,t.jsxs)(m.Z,{title:e.db_name,extra:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_.Z,{className:"mr-2",style:{color:"#1b7eff"},onClick:()=>{D(e)}}),(0,t.jsx)(N.Z,{style:{color:"#ff1b2e"},onClick:()=>{V(e)}})]}),className:"mb-4",children:[e.db_path?(0,t.jsxs)("p",{children:["path: ",e.db_path]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["host: ",e.db_host]}),(0,t.jsxs)("p",{children:["username: ",e.db_user]}),(0,t.jsxs)("p",{children:["port: ",e.db_port]})]}),(0,t.jsxs)("p",{children:["remark: ",e.comment]})]},e.db_name))]}):(0,t.jsx)(u.Z,{image:u.Z.PRESENTED_IMAGE_DEFAULT,children:(0,t.jsx)(d.ZP,{type:"primary",className:"flex items-center mx-auto",icon:(0,t.jsx)(v.Z,{}),onClick:()=>{P({open:!0,dbType:E.type})},children:"Create Now"})})})]})}}},function(e){e.O(0,[2185,5503,9479,1009,4442,5813,411,8928,7902,9774,2888,179],function(){return e(e.s=55286)}),_N_E=e.O()}]);