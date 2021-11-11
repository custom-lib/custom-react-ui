(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{NShg:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return c})),n.d(e,"default",(function(){return m}));var o=n("k0FJ"),r=n("oedh"),b=(n("mXGw"),n("/FXl")),a=n("TjRS"),l=n("ZFoC"),p=n("F7Lm"),u=(n("aD51"),["components"]),c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Popper/demos/index.cn.mdx"}});var i={_frontmatter:c},d=a.a;function m(t){var e,n,m,O,j,g,P,s,y,C,f,N=t.components,T=Object(r.a)(t,u);return Object(b.b)(d,Object(o.a)({},i,T,{components:N,mdxType:"MDXLayout"}),Object(b.b)("h4",{id:"简介"},"简介"),Object(b.b)("p",null,"基于 Tippy 的悬浮弹框组件。"),Object(b.b)("h2",{id:"内容"},"内容"),Object(b.b)("p",null,"通过设置 Content 属性设置弹框内容。Content可为任意合法的ReactNode。"),Object(b.b)("p",null,"如果Content是字符、数字，默认容器样式将会是灰底白字。如果是JSX Element或者组件，则容器将只提供动画，不包含任何样式。"),Object(b.b)(l.c,{__position:0,__code:"<Popper Content=\"abcdef\">\n  <button>字符</button>\n</Popper>\n<Popper Content={123}>\n  <button>数字</button>\n</Popper>\n<Popper Content={<span style={{ backgroundColor: 'red' }}>JSX.Element</span>}>\n  <button>JSX Element</button>\n</Popper>\n<Popper\n  Content={() => (\n    <div\n      style={{\n        backgroundColor: 'lightgreen',\n        width: 180,\n        height: 60,\n        color: 'red',\n      }}\n    >\n      React.Component\n    </div>\n  )}\n>\n  <button>React 组件</button>\n</Popper>",__scope:(e={props:T,DefaultLayout:a.a,Playground:l.c,Popper:p.a},e.DefaultLayout=a.a,e._frontmatter=c,e),mdxType:"Playground"},Object(b.b)(p.a,{Content:"abcdef",mdxType:"Popper"},Object(b.b)("button",null,"字符")),Object(b.b)(p.a,{Content:123,mdxType:"Popper"},Object(b.b)("button",null,"数字")),Object(b.b)(p.a,{Content:Object(b.b)("span",{style:{backgroundColor:"red"}},"JSX.Element"),mdxType:"Popper"},Object(b.b)("button",null,"JSX Element")),Object(b.b)(p.a,{Content:function(){return Object(b.b)("div",{style:{backgroundColor:"lightgreen",width:180,height:60,color:"red"}},"React.Component")},mdxType:"Popper"},Object(b.b)("button",null,"React 组件"))),Object(b.b)("br",null),Object(b.b)("h2",{id:"容器样式"},"容器样式"),Object(b.b)("p",null,"通过 class, style 属性设置弹框容器的样式。"),Object(b.b)(l.c,{__position:2,__code:"<Popper\n  Content=\"这是一个按钮\"\n  style={{ backgroundColor: 'red', padding: 12 }}\n>\n  <button>Button</button>\n</Popper>",__scope:(n={props:T,DefaultLayout:a.a,Playground:l.c,Popper:p.a},n.DefaultLayout=a.a,n._frontmatter=c,n),mdxType:"Playground"},Object(b.b)(p.a,{Content:"这是一个按钮",style:{backgroundColor:"red",padding:12},mdxType:"Popper"},Object(b.b)("button",null,"Button"))),Object(b.b)("br",null),Object(b.b)("h2",{id:"箭头"},"箭头"),Object(b.b)("p",null,"通过设置 arrow 属性为 true 启用弹框箭头。\n箭头的颜色与弹框背景色相同，但是没有边框。可以通过覆盖Popper下.tippy-arrow的样式修改。"),Object(b.b)(l.c,{__position:4,__code:"<Popper Content=\"这是一个按钮\" arrow>\n  <button>arrow</button>\n</Popper>\n<Popper Content=\"这是一个按钮\" arrow style={{ backgroundColor: 'red' }}>\n  <button>arrow</button>\n</Popper>\n<Popper\n  Content=\"这是一个按钮\"\n  arrow\n  style={{ backgroundColor: 'green', border: '1px solid red' }}\n>\n  <button>arrow</button>\n</Popper>",__scope:(m={props:T,DefaultLayout:a.a,Playground:l.c,Popper:p.a},m.DefaultLayout=a.a,m._frontmatter=c,m),mdxType:"Playground"},Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,mdxType:"Popper"},Object(b.b)("button",null,"arrow")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,style:{backgroundColor:"red"},mdxType:"Popper"},Object(b.b)("button",null,"arrow")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,style:{backgroundColor:"green",border:"1px solid red"},mdxType:"Popper"},Object(b.b)("button",null,"arrow"))),Object(b.b)("br",null),Object(b.b)("h2",{id:"弹出位置"},"弹出位置"),Object(b.b)("p",null,'通过设置 placement 属性为 "top"(默认) | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "auto" | "auto-start" | "auto-end" 设置弹出位置。'),Object(b.b)(l.c,{__position:6,__code:'<Popper Content="这是一个按钮" arrow placement="top">\n  <button>top</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="top-start">\n  <button>top-start</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="top-end">\n  <button>top-end</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="right">\n  <button>right</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="right-start">\n  <button>right-start</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="right-end">\n  <button>right-end</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="bottom">\n  <button>bottom</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="bottom-start">\n  <button>bottom-start</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="bottom-end">\n  <button>bottom-end</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="left">\n  <button>left</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="left-start">\n  <button>left-start</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="left-end">\n  <button>left-end</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="auto">\n  <button>auto</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="auto-start">\n  <button>auto-start</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow placement="auto-end">\n  <button>auto-end</button>\n</Popper>',__scope:(O={props:T,DefaultLayout:a.a,Playground:l.c,Popper:p.a},O.DefaultLayout=a.a,O._frontmatter=c,O),mdxType:"Playground"},Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"top",mdxType:"Popper"},Object(b.b)("button",null,"top")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"top-start",mdxType:"Popper"},Object(b.b)("button",null,"top-start")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"top-end",mdxType:"Popper"},Object(b.b)("button",null,"top-end")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"right",mdxType:"Popper"},Object(b.b)("button",null,"right")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"right-start",mdxType:"Popper"},Object(b.b)("button",null,"right-start")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"right-end",mdxType:"Popper"},Object(b.b)("button",null,"right-end")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"bottom",mdxType:"Popper"},Object(b.b)("button",null,"bottom")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"bottom-start",mdxType:"Popper"},Object(b.b)("button",null,"bottom-start")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"bottom-end",mdxType:"Popper"},Object(b.b)("button",null,"bottom-end")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"left",mdxType:"Popper"},Object(b.b)("button",null,"left")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"left-start",mdxType:"Popper"},Object(b.b)("button",null,"left-start")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"left-end",mdxType:"Popper"},Object(b.b)("button",null,"left-end")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"auto",mdxType:"Popper"},Object(b.b)("button",null,"auto")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"auto-start",mdxType:"Popper"},Object(b.b)("button",null,"auto-start")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,placement:"auto-end",mdxType:"Popper"},Object(b.b)("button",null,"auto-end"))),Object(b.b)("br",null),Object(b.b)("h2",{id:"进出场动画"},"进出场动画"),Object(b.b)("p",null,'通过设置 animationType 为 "zoom"(默认) | "fade" | "flip" | "door" | "slideUp" | "slideDown" | "slideRight" | "slideLeft" | "rotate" | "blur" | "clipRectSp" | "clipRect" | "clipCircle" 设置进出场动画。'),Object(b.b)(l.c,{__position:8,__code:'<Popper Content="这是一个按钮" animationType="zoom">\n  <button>zoom</button>\n</Popper>\n<Popper Content="这是一个按钮" animationType="fade">\n  <button>fade</button>\n</Popper>\n<Popper Content="这是一个按钮" animationType="flip">\n  <button>flip</button>\n</Popper>\n<Popper Content="这是一个按钮" animationType="door">\n  <button>door</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow animationType="slideUp">\n  <button>slideUp</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow animationType="slideDown">\n  <button>slideDown</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow animationType="slideRight">\n  <button>slideRight</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow animationType="slideLeft">\n  <button>slideLeft</button>\n</Popper>\n<Popper Content="这是一个按钮" arrow animationType="rotate">\n  <button>rotate</button>\n</Popper>\n<Popper Content="这是一个按钮" animationType="blur">\n  <button>blur</button>\n</Popper>\n<Popper Content="这是一个按钮" animationType="clipRectSp">\n  <button>clipRectSp</button>\n</Popper>\n<Popper Content="这是一个按钮" animationType="clipRect">\n  <button>clipRect</button>\n</Popper>\n<Popper Content="这是一个按钮" animationType="clipCircle">\n  <button>clipCircle</button>\n</Popper>',__scope:(j={props:T,DefaultLayout:a.a,Playground:l.c,Popper:p.a},j.DefaultLayout=a.a,j._frontmatter=c,j),mdxType:"Playground"},Object(b.b)(p.a,{Content:"这是一个按钮",animationType:"zoom",mdxType:"Popper"},Object(b.b)("button",null,"zoom")),Object(b.b)(p.a,{Content:"这是一个按钮",animationType:"fade",mdxType:"Popper"},Object(b.b)("button",null,"fade")),Object(b.b)(p.a,{Content:"这是一个按钮",animationType:"flip",mdxType:"Popper"},Object(b.b)("button",null,"flip")),Object(b.b)(p.a,{Content:"这是一个按钮",animationType:"door",mdxType:"Popper"},Object(b.b)("button",null,"door")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,animationType:"slideUp",mdxType:"Popper"},Object(b.b)("button",null,"slideUp")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,animationType:"slideDown",mdxType:"Popper"},Object(b.b)("button",null,"slideDown")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,animationType:"slideRight",mdxType:"Popper"},Object(b.b)("button",null,"slideRight")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,animationType:"slideLeft",mdxType:"Popper"},Object(b.b)("button",null,"slideLeft")),Object(b.b)(p.a,{Content:"这是一个按钮",arrow:!0,animationType:"rotate",mdxType:"Popper"},Object(b.b)("button",null,"rotate")),Object(b.b)(p.a,{Content:"这是一个按钮",animationType:"blur",mdxType:"Popper"},Object(b.b)("button",null,"blur")),Object(b.b)(p.a,{Content:"这是一个按钮",animationType:"clipRectSp",mdxType:"Popper"},Object(b.b)("button",null,"clipRectSp")),Object(b.b)(p.a,{Content:"这是一个按钮",animationType:"clipRect",mdxType:"Popper"},Object(b.b)("button",null,"clipRect")),Object(b.b)(p.a,{Content:"这是一个按钮",animationType:"clipCircle",mdxType:"Popper"},Object(b.b)("button",null,"clipCircle"))),Object(b.b)("br",null),Object(b.b)("h2",{id:"动画持续时间"},"动画持续时间"),Object(b.b)("p",null,"通过设置 animationDuration 属性(ms)，修改弹框进出场动画持续时间。"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},"type animationDuration = number | { enter: number, leave: number }\n")),Object(b.b)(l.c,{__position:10,__code:'<Popper Content="这是一个按钮" animationDuration={500}>\n  <button>Button</button>\n</Popper>\n<Popper\n  Content="这是一个按钮"\n  animationDuration={{ enter: 200, leave: 1000 }}\n>\n  <button>Button</button>\n</Popper>',__scope:(g={props:T,DefaultLayout:a.a,Playground:l.c,Popper:p.a},g.DefaultLayout=a.a,g._frontmatter=c,g),mdxType:"Playground"},Object(b.b)(p.a,{Content:"这是一个按钮",animationDuration:500,mdxType:"Popper"},Object(b.b)("button",null,"Button")),Object(b.b)(p.a,{Content:"这是一个按钮",animationDuration:{enter:200,leave:1e3},mdxType:"Popper"},Object(b.b)("button",null,"Button"))),Object(b.b)("br",null),Object(b.b)("h2",{id:"进出场延时"},"进出场延时"),Object(b.b)("p",null,"通过设置 delay 属性(ms)，修改弹框进出场延时。"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},"type delay = number | { enter: number, leave: number }\n")),Object(b.b)(l.c,{__position:12,__code:'<Popper Content="这是一个按钮" delay={500}>\n  <button>Button</button>\n</Popper>\n<Popper Content="这是一个按钮" delay={{ enter: 200, leave: 2000 }}>\n  <button>Button</button>\n</Popper>',__scope:(P={props:T,DefaultLayout:a.a,Playground:l.c,Popper:p.a},P.DefaultLayout=a.a,P._frontmatter=c,P),mdxType:"Playground"},Object(b.b)(p.a,{Content:"这是一个按钮",delay:500,mdxType:"Popper"},Object(b.b)("button",null,"Button")),Object(b.b)(p.a,{Content:"这是一个按钮",delay:{enter:200,leave:2e3},mdxType:"Popper"},Object(b.b)("button",null,"Button"))),Object(b.b)("br",null),Object(b.b)("h2",{id:"触发方式"},"触发方式"),Object(b.b)("p",null,'通过设置 trigger 属性为 "mouseenter focus" | "click" | "focusin" | "mouseenter click" 设置弹框触发方式。'),Object(b.b)("p",null,'默认为 "mouseenter focus"。'),Object(b.b)("p",null,"也可以不设置 trigger 属性， 通过设置 visible 属性为 true / false 手动控制弹框显示 / 关闭。"),Object(b.b)(l.c,{__position:14,__code:'<Popper Content="这是一个按钮" trigger="mouseenter focus">\n  <button>mouseenter focus</button>\n</Popper>\n<Popper Content="这是一个按钮" trigger="click">\n  <button>click</button>\n</Popper>\n<Popper Content="这是一个按钮" trigger="focusin">\n  <button>focusin</button>\n</Popper>\n<Popper Content="这是一个按钮" trigger="mouseenter click">\n  <button>mouseenter click</button>\n</Popper>\n<Popper Content="这是一个按钮" visible={true}>\n  <button>manual</button>\n</Popper>',__scope:(s={props:T,DefaultLayout:a.a,Playground:l.c,Popper:p.a},s.DefaultLayout=a.a,s._frontmatter=c,s),mdxType:"Playground"},Object(b.b)(p.a,{Content:"这是一个按钮",trigger:"mouseenter focus",mdxType:"Popper"},Object(b.b)("button",null,"mouseenter focus")),Object(b.b)(p.a,{Content:"这是一个按钮",trigger:"click",mdxType:"Popper"},Object(b.b)("button",null,"click")),Object(b.b)(p.a,{Content:"这是一个按钮",trigger:"focusin",mdxType:"Popper"},Object(b.b)("button",null,"focusin")),Object(b.b)(p.a,{Content:"这是一个按钮",trigger:"mouseenter click",mdxType:"Popper"},Object(b.b)("button",null,"mouseenter click")),Object(b.b)(p.a,{Content:"这是一个按钮",visible:!0,mdxType:"Popper"},Object(b.b)("button",null,"manual"))),Object(b.b)("br",null),Object(b.b)("h2",{id:"点击隐藏"},"点击隐藏"),Object(b.b)("p",null,'通过设置 hideOnClick 属性为 boolean | "toggle" 设置弹框在 trigger = "click" 下时的隐藏方式。'),Object(b.b)("p",null,'true 时点击任意地方隐藏， false 时点击不触发隐藏， "toggle" 时点击触发元素自身隐藏。'),Object(b.b)("p",null,"默认为 true。"),Object(b.b)(l.c,{__position:16,__code:'<Popper Content="这是一个按钮" trigger="click" hideOnClick={true}>\n  <button>true</button>\n</Popper>\n<Popper Content="这是一个按钮" trigger="click" hideOnClick={false}>\n  <button>false</button>\n</Popper>\n<Popper Content="这是一个按钮" trigger="click" hideOnClick="toggle">\n  <button>toggle</button>\n</Popper>',__scope:(y={props:T,DefaultLayout:a.a,Playground:l.c,Popper:p.a},y.DefaultLayout=a.a,y._frontmatter=c,y),mdxType:"Playground"},Object(b.b)(p.a,{Content:"这是一个按钮",trigger:"click",hideOnClick:!0,mdxType:"Popper"},Object(b.b)("button",null,"true")),Object(b.b)(p.a,{Content:"这是一个按钮",trigger:"click",hideOnClick:!1,mdxType:"Popper"},Object(b.b)("button",null,"false")),Object(b.b)(p.a,{Content:"这是一个按钮",trigger:"click",hideOnClick:"toggle",mdxType:"Popper"},Object(b.b)("button",null,"toggle"))),Object(b.b)("br",null),Object(b.b)("h2",{id:"跟随鼠标"},"跟随鼠标"),Object(b.b)("p",null,'通过设置 followCursor 属性为 boolean | "horizontal" | "vertical" | "initial" 设置弹框跟随鼠标移动的方式。'),Object(b.b)("p",null,"默认为 false。"),Object(b.b)(l.c,{__position:18,__code:'<Popper Content="这是一个按钮" followCursor>\n  <button>true</button>\n</Popper>\n<Popper Content="这是一个按钮" followCursor={false}>\n  <button>false</button>\n</Popper>\n<Popper Content="这是一个按钮" followCursor="initial">\n  <button>initial</button>\n</Popper>\n<Popper Content="这是一个按钮" followCursor="horizontal">\n  <button>horizontal</button>\n</Popper>\n<Popper Content="这是一个按钮" followCursor="vertical">\n  <button>vertical</button>\n</Popper>',__scope:(C={props:T,DefaultLayout:a.a,Playground:l.c,Popper:p.a},C.DefaultLayout=a.a,C._frontmatter=c,C),mdxType:"Playground"},Object(b.b)(p.a,{Content:"这是一个按钮",followCursor:!0,mdxType:"Popper"},Object(b.b)("button",null,"true")),Object(b.b)(p.a,{Content:"这是一个按钮",followCursor:!1,mdxType:"Popper"},Object(b.b)("button",null,"false")),Object(b.b)(p.a,{Content:"这是一个按钮",followCursor:"initial",mdxType:"Popper"},Object(b.b)("button",null,"initial")),Object(b.b)(p.a,{Content:"这是一个按钮",followCursor:"horizontal",mdxType:"Popper"},Object(b.b)("button",null,"horizontal")),Object(b.b)(p.a,{Content:"这是一个按钮",followCursor:"vertical",mdxType:"Popper"},Object(b.b)("button",null,"vertical"))),Object(b.b)("br",null),Object(b.b)("h2",{id:"可交互的"},"可交互的"),Object(b.b)("p",null,"通过设置 interactive 属性为 true 使得鼠标移动可移动至弹框上。"),Object(b.b)("p",null,"通过设置 interactiveBorder 属性(px) 设置可交互弹框的边界。"),Object(b.b)("p",null,"通过设置 interactiveDebounce 属性(ms) 设置超出可交互弹框的边界多少时长时隐藏弹框。"),Object(b.b)(l.c,{__position:20,__code:'<Popper Content="这是一个按钮" interactive>\n  <button>interactive</button>\n</Popper>\n<Popper Content="这是一个按钮" interactive interactiveBorder={50}>\n  <button>interactiveBorder=50</button>\n</Popper>\n<Popper Content="这是一个按钮" interactive interactiveDebounce={666}>\n  <button>interactiveDebounce=666</button>\n</Popper>',__scope:(f={props:T,DefaultLayout:a.a,Playground:l.c,Popper:p.a},f.DefaultLayout=a.a,f._frontmatter=c,f),mdxType:"Playground"},Object(b.b)(p.a,{Content:"这是一个按钮",interactive:!0,mdxType:"Popper"},Object(b.b)("button",null,"interactive")),Object(b.b)(p.a,{Content:"这是一个按钮",interactive:!0,interactiveBorder:50,mdxType:"Popper"},Object(b.b)("button",null,"interactiveBorder=50")),Object(b.b)(p.a,{Content:"这是一个按钮",interactive:!0,interactiveDebounce:666,mdxType:"Popper"},Object(b.b)("button",null,"interactiveDebounce=666"))),Object(b.b)("br",null),Object(b.b)("h2",{id:"禁用状态"},"禁用状态"),Object(b.b)("p",null,"通过设置 disabled 属性为 true 禁用弹框。"),Object(b.b)("br",null),Object(b.b)("h2",{id:"附着对象"},"附着对象"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},"type delatriggerTargety = someElement | [someElement1, someElement2, ...];\n")),Object(b.b)("p",null,"通过设置 triggerTarget 属性为合法的DOM Element改变弹框附着对象。"),Object(b.b)("br",null),Object(b.b)("h2",{id:"层级"},"层级"),Object(b.b)("p",null,"通过设置 zIndex 属性为 改变弹框层级。"),Object(b.b)("br",null),Object(b.b)("h2",{id:"api"},"API"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"属性"),Object(b.b)("th",{parentName:"tr",align:null},"说明"),Object(b.b)("th",{parentName:"tr",align:null},"类型"),Object(b.b)("th",{parentName:"tr",align:null},"默认值"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Content"),Object(b.b)("td",{parentName:"tr",align:null},"弹框内容"),Object(b.b)("td",{parentName:"tr",align:null},"任意合法的ReactNode"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"class, style"),Object(b.b)("td",{parentName:"tr",align:null},"弹框容器样式"),Object(b.b)("td",{parentName:"tr",align:null}),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"arrow"),Object(b.b)("td",{parentName:"tr",align:null},"启用箭头"),Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},'"#000"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"placement"),Object(b.b)("td",{parentName:"tr",align:null},"弹出位置"),Object(b.b)("td",{parentName:"tr",align:null},'"top" ',"|",' "top-start" ',"|",' "top-end" ',"|",' "right" ',"|",' "right-start" ',"|",' "right-end" ',"|",' "bottom" ',"|",' "bottom-start" ',"|",' "bottom-end" ',"|",' "left" ',"|",' "left-start" ',"|",' "left-end" ',"|",' "auto" ',"|",' "auto-start" ',"|",' "auto-end"'),Object(b.b)("td",{parentName:"tr",align:null},'"top"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"animationType"),Object(b.b)("td",{parentName:"tr",align:null},"过渡动画"),Object(b.b)("td",{parentName:"tr",align:null},'"zoom" ',"|",' "blur" ',"|",' "clipRectSp" ',"|",' "clipRect" ',"|",' "clipCircle" ',"|",' "fade" ',"|",' "flip" ',"|",' "door" ',"|",' "slideUp" ',"|",' "slideDown" ',"|",' "slideRight" ',"|",' "slideLeft" ',"|",' "rotate"'),Object(b.b)("td",{parentName:"tr",align:null},'"zoom"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"animationDuration"),Object(b.b)("td",{parentName:"tr",align:null},"动画持续时间(ms)"),Object(b.b)("td",{parentName:"tr",align:null},"number ","|"," { enter, leave }"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"delay"),Object(b.b)("td",{parentName:"tr",align:null},"进出场延时(ms)"),Object(b.b)("td",{parentName:"tr",align:null},"number ","|"," { enter, leave }"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"trigger"),Object(b.b)("td",{parentName:"tr",align:null},"触发方式"),Object(b.b)("td",{parentName:"tr",align:null},'"mouseenter focus" ',"|",' "click" ',"|",' "focusin" ',"|",' "mouseenter click" ',"|",' "manual"'),Object(b.b)("td",{parentName:"tr",align:null},'"mouseenter focus"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"visible"),Object(b.b)("td",{parentName:"tr",align:null},"弹框开启/关闭状态"),Object(b.b)("td",{parentName:"tr",align:null},'boolean, 配合 trigger="manual" 使用'),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"hideOnClick"),Object(b.b)("td",{parentName:"tr",align:null},"点击时关闭"),Object(b.b)("td",{parentName:"tr",align:null},"boolean ","|",' "toggle", 配合 trigger="click" 使用'),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"followCursor"),Object(b.b)("td",{parentName:"tr",align:null},"跟随鼠标"),Object(b.b)("td",{parentName:"tr",align:null},"boolean ","|",' "horizontal" ',"|",' "vertical" ',"|",' "initial"'),Object(b.b)("td",{parentName:"tr",align:null},"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"interactive"),Object(b.b)("td",{parentName:"tr",align:null},"可交互"),Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"interactiveBorder"),Object(b.b)("td",{parentName:"tr",align:null},"交互边界(px)"),Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"interactiveDebounce"),Object(b.b)("td",{parentName:"tr",align:null},"过交互边界关闭延时(ms)"),Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"triggerTarget"),Object(b.b)("td",{parentName:"tr",align:null},"附着对象"),Object(b.b)("td",{parentName:"tr",align:null},"ReactElement ","|"," ReactElement[]"),Object(b.b)("td",{parentName:"tr",align:null},"children Element")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"disabled"),Object(b.b)("td",{parentName:"tr",align:null},"禁用状态"),Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"zIndex"),Object(b.b)("td",{parentName:"tr",align:null},"层级"),Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null})))))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Popper/demos/index.cn.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-popper-demos-index-cn-mdx-752b6577043811fe3e0b.js.map