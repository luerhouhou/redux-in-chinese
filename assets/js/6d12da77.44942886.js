"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2402],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,p(p({ref:t},d),{},{components:n})):r.createElement(k,p({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},323:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],l={id:"server-rendering",title:"\u670d\u52a1\u7aef\u6e32\u67d3",hide_title:!1},i="\u670d\u52a1\u7aef\u6e32\u67d3",s={unversionedId:"recipes/server-rendering",id:"recipes/server-rendering",title:"\u670d\u52a1\u7aef\u6e32\u67d3",description:"\u670d\u52a1\u7aef\u6e32\u67d3\u4e00\u4e2a\u5f88\u5e38\u89c1\u7684\u573a\u666f\u662f\u5f53\u7528\u6237\uff08\u6216\u641c\u7d22\u5f15\u64ce\u722c\u866b\uff09\u7b2c\u4e00\u6b21\u8bf7\u6c42\u9875\u9762\u65f6\uff0c\u7528\u5b83\u6765\u505a\u521d\u59cb\u6e32\u67d3\u3002\u5f53\u670d\u52a1\u5668\u63a5\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u5b83\u628a\u9700\u8981\u7684\u7ec4\u4ef6\u6e32\u67d3\u6210 HTML \u5b57\u7b26\u4e32\uff0c\u7136\u540e\u628a\u5b83\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\uff08\u8fd9\u91cc\u7edf\u6307\u6d4f\u89c8\u5668\uff09\u3002\u4e4b\u540e\uff0c\u5ba2\u6237\u7aef\u4f1a\u63a5\u624b\u6e32\u67d3\u63a7\u5236\u6743\u3002",source:"@site/../docs/recipes/ServerRendering.md",sourceDirName:"recipes",slug:"/recipes/server-rendering",permalink:"/recipes/server-rendering",draft:!1,tags:[],version:"current",frontMatter:{id:"server-rendering",title:"\u670d\u52a1\u7aef\u6e32\u67d3",hide_title:!1},sidebar:"docs",previous:{title:"\u51cf\u5c11\u6837\u677f\u4ee3\u7801",permalink:"/recipes/reducing-boilerplate"},next:{title:"\u7f16\u5199\u6d4b\u8bd5",permalink:"/recipes/writing-tests"}},d={},c=[{value:"\u670d\u52a1\u7aef\u4f7f\u7528 Redux",id:"\u670d\u52a1\u7aef\u4f7f\u7528-redux",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56\u5e93",id:"\u5b89\u88c5\u4f9d\u8d56\u5e93",level:3},{value:"\u670d\u52a1\u7aef\u5f00\u53d1",id:"\u670d\u52a1\u7aef\u5f00\u53d1",level:2},{value:"<code>server.js</code>",id:"serverjs",level:5},{value:"\u5904\u7406\u8bf7\u6c42",id:"\u5904\u7406\u8bf7\u6c42",level:3},{value:"\u6ce8\u5165\u521d\u59cb\u7ec4\u4ef6\u7684 HTML \u548c State",id:"\u6ce8\u5165\u521d\u59cb\u7ec4\u4ef6\u7684-html-\u548c-state",level:3},{value:"\u5ba2\u6237\u7aef\u5f00\u53d1",id:"\u5ba2\u6237\u7aef\u5f00\u53d1",level:2},{value:"<code>client.js</code>",id:"clientjs",level:4},{value:"\u51c6\u5907\u521d\u59cb State",id:"\u51c6\u5907\u521d\u59cb-state",level:2},{value:"\u5904\u7406 Request \u53c2\u6570",id:"\u5904\u7406-request-\u53c2\u6570",level:3},{value:"<code>server.js</code>",id:"serverjs-1",level:4},{value:"\u83b7\u53d6\u5f02\u6b65 State",id:"\u83b7\u53d6\u5f02\u6b65-state",level:3},{value:"<code>api/counter.js</code>",id:"apicounterjs",level:4},{value:"<code>server.js</code>",id:"serverjs-2",level:4},{value:"\u5b89\u5168\u6ce8\u610f\u4e8b\u9879",id:"\u5b89\u5168\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u670d\u52a1\u7aef\u6e32\u67d3"},"\u670d\u52a1\u7aef\u6e32\u67d3"),(0,o.kt)("p",null,"\u670d\u52a1\u7aef\u6e32\u67d3\u4e00\u4e2a\u5f88\u5e38\u89c1\u7684\u573a\u666f\u662f\u5f53\u7528\u6237\uff08\u6216\u641c\u7d22\u5f15\u64ce\u722c\u866b\uff09\u7b2c\u4e00\u6b21\u8bf7\u6c42\u9875\u9762\u65f6\uff0c\u7528\u5b83\u6765\u505a",(0,o.kt)("em",{parentName:"p"},"\u521d\u59cb\u6e32\u67d3"),"\u3002\u5f53\u670d\u52a1\u5668\u63a5\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u5b83\u628a\u9700\u8981\u7684\u7ec4\u4ef6\u6e32\u67d3\u6210 HTML \u5b57\u7b26\u4e32\uff0c\u7136\u540e\u628a\u5b83\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\uff08\u8fd9\u91cc\u7edf\u6307\u6d4f\u89c8\u5668\uff09\u3002\u4e4b\u540e\uff0c\u5ba2\u6237\u7aef\u4f1a\u63a5\u624b\u6e32\u67d3\u63a7\u5236\u6743\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u4f7f\u7528 React \u6765\u505a\u793a\u4f8b\uff0c\u5bf9\u4e8e\u652f\u6301\u670d\u52a1\u7aef\u6e32\u67d3\u7684\u5176\u5b83 view \u6846\u67b6\uff0c\u505a\u6cd5\u4e5f\u662f\u7c7b\u4f3c\u7684\u3002"),(0,o.kt)("h3",{id:"\u670d\u52a1\u7aef\u4f7f\u7528-redux"},"\u670d\u52a1\u7aef\u4f7f\u7528 Redux"),(0,o.kt)("p",null,"\u5f53\u5728\u670d\u52a1\u5668\u4f7f\u7528 Redux \u6e32\u67d3\u65f6\uff0c\u4e00\u5b9a\u8981\u5728\u54cd\u5e94\u4e2d\u5305\u542b\u5e94\u7528\u7684 state\uff0c\u8fd9\u6837\u5ba2\u6237\u7aef\u53ef\u4ee5\u628a\u5b83\u4f5c\u4e3a\u521d\u59cb state\u3002\u8fd9\u70b9\u81f3\u5173\u91cd\u8981\uff0c\u56e0\u4e3a\u5982\u679c\u5728\u751f\u6210 HTML \u524d\u9884\u52a0\u8f7d\u4e86\u6570\u636e\uff0c\u6211\u4eec\u5e0c\u671b\u5ba2\u6237\u7aef\u4e5f\u80fd\u8bbf\u95ee\u8fd9\u4e9b\u6570\u636e\u3002\u5426\u5219\uff0c\u5ba2\u6237\u7aef\u751f\u6210\u7684 HTML \u4e0e\u670d\u52a1\u5668\u7aef\u8fd4\u56de\u7684 HTML \u5c31\u4f1a\u4e0d\u5339\u914d\uff0c\u5ba2\u6237\u7aef\u8fd8\u9700\u8981\u91cd\u65b0\u52a0\u8f7d\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u628a\u6570\u636e\u53d1\u9001\u5230\u5ba2\u6237\u7aef\uff0c\u9700\u8981\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e3a\u6bcf\u6b21\u8bf7\u6c42\u521b\u5efa\u5168\u65b0\u7684 Redux store \u5b9e\u4f8b\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u6309\u9700 dispatch \u4e00\u4e9b action\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u4ece store \u4e2d\u53d6\u51fa state\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u628a state \u4e00\u540c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002")),(0,o.kt)("p",null,"\u5728\u5ba2\u6237\u7aef\uff0c\u4f7f\u7528\u670d\u52a1\u5668\u8fd4\u56de\u7684 state \u521b\u5efa\u5e76\u521d\u59cb\u5316\u4e00\u4e2a\u5168\u65b0\u7684 Redux store\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Redux \u5728\u670d\u52a1\u7aef",(0,o.kt)("strong",{parentName:"p"},"\u60df\u4e00"),"\u8981\u505a\u7684\u4e8b\u60c5\u5c31\u662f\uff0c\u63d0\u4f9b\u5e94\u7528\u6240\u9700\u7684",(0,o.kt)("strong",{parentName:"p"},"\u521d\u59cb state"),"\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"\u4e0b\u9762\u6765\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u670d\u52a1\u7aef\u6e32\u67d3\u3002\u4f7f\u7528\u6781\u7b80\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/counter"},"Counter \u8ba1\u6570\u5668\u5e94\u7528")," \u6765\u505a\u793a\u4f8b\uff0c\u4ecb\u7ecd\u5982\u4f55\u6839\u636e\u8bf7\u6c42\u5728\u670d\u52a1\u7aef\u63d0\u524d\u6e32\u67d3 state\u3002"),(0,o.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56\u5e93"},"\u5b89\u88c5\u4f9d\u8d56\u5e93"),(0,o.kt)("p",null,"\u672c\u4f8b\u4f1a\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"http://expressjs.com/"},"Express")," \u6765\u505a\u5c0f\u578b\u7684 web \u670d\u52a1\u5668\u3002\u8fd8\u9700\u8981\u5b89\u88c5 Redux \u5bf9 React \u7684\u7ed1\u5b9a\u5e93\uff0cRedux \u9ed8\u8ba4\u5e76\u4e0d\u5305\u542b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --save express react-redux\n")),(0,o.kt)("h2",{id:"\u670d\u52a1\u7aef\u5f00\u53d1"},"\u670d\u52a1\u7aef\u5f00\u53d1"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u670d\u52a1\u7aef\u4ee3\u7801\u5927\u6982\u7684\u6837\u5b50\u3002\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"http://expressjs.com/api.html#app.use"},"app.use")," \u6302\u8f7d ",(0,o.kt)("a",{parentName:"p",href:"http://expressjs.com/guide/using-middleware.html"},"Express middleware")," \u5904\u7406\u6240\u6709\u8bf7\u6c42\u3002\u5982\u679c\u4f60\u8fd8\u4e0d\u719f\u6089 Express \u6216\u8005 middleware\uff0c\u53ea\u9700\u8981\u4e86\u89e3\u6bcf\u6b21\u670d\u52a1\u5668\u6536\u5230\u8bf7\u6c42\u65f6\u90fd\u4f1a\u8c03\u7528 handleRender \u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u5982\u679c\u6709\u4f7f\u7528 ES6 \u548c JSX \u8bed\u6cd5\uff0c\u9700\u8981\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," (\u5bf9\u5e94\u793a\u4f8b",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/example-node-server"},"this example of a Node Server with Babel"),") \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/preset-react/"},"React preset"),"\u3002"),(0,o.kt)("h5",{id:"serverjs"},(0,o.kt)("inlineCode",{parentName:"h5"},"server.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import path from 'path'\nimport Express from 'express'\nimport React from 'react'\nimport { createStore } from 'redux'\nimport { Provider } from 'react-redux'\nimport counterApp from './reducers'\nimport App from './containers/App'\n\nconst app = Express()\nconst port = 3000\n\n// \u63d0\u4f9b\u9759\u6001\u6587\u4ef6\napp.use('/static', Express.static('static'))\n\n// \u6bcf\u5f53\u6536\u5230\u8bf7\u6c42\u65f6\u90fd\u4f1a\u89e6\u53d1\napp.use(handleRender)\n\n// \u63a5\u4e0b\u6765\u4f1a\u8865\u5145\u8fd9\u90e8\u5206\u4ee3\u7801\nfunction handleRender(req, res) {\n  /* ... */\n}\nfunction renderFullPage(html, preloadedState) {\n  /* ... */\n}\n\napp.listen(port)\n")),(0,o.kt)("h3",{id:"\u5904\u7406\u8bf7\u6c42"},"\u5904\u7406\u8bf7\u6c42"),(0,o.kt)("p",null,"\u7b2c\u4e00\u4ef6\u8981\u505a\u7684\u4e8b\u60c5\u5c31\u662f\u5bf9\u6bcf\u4e2a\u8bf7\u6c42\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Redux store \u5b9e\u4f8b\u3002\u8fd9\u4e2a store \u60df\u4e00\u4f5c\u7528\u662f\u63d0\u4f9b\u5e94\u7528\u521d\u59cb\u7684 state\u3002"),(0,o.kt)("p",null,"\u6e32\u67d3\u65f6\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"<Provider>")," \u6765\u5305\u4f4f\u6839\u7ec4\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"<App />"),"\uff0c\u4ee5\u6b64\u6765\u8ba9\u7ec4\u4ef6\u6811\u4e2d\u6240\u6709\u7ec4\u4ef6\u90fd\u80fd\u8bbf\u95ee\u5230 store\uff0c\u5c31\u50cf\u4e4b\u524d\u7684",(0,o.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-5-ui-react"},"\u642d\u914d React")," \u6559\u7a0b\u8bb2\u7684\u90a3\u6837\u3002"),(0,o.kt)("p",null,"\u670d\u52a1\u7aef\u6e32\u67d3\u6700\u5173\u952e\u7684\u4e00\u6b65\u662f\u5728",(0,o.kt)("strong",{parentName:"p"},"\u53d1\u9001\u54cd\u5e94\u524d"),"\u6e32\u67d3\u521d\u59cb\u7684 HTML\u3002\u8fd9\u5c31\u8981\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/react-dom-server.html#rendertostring"},"ReactDOMServer.renderToString()"),"\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/api/store#getState"},(0,o.kt)("inlineCode",{parentName:"a"},"store.getState()"))," \u4ece store \u5f97\u5230\u521d\u59cb state\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"renderFullPage")," \u51fd\u6570\u4f1a\u4ecb\u7ecd\u63a5\u4e0b\u6765\u5982\u4f55\u4f20\u9012\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { renderToString } from 'react-dom/server'\n\nfunction handleRender(req, res) {\n  // \u521b\u5efa\u65b0\u7684 Redux store \u5b9e\u4f8b\n  const store = createStore(counterApp)\n\n  // \u628a\u7ec4\u4ef6\u6e32\u67d3\u6210\u5b57\u7b26\u4e32\n  const html = renderToString(\n    <Provider store={store}>\n      <App />\n    </Provider>\n  )\n\n  // \u4ece store \u4e2d\u83b7\u5f97\u521d\u59cb state\n  const preloadedState = store.getState()\n\n  // \u628a\u6e32\u67d3\u540e\u7684\u9875\u9762\u5185\u5bb9\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\n  res.send(renderFullPage(html, preloadedState))\n}\n")),(0,o.kt)("h3",{id:"\u6ce8\u5165\u521d\u59cb\u7ec4\u4ef6\u7684-html-\u548c-state"},"\u6ce8\u5165\u521d\u59cb\u7ec4\u4ef6\u7684 HTML \u548c State"),(0,o.kt)("p",null,"\u670d\u52a1\u7aef\u6700\u540e\u4e00\u6b65\u5c31\u662f\u628a\u521d\u59cb\u7ec4\u4ef6\u7684 HTML \u548c\u521d\u59cb state \u6ce8\u5165\u5230\u5ba2\u6237\u7aef\u80fd\u591f\u6e32\u67d3\u7684\u6a21\u677f\u4e2d\u3002\u5982\u4f55\u4f20\u9012 state \u5462\uff0c\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," \u6807\u7b7e\u6765\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"preloadedState")," \u8d4b\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"window.__PRELOADED_STATE__"),"\u3002"),(0,o.kt)("p",null,"\u5ba2\u6237\u7aef\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"window.__PRELOADED_STATE__")," \u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"preloadedState"),"\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\u4f7f\u7528 script \u6807\u7b7e\u6765\u5f15\u5165\u6253\u5305\u540e\u7684 js bundle \u6587\u4ef6\u3002\u8fd9\u662f\u6253\u5305\u5de5\u5177\u8f93\u51fa\u7684\u5ba2\u6237\u7aef\u5165\u53e3\u6587\u4ef6\uff0c\u4ee5\u9759\u6001\u6587\u4ef6\u6216\u8005 URL \u7684\u65b9\u5f0f\u5b9e\u73b0\u670d\u52a1\u7aef\u5f00\u53d1\u4e2d\u7684\u70ed\u52a0\u8f7d\u3002\u4e0b\u9762\u662f\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function renderFullPage(html, preloadedState) {\n  return `\n    <!doctype html>\n    <html>\n      <head>\n        <title>Redux Universal Example</title>\n      </head>\n      <body>\n        <div id="root">${html}</div>\n        <script>\n          // \u8b66\u544a\uff1a\u5173\u4e8e\u5728 HTML \u4e2d\u5d4c\u5165 JSON \u7684\u5b89\u5168\u95ee\u9898\uff0c\u8bf7\u67e5\u770b\u4ee5\u4e0b\u6587\u6863\n          // http://redux.js.org/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(\n            /</g,\n            \'\\\\u003c\'\n          )}\n        <\/script>\n        <script src="/static/bundle.js"><\/script>\n      </body>\n    </html>\n    `\n}\n')),(0,o.kt)("h2",{id:"\u5ba2\u6237\u7aef\u5f00\u53d1"},"\u5ba2\u6237\u7aef\u5f00\u53d1"),(0,o.kt)("p",null,"\u5ba2\u6237\u7aef\u4ee3\u7801\u975e\u5e38\u76f4\u89c2\u3002\u53ea\u9700\u8981\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"window.__PRELOADED_STATE__")," \u5f97\u5230\u521d\u59cb state\uff0c\u5e76\u4f20\u7ed9 ",(0,o.kt)("a",{parentName:"p",href:"/api/createstore"},(0,o.kt)("inlineCode",{parentName:"a"},"createStore()"))," \u51fd\u6570\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b:"),(0,o.kt)("h4",{id:"clientjs"},(0,o.kt)("inlineCode",{parentName:"h4"},"client.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { hydrate } from 'react-dom'\nimport { createStore } from 'redux'\nimport { Provider } from 'react-redux'\nimport App from './containers/App'\nimport counterApp from './reducers'\n\n// \u901a\u8fc7\u670d\u52a1\u7aef\u6ce8\u5165\u7684\u5168\u5c40\u53d8\u91cf\u5f97\u5230\u521d\u59cb state\nconst preloadedState = window.__PRELOADED_STATE__\n\n// \u8ba9\u72b6\u6001\u6570\u636e\u53ef\u4ee5\u88ab\u5783\u573e\u56de\u6536\ndelete window.__PRELOADED_STATE__\n\n// \u4f7f\u7528\u521d\u59cb state \u521b\u5efa Redux store\nconst store = createStore(counterApp, preloadedState)\n\nhydrate(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u9009\u62e9\u81ea\u5df1\u559c\u6b22\u7684\u6253\u5305\u5de5\u5177\uff08Webpack, Browserify \u6216\u5176\u5b83\uff09\u6765\u7f16\u8bd1\u5e76\u6253\u5305\u6587\u4ef6\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"static/bundle.js"),"\u3002"),(0,o.kt)("p",null,"\u5f53\u9875\u9762\u52a0\u8f7d\u65f6\uff0c\u6253\u5305\u540e\u7684 js \u4f1a\u542f\u52a8\uff0c\u5e76\u8c03\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html#hydrate"},(0,o.kt)("inlineCode",{parentName:"a"},"React.hydrate()")),"\uff0c\u7136\u540e\u4f1a\u4e0e\u670d\u52a1\u7aef\u6e32\u67d3\u7684 HTML \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"data-react-id")," \u5c5e\u6027\u505a\u5173\u8054\u3002\u8fd9\u4f1a\u628a\u65b0\u751f\u6210\u7684 React \u5b9e\u4f8b\u4e0e\u670d\u52a1\u7aef\u7684\u865a\u62df DOM \u8fde\u63a5\u8d77\u6765\u3002\u56e0\u4e3a\u540c\u6837\u4f7f\u7528\u4e86\u6765\u81ea Redux store \u7684\u521d\u59cb state\uff0c\u5e76\u4e14 view \u7ec4\u4ef6\u4ee3\u7801\u662f\u4e00\u6837\u7684\uff0c\u7ed3\u679c\u5c31\u662f\u6211\u4eec\u5f97\u5230\u4e86\u76f8\u540c\u7684 DOM\u3002"),(0,o.kt)("p",null,"\u5c31\u662f\u8fd9\u6837\uff01\u8fd9\u5c31\u662f\u5b9e\u73b0\u670d\u52a1\u7aef\u6e32\u67d3\u7684\u6240\u6709\u6b65\u9aa4\u3002"),(0,o.kt)("p",null,"\u4f46\u8fd9\u6837\u505a\u8fd8\u662f\u6bd4\u8f83\u539f\u59cb\u7684\u3002\u53ea\u4f1a\u7528\u52a8\u6001\u4ee3\u7801\u6e32\u67d3\u4e00\u4e2a\u9759\u6001\u7684 View\u3002\u4e0b\u4e00\u6b65\u8981\u505a\u7684\u662f\u52a8\u6001\u521b\u5efa\u521d\u59cb state \u652f\u6301\u52a8\u6001\u6e32\u67d3 view\u3002"),(0,o.kt)("h2",{id:"\u51c6\u5907\u521d\u59cb-state"},"\u51c6\u5907\u521d\u59cb State"),(0,o.kt)("p",null,"\u56e0\u4e3a\u5ba2\u6237\u7aef\u53ea\u662f\u6267\u884c\u6536\u5230\u7684\u4ee3\u7801\uff0c\u521a\u5f00\u59cb\u7684\u521d\u59cb state \u53ef\u80fd\u662f\u7a7a\u7684\uff0c\u7136\u540e\u6839\u636e\u9700\u8981\u83b7\u53d6 state\u3002\u5728\u670d\u52a1\u7aef\uff0c\u6e32\u67d3\u662f\u540c\u6b65\u6267\u884c\u7684\u800c\u4e14\u6211\u4eec\u53ea\u6709\u4e00\u6b21\u6e32\u67d3 view \u7684\u673a\u4f1a\u3002\u5728\u6536\u5230\u8bf7\u6c42\u65f6\uff0c\u53ef\u80fd\u9700\u8981\u6839\u636e\u8bf7\u6c42\u53c2\u6570\u6216\u8005\u5916\u90e8 state\uff08\u5982\u8bbf\u95ee API \u6216\u8005\u6570\u636e\u5e93\uff09\uff0c\u8ba1\u7b97\u540e\u5f97\u5230\u521d\u59cb state\u3002"),(0,o.kt)("h3",{id:"\u5904\u7406-request-\u53c2\u6570"},"\u5904\u7406 Request \u53c2\u6570"),(0,o.kt)("p",null,"\u670d\u52a1\u7aef\u6536\u5230\u7684\u552f\u4e00\u8f93\u5165\u662f\u6765\u81ea\u6d4f\u89c8\u5668\u7684\u8bf7\u6c42\u3002\u5728\u670d\u52a1\u5668\u542f\u52a8\u65f6\u53ef\u80fd\u9700\u8981\u505a\u4e00\u4e9b\u914d\u7f6e\uff08\u5982\u8fd0\u884c\u5728\u5f00\u53d1\u73af\u5883\u8fd8\u662f\u751f\u4ea7\u73af\u5883\uff09\uff0c\u4f46\u8fd9\u4e9b\u914d\u7f6e\u662f\u9759\u6001\u7684\u3002"),(0,o.kt)("p",null,"\u8bf7\u6c42\u4f1a\u5305\u542b URL \u8bf7\u6c42\u76f8\u5173\u4fe1\u606f\uff0c\u5305\u62ec\u8bf7\u6c42\u53c2\u6570\uff0c\u5b83\u4eec\u5bf9\u4e8e\u505a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ReactTraining/react-router"},"React Router")," \u8def\u7531\u65f6\u53ef\u80fd\u4f1a\u6709\u7528\u3002\u4e5f\u53ef\u80fd\u5728\u8bf7\u6c42\u5934\u91cc\u5305\u542b cookies\uff0c\u9274\u6743\u4fe1\u606f\u6216\u8005 POST \u5185\u5bb9\u6570\u636e\u3002\u4e0b\u9762\u6f14\u793a\u5982\u4f55\u57fa\u4e8e\u8bf7\u6c42\u53c2\u6570\u6765\u5f97\u5230\u521d\u59cb state\u3002"),(0,o.kt)("h4",{id:"serverjs-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"server.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import qs from 'qs' // \u6dfb\u52a0\u5230\u6587\u4ef6\u5f00\u5934\nimport { renderToString } from 'react-dom/server'\n\nfunction handleRender(req, res) {\n  // \u5982\u679c\u5b58\u5728\u7684\u8bdd\uff0c\u4ece request \u8bfb\u53d6 counter\n  const params = qs.parse(req.query)\n  const counter = parseInt(params.counter, 10) || 0\n\n  // \u5f97\u5230\u521d\u59cb state\n  let preloadedState = { counter }\n\n  // \u521b\u5efa\u65b0\u7684 Redux store \u5b9e\u4f8b\n  const store = createStore(counterApp, preloadedState)\n\n  // \u628a\u7ec4\u4ef6\u6e32\u67d3\u6210\u5b57\u7b26\u4e32\n  const html = renderToString(\n    <Provider store={store}>\n      <App />\n    </Provider>\n  )\n\n  // \u4ece Redux store \u5f97\u5230\u521d\u59cb state\n  const finalState = store.getState()\n\n  // \u628a\u6e32\u67d3\u540e\u7684\u9875\u9762\u53d1\u7ed9\u5ba2\u6237\u7aef\n  res.send(renderFullPage(html, finalState))\n}\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u9996\u5148\u8bbf\u95ee Express \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," \u5bf9\u8c61\u3002\u628a\u53c2\u6570\u8f6c\u6210\u6570\u5b57\uff0c\u7136\u540e\u8bbe\u7f6e\u5230\u521d\u59cb state \u4e2d\u3002\u5982\u679c\u4f60\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/?counter=100"},"http://localhost:3000/?counter=100"),"\uff0c\u4f60\u4f1a\u770b\u5230\u8ba1\u6570\u5668\u4ece 100 \u5f00\u59cb\u3002\u5728\u6e32\u67d3\u540e\u7684 HTML \u4e2d\uff0c\u4f60\u4f1a\u770b\u5230\u8ba1\u6570\u663e\u793a 100 \u540c\u65f6\u8bbe\u7f6e\u8fdb\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"__PRELOADED_STATE__")," \u53d8\u91cf\u3002"),(0,o.kt)("h3",{id:"\u83b7\u53d6\u5f02\u6b65-state"},"\u83b7\u53d6\u5f02\u6b65 State"),(0,o.kt)("p",null,"\u670d\u52a1\u7aef\u6e32\u67d3\u5e38\u7528\u7684\u573a\u666f\u662f\u5904\u7406\u5f02\u6b65 state\u3002\u56e0\u4e3a\u670d\u52a1\u7aef\u6e32\u67d3\u5929\u751f\u662f\u540c\u6b65\u7684\uff0c\u56e0\u6b64\u5f02\u6b65\u7684\u6570\u636e\u83b7\u53d6\u64cd\u4f5c\u5bf9\u5e94\u5230\u540c\u6b65\u64cd\u4f5c\u975e\u5e38\u91cd\u8981\u3002"),(0,o.kt)("p",null,"\u6700\u7b80\u5355\u7684\u505a\u6cd5\u662f\u5f80\u540c\u6b65\u4ee3\u7801\u91cc\u4f20\u9012\u4e00\u4e9b\u56de\u8c03\u51fd\u6570\u3002\u5728\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u91cc\u5f15\u7528\u54cd\u5e94\u5bf9\u8c61\uff0c\u628a\u6e32\u67d3\u540e\u7684 HTML \u53d1\u7ed9\u5ba2\u6237\u7aef\u3002\u4e0d\u8981\u62c5\u5fc3\uff0c\u5e76\u6ca1\u6709\u60f3\u50cf\u4e2d\u90a3\u4e48\u96be\u3002"),(0,o.kt)("p",null,"\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u6709\u4e00\u4e2a\u5916\u90e8\u6570\u636e\u6e90\u63d0\u4f9b\u8ba1\u7b97\u5668\u7684\u521d\u59cb\u503c\uff08\u6240\u8c13\u7684\u628a\u8ba1\u7b97\u4f5c\u4e3a\u4e00\u79cd\u670d\u52a1\uff09\u3002\u6211\u4eec\u4f1a\u6a21\u62df\u4e00\u4e2a\u8bf7\u6c42\u5e76\u4f7f\u7528\u7ed3\u679c\u521b\u5efa\u521d\u59cb state\u3002API \u8bf7\u6c42\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("h4",{id:"apicounterjs"},(0,o.kt)("inlineCode",{parentName:"h4"},"api/counter.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min)) + min\n}\n\nexport function fetchCounter(callback) {\n  setTimeout(() => {\n    callback(getRandomInt(1, 100))\n  }, 500)\n}\n")),(0,o.kt)("p",null,"\u518d\u6b21\u8bf4\u660e\u4e00\u4e0b\uff0c\u8fd9\u53ea\u662f\u4e00\u4e2a\u6a21\u62df\u7684 API\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout")," \u6a21\u62df\u4e00\u4e2a\u9700\u8981 500 \u6beb\u79d2\u7684\u8bf7\u6c42\uff08\u5b9e\u9645\u9879\u76ee\u4e2d API \u8bf7\u6c42\u4e00\u822c\u4f1a\u66f4\u5feb\uff09\u3002\u4f20\u5165\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u5b83\u5f02\u6b65\u8fd4\u56de\u4e00\u4e2a\u968f\u673a\u6570\u5b57\u3002\u5982\u679c\u4f60\u4f7f\u7528\u4e86\u57fa\u4e8e Promise \u7684 API \u5de5\u5177\uff0c\u90a3\u4e48\u8981\u628a\u56de\u8c03\u51fd\u6570\u653e\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"then")," \u4e2d\u3002"),(0,o.kt)("p",null,"\u5728\u670d\u52a1\u7aef\uff0c\u628a\u4ee3\u7801\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchCounter")," \u5305\u8d77\u6765\uff0c\u5728\u56de\u8c03\u51fd\u6570\u91cc\u62ff\u5230\u7ed3\u679c\uff1a"),(0,o.kt)("h4",{id:"serverjs-2"},(0,o.kt)("inlineCode",{parentName:"h4"},"server.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u6dfb\u52a0\u5230 import\nimport { fetchCounter } from './api/counter'\nimport { renderToString } from 'react-dom/server'\n\nfunction handleRender(req, res) {\n  // \u5f02\u6b65\u8bf7\u6c42\u6a21\u62df\u7684 API\n  fetchCounter(apiResult => {\n    // \u5982\u679c\u5b58\u5728\u7684\u8bdd\uff0c\u4ece request \u8bfb\u53d6 counter\n    const params = qs.parse(req.query)\n    const counter = parseInt(params.counter) || apiResult || 0\n\n    // \u5f97\u5230\u521d\u59cb state\n    let preloadedState = { counter }\n\n    // \u521b\u5efa\u65b0\u7684 Redux store \u5b9e\u4f8b\n    const store = createStore(counterApp, preloadedState)\n\n    // \u628a\u7ec4\u4ef6\u6e32\u67d3\u6210\u5b57\u7b26\u4e32\n    const html = renderToString(\n      <Provider store={store}>\n        <App />\n      </Provider>\n    )\n\n    // \u4ece Redux store \u5f97\u5230\u521d\u59cb state\n    const finalState = store.getState()\n\n    // \u628a\u6e32\u67d3\u540e\u7684\u9875\u9762\u53d1\u7ed9\u5ba2\u6237\u7aef\n    res.send(renderFullPage(html, finalState))\n  })\n}\n")),(0,o.kt)("p",null,"\u56e0\u4e3a\u5728\u56de\u8c03\u4e2d\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"res.send()"),"\uff0c\u670d\u52a1\u5668\u4f1a\u4fdd\u62a4\u8fde\u63a5\u6253\u5f00\u5e76\u5728\u56de\u8c03\u51fd\u6570\u6267\u884c\u524d\u4e0d\u53d1\u9001\u4efb\u4f55\u6570\u636e\u3002\u4f60\u4f1a\u53d1\u73b0\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u6709 500ms \u7684\u5ef6\u65f6\u3002\u66f4\u9ad8\u7ea7\u7684\u7528\u6cd5\u4f1a\u5305\u62ec\u5bf9 API \u8bf7\u6c42\u51fa\u9519\u8fdb\u884c\u5904\u7406\uff0c\u6bd4\u5982\u9519\u8bef\u7684\u8bf7\u6c42\u6216\u8005\u8d85\u65f6\u3002"),(0,o.kt)("h3",{id:"\u5b89\u5168\u6ce8\u610f\u4e8b\u9879"},"\u5b89\u5168\u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u4ee3\u7801\u4e2d\u5f88\u591a\u662f\u57fa\u4e8e\u7528\u6237\u751f\u6210\u5185\u5bb9\uff08UGC\uff09\u548c\u8f93\u5165\u7684\uff0c\u4e0d\u77e5\u4e0d\u89c9\u4e2d\uff0c\u63d0\u9ad8\u4e86\u5e94\u7528\u53ef\u80fd\u53d7\u653b\u51fb\u533a\u57df\u3002\u4efb\u4f55\u5e94\u7528\u90fd\u5e94\u8be5\u5bf9\u7528\u6237\u8f93\u5165\u505a\u5b89\u5168\u5904\u7406\u4ee5\u907f\u514d\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff08XSS\uff09\u6216\u8005\u4ee3\u7801\u6ce8\u5165\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u7684\u793a\u4f8b\u4e2d\uff0c\u53ea\u5bf9\u5b89\u5168\u505a\u57fa\u672c\u5904\u7406\u3002\u5f53\u4ece\u8bf7\u6c42\u4e2d\u62ff\u53c2\u6570\u65f6\uff0c\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," \u53c2\u6570\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"parseInt")," \u628a\u5b83\u8f6c\u6210\u6570\u5b57\u3002\u5982\u679c\u4e0d\u8fd9\u6837\u505a\uff0c\u5f53 request \u4e2d\u6709 script \u6807\u7b7e\u65f6\uff0c\u5f88\u5bb9\u6613\u5728\u6e32\u67d3\u7684 HTML \u4e2d\u751f\u6210\u5371\u9669\u4ee3\u7801\u3002\u5c31\u50cf\u8fd9\u6837\u7684\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"?counter=<\/script><script>doSomethingBad();<\/script>")),(0,o.kt)("p",null,"\u5728\u6211\u4eec\u6781\u7b80\u7684\u793a\u4f8b\u4e2d\uff0c\u628a\u8f93\u5165\u8f6c\u6210\u6570\u5b57\u5df2\u7ecf\u6bd4\u8f83\u5b89\u5168\u3002\u5982\u679c\u5904\u7406\u66f4\u590d\u6742\u7684\u8f93\u5165\uff0c\u6bd4\u5982\u81ea\u5b9a\u4e49\u683c\u5f0f\u7684\u6587\u672c\uff0c\u4f60\u5e94\u8be5\u7528\u5b89\u5168\u51fd\u6570\u5904\u7406\u8f93\u5165\uff0c\u6bd4\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yahoo/xss-filters"},"xss-filters"),"\u3002"),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u989d\u5916\u7684\u5b89\u5168\u5c42\u6765\u5bf9\u4ea7\u751f\u7684 state \u8fdb\u884c\u6d88\u6bd2\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.stringify")," \u53ef\u80fd\u4f1a\u9020\u6210 script \u6ce8\u5165\u3002\u9274\u4e8e\u6b64\uff0c\u4f60\u9700\u8981\u6e05\u6d17 JSON \u5b57\u7b26\u4e32\u4e2d\u7684 HTML \u6807\u7b7e\u548c\u5176\u5b83\u5371\u9669\u7684\u5b57\u7b26\u3002\u53ef\u4ee5\u901a\u8fc7\u5b57\u7b26\u4e32\u66ff\u6362\uff0c\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.stringify(state).replace(/</g, '\\\\u003c')"),"\uff0c\u6216\u8005\u4f7f\u7528\u590d\u6742\u7684\u5e93\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yahoo/serialize-javascript"},"serialize-javascript")," \u5904\u7406\u3002"),(0,o.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,o.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-6-async-logic"},"\u5f02\u6b65 Actions \u4e0e\u6570\u636e\u8bf7\u6c42")," \u5b66\u4e60\u66f4\u591a\u4f7f\u7528 Promise \u548c thunk \u8fd9\u4e9b\u5f02\u6b65\u5143\u7d20\u6765\u8868\u793a\u5f02\u6b65\u6570\u636e\u6d41\u7684\u65b9\u6cd5\u3002\u8bb0\u4f4f\uff0c\u90a3\u91cc\u5b66\u5230\u7684\u4efb\u4f55\u5185\u5bb9\u90fd\u53ef\u4ee5\u7528\u4e8e\u540c\u6784\u6e32\u67d3\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ReactTraining/react-router"},"React Router")," \u4e4b\u7c7b\u7684\u4e1c\u897f\uff0c\u60a8\u53ef\u80fd\u8fd8\u60f3\u5c06\u6570\u636e\u83b7\u53d6\u4f9d\u8d56\u9879\u8868\u793a\u4e3a\u8def\u7531\u5904\u7406\u7a0b\u5e8f\u7ec4\u4ef6\u4e0a\u7684\u9759\u6001 ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchData()")," \u65b9\u6cd5\u3002 \u4ed6\u4eec\u53ef\u80fd\u4f1a\u8fd4\u56de ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-6-async-logic"},"thunks"),"\uff0c\u4ee5\u4fbf\u60a8\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"handleRender")," \u51fd\u6570\u53ef\u4ee5\u5339\u914d\u5230\u5bf9\u5e94\u7684\u7ec4\u4ef6\u7c7b\uff0c\u5bf9\u5b83\u4eec\u5747 dispatch ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchData()")," \u7684\u7ed3\u679c\uff0c\u5728 Promise \u89e3\u51b3\u540e\u624d\u6e32\u67d3\u3002\u8fd9\u6837\u4e0d\u540c\u8def\u7531\u9700\u8981\u8c03\u7528\u7684 API \u8bf7\u6c42\u90fd\u5e76\u7f6e\u4e8e\u8def\u7531\u5904\u7406\u7ec4\u4ef6\u4e86\u3002\u5728\u5ba2\u6237\u7aef\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u540c\u6837\u6280\u672f\u6765\u907f\u514d\u5728\u5207\u6362\u9875\u9762\u65f6\uff0c\u5f53\u6570\u636e\u8fd8\u6ca1\u6709\u52a0\u8f7d\u5b8c\u6210\u524d\u6267\u884c\u8def\u7531\u3002"))}m.isMDXComponent=!0}}]);