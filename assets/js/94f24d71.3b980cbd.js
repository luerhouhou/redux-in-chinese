"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[622],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9594:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={id:"using-object-spread-operator",title:"\u4f7f\u7528\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26",hide_title:!1},s="\u4f7f\u7528\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26",l={unversionedId:"recipes/using-object-spread-operator",id:"recipes/using-object-spread-operator",title:"\u4f7f\u7528\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26",description:"\u56e0\u4e3a\u4e0d\u76f4\u63a5\u4fee\u6539 state \u662f Redux \u7684\u6838\u5fc3\u7406\u5ff5\u4e4b\u4e00, \u6240\u4ee5\u4f60\u4f1a\u53d1\u73b0\u81ea\u5df1\u603b\u662f\u5728\u4f7f\u7528 Object.assign() \u521b\u5efa\u5bf9\u8c61\u62f7\u8d1d, \u800c\u62f7\u8d1d\u4e2d\u4f1a\u5305\u542b\u65b0\u521b\u5efa\u6216\u66f4\u65b0\u8fc7\u7684\u5c5e\u6027\u503c\u3002\u5728\u4e0b\u9762\u7684 todoApp \u793a\u4f8b\u4e2d, Object.assign() \u5c06\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 state \u5bf9\u8c61, \u800c\u5176\u4e2d\u7684 visibilityFilter \u5c5e\u6027\u88ab\u66f4\u65b0\u4e86:",source:"@site/../docs/recipes/UsingObjectSpreadOperator.md",sourceDirName:"recipes",slug:"/recipes/using-object-spread-operator",permalink:"/recipes/using-object-spread-operator",draft:!1,tags:[],version:"current",frontMatter:{id:"using-object-spread-operator",title:"\u4f7f\u7528\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26",hide_title:!1},sidebar:"docs",previous:{title:"\u8fc1\u79fb\u5230 Redux",permalink:"/recipes/migrating-to-redux"},next:{title:"\u51cf\u5c11\u6837\u677f\u4ee3\u7801",permalink:"/recipes/reducing-boilerplate"}},c={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4f7f\u7528\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26"},"\u4f7f\u7528\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26"),(0,i.kt)("p",null,"\u56e0\u4e3a\u4e0d\u76f4\u63a5\u4fee\u6539 state \u662f Redux \u7684\u6838\u5fc3\u7406\u5ff5\u4e4b\u4e00, \u6240\u4ee5\u4f60\u4f1a\u53d1\u73b0\u81ea\u5df1\u603b\u662f\u5728\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"},(0,i.kt)("inlineCode",{parentName:"a"},"Object.assign()"))," \u521b\u5efa\u5bf9\u8c61\u62f7\u8d1d, \u800c\u62f7\u8d1d\u4e2d\u4f1a\u5305\u542b\u65b0\u521b\u5efa\u6216\u66f4\u65b0\u8fc7\u7684\u5c5e\u6027\u503c\u3002\u5728\u4e0b\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"todoApp")," \u793a\u4f8b\u4e2d, ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()")," \u5c06\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," \u5bf9\u8c61, \u800c\u5176\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"visibilityFilter")," \u5c5e\u6027\u88ab\u66f4\u65b0\u4e86:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function todoApp(state = initialState, action) {\n  switch (action.type) {\n    case SET_VISIBILITY_FILTER:\n      return Object.assign({}, state, {\n        visibilityFilter: action.filter\n      })\n    default:\n      return state\n  }\n}\n")),(0,i.kt)("p",null,"\u5c3d\u7ba1\u8fd9\u6837\u53ef\u884c, \u4f46 ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign()")," \u5197\u957f\u7684\u5199\u6cd5\u4f1a\u8fc5\u901f\u964d\u4f4e reducer \u7684\u53ef\u8bfb\u6027\u3002"),(0,i.kt)("p",null,"\u4e00\u4e2a\u53ef\u884c\u7684\u66ff\u4ee3\u65b9\u6848\u662f\u4f7f\u7528\u6700\u8fd1\u52a0\u5165 JavaScript \u89c4\u8303\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-object-rest-spread"},"\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26"),"\u3002\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26\u8ba9\u4f60\u53ef\u4ee5\u901a\u8fc7\u5c55\u5f00\u8fd0\u7b97\u7b26 (",(0,i.kt)("inlineCode",{parentName:"p"},"..."),") , \u4ee5\u66f4\u52a0\u7b80\u6d01\u7684\u5f62\u5f0f\u5c06\u4e00\u4e2a\u5bf9\u8c61\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u62f7\u8d1d\u81f3\u53e6\u4e00\u4e2a\u5bf9\u8c61\u3002\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26\u5728\u6982\u5ff5\u4e0a\u4e0e ES6 \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator"},"\u6570\u7ec4\u5c55\u5f00\u8fd0\u7b97\u7b26")," \u76f8\u4f3c\u3002 \u6211\u4eec\u8bd5\u7740\u7528\u8fd9\u79cd\u65b9\u5f0f\u7b80\u5316 ",(0,i.kt)("inlineCode",{parentName:"p"},"todoApp"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function todoApp(state = initialState, action) {\n  switch (action.type) {\n    case SET_VISIBILITY_FILTER:\n      return { ...state, visibilityFilter: action.filter }\n    default:\n      return state\n  }\n}\n")),(0,i.kt)("p",null,"\u5f53\u4f60\u5728\u7ec4\u5408\u590d\u6742\u5bf9\u8c61\u65f6, \u4f7f\u7528\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26\u5e26\u6765\u7684\u597d\u5904\u5c06\u66f4\u52a0\u7a81\u51fa\u3002\u4f8b\u5982\u4e0b\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"getAddedIds")," \u5c06\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," \u6570\u7ec4\u8f6c\u6362\u4e3a\u4e00\u4e2a\u5bf9\u8c61\u6570\u7ec4, \u800c\u8fd9\u4e9b\u5bf9\u8c61\u7684\u5185\u5bb9\u662f\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"getProduct")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"getQuantity")," \u7684\u7ed3\u679c\u7ec4\u5408\u800c\u6210\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"return getAddedIds(state.cart).map(id =>\n  Object.assign({}, getProduct(state.products, id), {\n    quantity: getQuantity(state.cart, id)\n  })\n)\n")),(0,i.kt)("p",null,"\u8fd0\u7528\u5bf9\u8c61\u6269\u5c55\u8fd0\u7b97\u7b26\u7b80\u5316\u4e0a\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," \u8c03\u7528:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"return getAddedIds(state.cart).map(id => ({\n  ...getProduct(state.products, id),\n  quantity: getQuantity(state.cart, id)\n}))\n")),(0,i.kt)("p",null,"\u867d\u7136\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26\u63d0\u6848\u5df2\u7ecf\u5904\u4e8e ECMAScript ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-object-rest-spread#status-of-this-proposal"},"Stage 4")," \u63d0\u6848\u9636\u6bb5,\u5e76\u4e14\u5728 2018 \u89c4\u8303\u7248\u672c\u4e2d\u88ab\u63a5\u53d7\u3002 \u4f46\u4f60\u4ecd\u7136\u9700\u8981\u8f6c\u6362\u7f16\u8bd1\u5668\u624d\u80fd\u5c06\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26\u5e94\u7528\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c \u5982 ",(0,i.kt)("a",{parentName:"p",href:"http://babeljs.io/"},"Babel"),"\u3002 \u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/tree/master/packages/babel-preset-env"},(0,i.kt)("inlineCode",{parentName:"a"},"env"))," \u9884\u8bbe\u503c, \u5b89\u88c5 ",(0,i.kt)("a",{parentName:"p",href:"http://babeljs.io/docs/plugins/transform-object-rest-spread/"},(0,i.kt)("inlineCode",{parentName:"a"},"babel-plugin-transform-object-rest-spread"))," \u5e76\u5c06\u5176\u5355\u72ec\u6dfb\u52a0\u5230\u4f4d\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},".babelrc")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," \u6570\u7ec4\u4e2d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "presets": ["@babel/preset-env"],\n  "plugins": ["transform-object-rest-spread"]\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("h5",{parentName:"blockquote",id:"\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26\u65f6\u6ce8\u610f"},"\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26\u65f6\u6ce8\u610f")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4e0e\u6570\u7ec4\u7684\u5c55\u5f00\u8fd0\u7b97\u7b26\u7c7b\u4f3c\uff0c\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26\u521b\u5efa\u539f\u6765\u5bf9\u8c61\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals"},"\u6d45\u62f7\u8d1d"),"\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5bf9\u4e8e\u591a\u7ef4\u6e90\u5bf9\u8c61\uff0c\u590d\u5236\u5bf9\u8c61\u4e2d\u6df1\u5ea6\u5927\u4e8e 1 \u7684\u5143\u7d20\uff08\u9664","[\u57fa\u672c\u7c7b\u578b primitives]","(",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/"},"https://developer.mozilla.org/en-US/")," docs/Glossary/Primitive) \u4ee5\u5916\uff09\u4ec5\u4ec5\u662f\u5bf9\u6e90\u5bf9\u8c61\u7684\u5f15\u7528\u3002 \u56e0\u6b64\uff0c\u4f60\u4e0d\u80fd\u7a33\u59a5\u7684\u5c06\u5bf9\u8c61\u6269\u5c55\u8fd0\u7b97\u7b26 (",(0,i.kt)("inlineCode",{parentName:"p"},"..."),") \u7528\u4e8e\u5bf9\u8c61\u6df1\u62f7\u8d1d\u3002")))}m.isMDXComponent=!0}}]);