"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4697],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,k=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return n?t.createElement(k,i(i({ref:r},c),{},{components:n})):t.createElement(k,i({ref:r},c))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2873:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],d={id:"configuring-your-store",title:"Configuring Your Store",hide_title:!1},l="\u914d\u7f6e Store",p={unversionedId:"recipes/configuring-your-store",id:"recipes/configuring-your-store",title:"Configuring Your Store",description:'\u5728"Redux \u6df1\u5165\u6d45\u51fa" \u6559\u7a0b\u8fd9\u4e00\u7ae0\u8282\u6211\u4eec\u6784\u5efa\u4e86\u4e00\u4e2a Todo list \u5e94\u7528\uff0c\u4ecb\u7ecd\u4e86\u4e00\u4e9b Redux \u57fa\u7840\u77e5\u8bc6\u3002\u5176\u4e2d\u4e5f\u8bb2\u5230\u4e86\u5982\u4f55\u914d\u7f6e Redux store\u3002',source:"@site/../docs/recipes/ConfiguringYourStore.md",sourceDirName:"recipes",slug:"/recipes/configuring-your-store",permalink:"/recipes/configuring-your-store",draft:!1,tags:[],version:"current",frontMatter:{id:"configuring-your-store",title:"Configuring Your Store",hide_title:!1},sidebar:"docs",previous:{title:"\u6280\u5de7\uff1a\u76ee\u5f55",permalink:"/recipes/"},next:{title:"Usage With TypeScript",permalink:"/recipes/usage-with-typescript"}},c={},u=[{value:"\u521b\u5efa store",id:"\u521b\u5efa-store",level:2},{value:"\u62d3\u5c55 Redux \u529f\u80fd",id:"\u62d3\u5c55-redux-\u529f\u80fd",level:2},{value:"\u5b89\u88c5 <code>redux-thunk</code>",id:"\u5b89\u88c5-redux-thunk",level:4},{value:"middleware/logger.js",id:"middlewareloggerjs",level:4},{value:"enhancers/monitorReducer.js",id:"enhancersmonitorreducerjs",level:4},{value:"\u8fd9\u79cd\u505a\u6cd5\u7684\u95ee\u9898",id:"\u8fd9\u79cd\u505a\u6cd5\u7684\u95ee\u9898",level:2},{value:"\u89e3\u51b3\u65b9\u6848\uff1a<code>configureStore</code>",id:"\u89e3\u51b3\u65b9\u6848configurestore",level:2},{value:"\u96c6\u6210 devtools \u6269\u5c55\u7a0b\u5e8f",id:"\u96c6\u6210-devtools-\u6269\u5c55\u7a0b\u5e8f",level:2},{value:"\u70ed\u52a0\u8f7d",id:"\u70ed\u52a0\u8f7d",level:2},{value:"\u4f7f\u7528 Redux Starter Kit \u7b80\u5316\u8bbe\u7f6e",id:"\u4f7f\u7528-redux-starter-kit-\u7b80\u5316\u8bbe\u7f6e",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],s={toc:u};function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u914d\u7f6e-store"},"\u914d\u7f6e Store"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-1-overview"},'"Redux \u6df1\u5165\u6d45\u51fa" \u6559\u7a0b'),"\u8fd9\u4e00\u7ae0\u8282\u6211\u4eec\u6784\u5efa\u4e86\u4e00\u4e2a Todo list \u5e94\u7528\uff0c\u4ecb\u7ecd\u4e86\u4e00\u4e9b Redux \u57fa\u7840\u77e5\u8bc6\u3002\u5176\u4e2d\u4e5f\u8bb2\u5230\u4e86\u5982\u4f55\u914d\u7f6e Redux store\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u4f1a\u63a2\u7d22\u5982\u4f55\u5b9a\u5236 store \u6765\u6dfb\u52a0\u989d\u5916\u7684\u529f\u80fd\u3002\u6211\u4eec\u5c06\u4f1a\u63a5\u7740\u57fa\u7840\u90e8\u5206\u7684\u6e90\u4ee3\u7801\u7ee7\u7eed\u5199\uff0c\u4f60\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-5-ui-react"},"\u6587\u6863"),"\uff0c\u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-fundamentals-example-app/tree/checkpoint-5-uiAllActions"},"\u4ed3\u5e93\u4e2d\u7684\u793a\u4f8b\u90e8\u5206"),"\uff0c\u6216\u8005\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-5-uiAllActions/"},"CodeSandbox \u5728\u6d4f\u89c8\u5668\u4e2d"),"\u9605\u8bfb\u8fd9\u4e9b\u4ee3\u7801\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa-store"},"\u521b\u5efa store"),(0,a.kt)("p",null,"\u9996\u5148\u6211\u4eec\u6765\u770b\u770b\u5728\u539f\u5148\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," \u4e2d\u6211\u4eec\u662f\u5982\u4f55\u521b\u5efa store \u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\nimport { createStore } from 'redux'\nimport rootReducer from './reducers'\nimport App from './components/App'\n\nconst store = createStore(rootReducer)\n\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),(0,a.kt)("p",null,"\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u5c06 reducer \u4f20\u5165 Redux \u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"createStore")," \u51fd\u6570\u4e2d\uff0c\u5b83\u8fd4\u56de\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," \u5bf9\u8c61\u3002\u63a5\u7740\u6211\u4eec\u5c06\u8fd9\u4e2a\u5bf9\u8c61\u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"react-redux")," \u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider")," \u7ec4\u4ef6\u4e2d\uff0c\u7136\u540e\u5c06\u5b83\u6302\u8f7d\u5728\u7ec4\u4ef6\u6811\u7684\u6839\u90e8\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837\u505a\u53ef\u4ee5\u4fdd\u8bc1\u6211\u4eec\u5728\u4efb\u4f55\u65f6\u5019\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"react-redux")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," \u8fde\u63a5\u5230 Redux \u65f6\uff0cstore \u53ef\u4ee5\u5728\u7ec4\u4ef6\u4e2d\u6b63\u5e38\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u62d3\u5c55-redux-\u529f\u80fd"},"\u62d3\u5c55 Redux \u529f\u80fd"),(0,a.kt)("p",null,"\u5927\u591a\u6570\u7684\u5e94\u7528\u90fd\u4f1a\u4f7f\u7528 middleware \u6216 enhancer \u6765\u62d3\u5c55 Redux store \u7684\u529f\u80fd\u3002",(0,a.kt)("strong",{parentName:"p"},"\uff08\u6ce8\uff1amiddleware \u5f88\u5e38\u89c1\uff0cenhancer \u4e0d\u592a\u5e38\u89c1\uff09")," middleware \u62d3\u5c55\u4e86 Redux ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," \u51fd\u6570\u7684\u529f\u80fd\uff1benhancer \u62d3\u5c55\u4e86 Redux store \u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u4f1a\u6dfb\u52a0\u5982\u4e0b\u4e24\u4e2a middleware \u548c \u4e00\u4e2a enhancer\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux-thunk"},(0,a.kt)("inlineCode",{parentName:"a"},"redux-thunk")," middleware"),"\uff0c\u5141\u8bb8\u4e86\u7b80\u5355\u7684 dispatch \u5f02\u6b65\u7528\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8bb0\u5f55 dispatch \u7684 action \u548c\u5f97\u5230\u7684\u65b0 state \u7684 middleware\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8bb0\u5f55 reducer \u5904\u7406\u6bcf\u4e2a action \u6240\u7528\u65f6\u95f4\u7684 enhancer\u3002")),(0,a.kt)("h4",{id:"\u5b89\u88c5-redux-thunk"},"\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"h4"},"redux-thunk")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save redux-thunk\n")),(0,a.kt)("h4",{id:"middlewareloggerjs"},"middleware/logger.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const logger = store => next => action => {\n  console.group(action.type)\n  console.info('dispatching', action)\n  let result = next(action)\n  console.log('next state', store.getState())\n  console.groupEnd()\n  return result\n}\n\nexport default logger\n")),(0,a.kt)("h4",{id:"enhancersmonitorreducerjs"},"enhancers/monitorReducer.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const round = number => Math.round(number * 100) / 100\n\nconst monitorReducerEnhancer =\n  createStore => (reducer, initialState, enhancer) => {\n    const monitoredReducer = (state, action) => {\n      const start = performance.now()\n      const newState = reducer(state, action)\n      const end = performance.now()\n      const diff = round(end - start)\n\n      console.log('reducer process time:', diff)\n\n      return newState\n    }\n\n    return createStore(monitoredReducer, initialState, enhancer)\n  }\n\nexport default monitorReducerEnhancer\n")),(0,a.kt)("p",null,"\u6211\u4eec\u628a\u8fd9\u4e9b\u4e1c\u897f\u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," \u4e2d\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u6211\u4eec\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"redux-thunk"),"\uff0c\u6211\u4eec\u81ea\u5df1\u5199\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"loggerMiddleware")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"monitorReducerEnhancer"),"\uff0c\u8fd8\u6709\u4e24\u4e2a Redux \u63d0\u4f9b\u7684\u51fd\u6570\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"applyMiddleware")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"compose"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u6765\u6211\u4eec\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"applyMiddleware")," \u6765\u521b\u5efa\u4e00\u4e2a store enhancer\uff0c\u901a\u8fc7\u5b83\u6211\u4eec\u53ef\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"loggerMiddleware")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"thunkMiddleware")," \u5e94\u7528\u5230 dispatch \u51fd\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u4e00\u6b65\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"compose")," \u5c06\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"middlewareEnhancer")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"monitorReducerEnhancer")," \u7ec4\u5408\u5230\u4e00\u8d77\u3002\u8fd9\u4e00\u6b65\u5fc5\u987b\u8981\u505a\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"createStore")," \u53ea\u63a5\u53d7\u4e00\u4e2a enhancer \u4f5c\u4e3a\u53c2\u6570\uff0c\u6240\u4ee5\u4f60\u53ea\u80fd\u5c06\u5b83\u4fe9\u7ec4\u5408\uff08compose\uff09\u6210\u4e00\u4e2a\u5927\u7684 enhancer\uff0c\u6b63\u5982\u793a\u4f8b\u4e2d\u6240\u793a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u540e\uff0c\u6211\u4eec\u5c06\u8fd9\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"composedEnhancers")," \u51fd\u6570\u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"createStore")," \u4e2d\u4f5c\u4e3a\u7b2c\u4e09\u4e2a\u53c2\u6570\u3002 ",(0,a.kt)("strong",{parentName:"li"},"\u6ce8\uff1a\u8fd9\u91cc\u6211\u4eec\u5ffd\u7565\u6389\u4e86 createStore \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b83\u7ed9 store \u4f20\u5165\u4e00\u4e2a\u521d\u59cb state\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\nimport { applyMiddleware, createStore, compose } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\nimport rootReducer from './reducers'\nimport loggerMiddleware from './middleware/logger'\nimport monitorReducerEnhancer from './enhancers/monitorReducer'\nimport App from './components/App'\n\nconst middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)\nconst composedEnhancers = compose(\n  middlewareEnhancer,\n  monitorReducerEnhancer\n)\n\nconst store = createStore(rootReducer, undefined, composedEnhancers)\n\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),(0,a.kt)("h2",{id:"\u8fd9\u79cd\u505a\u6cd5\u7684\u95ee\u9898"},"\u8fd9\u79cd\u505a\u6cd5\u7684\u95ee\u9898"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u4ee3\u7801\u7684\u786e\u80fd\u6b63\u5e38\u8fd0\u884c\uff0c\u4f46\u5bf9\u4e8e\u4e00\u4e2a\u5178\u578b\uff08typical\uff09\u7684\u5e94\u7528\u6765\u8bf4\u8fd8\u4e0d\u591f\u7406\u60f3\u3002"),(0,a.kt)("p",null,"\u5927\u591a\u6570\u5e94\u7528\u4f7f\u7528\u7684 middleware \u5927\u4e8e\u4e00\u4e2a\uff0c\u800c\u4e14\u6bcf\u4e2a middleware \u7ecf\u5e38\u9700\u8981\u4e00\u4e9b\u989d\u5916\u7684\u521d\u59cb\u5316\u5de5\u4f5c\u3002\u8fd9\u4e9b\u201c\u566a\u58f0\u201d\u7684\u52a0\u5165\u4f1a\u4f7f ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," \u5f88\u5feb\u53d8\u5f97\u96be\u4ee5\u7ef4\u62a4\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u903b\u8f91\u5e76\u6ca1\u6709\u88ab\u6e05\u6670\u5408\u7406\u5730\u7ec4\u7ec7\u8d77\u6765\u3002"),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848configurestore"},"\u89e3\u51b3\u65b9\u6848\uff1a",(0,a.kt)("inlineCode",{parentName:"h2"},"configureStore")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\u662f\u521b\u9020\u4e00\u4e2a\u5c01\u88c5\u4e86 store \u521b\u5efa\u903b\u8f91\u7684\u65b0\u7684\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"configureStore"),"\u3002\u5b83\u653e\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u4e2d\uff0c\u6240\u4ee5\u53ef\u4ee5\u88ab\u4efb\u610f\u62d3\u5c55\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," \u7684\u6700\u7ec8\u662f\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\nimport App from './components/App'\nimport configureStore from './configureStore'\n\nconst store = configureStore()\n\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),(0,a.kt)("p",null,"\u6240\u6709\u914d\u7f6e store \u76f8\u5173\u7684\u903b\u8f91\uff08\u5305\u62ec\u5f15\u5165 reducer\u3001middleware\u3001enhancer\uff09\uff0c\u90fd\u653e\u7f6e\u4e8e\u4e00\u4e2a\u5355\u72ec\u7528\u4e8e\u5904\u7406\u5b83\u4eec\u7684\u6587\u4ef6\u4e2d\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u8fbe\u5230\u8fd9\u4e2a\u76ee\u6807\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"configureStore")," \u51fd\u6570\u5e94\u8be5\u662f\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { applyMiddleware, compose, createStore } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\n\nimport monitorReducersEnhancer from './enhancers/monitorReducers'\nimport loggerMiddleware from './middleware/logger'\nimport rootReducer from './reducers'\n\nexport default function configureStore(preloadedState) {\n  const middlewares = [loggerMiddleware, thunkMiddleware]\n  const middlewareEnhancer = applyMiddleware(...middlewares)\n\n  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]\n  const composedEnhancers = compose(...enhancers)\n\n  const store = createStore(rootReducer, preloadedState, composedEnhancers)\n\n  return store\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u9075\u5faa\u4e86\u4e0a\u8ff0\u6b65\u9aa4\uff0c\u5176\u4e2d\u6709\u4e00\u4e9b\u903b\u8f91\u62c6\u5206\u5f00\u6765\uff0c\u4e3a\u540e\u7eed\u62d3\u5c55\u505a\u597d\u51c6\u5907\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"middlwares")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"enhancers")," \u90fd\u88ab\u5b9a\u4e49\u4e3a\u6570\u7ec4\uff0c\u4e0e\u5b9e\u9645\u4f7f\u7528\u5b83\u4eec\u7684\u51fd\u6570\u5206\u79bb\u5f00\u6765\u3002\u8fd9\u6837\u505a\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u4e3a\u4e0d\u540c\u60c5\u51b5\u6dfb\u52a0\u66f4\u591a\u7684 middleware \u6216 enhancer\u3002"),(0,a.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff0c\u4e00\u79cd\u5f88\u5e38\u89c1\u7684\u60c5\u51b5\u662f\uff0c\u53ea\u6709\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u624d\u6dfb\u52a0\u67d0\u4e9b middleware\u3002\u8fd9\u4e2a\u53ef\u4ee5\u5728\u4e00\u4e2a if \u6761\u4ef6\u53e5\u4e2d\u5411 middleware \u6570\u7ec4\u6dfb\u52a0\u65b0\u7684 middleware \u6765\u8f7b\u677e\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (process.env === 'development') {\n  middlewares.push(secretMiddleware)\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"preloadedState")," \u53d8\u91cf\u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"createStore"),"\uff0c\u4ee5\u4fbf\u540e\u7eed\u4f7f\u7528\u3002"))),(0,a.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u8c03\u8bd5 ",(0,a.kt)("inlineCode",{parentName:"p"},"createStore")," \u4e5f\u66f4\u8f7b\u677e\u4e86\u2014\u2014\u6bcf\u4e2a\u6b65\u9aa4\u90fd\u5206\u79bb\u7684\u6e05\u6e05\u695a\u695a\uff0c\u76ee\u524d\u6b63\u5728\u53d1\u751f\u4ec0\u4e48\u4e00\u76ee\u4e86\u7136\u3002"),(0,a.kt)("h2",{id:"\u96c6\u6210-devtools-\u6269\u5c55\u7a0b\u5e8f"},"\u96c6\u6210 devtools \u6269\u5c55\u7a0b\u5e8f"),(0,a.kt)("p",null,"\u53e6\u5916\u4e00\u4e2a\u4f60\u5f88\u60f3\u5728\u4f60\u7684\u5e94\u7528\u4e2d\u52a0\u5165\u7684\u529f\u80fd\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"redux-devtools-extension")," \u7684\u96c6\u6210\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u6269\u5c55\u7a0b\u5e8f\u662f\u4e00\u7cfb\u5217\u5de5\u5177\u7684\u96c6\u5408\uff0c\u901a\u8fc7\u5b83\u4eec\u4f60\u53ef\u4ee5\u83b7\u5f97 Redux store \u5b8c\u5168\u7684\u63a7\u5236\uff1a\u5b83\u5141\u8bb8\u4f60\u89c2\u5bdf\u6216\u91cd\u653e action\uff0c\u5728\u4e0d\u540c\u65f6\u523b\u67e5\u770b state\uff0c\u76f4\u63a5\u5411 store \u4e2d dispatch \u4e00\u4e2a action\uff0c......\u7b49\u7b49\u5f88\u591a\u529f\u80fd\u3002",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"\u70b9\u51fb\u6b64\u5904\u9605\u8bfb\u66f4\u591a"),"\u3002"),(0,a.kt)("p",null,"\u6709\u5f88\u591a\u65b9\u6848\u53ef\u4ee5\u96c6\u6210\u6b64\u6269\u5c55\u7a0b\u5e8f\uff0c\u4f46\u6211\u4eec\u4f1a\u7528\u6700\u65b9\u4fbf\u7684\u90a3\u4e2a\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u4f7f\u7528 npm \u5b89\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save-dev redux-devtools-extension\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u79fb\u9664\u6389\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"redux")," \u5f15\u5165\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"compose")," \u51fd\u6570\uff0c\u7136\u540e\u7528\u4e00\u4e2a\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"redux-devtools-extension")," \u4e2d\u5f15\u5165\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"composeWithDevTools")," \u51fd\u6570\u6765\u66ff\u6362\u5b83\u3002"),(0,a.kt)("p",null,"\u6700\u7ec8\u7684\u4ee3\u7801\u662f\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { applyMiddleware, createStore } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\nimport { composeWithDevTools } from 'redux-devtools-extension'\n\nimport monitorReducersEnhancer from './enhancers/monitorReducers'\nimport loggerMiddleware from './middleware/logger'\nimport rootReducer from './reducers'\n\nexport default function configureStore(preloadedState) {\n  const middlewares = [loggerMiddleware, thunkMiddleware]\n  const middlewareEnhancer = applyMiddleware(...middlewares)\n\n  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]\n  const composedEnhancers = composeWithDevTools(...enhancers)\n\n  const store = createStore(rootReducer, preloadedState, composedEnhancers)\n\n  return store\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u5c31\u6210\u4e86\uff01"),(0,a.kt)("p",null,"\u73b0\u5728\u7528\u5b89\u88c5\u4e86 devtools \u6269\u5c55\u7a0b\u5e8f\u7684\u6d4f\u89c8\u5668\u8bbf\u95ee\u6211\u4eec\u7684\u5e94\u7528\uff0c\u6211\u4eec\u5373\u53ef\u4f7f\u7528\u8fd9\u4e00\u5f3a\u5927\u7684\u5de5\u5177\u6765\u63a2\u7d22\u548c\u8c03\u8bd5\u4e86\u3002"),(0,a.kt)("h2",{id:"\u70ed\u52a0\u8f7d"},"\u70ed\u52a0\u8f7d"),(0,a.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2a\u5f3a\u5927\u7684\u5de5\u5177\u53ef\u4ee5\u4f7f\u4f60\u7684\u5f00\u53d1\u8fc7\u7a0b\u66f4\u52a0\u76f4\u89c2\uff0c\u90a3\u5c31\u662f\u70ed\u52a0\u8f7d\uff08hot reloading\uff09\uff0c\u5b83\u53ef\u4ee5\u5728\u65e0\u9700\u91cd\u542f\u6574\u4e2a\u5e94\u7528\u7684\u60c5\u51b5\u4e0b\u66ff\u6362\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u8bf4\uff0c\u4f60\u542f\u52a8\u4e86\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f7f\u7528\u4e86\u4e00\u4f1a\u513f\uff0c\u51b3\u5b9a\u5bf9\u5176\u4e2d\u4e00\u4e2a reducer \u505a\u4e00\u4e9b\u6539\u52a8\u3002\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u505a\u4e86\u6539\u52a8\u540e\u5e94\u7528\u4f1a\u91cd\u542f\uff0c\u5e76\u4e14 Redux state \u4f1a\u91cd\u7f6e\u5230\u5176\u521d\u59cb\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528\u70ed\u52a0\u8f7d\u65f6\uff0c\u53ea\u6709\u4f60\u505a\u4e86\u66f4\u6539\u7684 reducer \u4f1a\u88ab\u91cd\u542f\u3002\u8fd9\u6837\u4e00\u6765\u4f60\u5c31\u65e0\u9700\u5728\u6bcf\u6b21\u4fee\u6539\u4ee3\u7801\u4e4b\u540e\u91cd\u7f6e\u6574\u4e2a state\uff0c\u5f00\u53d1\u8fc7\u7a0b\u4f1a\u66f4\u52a0\u8fc5\u901f\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06 Redux reducer \u548c React \u7ec4\u4ef6\u90fd\u542f\u7528\u70ed\u52a0\u8f7d\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5c06\u5b83\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"configureStore")," \u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { applyMiddleware, compose, createStore } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\n\nimport monitorReducersEnhancer from './enhancers/monitorReducers'\nimport loggerMiddleware from './middleware/logger'\nimport rootReducer from './reducers'\n\nexport default function configureStore(preloadedState) {\n  const middlewares = [loggerMiddleware, thunkMiddleware]\n  const middlewareEnhancer = applyMiddleware(...middlewares)\n\n  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]\n  const composedEnhancers = compose(...enhancers)\n\n  const store = createStore(rootReducer, preloadedState, composedEnhancers)\n\n  if (process.env.NODE_ENV !== 'production' && module.hot) {\n    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))\n  }\n\n  return store\n}\n")),(0,a.kt)("p",null,"\u65b0\u7684\u4ee3\u7801\u653e\u7f6e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," \u6761\u4ef6\u53e5\u4e2d\uff0c\u6240\u4ee5\u5b83\u53ea\u5728\u975e\u751f\u4ea7\u73af\u5883\u4e2d\u8fd0\u884c\uff0c\u800c\u4e14\u53ea\u5728\u80fd\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"module.hot")," \u65f6\u8fd0\u884c\u3002"),(0,a.kt)("p",null,"\u50cf Webpack \u548c Parcel \u8fd9\u6837\u7684\u6253\u5305\u5de5\u5177\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"module.hot.accept")," \u65b9\u6cd5\uff0c\u5b83\u7528\u4e8e\u6307\u5b9a\u54ea\u4e00\u4e2a\u6a21\u5757\uff08module\uff09\u5e94\u8be5\u542f\u7528\u70ed\u52a0\u8f7d\uff0c\u4ee5\u53ca\u5f53\u6a21\u5757\u6539\u53d8\u65f6\u5e94\u8be5\u505a\u4ec0\u4e48\u3002\u6b64\u4f8b\u4e2d\uff0c\u6211\u4eec\u76d1\u63a7 ",(0,a.kt)("inlineCode",{parentName:"p"},"./reducers")," \u6a21\u5757\uff0c\u5f53\u8fd9\u4e2a\u6a21\u5757\u6539\u53d8\u65f6\u5c06\u65b0\u8ba1\u7b97\u51fa\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"rootReducer")," \u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"store.replaceReducer")," \u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," \u4e2d\uff0c\u6211\u4eec\u4e5f\u4f1a\u4f7f\u7528\u76f8\u540c\u7684\u6a21\u5f0f\u6765\u70ed\u52a0\u8f7d React \u7ec4\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\nimport App from './components/App'\nimport configureStore from './configureStore'\n\nconst store = configureStore()\n\nconst renderApp = () =>\n  render(\n    <Provider store={store}>\n      <App />\n    </Provider>,\n    document.getElementById('root')\n  )\n\nif (process.env.NODE_ENV !== 'production' && module.hot) {\n  module.hot.accept('./components/App', renderApp)\n}\n\nrenderApp()\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u53ea\u6709\u4e00\u4e2a\u5730\u65b9\u4e0e\u521a\u521a\u4e0d\u540c\uff0c\u5c31\u662f\u6211\u4eec\u5c06\u5e94\u7528\u7684\u6e32\u67d3\u5c01\u88c5\u8fdb\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"renderApp")," \u51fd\u6570\uff0c\u8c03\u7528\u5b83\u5c06\u4f1a\u91cd\u65b0\u6e32\u67d3\u6574\u4e2a\u5e94\u7528\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-redux-starter-kit-\u7b80\u5316\u8bbe\u7f6e"},"\u4f7f\u7528 Redux Starter Kit \u7b80\u5316\u8bbe\u7f6e"),(0,a.kt)("p",null,"Redux \u6838\u5fc3\u5e93\u7279\u610f\u8bbe\u7f6e\u4e3a\u6700\u8f7b\u91cf\u5316\u7684\u3002\u5b83\u53ef\u4ee5\u8ba9\u60a8\u51b3\u5b9a\u5982\u4f55\u5904\u7406\u6240\u6709\u5185\u5bb9\uff0c\u4f8b\u5982 store\n\u8bbe\u7f6e\u3001\u60a8\u7684 state \u5305\u542b\u7684\u5185\u5bb9\u3001\u4ee5\u53ca\u60a8\u5e0c\u671b\u5982\u4f55\u6784\u5efa Reducer\u3002"),(0,a.kt)("p",null,"\u8fd9\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u662f\u597d\u7684\uff0c\u56e0\u4e3a\u5b83\u4e3a\u60a8\u63d0\u4f9b\u4e86\u7075\u6d3b\u6027\uff0c\u4f46\u6211\u4eec\u5e76\u4e0d\u603b\u662f\u9700\u8981\u8fd9\u79cd\u7075\u6d3b\u6027\u3002\u6709\u65f6\u6211\u4eec\u53ea\u60f3\u8981\u4f7f\u7528\u4e00\u4e2a\u5305\u542b\u9ed8\u8ba4\u914d\u7f6e\u7684\u5f00\u7bb1\u5373\u7528\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://redux-starter-kit.js.org/"},"Redux Starter Kit")," \u5305\u65e8\u5728\u5e2e\u52a9\u7b80\u5316\u51e0\u4e2a\u5e38\u89c1\u7684 Redux \u7528\u4f8b\uff0c\u5305\u62ec store \u8bbe\u7f6e\u3002\n\u8ba9\u6211\u4eec\u770b\u770b\u5b83\u5982\u4f55\u5e2e\u52a9\u6539\u5584 store \u8bbe\u7f6e\u6d41\u7a0b\u3002"),(0,a.kt)("p",null,"Redux Starter Kit \u5305\u542b\u4e00\u4e2a\u9884\u6784\u5efa\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://redux-starter-kit.js.org/api/configureStore"},(0,a.kt)("inlineCode",{parentName:"a"},"configureStore")," \u51fd\u6570")," \uff0c\u8be5\u51fd\u6570\u7c7b\u4f3c\u4e8e\u524d\u9762\u793a\u4f8b\u5c55\u793a\u7684\u540c\u540d\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u6700\u5feb\u7684\u4f7f\u7528\u65b9\u6cd5\u662f\u53ea\u4f20\u9012 root reducer \u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from 'redux-starter-kit'\nimport rootReducer from './reducers'\n\nconst store = configureStore({\n  reducer: rootReducer\n})\n\nexport default store\n")),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5b83\u63a5\u53d7\u5177\u6709\u547d\u540d\u53c2\u6570\u7684\u5bf9\u8c61\uff0c\u4ee5\u4f7f\u60a8\u66f4\u6e05\u695a\u5730\u5c55\u793a\u6240\u4f20\u5165\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRedux Starter Kit \u4e2d \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"configureStore")," \u5c06\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"applyMiddleware")," \u6765\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"https://redux-starter-kit.js.org/api/getDefaultMiddleware"},"\u9ed8\u8ba4\u7684\u591a\u4e2a\u4e2d\u95f4\u4ef6, \u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"a"},"redux-thunk")),", \u4ee5\u53ca\u4e00\u4e9b\u4ec5\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u7684\u4e2d\u95f4\u4ef6\uff0c\u4f8b\u5982\u7528\u6765\u6355\u83b7\u7c7b\u4f3c state \u53d8\u5f02\u9519\u8bef\u7684\u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"composeWithDevTools")," \u6765\u8bbe\u7f6e Redux DevTools \u6269\u5c55")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4f7f\u7528 Redux Starter Kit \u7684 hot reloading \u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'\n\nimport monitorReducersEnhancer from './enhancers/monitorReducers'\nimport loggerMiddleware from './middleware/logger'\nimport rootReducer from './reducers'\n\nexport default function configureAppStore(preloadedState) {\n  const store = configureStore({\n    reducer: rootReducer,\n    middleware: [loggerMiddleware, ...getDefaultMiddleware()],\n    preloadedState,\n    enhancers: [monitorReducersEnhancer]\n  })\n\n  if (process.env.NODE_ENV !== 'production' && module.hot) {\n    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))\n  }\n\n  return store\n}\n")),(0,a.kt)("p",null,"\u8fd9\u80af\u5b9a\u7b80\u5316\u4e86\u4e00\u4e9b\u8bbe\u7f6e\u8fc7\u7a0b\u3002"),(0,a.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u5df2\u7ecf\u5b66\u4f1a\u4e86\u5982\u4f55\u5c06\u914d\u7f6e store \u7684\u65b9\u6cd5\u8fdb\u884c\u5c01\u88c5\uff0c\u8ba9\u5b83\u66f4\u6613\u4e8e\u7ef4\u62a4\u3002\u4f60\u73b0\u5728\u53ef\u4ee5\u5b66\u4e60",(0,a.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/configureStore"},"Redux Toolkit ",(0,a.kt)("inlineCode",{parentName:"a"},"configureStore")," API"),"\uff0c\u6216\u8005\u770b\u4e00\u4e9b",(0,a.kt)("a",{parentName:"p",href:"/introduction/ecosystem#debuggers-and-viewers"},"Redux \u751f\u6001\u7cfb\u7edf\u63d0\u4f9b\u7684\u6269\u5c55\u7a0b\u5e8f"),"."))}m.isMDXComponent=!0}}]);