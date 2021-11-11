(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{VBP9:function(t,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return c})),o.d(n,"default",(function(){return B}));var e=o("k0FJ"),a=o("oedh"),l=(o("mXGw"),o("/FXl")),r=o("TjRS"),i=o("ZFoC"),b=o("rxZx"),u=(o("aD51"),["components"]),c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Button/demos/index.cn.mdx"}});var d={_frontmatter:c},p=r.a;function B(t){var n,o,B,g=t.components,m=Object(a.a)(t,u);return Object(l.b)(p,Object(e.a)({},d,m,{components:g,mdxType:"MDXLayout"}),Object(l.b)("h4",{id:"简介"},"简介"),Object(l.b)("p",null,"ButtonBase、Spin和Ripple的组合。"),Object(l.b)("p",null,"功能更完善的按钮组件，大部分API与ButtonBase一致，额外增加了以下功能。"),Object(l.b)("h2",{id:"加载中"},"加载中"),Object(l.b)("p",null,"通过设置 loading 属性为 true 或者 Spin 组件的 type 类型，使按钮处于加载中状态。"),Object(l.b)(i.c,{__position:0,__code:'<Button variant="text" color="rgb(220, 0, 78)" loading>\n  Button\n</Button>\n<Button variant="outlined" color="mediumvioletred" loading="ball-ring">\n  Button\n</Button>\n<Button variant="contained" color="rgb(220, 0, 78)" loading="ball-spin">\n  Button\n</Button>\n<Button variant="contained" color="forestgreen" loading="ball-bounce">\n  Button\n</Button>\n<Button variant="contained" loading="ball-spin-stretch">\n  Button\n</Button>\n<Button variant="contained" color="deepskyblue" loading="ball-two">\n  Button\n</Button>\n<Button variant="contained" color="#6200ee" loading="ball-trail">\n  Button\n</Button>\n<Button variant="contained" color="#1976d2" loading="box-flip">\n  Button\n</Button>\n<Button variant="contained" color="brown" loading="board-flip">\n  Button\n</Button>\n<Button variant="contained" color="#e0e0e0" loading="box-spin-fill">\n  Button\n</Button>\n<Button variant="contained" color="rgb(220, 0, 78)" loading="bar">\n  Button\n</Button>\n<Button variant="contained" color="aquamarine" loading="dot-fade">\n  Button\n</Button>\n<Button variant="contained" color="#9c27b0" loading="dots-fade">\n  Button\n</Button>\n<Button variant="contained" color="aqua" loading="dot-swing">\n  Button\n</Button>\n<Button variant="contained" color="#b5f5ec" loading="dot-wave">\n  Button\n</Button>',__scope:(n={props:m,DefaultLayout:r.a,Playground:i.c,Button:b.a},n.DefaultLayout=r.a,n._frontmatter=c,n),mdxType:"Playground"},Object(l.b)(b.a,{variant:"text",color:"rgb(220, 0, 78)",loading:!0,mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"outlined",color:"mediumvioletred",loading:"ball-ring",mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"contained",color:"rgb(220, 0, 78)",loading:"ball-spin",mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"contained",color:"forestgreen",loading:"ball-bounce",mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"contained",loading:"ball-spin-stretch",mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"contained",color:"deepskyblue",loading:"ball-two",mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"contained",color:"#6200ee",loading:"ball-trail",mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"contained",color:"#1976d2",loading:"box-flip",mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"contained",color:"brown",loading:"board-flip",mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"contained",color:"#e0e0e0",loading:"box-spin-fill",mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"contained",color:"rgb(220, 0, 78)",loading:"bar",mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"contained",color:"aquamarine",loading:"dot-fade",mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"contained",color:"#9c27b0",loading:"dots-fade",mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"contained",color:"aqua",loading:"dot-swing",mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"contained",color:"#b5f5ec",loading:"dot-wave",mdxType:"Button"},"Button")),Object(l.b)("br",null),Object(l.b)("h2",{id:"涟漪位置"},"涟漪位置"),Object(l.b)("p",null,"通过设置 rippleCenter 为true/false　控制涟漪位置从按钮中间/鼠标点击位置开始。"),Object(l.b)(i.c,{__position:2,__code:'<Button variant="outlined" color="mediumvioletred" rippleCenter>\n  Button\n</Button>\n<Button variant="outlined" color="forestgreen">\n  Button\n</Button>',__scope:(o={props:m,DefaultLayout:r.a,Playground:i.c,Button:b.a},o.DefaultLayout=r.a,o._frontmatter=c,o),mdxType:"Playground"},Object(l.b)(b.a,{variant:"outlined",color:"mediumvioletred",rippleCenter:!0,mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"outlined",color:"forestgreen",mdxType:"Button"},"Button")),Object(l.b)("br",null),Object(l.b)("h2",{id:"自定义颜色"},"自定义颜色"),Object(l.b)("p",null,"在ButtonBase自定义颜色API的基础上，增加了rippleColor和loadingColor两个字段，以自定义点击涟漪和加载指示符颜色。"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"interface Color {\n    color: string,\n    bgColor?: string,\n    borderColor?: string,\n    hoverColor?: string,\n    hoverBgColor?: string,\n    hoverBorderColor?: string,\n    rippleColor?: string,\n    loadingColor?: string,\n}\n")),Object(l.b)(i.c,{__position:4,__code:"<Button\n  variant=\"outlined\"\n  color={{ color: 'rgb(220, 0, 78)', rippleColor: 'blue' }}\n>\n  Button\n</Button>\n<Button\n  variant=\"outlined\"\n  color={{ color: 'rgb(220, 0, 78)', loadingColor: 'blue' }}\n  loading\n>\n  Button\n</Button>",__scope:(B={props:m,DefaultLayout:r.a,Playground:i.c,Button:b.a},B.DefaultLayout=r.a,B._frontmatter=c,B),mdxType:"Playground"},Object(l.b)(b.a,{variant:"outlined",color:{color:"rgb(220, 0, 78)",rippleColor:"blue"},mdxType:"Button"},"Button"),Object(l.b)(b.a,{variant:"outlined",color:{color:"rgb(220, 0, 78)",loadingColor:"blue"},loading:!0,mdxType:"Button"},"Button")),Object(l.b)("br",null),Object(l.b)("h2",{id:"api"},"API"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"属性"),Object(l.b)("th",{parentName:"tr",align:null},"说明"),Object(l.b)("th",{parentName:"tr",align:null},"类型"),Object(l.b)("th",{parentName:"tr",align:null},"默认值"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"loading"),Object(l.b)("td",{parentName:"tr",align:null},"载入状态"),Object(l.b)("td",{parentName:"tr",align:null},"boolean ","|","　合法的Spin组件type值"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"rippleCenter"),Object(l.b)("td",{parentName:"tr",align:null},"涟漪位置"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"color"),Object(l.b)("td",{parentName:"tr",align:null},"按钮颜色"),Object(l.b)("td",{parentName:"tr",align:null},'"合法的css颜色字符串" ',"|"," { color, bgColor, borderColor, hoverColor, hoverBgColor, hoverBorderColor, rippleColor, loadingColor }"),Object(l.b)("td",{parentName:"tr",align:null},'"#000"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"其他"),Object(l.b)("td",{parentName:"tr",align:null},"其他ButtonBase属性"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})))))}void 0!==B&&B&&B===Object(B)&&Object.isExtensible(B)&&!B.hasOwnProperty("__filemeta")&&Object.defineProperty(B,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Button/demos/index.cn.mdx"}}),B.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-button-demos-index-cn-mdx-d0caa167d283811727fd.js.map