(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"/uoC":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n("k0FJ"),l=n("oedh"),r=(n("mXGw"),n("/FXl")),b=n("TjRS"),o=n("ZFoC"),i=n("67Bl"),c=n("biPs"),u=(n("aD51"),["components"]),p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/SwiperViews/demos/index.cn.mdx"}});var s={_frontmatter:p},d=b.a;function m(e){var t,n=e.components,m=Object(l.a)(e,u);return Object(r.b)(d,Object(a.a)({},s,m,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h4",{id:"简介"},"简介"),Object(r.b)("p",null,"既是可滑动视图，也可以作为轮播图(走马灯)。"),Object(r.b)("p",null,"具备帧延缓拖拽跟随动画。"),Object(r.b)("h2",{id:"用法示例"},"用法示例"),Object(r.b)("p",null,"注意必须指明SwiperViews的宽高。可以通过 className, style 设置。"),Object(r.b)("p",null,"作为视图的子元素View将占满SwiperViews的宽高，不可手动设置View的宽高。"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import React, { useState, useRef } from 'react';\nimport styled from 'styled-components';\nimport SwiperViews, { Methods } from '../index';\nconst views = [{ bgColor: 'red '}, { bgColor: 'blue'}, { bgColor: 'green' }, { bgColor: 'yellow'}]\nconst View = styled.div`\n`;\nconst Demo = () => {\n    const swiper = useRef<Methods>(null);\n    const [direction, setDirection] = useState<'row' | 'column'>('row');\n    const [size, setSize] = useState(1);\n    const [scaleInDrag, setScaleInDrag] = useState<boolean | 'noShadow'>(true);\n    const [enableDrag, setEnableDrag] = useState(true);\n    const [autoplay, setAutoplay] = useState<number | boolean>(false);\n    return (\n        <>\n            <button onClick={() => setDirection(pre => pre === 'row' ? 'column' : 'row')}>改变 direction ({direction})</button>\n            <button onClick={() => setSize(pre => pre === 1 ? .75 : pre === .75 ? .5 : 1)}>改变 size ({size})</button>\n            <button onClick={() => setScaleInDrag(pre => pre === true ? 'noShadow' : pre === 'noShadow' ? false : true)}>改变 拖动时缩放视图 ({String(scaleInDrag)})</button>\n            <button onClick={() => setEnableDrag(pre => !pre)}>改变 允许拖动 ({String(enableDrag)})</button>\n            <button onClick={() => setAutoplay(pre => pre === false ? 3000 : false)}>改变 自动轮播 ({String(autoplay)})</button>\n            <button onClick={() => swiper.current?.goto(0)}> goto 页面0 </button>\n            <button onClick={() => swiper.current?.goto(2)}> goTo 页面2 </button>\n            <button onClick={() => swiper.current?.goto(-1)}> goTo 页面-1 </button>\n            <button onClick={() => swiper.current?.goto(12)}> goTo 页面12 </button>\n            <SwiperViews\n                ref={swiper}\n                style={{ width: 1000, height: 600, maxWidth: '100%', maxHeight: '80%' }}\n                direction={direction}\n                size={size}\n                scaleInDrag={scaleInDrag}\n                enableDrag={enableDrag}\n                autoplay={autoplay}\n            >\n                {views.map((view, index) => <View key={index} style={{ backgroundColor: view.bgColor }}>页面-{index}</View>)}\n            </SwiperViews>\n            <SwiperViews\n                style={{ width: 1000, height: 600, maxWidth: '100%', maxHeight: '80%', marginTop: 100 }}\n                size={.7}\n                loop\n            >\n                {views.map((view, index) => <View key={index} style={{ backgroundColor: view.bgColor }}>首尾相连循环-{index}</View>)}\n            </SwiperViews>\n            <SwiperViews\n                style={{ width: 1000, height: 600, maxWidth: '100%', maxHeight: '80%', marginTop: 100 }}\n                circular\n            >\n                {views.map((view, index) => <View key={index} style={{ backgroundColor: view.bgColor }}>首尾复位循环-{index}</View>)}\n            </SwiperViews>\n        </>\n    );\n}\n")),Object(r.b)(o.c,{__position:0,__code:"<BasicDemo />",__scope:(t={props:m,DefaultLayout:b.a,Playground:o.c,SwiperViews:i.a,BasicDemo:c.a},t.DefaultLayout=b.a,t._frontmatter=p,t),mdxType:"Playground"},Object(r.b)(c.a,{mdxType:"BasicDemo"})),Object(r.b)("br",null),Object(r.b)("h2",{id:"大小与样式"},"大小与样式"),Object(r.b)("p",null,"可以通过 className, style 属性设置SwiperViews容器的大小与样式。"),Object(r.b)("br",null),Object(r.b)("h2",{id:"方向"},"方向"),Object(r.b)("p",null,'可以通过设置 direction 为 "row"(默认) | "column" 设置视图排列的方向。'),Object(r.b)("br",null),Object(r.b)("h2",{id:"视图占主轴大小"},"视图占主轴大小"),Object(r.b)("p",null,"可以通过设置 size 为 0.5 - 1(默认) 之间的数字设置视图在主轴方向占容器的大小。"),Object(r.b)("br",null),Object(r.b)("h2",{id:"拖拽时缩放视图"},"拖拽时缩放视图"),Object(r.b)("p",null,'可以通过设置 scaleInDrag 为 true(默认) / "noShadow" 开启拖拽时缩放视图， false 关闭。'),Object(r.b)("p",null,'设置为 true 将为视图View永久附上 box-shadow 效果，"noShadow"则不会。当然也可以在视图View上用css覆盖。'),Object(r.b)("br",null),Object(r.b)("h2",{id:"允许禁用拖拽"},"允许/禁用拖拽"),Object(r.b)("p",null,"通过设置 enableDrag 属性为 true(默认) / false 允许/禁用拖拽。"),Object(r.b)("br",null),Object(r.b)("h2",{id:"自动播放"},"自动播放"),Object(r.b)("p",null,"通过设置 autoplay 属性为 true(默认，等效3000) / 大于3000的数值 开启x毫秒后自动播放下一张视图， false(默认) 关闭。"),Object(r.b)("br",null),Object(r.b)("h2",{id:"循环"},"循环"),Object(r.b)("p",null,"通过设置 loop 属性为 true 开启首尾相连的循环。"),Object(r.b)("p",null,"通过设置 circular 属性为 true 开启首尾复位的循环。"),Object(r.b)("p",null,"这两个属性互斥，不能同时存在，并且默认不开启。"),Object(r.b)("br",null),Object(r.b)("h2",{id:"主动跳转"},"主动跳转"),Object(r.b)("p",null,"可以通过ref属性调用SwiperViews的goto(index: number)方法，指定跳转到哪一张视图。"),Object(r.b)("p",null,"若index超出范围， 则按首尾相连的顺序，跳到对应的那个视图。"),Object(r.b)("br",null),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"属性"),Object(r.b)("th",{parentName:"tr",align:null},"说明"),Object(r.b)("th",{parentName:"tr",align:null},"类型"),Object(r.b)("th",{parentName:"tr",align:null},"默认值"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"direction"),Object(r.b)("td",{parentName:"tr",align:null},"视图排列方向"),Object(r.b)("td",{parentName:"tr",align:null},'"row" ',"|",' "column"'),Object(r.b)("td",{parentName:"tr",align:null},'"row"')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"size"),Object(r.b)("td",{parentName:"tr",align:null},"视图占主轴大小"),Object(r.b)("td",{parentName:"tr",align:null},"number(0.5 - 1)"),Object(r.b)("td",{parentName:"tr",align:null},"1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"scaleInDrag"),Object(r.b)("td",{parentName:"tr",align:null},"拖拽时缩放视图"),Object(r.b)("td",{parentName:"tr",align:null},"boolean ","|",' "noShadow"'),Object(r.b)("td",{parentName:"tr",align:null},"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"enableDrag"),Object(r.b)("td",{parentName:"tr",align:null},"启用拖拽"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"autoplay"),Object(r.b)("td",{parentName:"tr",align:null},"自动播放"),Object(r.b)("td",{parentName:"tr",align:null},"number (> 3000)"),Object(r.b)("td",{parentName:"tr",align:null},"boolean")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"loop"),Object(r.b)("td",{parentName:"tr",align:null},"首尾相连循环"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"circular"),Object(r.b)("td",{parentName:"tr",align:null},"首尾复位循环"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"其他"),Object(r.b)("td",{parentName:"tr",align:null},"html属性"),Object(r.b)("td",{parentName:"tr",align:null},"如 className, style, onClick 等"),Object(r.b)("td",{parentName:"tr",align:null})))))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/SwiperViews/demos/index.cn.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-swiper-views-demos-index-cn-mdx-aa506c0fff3bd811d8f5.js.map