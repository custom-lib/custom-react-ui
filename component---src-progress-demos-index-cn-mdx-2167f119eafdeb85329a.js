(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{lQDU:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return g}));var r=n("k0FJ"),c=n("oedh"),a=n("mXGw"),o=n("/FXl"),l=n("TjRS"),b=n("ZFoC"),p=n("vl/M"),s=(n("aD51"),["components"]),i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Progress/demos/index.cn.mdx"}});var u={_frontmatter:i},m=l.a;function g(e){var t,n,g,d,j,O=e.components,f=Object(c.a)(e,s);return Object(o.b)(m,Object(r.a)({},u,f,{components:O,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"简介"},"简介"),Object(o.b)("p",null,"表示进度的进度条组件，支持圆形和线性进度条，有进度变化动画效果。"),Object(o.b)("h2",{id:"基础用法"},"基础用法"),Object(o.b)("p",null,"通过设置 linear 属性为 true 设置进度条为线型， 通过设置 circular 属性为 true 设置进度条为圆型， 两者只能二选一。"),Object(o.b)("p",null,"通过设置　percent 属性(0-100) 设置进度。"),Object(o.b)(b.c,{__position:0,__code:"() => {\n  const [percent, setPercent] = React.useState(0)\n  return (\n    <>\n      <button onClick={() => setPercent(pre => (pre <= 90 ? pre + 10 : 100))}>\n        Increase\n      </button>\n      <button onClick={() => setPercent(pre => (pre >= 10 ? pre - 10 : 0))}>\n        Decrease\n      </button>\n      <Progress percent={percent} />\n      <Progress percent={percent} circular />\n    </>\n  )\n}",__scope:(t={props:f,DefaultLayout:l.a,Playground:b.c,Progress:p.a},t.DefaultLayout=l.a,t._frontmatter=i,t),mdxType:"Playground"},(function(){var e=a.useState(0),t=e[0],n=e[1];return Object(o.b)(a.Fragment,null,Object(o.b)("button",{onClick:function(){return n((function(e){return e<=90?e+10:100}))}},"Increase"),Object(o.b)("button",{onClick:function(){return n((function(e){return e>=10?e-10:0}))}},"Decrease"),Object(o.b)(p.a,{percent:t,mdxType:"Progress"}),Object(o.b)(p.a,{percent:t,circular:!0,mdxType:"Progress"}))})),Object(o.b)("br",null),Object(o.b)("h2",{id:"大小"},"大小"),Object(o.b)("p",null,"通过设置 size 属性 改变进度条大小。"),Object(o.b)("p",null,"circular 类型的size要求如下。"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"interface {\n    size: number | string; // 视图宽高, 默认 100px\n    strokeWidth: number | string; // 进度条宽度，　默认8px\n    fontSize?: number | string; // 文字大小，　默认inherit\n};\n")),Object(o.b)("p",null,"linear 类型的size要求如下。"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"interface {\n    width: number | string; // 默认 200px\n    height: number | string; // 默认 8px\n    borderRadius?: number | string; // 默认 4px\n    fontSize?: number | string; // 默认inherit\n};\n")),Object(o.b)(b.c,{__position:2,__code:"<Progress\n  percent={75}\n  size={{ width: 100, height: '12px', borderRadius: 0, fontSize: '1.5em' }}\n/>\n<Progress\n  percent={75}\n  circular\n  size={{ size: 200, strokeWidth: 12, fontSize: '66px' }}\n/>",__scope:(n={props:f,DefaultLayout:l.a,Playground:b.c,Progress:p.a},n.DefaultLayout=l.a,n._frontmatter=i,n),mdxType:"Playground"},Object(o.b)(p.a,{percent:75,size:{width:100,height:"12px",borderRadius:0,fontSize:"1.5em"},mdxType:"Progress"}),Object(o.b)(p.a,{percent:75,circular:!0,size:{size:200,strokeWidth:12,fontSize:"66px"},mdxType:"Progress"})),Object(o.b)("br",null),Object(o.b)("h2",{id:"颜色"},"颜色"),Object(o.b)("p",null,'通过设置 color 属性为　"合法的css颜色单位"　来简单设置进度条颜色。'),Object(o.b)("p",null,"也可以设置为符合下面规则的对象来具体设置滑块、文字颜色。"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"interface Color {\n    strokeColor: string; // 默认 #1890ff\n    trailColor?: string; // 默认 rgba(0, 0, 0, 0.1)\n    fontColor?: string; // 默认 #000\n}\n")),Object(o.b)(b.c,{__position:4,__code:"() => {\n  const [percent, setPercent] = React.useState(0)\n  return (\n    <>\n      <button onClick={() => setPercent(pre => (pre <= 90 ? pre + 10 : 100))}>\n        Increase\n      </button>\n      <button onClick={() => setPercent(pre => (pre >= 10 ? pre - 10 : 0))}>\n        Decrease\n      </button>\n      <Progress\n        percent={percent}\n        color=\"linear-gradient(to right, rgb(16, 142, 233) 0%, rgb(135, 208, 104) 100%)\"\n      />\n      <Progress percent={percent} circular color=\"pink\" />\n      <Progress\n        percent={percent}\n        color={{\n          strokeColor: 'blue',\n          trailColor: 'yellow',\n          fontColor: 'red',\n        }}\n      />\n      <Progress\n        percent={percent}\n        circular\n        color={{\n          strokeColor: 'blue',\n          trailColor: 'yellow',\n          fontColor: 'red',\n        }}\n      />\n    </>\n  )\n}",__scope:(g={props:f,DefaultLayout:l.a,Playground:b.c,Progress:p.a},g.DefaultLayout=l.a,g._frontmatter=i,g),mdxType:"Playground"},(function(){var e=a.useState(0),t=e[0],n=e[1];return Object(o.b)(a.Fragment,null,Object(o.b)("button",{onClick:function(){return n((function(e){return e<=90?e+10:100}))}},"Increase"),Object(o.b)("button",{onClick:function(){return n((function(e){return e>=10?e-10:0}))}},"Decrease"),Object(o.b)(p.a,{percent:t,color:"linear-gradient(to right, rgb(16, 142, 233) 0%, rgb(135, 208, 104) 100%)",mdxType:"Progress"}),Object(o.b)(p.a,{percent:t,circular:!0,color:"pink",mdxType:"Progress"}),Object(o.b)(p.a,{percent:t,color:{strokeColor:"blue",trailColor:"yellow",fontColor:"red"},mdxType:"Progress"}),Object(o.b)(p.a,{percent:t,circular:!0,color:{strokeColor:"blue",trailColor:"yellow",fontColor:"red"},mdxType:"Progress"}))})),Object(o.b)("br",null),Object(o.b)("h2",{id:"文字位置"},"文字位置"),Object(o.b)("p",null,'通过设置 placement　属性为　"none" | "center"(circular类型默认) | "top" | "bottom" | "right"(linear类型默认) | "left"　来改变文字位置。'),Object(o.b)(b.c,{__position:6,__code:'<Progress percent={75} placement="none" style={{ marginBottom: 30 }} />\n<Progress percent={75} placement="center" style={{ marginBottom: 30 }} />\n<Progress percent={75} placement="left" style={{ marginBottom: 30 }} />\n<Progress percent={75} placement="right" style={{ marginBottom: 30 }} />\n<Progress percent={75} placement="top" style={{ marginBottom: 30 }} />\n<Progress percent={75} placement="bottom" style={{ marginBottom: 30 }} />\n<Progress percent={75} circular placement="right" />',__scope:(d={props:f,DefaultLayout:l.a,Playground:b.c,Progress:p.a},d.DefaultLayout=l.a,d._frontmatter=i,d),mdxType:"Playground"},Object(o.b)(p.a,{percent:75,placement:"none",style:{marginBottom:30},mdxType:"Progress"}),Object(o.b)(p.a,{percent:75,placement:"center",style:{marginBottom:30},mdxType:"Progress"}),Object(o.b)(p.a,{percent:75,placement:"left",style:{marginBottom:30},mdxType:"Progress"}),Object(o.b)(p.a,{percent:75,placement:"right",style:{marginBottom:30},mdxType:"Progress"}),Object(o.b)(p.a,{percent:75,placement:"top",style:{marginBottom:30},mdxType:"Progress"}),Object(o.b)(p.a,{percent:75,placement:"bottom",style:{marginBottom:30},mdxType:"Progress"}),Object(o.b)(p.a,{percent:75,circular:!0,placement:"right",mdxType:"Progress"})),Object(o.b)("br",null),Object(o.b)("h2",{id:"自定义文字内容"},"自定义文字内容"),Object(o.b)("p",null,"通过 format　属性自定义文字内容。"),Object(o.b)("p",null,"format接受当前进度值为参数，要求返回一个字符串。因为format中的参数是精确到个位数的动画变化值，所以比起传入的percent会有极短的延迟。"),Object(o.b)(b.c,{__position:8,__code:"() => {\n  const [percent, setPercent] = React.useState(0)\n  return (\n    <>\n      <button onClick={() => setPercent(pre => (pre <= 90 ? pre + 10 : 100))}>\n        Increase\n      </button>\n      <button onClick={() => setPercent(pre => (pre >= 10 ? pre - 10 : 0))}>\n        Decrease\n      </button>\n      <Progress\n        percent={percent}\n        format={_ => (percent === 100 ? 'success' : `${percent}个`)}\n        color={percent === 100 ? '#52c41a' : ''}\n        style={{ margin: '20px 0' }}\n      />\n      <Progress\n        percent={percent}\n        format={percent => (percent === 100 ? 'success' : `${percent}个`)}\n        color={percent === 100 ? '#52c41a' : ''}\n      />\n      <Progress\n        percent={percent}\n        circular\n        format={percent => (percent === 100 ? 'done' : `剩${100 - percent}%`)}\n        color={percent === 100 ? '#52c41a' : ''}\n      />\n    </>\n  )\n}",__scope:(j={props:f,DefaultLayout:l.a,Playground:b.c,Progress:p.a},j.DefaultLayout=l.a,j._frontmatter=i,j),mdxType:"Playground"},(function(){var e=a.useState(0),t=e[0],n=e[1];return Object(o.b)(a.Fragment,null,Object(o.b)("button",{onClick:function(){return n((function(e){return e<=90?e+10:100}))}},"Increase"),Object(o.b)("button",{onClick:function(){return n((function(e){return e>=10?e-10:0}))}},"Decrease"),Object(o.b)(p.a,{percent:t,format:function(e){return 100===t?"success":t+"个"},color:100===t?"#52c41a":"",style:{margin:"20px 0"},mdxType:"Progress"}),Object(o.b)(p.a,{percent:t,format:function(e){return 100===e?"success":e+"个"},color:100===t?"#52c41a":"",mdxType:"Progress"}),Object(o.b)(p.a,{percent:t,circular:!0,format:function(e){return 100===e?"done":"剩"+(100-e)+"%"},color:100===t?"#52c41a":"",mdxType:"Progress"}))})),Object(o.b)("br",null),Object(o.b)("h2",{id:"其他任意原生html属性事件"},"其他任意原生html属性、事件"),Object(o.b)("br",null),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"属性"),Object(o.b)("th",{parentName:"tr",align:null},"说明"),Object(o.b)("th",{parentName:"tr",align:null},"类型"),Object(o.b)("th",{parentName:"tr",align:null},"默认值"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"*percent"),Object(o.b)("td",{parentName:"tr",align:null},"进度"),Object(o.b)("td",{parentName:"tr",align:null},"number(0-100)"),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"linear"),Object(o.b)("td",{parentName:"tr",align:null},"是否线型"),Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"circular"),Object(o.b)("td",{parentName:"tr",align:null},"是否圆型"),Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"false")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"size"),Object(o.b)("td",{parentName:"tr",align:null},"大小"),Object(o.b)("td",{parentName:"tr",align:null},'("linear"){ width, height, borderRadius?, fontSize? } ',"|",' ("circular"){ size, strokeWidth, fontSize? }'),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"color"),Object(o.b)("td",{parentName:"tr",align:null},"颜色"),Object(o.b)("td",{parentName:"tr",align:null},'"合法的css颜色单位" ',"|"," { strokeColor, trailColor, fontColor }"),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"placement"),Object(o.b)("td",{parentName:"tr",align:null},"文字位置"),Object(o.b)("td",{parentName:"tr",align:null},'"none" ',"|",' "top" ',"|",' "bottom" ',"|",' "left" ',"|",' "right"'),Object(o.b)("td",{parentName:"tr",align:null},'("linear")->"right" ',"|",' ("circular")->"center"')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"format"),Object(o.b)("td",{parentName:"tr",align:null},"自定义文字"),Object(o.b)("td",{parentName:"tr",align:null},"(percent: number) => string"),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"其他"),Object(o.b)("td",{parentName:"tr",align:null},"html属性"),Object(o.b)("td",{parentName:"tr",align:null},"如 class, style, onClick 等"),Object(o.b)("td",{parentName:"tr",align:null})))))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Progress/demos/index.cn.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-progress-demos-index-cn-mdx-2167f119eafdeb85329a.js.map