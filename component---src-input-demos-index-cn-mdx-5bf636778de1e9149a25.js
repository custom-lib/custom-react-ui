(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1feu":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n("k0FJ"),l=n("oedh"),r=(n("mXGw"),n("/FXl")),b=n("TjRS"),o=n("ZFoC"),c=n("pl+z"),u=(n("aD51"),["components"]),p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Input/demos/index.cn.mdx"}});var s={_frontmatter:p},i=b.a;function d(e){var t,n,d,m,j,O,f,g,y,h=e.components,N=Object(l.a)(e,u);return Object(r.b)(i,Object(a.a)({},s,N,{components:h,mdxType:"MDXLayout"}),Object(r.b)("h4",{id:"简介"},"简介"),Object(r.b)("p",null,"输入框"),Object(r.b)("h2",{id:"类型"},"类型"),Object(r.b)("p",null,'通过设置 variant 属性为 "standard"(默认) | "outlined" 修改输入框的类型。'),Object(r.b)(o.c,{__position:0,__code:'<Input />\n<Input variant="outlined" />',__scope:(t={props:N,DefaultLayout:b.a,Playground:o.c,Input:c.a},t.DefaultLayout=b.a,t._frontmatter=p,t),mdxType:"Playground"},Object(r.b)(c.a,{mdxType:"Input"}),Object(r.b)(c.a,{variant:"outlined",mdxType:"Input"})),Object(r.b)("br",null),Object(r.b)("h2",{id:"输入提示"},"输入提示"),Object(r.b)("p",null,"通过设置 label 属性 可以为输入框添加输入提示。"),Object(r.b)("p",null,"通过设置 labelBefore 属性 可以分离浮至输入框上边的label和在输入框里边时的label。"),Object(r.b)("p",null,"如果只设置 labelBefore 属性 则相当于浏览器默认input的placeholder属性效果。(placeholder在Input组件类型声明中被移除)"),Object(r.b)(o.c,{__position:2,__code:'<Input label="请输入手机号" />\n<Input variant="outlined" label="请输入手机号" />\n<Input label="手机号" labelBefore="请输入" />\n<Input labelBefore="请输入手机号" />',__scope:(n={props:N,DefaultLayout:b.a,Playground:o.c,Input:c.a},n.DefaultLayout=b.a,n._frontmatter=p,n),mdxType:"Playground"},Object(r.b)(c.a,{label:"请输入手机号",mdxType:"Input"}),Object(r.b)(c.a,{variant:"outlined",label:"请输入手机号",mdxType:"Input"}),Object(r.b)(c.a,{label:"手机号",labelBefore:"请输入",mdxType:"Input"}),Object(r.b)(c.a,{labelBefore:"请输入手机号",mdxType:"Input"})),Object(r.b)("br",null),Object(r.b)("h2",{id:"大小"},"大小"),Object(r.b)("p",null,'通过设置 size 属性为 "合法的css长度单位" 可以改变输入文字大小，输入框整体高度会随之改变(默认20px)。'),Object(r.b)("p",null,'通过设置 size 为符合如下 CustomSize定义的对象可以对大小进一步自定义。(对象的键值也都是 "合法的css长度单位")'),Object(r.b)("p",null,"通过设置 fullWidth 属性为true可以使输入框宽度占满父级(优先级最高)。"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"interface CustomSize {\n    fontSize: number | string,\n    width?: number | string,\n    height?: number | string,\n    padding?: [number | string, number | string] | [number | string, number | string, number | string, number | string];\n}\n")),Object(r.b)(o.c,{__position:4,__code:'<Input size={28} label="请输入手机号" />\n<Input size={{ fontSize: 22 }} label="请输入手机号" />\n<Input\n  variant="outlined"\n  size={{ fontSize: 22, width: \'400px\', height: 60, padding: [16, 24] }}\n  label="请输入手机号"\n/>\n<Input variant="outlined" size={16} fullWidth label="请输入手机号" />',__scope:(d={props:N,DefaultLayout:b.a,Playground:o.c,Input:c.a},d.DefaultLayout=b.a,d._frontmatter=p,d),mdxType:"Playground"},Object(r.b)(c.a,{size:28,label:"请输入手机号",mdxType:"Input"}),Object(r.b)(c.a,{size:{fontSize:22},label:"请输入手机号",mdxType:"Input"}),Object(r.b)(c.a,{variant:"outlined",size:{fontSize:22,width:"400px",height:60,padding:[16,24]},label:"请输入手机号",mdxType:"Input"}),Object(r.b)(c.a,{variant:"outlined",size:16,fullWidth:!0,label:"请输入手机号",mdxType:"Input"})),Object(r.b)("br",null),Object(r.b)("h2",{id:"前置图标"},"前置图标"),Object(r.b)("p",null,"通过 iconBefore 属性 设置Input的前置图标"),Object(r.b)("p",null,"通过 iconInnerBorder 属性， 联动设置 standard 型 Input的前置图标是否包含在下边框内(默认false)， 联动设置 outlined 型 Input的label是否把前置图标包含(默认true)。"),Object(r.b)(o.c,{__position:6,__code:'<Input\n  label="手机号"\n  labelBefore="请输入"\n  iconBefore="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/user.svg"\n/>\n<Input\n  label="手机号"\n  labelBefore="请输入"\n  iconBefore="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/user.svg"\n  iconInnerBorder\n  size={24}\n/>\n<Input\n  variant="outlined"\n  label="手机号"\n  labelBefore="请输入"\n  iconBefore="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/pwd.svg"\n/>\n<Input\n  variant="outlined"\n  label="手机号"\n  labelBefore="请输入"\n  iconBefore="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/pwd.svg"\n  iconInnerBorder={false}\n  size={24}\n/>',__scope:(m={props:N,DefaultLayout:b.a,Playground:o.c,Input:c.a},m.DefaultLayout=b.a,m._frontmatter=p,m),mdxType:"Playground"},Object(r.b)(c.a,{label:"手机号",labelBefore:"请输入",iconBefore:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/user.svg",mdxType:"Input"}),Object(r.b)(c.a,{label:"手机号",labelBefore:"请输入",iconBefore:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/user.svg",iconInnerBorder:!0,size:24,mdxType:"Input"}),Object(r.b)(c.a,{variant:"outlined",label:"手机号",labelBefore:"请输入",iconBefore:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/pwd.svg",mdxType:"Input"}),Object(r.b)(c.a,{variant:"outlined",label:"手机号",labelBefore:"请输入",iconBefore:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/pwd.svg",iconInnerBorder:!1,size:24,mdxType:"Input"})),Object(r.b)("br",null),Object(r.b)("h2",{id:"显示清空按钮"},"显示清空按钮"),Object(r.b)("p",null,"通过设置 clearable 属性为 true，启用后置 清空输入按钮。"),Object(r.b)("p",null,"清空输入按钮在Input处于focus状态，并且有至少一个输入字符时，才会显示出来。"),Object(r.b)(o.c,{__position:8,__code:'<Input clearable />\n<Input variant="outlined" clearable />',__scope:(j={props:N,DefaultLayout:b.a,Playground:o.c,Input:c.a},j.DefaultLayout=b.a,j._frontmatter=p,j),mdxType:"Playground"},Object(r.b)(c.a,{clearable:!0,mdxType:"Input"}),Object(r.b)(c.a,{variant:"outlined",clearable:!0,mdxType:"Input"})),Object(r.b)("br",null),Object(r.b)("h2",{id:"带明密文切换的密码框"},"带明密文切换的密码框"),Object(r.b)("p",null,'当Input是个密码框时，即type属性为 "password" 时， 通过设置 revealable 属性为true， 启用后置 切换明/密文按钮。'),Object(r.b)("p",null,"切换按钮在Input处于focus状态，并且有至少一个输入字符时，才会显示出来。"),Object(r.b)(o.c,{__position:10,__code:'<Input label="密码" labelBefore="请输入" type="password" />\n<Input\n  label="密码"\n  labelBefore="请输入"\n  iconBefore="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/pwd.svg"\n  type="password"\n  revealable\n  clearable\n/>\n<Input\n  variant="outlined"\n  label="密码"\n  labelBefore="请输入"\n  iconBefore="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/pwd.svg"\n  type="password"\n  revealable\n/>\n<Input label="密码" labelBefore="请输入" type="password" revealable />\n<Input\n  variant="outlined"\n  label="密码"\n  labelBefore="请输入"\n  type="password"\n  revealable\n  clearable\n/>',__scope:(O={props:N,DefaultLayout:b.a,Playground:o.c,Input:c.a},O.DefaultLayout=b.a,O._frontmatter=p,O),mdxType:"Playground"},Object(r.b)(c.a,{label:"密码",labelBefore:"请输入",type:"password",mdxType:"Input"}),Object(r.b)(c.a,{label:"密码",labelBefore:"请输入",iconBefore:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/pwd.svg",type:"password",revealable:!0,clearable:!0,mdxType:"Input"}),Object(r.b)(c.a,{variant:"outlined",label:"密码",labelBefore:"请输入",iconBefore:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/pwd.svg",type:"password",revealable:!0,mdxType:"Input"}),Object(r.b)(c.a,{label:"密码",labelBefore:"请输入",type:"password",revealable:!0,mdxType:"Input"}),Object(r.b)(c.a,{variant:"outlined",label:"密码",labelBefore:"请输入",type:"password",revealable:!0,clearable:!0,mdxType:"Input"})),Object(r.b)("br",null),Object(r.b)("h2",{id:"聚焦颜色"},"聚焦颜色"),Object(r.b)("p",null,"通过设置 focusColor 属性改变Input的聚焦颜色(默认#26a69a)。"),Object(r.b)(o.c,{__position:12,__code:'<Input\n  label="手机号"\n  labelBefore="请输入"\n  iconBefore="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/user.svg"\n  focusColor="#1890ff"\n/>\n<Input\n  variant="outlined"\n  label="密码"\n  labelBefore="请输入"\n  iconBefore="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/user.svg"\n  focusColor="#ff7875"\n/>',__scope:(f={props:N,DefaultLayout:b.a,Playground:o.c,Input:c.a},f.DefaultLayout=b.a,f._frontmatter=p,f),mdxType:"Playground"},Object(r.b)(c.a,{label:"手机号",labelBefore:"请输入",iconBefore:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/user.svg",focusColor:"#1890ff",mdxType:"Input"}),Object(r.b)(c.a,{variant:"outlined",label:"密码",labelBefore:"请输入",iconBefore:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/user.svg",focusColor:"#ff7875",mdxType:"Input"})),Object(r.b)("br",null),Object(r.b)("h2",{id:"错误提示"},"错误提示"),Object(r.b)("p",null,"如果 helperText 属性存在，则当 error 属性为true(优先级高)或者输入框当前的值不符合 pattern 属性中的正则表达式时，显示错误提示。"),Object(r.b)("p",null,'可以通过设置 helperPlacement 属性调整错误提示位置，可选"bottom-center" | "bottom-right"(默认) | "bottom-left" | "top-right" | "top-center"。'),Object(r.b)("p",null,'可以通过设置 errorColor 属性为 "合法的css颜色字符串" 设置错误提示的颜色。'),Object(r.b)("p",null,"也可以设置 errorColor 属性为 符合如下规则的对象，并设置对象的 focus 属性为 true，使得错误提示存在时，整个Input的聚焦颜色都变为对象中的color属性指定的颜色。"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"interface CustomErrorColor {\n    color: string;\n    focus?: boolean;\n}\n")),Object(r.b)(o.c,{__position:14,__code:'<Input\n  label="手机号"\n  labelBefore="请输入"\n  helperText="手机号错误"\n  pattern="1[3-9][0-9]{9}"\n  helperPlacement="bottom-right"\n/>\n<Input\n  variant="outlined"\n  label="请输入手机号"\n  helperText="手机号错误"\n  pattern="1[3-9]\\\\d{9}"\n/>\n<Input\n  label="请输入手机号"\n  helperText="手机号错误"\n  error\n  helperPlacement="top-right"\n  errorColor="black"\n/>\n<Input\n  variant="outlined"\n  label="请输入手机号"\n  error\n  helperText="手机号错误"\n  helperPlacement="top-center"\n  errorColor={{ color: \'blue\', focus: true }}\n/>',__scope:(g={props:N,DefaultLayout:b.a,Playground:o.c,Input:c.a},g.DefaultLayout=b.a,g._frontmatter=p,g),mdxType:"Playground"},Object(r.b)(c.a,{label:"手机号",labelBefore:"请输入",helperText:"手机号错误",pattern:"1[3-9][0-9]{9}",helperPlacement:"bottom-right",mdxType:"Input"}),Object(r.b)(c.a,{variant:"outlined",label:"请输入手机号",helperText:"手机号错误",pattern:"1[3-9]\\\\d{9}",mdxType:"Input"}),Object(r.b)(c.a,{label:"请输入手机号",helperText:"手机号错误",error:!0,helperPlacement:"top-right",errorColor:"black",mdxType:"Input"}),Object(r.b)(c.a,{variant:"outlined",label:"请输入手机号",error:!0,helperText:"手机号错误",helperPlacement:"top-center",errorColor:{color:"blue",focus:!0},mdxType:"Input"})),Object(r.b)("br",null),Object(r.b)("h2",{id:"禁用状态"},"禁用状态"),Object(r.b)("p",null,"通过设置 disabled 属性为 true 使输入库处于禁用状态。"),Object(r.b)(o.c,{__position:16,__code:'<Input\n  label="手机号"\n  labelBefore="请输入"\n  iconBefore="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/user.svg"\n  disabled\n/>\n<Input\n  variant="outlined"\n  label="密码"\n  labelBefore="请输入"\n  iconBefore="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/user.svg"\n  disabled\n/>',__scope:(y={props:N,DefaultLayout:b.a,Playground:o.c,Input:c.a},y.DefaultLayout=b.a,y._frontmatter=p,y),mdxType:"Playground"},Object(r.b)(c.a,{label:"手机号",labelBefore:"请输入",iconBefore:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/user.svg",disabled:!0,mdxType:"Input"}),Object(r.b)(c.a,{variant:"outlined",label:"密码",labelBefore:"请输入",iconBefore:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/user.svg",disabled:!0,mdxType:"Input"})),Object(r.b)("br",null),Object(r.b)("h2",{id:"其他原生html-input属性"},"其他原生HTML input属性"),Object(r.b)("p",null,"除了 fontSize, width, placeholder 之外的所有原生HTML input属性。如 id、type ……"),Object(r.b)("br",null),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"属性"),Object(r.b)("th",{parentName:"tr",align:null},"说明"),Object(r.b)("th",{parentName:"tr",align:null},"类型"),Object(r.b)("th",{parentName:"tr",align:null},"默认值"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"variant"),Object(r.b)("td",{parentName:"tr",align:null},"类型"),Object(r.b)("td",{parentName:"tr",align:null},'"standard" ',"|",' "outlined"'),Object(r.b)("td",{parentName:"tr",align:null},'"standard"')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"label"),Object(r.b)("td",{parentName:"tr",align:null},"输入提示(浮动)"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"labelBefore"),Object(r.b)("td",{parentName:"tr",align:null},"输入提示(固定，分离)"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"size"),Object(r.b)("td",{parentName:"tr",align:null},"大小"),Object(r.b)("td",{parentName:"tr",align:null},'"合法的css长度单位" ',"|"," { fontSize, width, height, padding }"),Object(r.b)("td",{parentName:"tr",align:null},'"20px"')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"iconBefore"),Object(r.b)("td",{parentName:"tr",align:null},"前置图标"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"iconInnerBorder"),Object(r.b)("td",{parentName:"tr",align:null},"是否包含前置图标"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"clearable"),Object(r.b)("td",{parentName:"tr",align:null},"启用清空按钮"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"revealable"),Object(r.b)("td",{parentName:"tr",align:null},"启用切换明密文按钮"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"focusColor"),Object(r.b)("td",{parentName:"tr",align:null},"聚焦颜色"),Object(r.b)("td",{parentName:"tr",align:null},'"合法的css颜色字符串"'),Object(r.b)("td",{parentName:"tr",align:null},'"#26a69a"')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"helperText"),Object(r.b)("td",{parentName:"tr",align:null},"错误提示"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"error"),Object(r.b)("td",{parentName:"tr",align:null},"强制显示错误提示"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"helperPlacement"),Object(r.b)("td",{parentName:"tr",align:null},"错误提示位置"),Object(r.b)("td",{parentName:"tr",align:null},'"bottom-center" ',"|",' "bottom-right" ',"|",' "bottom-left" ',"|",' "top-right" ',"|",' "top-center" ',"|",' "bottom-right"'),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"errorColor"),Object(r.b)("td",{parentName:"tr",align:null},"错误时颜色"),Object(r.b)("td",{parentName:"tr",align:null},'"合法的css颜色字符串" ',"|"," { color, focus }"),Object(r.b)("td",{parentName:"tr",align:null},'"red"')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"disabled"),Object(r.b)("td",{parentName:"tr",align:null},"是否禁用"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"其他"),Object(r.b)("td",{parentName:"tr",align:null},"html属性"),Object(r.b)("td",{parentName:"tr",align:null},"如 class, style, id 等"),Object(r.b)("td",{parentName:"tr",align:null})))))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Input/demos/index.cn.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-input-demos-index-cn-mdx-5bf636778de1e9149a25.js.map