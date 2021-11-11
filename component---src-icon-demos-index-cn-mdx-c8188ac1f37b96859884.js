(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Vh4q:function(t,e,c){"use strict";c.r(e),c.d(e,"_frontmatter",(function(){return m})),c.d(e,"default",(function(){return p}));var n=c("k0FJ"),a=c("oedh"),s=(c("mXGw"),c("/FXl")),o=c("TjRS"),l=c("ZFoC"),r=c("yagt"),b=(c("aD51"),["components"]),m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Icon/demos/index.cn.mdx"}});var u={_frontmatter:m},i=o.a;function p(t){var e,c,p,d,j=t.components,O=Object(a.a)(t,b);return Object(s.b)(i,Object(n.a)({},u,O,{components:j,mdxType:"MDXLayout"}),Object(s.b)("h4",{id:"简介"},"简介"),Object(s.b)("p",null,"像使用img一样生成自定义颜色图标的组件。"),Object(s.b)("h2",{id:"src"},"src"),Object(s.b)("p",null,"通过 src 指定图片源"),Object(s.b)(l.c,{__position:0,__code:'<Icon src="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/momo.png" />\n<Icon src="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/momo.svg" />',__scope:(e={props:O,DefaultLayout:o.a,Playground:l.c,Icon:r.a},e.DefaultLayout=o.a,e._frontmatter=m,e),mdxType:"Playground"},Object(s.b)(r.a,{src:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/momo.png",mdxType:"Icon"}),Object(s.b)(r.a,{src:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/momo.svg",mdxType:"Icon"})),Object(s.b)("br",null),Object(s.b)("h2",{id:"简单尺寸"},"简单尺寸"),Object(s.b)("p",null,"通过设置 size 为合法的长度单位指定图片的宽高"),Object(s.b)("p",null,"如果 size 非法，将会被设置为默认大小 32px。"),Object(s.b)(l.c,{__position:2,__code:'<Icon\n  src="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/momo.svg"\n  size={44}\n/>\n<Icon\n  src="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/momo.svg"\n  size="24px"\n/>',__scope:(c={props:O,DefaultLayout:o.a,Playground:l.c,Icon:r.a},c.DefaultLayout=o.a,c._frontmatter=m,c),mdxType:"Playground"},Object(s.b)(r.a,{src:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/momo.svg",size:44,mdxType:"Icon"}),Object(s.b)(r.a,{src:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/momo.svg",size:"24px",mdxType:"Icon"})),Object(s.b)("br",null),Object(s.b)("h2",{id:"自定义尺寸"},"自定义尺寸"),Object(s.b)("p",null,"size也可以设置为包含width, height属性的对象来指定图片具体的宽高(仅对于png这样的非向量图源有效)。"),Object(s.b)("p",null,"属性的值也得是合法的单位，否则将置为默认大小。"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"interface size {\n    width: number | string,\n    height: number | string\n}\n")),Object(s.b)(l.c,{__position:4,__code:'<Icon\n  src="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/momo.png"\n  size={{ width: 24, height: 36 }}\n/>',__scope:(p={props:O,DefaultLayout:o.a,Playground:l.c,Icon:r.a},p.DefaultLayout=o.a,p._frontmatter=m,p),mdxType:"Playground"},Object(s.b)(r.a,{src:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/momo.png",size:{width:24,height:36},mdxType:"Icon"})),Object(s.b)("br",null),Object(s.b)("h2",{id:"颜色"},"颜色"),Object(s.b)("p",null,"通过设置 color 为任意合法的css值指定图片非透明区域的颜色。"),Object(s.b)("p",null,"color 值不合法以及默认将置为 #666。"),Object(s.b)(l.c,{__position:6,__code:'<Icon\n  src="https://custom-ui.oss-accelerate.aliyuncs.com/Assets/momo.svg"\n  color="red"\n/>',__scope:(d={props:O,DefaultLayout:o.a,Playground:l.c,Icon:r.a},d.DefaultLayout=o.a,d._frontmatter=m,d),mdxType:"Playground"},Object(s.b)(r.a,{src:"https://custom-ui.oss-accelerate.aliyuncs.com/Assets/momo.svg",color:"red",mdxType:"Icon"})),Object(s.b)("br",null),Object(s.b)("h2",{id:"api"},"API"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"属性"),Object(s.b)("th",{parentName:"tr",align:null},"说明"),Object(s.b)("th",{parentName:"tr",align:null},"类型"),Object(s.b)("th",{parentName:"tr",align:null},"默认值"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"*src"),Object(s.b)("td",{parentName:"tr",align:null},"图标源"),Object(s.b)("td",{parentName:"tr",align:null},"string"),Object(s.b)("td",{parentName:"tr",align:null})),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"size"),Object(s.b)("td",{parentName:"tr",align:null},"图标尺寸"),Object(s.b)("td",{parentName:"tr",align:null},'"合法的css长度字符串" ',"|"," number ","|"," { width, height }"),Object(s.b)("td",{parentName:"tr",align:null},'"32px"')),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"color"),Object(s.b)("td",{parentName:"tr",align:null},"图标颜色"),Object(s.b)("td",{parentName:"tr",align:null},'"合法的css颜色字符串"'),Object(s.b)("td",{parentName:"tr",align:null},'"#666"')),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"其他"),Object(s.b)("td",{parentName:"tr",align:null},"html属性"),Object(s.b)("td",{parentName:"tr",align:null},"如 class, style, alt 等"),Object(s.b)("td",{parentName:"tr",align:null})))))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Icon/demos/index.cn.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-icon-demos-index-cn-mdx-c8188ac1f37b96859884.js.map