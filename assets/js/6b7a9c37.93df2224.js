"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6897],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8272:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"middleware",title:"Middleware \u4e2d\u95f4\u4ef6",description:"\u539f\u7406  > Middleware \u4e2d\u95f4\u4ef6\uff1a\u5982\u4f55\u4f7f\u7528\u4e2d\u95f4\u4ef6\u6765\u6269\u5c55 Redux store \u7684\u80fd\u529b",hide_title:!1},p="Middleware \u4e2d\u95f4\u4ef6",s={unversionedId:"understanding/history-and-design/middleware",id:"understanding/history-and-design/middleware",title:"Middleware \u4e2d\u95f4\u4ef6",description:"\u539f\u7406  > Middleware \u4e2d\u95f4\u4ef6\uff1a\u5982\u4f55\u4f7f\u7528\u4e2d\u95f4\u4ef6\u6765\u6269\u5c55 Redux store \u7684\u80fd\u529b",source:"@site/../docs/understanding/history-and-design/middleware.md",sourceDirName:"understanding/history-and-design",slug:"/understanding/history-and-design/middleware",permalink:"/understanding/history-and-design/middleware",draft:!1,tags:[],version:"current",frontMatter:{id:"middleware",title:"Middleware \u4e2d\u95f4\u4ef6",description:"\u539f\u7406  > Middleware \u4e2d\u95f4\u4ef6\uff1a\u5982\u4f55\u4f7f\u7528\u4e2d\u95f4\u4ef6\u6765\u6269\u5c55 Redux store \u7684\u80fd\u529b",hide_title:!1},sidebar:"docs",previous:{title:"\u5148\u524d\u6280\u672f",permalink:"/understanding/history-and-design/prior-art"},next:{title:"FAQ Index",permalink:"/faq"}},c={},d=[{value:"\u7406\u89e3 Middleware",id:"\u7406\u89e3-middleware",level:2},{value:"\u95ee\u9898\uff1a\u65e5\u5fd7",id:"\u95ee\u9898\u65e5\u5fd7",level:3},{value:"\u5c1d\u8bd5 #1\uff1a\u624b\u52a8\u6253\u65e5\u5fd7",id:"\u5c1d\u8bd5-1\u624b\u52a8\u6253\u65e5\u5fd7",level:3},{value:"\u5c1d\u8bd5 #2: \u5305\u88f9 dispatch",id:"\u5c1d\u8bd5-2-\u5305\u88f9-dispatch",level:3},{value:"\u5c1d\u8bd5 #3: \u7ed9 dispatch \u505a\u7334\u5b50\u8865\u4e01\uff08Monkeypatch\uff09",id:"\u5c1d\u8bd5-3-\u7ed9-dispatch-\u505a\u7334\u5b50\u8865\u4e01monkeypatch",level:3},{value:"\u95ee\u9898: \u5f02\u5e38\u76d1\u63a7",id:"\u95ee\u9898-\u5f02\u5e38\u76d1\u63a7",level:3},{value:"\u5c1d\u8bd5 #4: \u9690\u85cf\u7334\u5b50\u8865\u4e01",id:"\u5c1d\u8bd5-4-\u9690\u85cf\u7334\u5b50\u8865\u4e01",level:3},{value:"\u5c1d\u8bd5 #5: \u79fb\u9664\u7334\u5b50\u8865\u4e01",id:"\u5c1d\u8bd5-5-\u79fb\u9664\u7334\u5b50\u8865\u4e01",level:3},{value:"\u5c1d\u8bd5 #6\uff1a\u7b80\u5355\u7c97\u66b4\u7684\u4e2d\u95f4\u4ef6\u8c03\u7528\u65b9\u6cd5",id:"\u5c1d\u8bd5-6\u7b80\u5355\u7c97\u66b4\u7684\u4e2d\u95f4\u4ef6\u8c03\u7528\u65b9\u6cd5",level:3},{value:"\u8b66\u544a\uff1a\u5728\u914d\u7f6e Redux \u671f\u95f4\u8c03\u7528 dispatch",id:"\u8b66\u544a\u5728\u914d\u7f6e-redux-\u671f\u95f4\u8c03\u7528-dispatch",level:4},{value:"\u6700\u540e\u7684\u5b9e\u73b0",id:"\u6700\u540e\u7684\u5b9e\u73b0",level:3},{value:"Seven Examples",id:"seven-examples",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"middleware-\u4e2d\u95f4\u4ef6"},"Middleware \u4e2d\u95f4\u4ef6"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-4-store#middleware"},'"Redux \u6df1\u5165\u6d45\u51fa" \u6559\u7a0b\u4e2d')," \u4f60\u5df2\u7ecf\u5b66\u4e60\u8fc7\u4e2d\u95f4\u4ef6\u7684\u5b9e\u8df5\u6848\u4f8b\u3002\u5982\u679c\u4f60\u4f7f\u7528\u8fc7\u670d\u52a1\u7aef\u6846\u67b6\u50cf ",(0,o.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express")," \u6216 ",(0,o.kt)("a",{parentName:"p",href:"https://koajs.com/"},"Koa"),"\uff0c\u4f60\u6216\u8bb8\u5df2\u7ecf\u719f\u6089 ",(0,o.kt)("em",{parentName:"p"},"middleware")," \u7684\u6982\u5ff5\u3002\u5728\u8fd9\u4e9b\u6846\u67b6\u4e2d\uff0c\u4e2d\u95f4\u4ef6\u53ef\u4ee5\u8ba9\u4f60\u5728\u63a5\u6536\u8bf7\u6c42\u548c\u751f\u6210\u54cd\u5e94\u4e4b\u95f4\u653e\u7f6e\u7684\u4e00\u4e9b\u4ee3\u7801\u3002\u4f8b\u5982\uff0cExpress \u6216 Koa \u4e2d\u95f4\u4ef6\u53ef\u80fd\u4f1a\u6dfb\u52a0 CORS \u6807\u5934\u3001\u8bb0\u5f55\u65e5\u5fd7\u3001\u538b\u7f29\u7b49\u3002\u4e2d\u95f4\u4ef6\u7684\u6700\u5927\u7279\u70b9\u662f\u5b83\u53ef\u4ee5\u7ec4\u5408\u6210\u4e00\u4e2a\u94fe\u3002\u60a8\u53ef\u4ee5\u5728\u4e00\u4e2a\u9879\u76ee\u4e2d\u4f7f\u7528\u591a\u4e2a\u4e0d\u540c\u7684\u4e2d\u95f4\u4ef6\u3002"),(0,o.kt)("p",null,"Redux \u4e2d\u95f4\u4ef6\u89e3\u51b3\u7684\u95ee\u9898\u4e0e Express \u6216 Koa \u4e2d\u95f4\u4ef6\u4e0d\u540c\uff0c\u4f46\u5728\u6982\u5ff5\u4e0a\u662f\u76f8\u4f3c\u7684\u3002",(0,o.kt)("strong",{parentName:"p"},"\u5b83\u5728 dispatch action \u548c\u5230\u8fbe reducer \u7684\u90a3\u4e00\u523b\u4e4b\u95f4\u63d0\u4f9b\u4e86\u903b\u8f91\u63d2\u5165\u70b9"),"\u3002\u53ef\u4ee5\u4f7f\u7528 Redux \u4e2d\u95f4\u4ef6\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\u3001\u5f02\u5e38\u76d1\u63a7\u3001\u4e0e\u5f02\u6b65 API \u5bf9\u8bdd\u3001\u8def\u7531\u7b49\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u5206\u6210\u51e0\u90e8\u5206\u6765\u8ba9\u4f60\u6df1\u5165\u4e86\u89e3\u5b83\u7684\u6982\u5ff5\uff0c\u4ee5\u53ca",(0,o.kt)("a",{parentName:"p",href:"#seven-examples"},"\u51e0\u4e2a\u5b9e\u9645\u4f8b\u5b50"),"\u5728\u6700\u540e\u5c55\u793a\u4e2d\u95f4\u4ef6\u7684\u5a01\u529b\u3002\u8fd9\u4e9b\u4f8b\u5b50\u53ef\u80fd\u9700\u8981\u6765\u56de\u770b\uff0c\u8fd9\u6837\u4f60\u4f1a\u5728\u65e0\u804a\u548c\u7075\u611f\u95f4\u5207\u6362\u3002"),(0,o.kt)("h2",{id:"\u7406\u89e3-middleware"},"\u7406\u89e3 Middleware"),(0,o.kt)("p",null,"\u867d\u7136\u4e2d\u95f4\u4ef6\u53ef\u7528\u4e8e\u591a\u79cd\u7528\u9014\uff0c\u5305\u62ec\u5f02\u6b65 API \u8c03\u7528\uff0c\u4f46\u4e86\u89e3\u5b83\u7684\u6765\u6e90\u7684\u539f\u56e0\u975e\u5e38\u91cd\u8981\u3002\u6211\u4eec\u5c06\u901a\u8fc7\u201c\u65e5\u5fd7\u8bb0\u5f55\u201d\u548c\u201c\u5f02\u5e38\u76d1\u63a7\u201d\u4f5c\u4e3a\u793a\u4f8b\uff0c\u6765\u4e00\u6b65\u6b65\u5f15\u5bfc\u4f60\u77e5\u9053\u4e2d\u95f4\u4ef6\u4ea7\u751f\u80cc\u540e\u7684\u8fc7\u7a0b\u3002"),(0,o.kt)("h3",{id:"\u95ee\u9898\u65e5\u5fd7"},"\u95ee\u9898\uff1a\u65e5\u5fd7"),(0,o.kt)("p",null,"Redux \u7684\u597d\u5904\u4e4b\u4e00\u662f\u5b83\u4f7f\u72b6\u6001\u7684\u53d8\u66f4\u53d8\u5f97\u53ef\u9884\u6d4b\u4e14\u900f\u660e\u3002\u6bcf\u6b21 dispatch action \u65f6\uff0c\u90fd\u4f1a\u8ba1\u7b97\u5e76\u4fdd\u5b58\u65b0\u72b6\u6001\u3002\u72b6\u6001\u4e0d\u80fd\u81ea\u884c\u6539\u53d8\uff0c\u5b83\u53ea\u80fd\u4f5c\u4e3a\u7279\u5b9a action \u7684\u7ed3\u679c\u800c\u6539\u53d8\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u8bb0\u5f55\u5e94\u7528\u7a0b\u5e8f\u4e2d\u53d1\u751f\u7684\u6bcf\u4e2a action \u8c03\u7528\u524d\u540e\u7684\u72b6\u6001\uff0c\u4e0d\u662f\u5f88\u597d\u5417\uff1f\u5f53\u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u56de\u6eaf\u65e5\u5fd7\uff0c\u5e76\u627e\u51fa\u54ea\u4e2a action \u5bfc\u81f4\u4e86\u95ee\u9898\u3002"),(0,o.kt)("img",{src:"https://i.imgur.com/BjGBlES.png",width:"70%"}),(0,o.kt)("p",null,"\u6211\u4eec\u5982\u4f55\u7528 Redux \u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1f"),(0,o.kt)("h3",{id:"\u5c1d\u8bd5-1\u624b\u52a8\u6253\u65e5\u5fd7"},"\u5c1d\u8bd5 #1\uff1a\u624b\u52a8\u6253\u65e5\u5fd7"),(0,o.kt)("p",null,"\u6700\u7b80\u5355\u7684\u89e3\u51b3\u65b9\u6848\u662f\u6bcf\u6b21\u8c03\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,o.kt)("inlineCode",{parentName:"a"},"store.dispatch(action)"))," \u65f6\u624b\u52a8\u8bb0\u5f55 action \u548c\u4e0b\u4e00\u4e2a\u72b6\u6001\u3002\u8fd9\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u800c\u53ea\u662f\u4e86\u89e3\u95ee\u9898\u7684\u7b2c\u4e00\u6b65\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,o.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux"},"react-redux")," \u6216\u7c7b\u4f3c\u7684\u7ed1\u5b9a\uff0c\u53ef\u80fd\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u7ec4\u4ef6\u4e2d\u7684 store \u5b9e\u4f8b\u3002\u5728\u63a5\u4e0b\u6765\u7684\u51e0\u6bb5\u4e2d\uff0c\u5047\u8bbe\u60a8\u660e\u786e\u5730\u4f20\u9012\u4e86 store\u3002")),(0,o.kt)("p",null,"\u6bd4\u5982\u8bf4\uff0c\u8fd9\u6837\u6765\u521b\u5efa todo\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"store.dispatch(addTodo('Use Redux'))\n")),(0,o.kt)("p",null,"\u8981\u8bb0\u5f55 action \u548c\u72b6\u6001\uff0c\u60a8\u53ef\u4ee5\u5c06\u4ee3\u7801\u6539\u6210\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const action = addTodo('Use Redux')\n\nconsole.log('dispatching', action)\nstore.dispatch(action)\nconsole.log('next state', store.getState())\n")),(0,o.kt)("p",null,"\u8fd9\u4f1a\u4ea7\u751f\u6240\u9700\u7684\u6548\u679c\uff0c\u4f46\u60a8\u4e0d\u60f3\u6bcf\u6b21\u90fd\u8fd9\u6837\u505a\u3002"),(0,o.kt)("h3",{id:"\u5c1d\u8bd5-2-\u5305\u88f9-dispatch"},"\u5c1d\u8bd5 #2: \u5305\u88f9 dispatch"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u5199\u4e2a\u51fd\u6570\u6765\u8bb0\u5f55\u65e5\u5fd7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function dispatchAndLog(store, action) {\n  console.log('dispatching', action)\n  store.dispatch(action)\n  console.log('next state', store.getState())\n}\n")),(0,o.kt)("p",null,"\u7136\u540e\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\u4f7f\u7528\u5b83\u800c\u4e0d\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"store.dispatch()"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"dispatchAndLog(store, addTodo('Use Redux'))\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5230\u6b64\u7ed3\u675f\uff0c\u4f46\u662f\u6bcf\u6b21\u90fd\u5bfc\u5165\u4e00\u4e2a\u7279\u6b8a\u51fd\u6570\u4e0d\u662f\u5f88\u65b9\u4fbf\u3002"),(0,o.kt)("h3",{id:"\u5c1d\u8bd5-3-\u7ed9-dispatch-\u505a\u7334\u5b50\u8865\u4e01monkeypatch"},"\u5c1d\u8bd5 #3: \u7ed9 dispatch \u505a\u7334\u5b50\u8865\u4e01\uff08Monkeypatch\uff09"),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u76f4\u63a5\u91cd\u5199 store \u5b9e\u4f8b\u4e0a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u51fd\u6570\u600e\u4e48\u6837\uff1fstore \u672c\u8eab\u662f\u5e26\u6709 ",(0,o.kt)("a",{parentName:"p",href:"/api/store"},"\u4e00\u4e9b\u65b9\u6cd5")," \u7684\u666e\u901a\u5bf9\u8c61\uff0c\u56e0\u4e3a\u662f JavaScript\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u51fd\u6570\u8fdb\u884c\u7334\u5b50\u8865\u4e01\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const next = store.dispatch\nstore.dispatch = function dispatchAndLog(action) {\n  console.log('dispatching', action)\n  let result = next(action)\n  console.log('next state', store.getState())\n  return result\n}\n")),(0,o.kt)("p",null,"\u8fd9\u5df2\u7ecf\u975e\u5e38\u63a5\u8fd1\u6211\u4eec\u60f3\u8981\u7684\u4e86\uff01\u65e0\u8bba\u6211\u4eec\u5728\u4f55\u5904 dispatch action\uff0c\u5b83\u90fd\u4fdd\u8bc1\u88ab\u8bb0\u5f55\u3002Monkeypatching \u4ece\u6765\u90fd\u4e0d\u662f\u6b63\u786e\u7684\uff0c\u4f46\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u5fcd\u53d7\u5b83\u3002"),(0,o.kt)("h3",{id:"\u95ee\u9898-\u5f02\u5e38\u76d1\u63a7"},"\u95ee\u9898: \u5f02\u5e38\u76d1\u63a7"),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u505a",(0,o.kt)("strong",{parentName:"p"},"\u591a\u4e2a"),"\u8fd9\u6837\u7684\u8f6c\u6362\u600e\u4e48\u529e\uff1f"),(0,o.kt)("p",null,"\u6211\u60f3\u5230\u7684\u53e6\u4e00\u4e2a\u6709\u7528\u7684\u8f6c\u6362\u573a\u666f\u662f\u8bb0\u5f55\u751f\u4ea7\u73af\u5883\u4e2d\u7684 JavaScript \u9519\u8bef\u3002\u5168\u5c40 ",(0,o.kt)("inlineCode",{parentName:"p"},"window.onerror")," \u4e8b\u4ef6\u4e0d\u53ef\u9760\uff0c\u56e0\u4e3a\u5b83\u5728\u4e00\u4e9b\u65e7\u6d4f\u89c8\u5668\u4e2d\u4e0d\u63d0\u4f9b\u5806\u6808\u4fe1\u606f\uff0c\u8fd9\u5bf9\u4e8e\u7406\u89e3\u9519\u8bef\u53d1\u751f\u7684\u539f\u56e0\u81f3\u5173\u91cd\u8981\u3002"),(0,o.kt)("p",null,"\u60f3\u4e00\u4e0b\u8fd9\u6837\u4f1a\u66f4\u597d\uff0c\u6bcf\u5f53 dispatch action \u629b\u51fa\u9519\u8bef\u65f6\uff0c\u6211\u4eec\u90fd\u5c06\u9519\u8bef\u53d1\u9001\u7ed9\u5f02\u5e38\u76d1\u63a7\u670d\u52a1\u5668\uff0c\u4f8b\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://getsentry.com/welcome/"},"Sentry")," \u548c\u5806\u6808\uff0c\u8fd9\u4e0d\u662f\u5f88\u6709\u7528\u5417\uff1f\u8bb0\u5f55\u5bfc\u81f4\u9519\u8bef\u7684 action \u4ee5\u53ca\u5f53\u524d\u72b6\u6001\uff1f\u8fd9\u6837\uff0c\u5728\u5f00\u53d1\u73af\u5883\u4e2d\u91cd\u73b0\u9519\u8bef\u8981\u5bb9\u6613\u5f97\u591a\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u5c06\u65e5\u5fd7\u8bb0\u5f55\u548c\u5f02\u5e38\u76d1\u63a7\u5206\u5f00\u662f\u5f88\u91cd\u8981\u7684\u3002\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5e0c\u671b\u5b83\u4eec\u5c5e\u4e8e\u4e0d\u540c\u7684\u6a21\u5757\uff0c\u53ef\u80fd\u5728\u4e0d\u540c\u7684\u5305\u4e2d\u3002\u5426\u5219\uff0c\u6211\u4eec\u5c31\u65e0\u6cd5\u5728\u4e0d\u540c\u7684\u5e94\u7528\u4e2d\u590d\u7528\u3002\uff08\u63d0\u793a\uff1a\u6211\u4eec\u6b63\u5728\u6162\u6162\u4e86\u89e3\u4ec0\u4e48\u662f\u4e2d\u95f4\u4ef6\uff01\uff09"),(0,o.kt)("p",null,"\u5982\u679c\u65e5\u5fd7\u8bb0\u5f55\u548c\u5f02\u5e38\u76d1\u63a7\u662f\u5206\u5f00\u7684\u5de5\u5177\u51fd\u6570\uff0c\u5b83\u4eec\u53ef\u80fd\u957f\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function patchStoreToAddLogging(store) {\n  const next = store.dispatch\n  store.dispatch = function dispatchAndLog(action) {\n    console.log('dispatching', action)\n    let result = next(action)\n    console.log('next state', store.getState())\n    return result\n  }\n}\n\nfunction patchStoreToAddCrashReporting(store) {\n  const next = store.dispatch\n  store.dispatch = function dispatchAndReportErrors(action) {\n    try {\n      return next(action)\n    } catch (err) {\n      console.error('Caught an exception!', err)\n      Raven.captureException(err, {\n        extra: {\n          action,\n          state: store.getState()\n        }\n      })\n      throw err\n    }\n  }\n}\n")),(0,o.kt)("p",null,"\u5982\u679c\u8fd9\u4e9b\u51fd\u6570\u4f5c\u4e3a\u5355\u72ec\u7684\u6a21\u5757\u53d1\u5e03\uff0c\u6211\u4eec\u7a0d\u540e\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u6765\u88c5\u9970\u6211\u4eec\u7684 store\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"patchStoreToAddLogging(store)\npatchStoreToAddCrashReporting(store)\n")),(0,o.kt)("p",null,"\u5c3d\u7ba1\u5982\u6b64\uff0c\u8fd9\u5e76\u4e0d\u597d\u3002"),(0,o.kt)("h3",{id:"\u5c1d\u8bd5-4-\u9690\u85cf\u7334\u5b50\u8865\u4e01"},"\u5c1d\u8bd5 #4: \u9690\u85cf\u7334\u5b50\u8865\u4e01"),(0,o.kt)("p",null,"\u6253\u7334\u5b50\u8865\u4e01\u662f\u4e00\u79cd Hack\uff08\u4e0d\u63a8\u8350\uff09\u7684\u65b9\u5f0f\u3002\u201c\u66ff\u6362\u4efb\u4f55\u4f60\u559c\u6b22\u7684\u65b9\u6cd5\u201d\uff0c\u90a3\u662f\u4e00\u79cd\u4ec0\u4e48\u6837\u7684API\uff1f\u8ba9\u6211\u4eec\u627e\u51fa\u5b83\u7684\u672c\u8d28\u3002\u4ee5\u524d\uff0c\u6211\u4eec\u7684\u51fd\u6570\u66ff\u6362\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"store.dispatch"),"\u3002\u5982\u679c\u4ed6\u4eec ",(0,o.kt)("em",{parentName:"p"},"\u8fd4\u56de")," \u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u51fd\u6570\u600e\u4e48\u6837\uff1f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function logger(store) {\n  const next = store.dispatch\n\n  // Previously:\n  // store.dispatch = function dispatchAndLog(action) {\n\n  return function dispatchAndLog(action) {\n    console.log('dispatching', action)\n    let result = next(action)\n    console.log('next state', store.getState())\n    return result\n  }\n}\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 Redux \u4e2d\u63d0\u4f9b\u4e00\u4e2a helper \u6765\u5e2e\u52a9\u6211\u4eec\u505a\u7334\u5b50\u8865\u4e01\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function applyMiddlewareByMonkeypatching(store, middlewares) {\n  middlewares = middlewares.slice()\n  middlewares.reverse()\n\n  // \u4f9d\u6b21\u8c03\u7528\u6bcf\u4e2a middleware \u6765\u589e\u5f3a dispatch\n  middlewares.forEach(middleware => (store.dispatch = middleware(store)))\n}\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u8c03\u7528\u591a\u4e2a\u4e2d\u95f4\u4ef6\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"applyMiddlewareByMonkeypatching(store, [logger, crashReporter])\n")),(0,o.kt)("p",null,"\u7136\u800c\uff0c\u5b83\u4ecd\u7136\u662f\u7334\u5b50\u8865\u4e01\u3002\n\u6211\u4eec\u5c06\u5b83\u9690\u85cf\u5728\u5e93\u4e2d\u7684\u4e8b\u5b9e\u5e76\u6ca1\u6709\u6539\u53d8\u8fd9\u4e00\u4e8b\u5b9e\u3002"),(0,o.kt)("h3",{id:"\u5c1d\u8bd5-5-\u79fb\u9664\u7334\u5b50\u8865\u4e01"},"\u5c1d\u8bd5 #5: \u79fb\u9664\u7334\u5b50\u8865\u4e01"),(0,o.kt)("p",null,"\u4e3a\u4ec0\u4e48\u6bcf\u6b21\u90fd\u9700\u8981\u8986\u76d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u5462\uff1f\u5f88\u7b80\u5355\uff0c\u4e3a\u4e86\u4ee5\u540e\u80fd\u591f\u8c03\u7528\u5b83\uff0c\u4f46\u8fd8\u6709\u53e6\u5916\u4e00\u4e2a\u539f\u56e0\uff1a\u8fd9\u6837\u6bcf\u4e2a\u4e2d\u95f4\u4ef6\u90fd\u53ef\u4ee5\u8bbf\u95ee\uff08\u548c\u8c03\u7528\uff09\u4e4b\u524d\u5305\u88f9\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"store.dispatch"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function logger(store) {\n  // Must point to the function returned by the previous middleware:\n  const next = store.dispatch\n\n  return function dispatchAndLog(action) {\n    console.log('dispatching', action)\n    let result = next(action)\n    console.log('next state', store.getState())\n    return result\n  }\n}\n")),(0,o.kt)("p",null,"\u5fc5\u987b\u8981\u94fe\u5f0f\u8c03\u7528\u4e2d\u95f4\u4ef6\uff01"),(0,o.kt)("p",null,"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"applyMiddlewareByMonkeypatching")," \u5728\u5904\u7406\u7b2c\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u540e\u6ca1\u6709\u7acb\u5373\u8986\u76d6\u6389\u539f\u6765\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"store.dispatch"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"store.dispatch")," \u5c06\u7ee7\u7eed\u6307\u5411\u539f\u59cb\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u51fd\u6570\u3002\u90a3\u4e48\u7b2c\u4e8c\u4e2a\u4e2d\u95f4\u4ef6\u4e5f\u4f1a\u7ed1\u5b9a\u5230\u539f\u6765\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u51fd\u6570\u4e0a\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u8fd8\u6709\u4e00\u79cd\u4e0d\u540c\u7684\u65b9\u5f0f\u6765\u505a\u94fe\u5f0f\u8c03\u7528\u3002\u4e2d\u95f4\u4ef6\u6765\u63a5\u53d7 ",(0,o.kt)("inlineCode",{parentName:"p"},"next()")," \u8c03\u5ea6\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u800c\u4e0d\u662f\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," \u5b9e\u4f8b\u4e2d\u8bfb\u53d6\u5b83\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function logger(store) {\n  return function wrapDispatchToAddLogging(next) {\n    return function dispatchAndLog(action) {\n      console.log('dispatching', action)\n      let result = next(action)\n      console.log('next state', store.getState())\n      return result\n    }\n  }\n}\n")),(0,o.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://knowyourmeme.com/memes/we-need-to-go-deeper"},"\u201c\u6211\u4eec\u9700\u8981\u66f4\u6df1\u5165\u201d")," \u7684\u65f6\u523b\uff0c\u6240\u4ee5\u8fd9\u53ef\u80fd\u9700\u8981\u4e00\u6bb5\u65f6\u95f4\u6765\u7406\u89e3\u3002\u51fd\u6570\u7ea7\u8054\u611f\u89c9\u5f88\u5413\u4eba\u3002ES6 \u7bad\u5934\u51fd\u6570\u4f7f\u8fd9\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Currying"},"\u8f72\u91cc\u5316")," \u66f4\u6613\u8bfb\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const logger = store => next => action => {\n  console.log('dispatching', action)\n  let result = next(action)\n  console.log('next state', store.getState())\n  return result\n}\n\nconst crashReporter = store => next => action => {\n  try {\n    return next(action)\n  } catch (err) {\n    console.error('Caught an exception!', err)\n    Raven.captureException(err, {\n      extra: {\n        action,\n        state: store.getState()\n      }\n    })\n    throw err\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd9\u6b63\u662f Redux \u4e2d\u95f4\u4ef6\u7684\u6837\u5b50\u3002")),(0,o.kt)("p",null,"\u73b0\u5728\u4e2d\u95f4\u4ef6\u63a5\u53d7 ",(0,o.kt)("inlineCode",{parentName:"p"},"next()")," dispatch \u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u65b0\u7684 dispatch \u51fd\u6570\uff0c\u8be5\u51fd\u6570\u53c8\u5145\u5f53\u5de6\u4fa7\u4e2d\u95f4\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"next()"),"\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002\u4ecd\u7136\u53ef\u4ee5\u5728\u9700\u8981\u7684\u65f6\u5019\u8c03\u7528 store \u65b9\u6cd5\uff08\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"getState()"),"\uff09\uff0c\u56e0\u6b64 ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," \u4f5c\u4e3a\u9876\u7ea7\u53c2\u6570\u4f20\u5165\u5728\u8fd9\u91cc\u4ecd\u7136\u53ef\u7528\u3002"),(0,o.kt)("h3",{id:"\u5c1d\u8bd5-6\u7b80\u5355\u7c97\u66b4\u7684\u4e2d\u95f4\u4ef6\u8c03\u7528\u65b9\u6cd5"},"\u5c1d\u8bd5 #6\uff1a\u7b80\u5355\u7c97\u66b4\u7684\u4e2d\u95f4\u4ef6\u8c03\u7528\u65b9\u6cd5"),(0,o.kt)("p",null,"\u4e3a\u4e86\u66ff\u4ee3 ",(0,o.kt)("inlineCode",{parentName:"p"},"applyMiddlewareByMonkeypatching()"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u7f16\u5199 ",(0,o.kt)("inlineCode",{parentName:"p"},"applyMiddleware()"),"\uff0c\u5b83\u5148\u8ba1\u7b97\u51fa\u6700\u7ec8\u7684\u3001\u88ab\u6240\u6709 middleware \u5305\u88f9\u540e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch()")," \u51fd\u6570\uff0c\u5e76\u4f7f\u7528\u5b83\u8fd4\u56de store \u7684\u526f\u672c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u6ce8\u610f\uff1a\u8fd9\u662f\u7b80\u5355\u7c97\u66b4\u7684\u4e2d\u95f4\u4ef6\u8c03\u7528\u65b9\u6cd5\n// \u5e76 *\u4e0d\u662f* Redux API \u771f\u5b9e\u7684\u5b9e\u73b0\u65b9\u6cd5\u3002\nfunction applyMiddleware(store, middlewares) {\n  middlewares = middlewares.slice()\n  middlewares.reverse()\n  let dispatch = store.dispatch\n  middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)))\n  return Object.assign({}, store, { dispatch })\n}\n")),(0,o.kt)("p",null,"Redux \u5185\u7f6e\u7684 ",(0,o.kt)("a",{parentName:"p",href:"/api/applymiddleware"},(0,o.kt)("inlineCode",{parentName:"a"},"applyMiddleware()"))," \u7684\u5b9e\u73b0\u662f\u76f8\u4f3c\u7684\uff0c\u4f46",(0,o.kt)("strong",{parentName:"p"},"\u5728\u4e09\u4e2a\u91cd\u8981\u65b9\u9762"),"\u4e0d\u540c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b83\u53ea\u5411\u4e2d\u95f4\u4ef6\u516c\u5f00 ",(0,o.kt)("a",{parentName:"p",href:"/api/store"},"store API")," \u7684\u4e00\u4e2a\u5b50\u96c6\uff1a","[",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch(action)"),"]","(/api/store# dispatchaction) \u548c ",(0,o.kt)("a",{parentName:"p",href:"/api/store#getState"},(0,o.kt)("inlineCode",{parentName:"a"},"getState()")),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u786e\u4fdd\u5982\u679c\u60a8\u4ece\u4e2d\u95f4\u4ef6\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"store.dispatch(action)")," \u800c\u4e0d\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"next(action)"),"\uff0c\u8be5 action \u5b9e\u9645\u4e0a\u5c06\u518d\u6b21\u904d\u5386\u6574\u4e2a\u4e2d\u95f4\u4ef6\u94fe\uff0c\u5305\u62ec\u5f53\u524d\u7684\u4e2d\u95f4\u4ef6\uff0c\u8fd9\u9700\u8981\u4e00\u4e9b\u6280\u5de7\u3002",(0,o.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-6-async-logic"},"\u8fd9\u5bf9\u5f02\u6b65\u4e2d\u95f4\u4ef6\u5f88\u6709\u7528"),"\u3002\u5728\u914d\u7f6e Redux \u671f\u95f4\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u65f6\u6709\u4e00\u4e2a\u8b66\u544a\uff0c\u540e\u9762\u4f1a\u8bb2\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4e3a\u786e\u4fdd\u60a8\u53ea\u80fd\u5e94\u7528\u4e00\u6b21\u4e2d\u95f4\u4ef6\uff0c\u5b83\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"createStore()")," \u4e0a\u8fd0\u884c\uff0c\u800c\u4e0d\u662f\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," \u672c\u8eab\u4e0a\u8fd0\u884c\u3002\u5b83\u7684\u51fd\u6570\u7b7e\u540d\u4e0d\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"(store, middlewares) => store"),"\uff0c\u800c\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"(...middlewares) => (createStore) => createStore"),"\u3002"))),(0,o.kt)("p",null,"\u56e0\u4e3a\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"createStore()")," \u4e4b\u524d\u5c06\u51fd\u6570\u5e94\u7528\u5230\u5b83\u662f\u5f88\u9ebb\u70e6\u7684\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"createStore()")," \u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u4f5c\u4e3a\u53ef\u9009\u7684\u6765\u6307\u5b9a\u8fd9\u6837\u7684\u51fd\u6570\u3002"),(0,o.kt)("h4",{id:"\u8b66\u544a\u5728\u914d\u7f6e-redux-\u671f\u95f4\u8c03\u7528-dispatch"},"\u8b66\u544a\uff1a\u5728\u914d\u7f6e Redux \u671f\u95f4\u8c03\u7528 dispatch"),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"applyMiddleware")," \u6267\u884c\u5e76\u914d\u7f6e\u4f60\u7684\u4e2d\u95f4\u4ef6\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"store.dispatch")," \u51fd\u6570\u5c06\u6307\u5411 ",(0,o.kt)("inlineCode",{parentName:"p"},"createStore")," \u63d0\u4f9b\u7684\u6700\u521d\u7248\u672c\u3002\u8fd9\u4e2a\u65f6\u5019\u7684 dispatch \u8fd8\u4e0d\u4f1a\u7ecf\u8fc7\u4efb\u4f55 middleware\u3002\u5982\u679c\u60a8\u671f\u671b\u5728\u914d\u7f6e\u671f\u95f4\u4e0e\u53e6\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u8fdb\u884c\u4ea4\u4e92\uff0c\u60a8\u53ef\u80fd\u4f1a\u611f\u5230\u5931\u671b\u3002\u7531\u4e8e\u8fd9\u79cd\u610f\u5916\u884c\u4e3a\uff0c\u5728\u914d\u7f6e\u5b8c\u6210\u4e4b\u524d\u5982\u679c dispatch \u4e86 action\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"applyMiddleware")," \u5c06\u629b\u51fa\u9519\u8bef\u3002\u89e3\u6cd5\u662f\uff0c\u4f60\u5e94\u8be5\u901a\u8fc7\u4e00\u4e2a\u516c\u5171\u5bf9\u8c61\uff08\u4f8b\u5982\u505a API \u8bf7\u6c42\u7684\u4e2d\u95f4\u4ef6\uff0c\u90a3\u5c31\u76f4\u63a5\u7528 API \u8bf7\u6c42\u7684\u5bf9\u8c61\uff09\u76f4\u63a5\u4e0e\u5176\u4ed6\u4e2d\u95f4\u4ef6\u901a\u4fe1\uff0c\u6216\u8005\u653e\u5230\u4e2d\u95f4\u4ef6\u914d\u7f6e\u5b8c\u540e\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u7b49\u5f85\u6267\u884c\u3002"),(0,o.kt)("h3",{id:"\u6700\u540e\u7684\u5b9e\u73b0"},"\u6700\u540e\u7684\u5b9e\u73b0"),(0,o.kt)("p",null,"\u9274\u4e8e\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\uff0c\u6211\u4eec\u521a\u521a\u5199\u9053\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const logger = store => next => action => {\n  console.log('dispatching', action)\n  let result = next(action)\n  console.log('next state', store.getState())\n  return result\n}\n\nconst crashReporter = store => next => action => {\n  try {\n    return next(action)\n  } catch (err) {\n    console.error('Caught an exception!', err)\n    Raven.captureException(err, {\n      extra: {\n        action,\n        state: store.getState()\n      }\n    })\n    throw err\n  }\n}\n")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u5982\u4f55\u5c06\u5176\u5e94\u7528\u4e8e Redux store \uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore, combineReducers, applyMiddleware } from 'redux'\n\nconst todoApp = combineReducers(reducers)\nconst store = createStore(\n  todoApp,\n  // applyMiddleware() tells createStore() how to handle middleware\n  applyMiddleware(logger, crashReporter)\n)\n")),(0,o.kt)("p",null,"\u5c31\u662f\u8fd9\u6837\uff01\u73b0\u5728\uff0cdispatch \u5230 store \u7684\u6240\u6709 action \u90fd\u4f1a\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"logger")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"crashReporter")," \u8fd92\u4e2a\u4e2d\u95f4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Will flow through both logger and crashReporter middleware!\nstore.dispatch(addTodo('Use Redux'))\n")),(0,o.kt)("h2",{id:"seven-examples"},"Seven Examples"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u5728\u9605\u8bfb\u4e0a\u8ff0\u90e8\u5206\u65f6\u5934\u8111\u53d1\u70ed\uff0c\u8bf7\u60f3\u8c61\u4e00\u4e0b\u7f16\u5199\u5b83\u662f\u4ec0\u4e48\u611f\u89c9\u3002\u672c\u8282\u65e8\u5728\u8ba9\u60a8\u548c\u6211\u653e\u677e\u8eab\u5fc3\uff0c\u5e76\u6709\u52a9\u4e8e\u8ba9\u60a8\u7684\u5934\u8111\u5f00\u7a8d\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u7684\u6bcf\u4e2a\u51fd\u6570\u90fd\u662f\u4e00\u4e2a\u6709\u6548\u7684 Redux \u4e2d\u95f4\u4ef6\u3002\u5b83\u4eec\u5e76\u4e0d\u540c\u6837\u6709\u7528\uff0c\u4f46\u90fd\u540c\u6837\u6709\u8da3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u65e5\u5fd7\u6253\u5370\u6bcf\u4e2a dispatch \u7684 action \u548c\u8c03\u7528\u540e\u7684\u72b6\u6001\n */\nconst logger = store => next => action => {\n  console.group(action.type)\n  console.info('dispatching', action)\n  let result = next(action)\n  console.log('next state', store.getState())\n  console.groupEnd()\n  return result\n}\n\n/**\n * \u62a5\u9519\u7684\u65f6\u5019\u53d1\u9001\u5f02\u5e38\u62a5\u544a\n */\nconst crashReporter = store => next => action => {\n  try {\n    return next(action)\n  } catch (err) {\n    console.error('Caught an exception!', err)\n    Raven.captureException(err, {\n      extra: {\n        action,\n        state: store.getState()\n      }\n    })\n    throw err\n  }\n}\n\n/**\n * \u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u4f7f\u7528 { meta: { delay: N } } \u5b89\u6392 action \u5ef6\u8fdf N \u6beb\u79d2\u540e\u8c03\u7528\u3002\n * \u8ba9 `dispatch` \u8fd4\u56de\u4e00\u4e2a\u53d6\u6d88\u5b9a\u65f6\u5668\u7684\u51fd\u6570\u3002\n */\nconst timeoutScheduler = store => next => action => {\n  if (!action.meta || !action.meta.delay) {\n    return next(action)\n  }\n\n  const timeoutId = setTimeout(() => next(action), action.meta.delay)\n\n  return function cancel() {\n    clearTimeout(timeoutId)\n  }\n}\n\n/**\n * \u53e6\u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u4f7f\u7528 { meta: { raf: true } } \u8ba9 action \u5728 rAF \u5faa\u73af\u5185\u8c03\u7528\u3002\n * \u8ba9 `dispatch` \u8fd4\u56de\u4e00\u4e2a\u5220\u9664 action \u7684\u51fd\u6570\n */\nconst rafScheduler = store => next => {\n  const queuedActions = []\n  let frame = null\n\n  function loop() {\n    frame = null\n    try {\n      if (queuedActions.length) {\n        next(queuedActions.shift())\n      }\n    } finally {\n      maybeRaf()\n    }\n  }\n\n  function maybeRaf() {\n    if (queuedActions.length && !frame) {\n      frame = requestAnimationFrame(loop)\n    }\n  }\n\n  return action => {\n    if (!action.meta || !action.meta.raf) {\n      return next(action)\n    }\n\n    queuedActions.push(action)\n    maybeRaf()\n\n    return function cancel() {\n      queuedActions = queuedActions.filter(a => a !== action)\n    }\n  }\n}\n\n/**\n * \u8ba9\u4f60\u53ef\u4ee5\u76f4\u63a5 dispatch promise \u4f5c\u4e3a action\u3002\n * \u5982\u679c promise \u6267\u884c\u6210\u529f\uff0c\u5b83\u7684\u7ed3\u679c\u5c06\u4f5c\u4e3a\u4e00\u4e2a action \u53d1\u9001\u3002\n * `dispatch` \u8fd4\u56de\u7684\u4e5f\u662f promise\uff0c\u8fd9\u6837\u5982\u679c\u51fa\u9519\u4e5f\u80fd\u5904\u7406\u3002\n */\nconst vanillaPromise = store => next => action => {\n  if (typeof action.then !== 'function') {\n    return next(action)\n  }\n\n  return Promise.resolve(action).then(store.dispatch)\n}\n\n/**\n * \u5141\u8bb8\u60a8 dispatch \u5e26\u6709 { promise } \u5b57\u6bb5\u7684\u7279\u6b8a action\u3002\n *\n * \u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u4f1a\u5728\u4e00\u5f00\u59cb\u5c31\u628a\u5b83\u4eec\u53d8\u6210\u4e00\u4e2a\u5355\u4e00\u7684 action \uff0c\n * \u4ee5\u53ca\u5f53 `promise` \u6210\u529f\u65f6\u518d dispatch \u4e00\u4e2a\u6210\u529f\uff08\u6216\u5931\u8d25\uff09\u7684 action \u3002\n *\n * \u4e3a\u65b9\u4fbf\u8d77\u89c1\uff0c`dispatch` \u5c06\u8fd4\u56de promise \u4ee5\u4fbf\u8c03\u7528\u8005\u53ef\u4ee5\u7ee7\u7eed then\u3002\n */\nconst readyStatePromise = store => next => action => {\n  if (!action.promise) {\n    return next(action)\n  }\n\n  function makeAction(ready, data) {\n    const newAction = Object.assign({}, action, { ready }, data)\n    delete newAction.promise\n    return newAction\n  }\n\n  next(makeAction(false))\n  return action.promise.then(\n    result => next(makeAction(true, { result })),\n    error => next(makeAction(true, { error }))\n  )\n}\n\n/**\n * \u8ba9\u4f60 dispatch \u51fd\u6570\u800c\u4e0d\u662f action \u5bf9\u8c61\u3002\n * \u6b64\u51fd\u6570\u5c06\u63a5\u6536 `dispatch` \u548c `getState` \u4f5c\u4e3a\u53c2\u6570\u3002\n *\n * \u7528\u4e8e\u63d0\u524d\u9000\u51fa\uff08\u4f7f\u7528 `getState()` \u7684\u6761\u4ef6\u5224\u65ad\uff09\uff0c\u4ee5\u53ca\n * \u7528\u4e8e\u5f02\u6b65\u63a7\u5236\u6d41\uff08\u5b83\u53ef\u4ee5 `dispatch()` \u522b\u7684\u4e1c\u897f\uff09\u3002\n *\n * `dispatch` \u5c06\u8fd4\u56de\u88ab\u8c03\u5ea6\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002\n */\nconst thunk = store => next => action =>\n  typeof action === 'function'\n    ? action(store.dispatch, store.getState)\n    : next(action)\n\n// \u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0a\u6240\u6709\u4e2d\u95f4\u4ef6\uff01\uff08\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u4f60\u5e94\u8be5\u3002\uff09\nconst todoApp = combineReducers(reducers)\nconst store = createStore(\n  todoApp,\n  applyMiddleware(\n    rafScheduler,\n    timeoutScheduler,\n    thunk,\n    vanillaPromise,\n    readyStatePromise,\n    logger,\n    crashReporter\n  )\n)\n")))}m.isMDXComponent=!0}}]);