"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2066],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9809:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"actions",title:"Actions",hide_title:!1},s="Redux FAQ: Actions",u={unversionedId:"faq/actions",id:"faq/actions",title:"Actions",description:"\u76ee\u5f55",source:"@site/../docs/faq/Actions.md",sourceDirName:"faq",slug:"/faq/actions",permalink:"/faq/actions",draft:!1,tags:[],version:"current",frontMatter:{id:"actions",title:"Actions",hide_title:!1},sidebar:"docs",previous:{title:"Store Setup",permalink:"/faq/store-setup"},next:{title:"Immutable Data",permalink:"/faq/immutable-data"}},p={},c=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:2},{value:"Actions",id:"actions",level:2},{value:"\u4e3a\u4ec0\u4e48 <code>type</code> \u5e94\u8be5\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u6216\u8005\u81f3\u5c11\u662f\u53ef\u5e8f\u5217\u5316\u7684\uff1f\u4e3a\u4ec0\u4e48 action types \u5e94\u8be5\u662f\u5e38\u91cf\uff1f",id:"\u4e3a\u4ec0\u4e48-type-\u5e94\u8be5\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u6216\u8005\u81f3\u5c11\u662f\u53ef\u5e8f\u5217\u5316\u7684\u4e3a\u4ec0\u4e48-action-types-\u5e94\u8be5\u662f\u5e38\u91cf",level:3},{value:"\u66f4\u591a\u4fe1\u606f",id:"\u66f4\u591a\u4fe1\u606f",level:4},{value:"reducer \u548c action \u4e4b\u95f4\u603b\u662f\u5b58\u5728\u4e00\u5bf9\u4e00\u7684\u6620\u5c04\u5417\uff1f",id:"reducer-\u548c-action-\u4e4b\u95f4\u603b\u662f\u5b58\u5728\u4e00\u5bf9\u4e00\u7684\u6620\u5c04\u5417",level:3},{value:"\u66f4\u591a\u4fe1\u606f",id:"\u66f4\u591a\u4fe1\u606f-1",level:4},{value:"\u5982\u4f55\u8868\u793a AJAX \u8c03\u7528\u7b49\u7684\u201c\u526f\u4f5c\u7528\u201d\uff1f\u4e3a\u4ec0\u4e48\u9700\u8981\u50cf \u201caction creator\u201d\u3001\u201cthunk\u201d \u548c \u201cmiddleware\u201d \u6765\u505a\u5f02\u6b65\u884c\u4e3a\uff1f",id:"\u5982\u4f55\u8868\u793a-ajax-\u8c03\u7528\u7b49\u7684\u526f\u4f5c\u7528\u4e3a\u4ec0\u4e48\u9700\u8981\u50cf-action-creatorthunk-\u548c-middleware-\u6765\u505a\u5f02\u6b65\u884c\u4e3a",level:3},{value:"\u66f4\u591a\u4fe1\u606f",id:"\u66f4\u591a\u4fe1\u606f-2",level:4},{value:"\u5e94\u8be5\u4f7f\u7528\u4ec0\u4e48\u5f02\u6b65\u4e2d\u95f4\u4ef6\uff1f\u5982\u4f55\u5728 thunk\u3001sagas\u3001observables \u6216\u5176\u4ed6\u4e2d\u95f4\u4ef6\u4e4b\u95f4\u505a\u51fa\u9009\u62e9\uff1f",id:"\u5e94\u8be5\u4f7f\u7528\u4ec0\u4e48\u5f02\u6b65\u4e2d\u95f4\u4ef6\u5982\u4f55\u5728-thunksagasobservables-\u6216\u5176\u4ed6\u4e2d\u95f4\u4ef6\u4e4b\u95f4\u505a\u51fa\u9009\u62e9",level:3},{value:"\u6211\u5e94\u8be5\u4ece\u4e00\u4e2a action creator \u91cc\u8fde\u7eed dispatch \u591a\u4e2a action \u5417\uff1f",id:"\u6211\u5e94\u8be5\u4ece\u4e00\u4e2a-action-creator-\u91cc\u8fde\u7eed-dispatch-\u591a\u4e2a-action-\u5417",level:3},{value:"\u66f4\u591a\u4fe1\u606f",id:"\u66f4\u591a\u4fe1\u606f-3",level:4}],m={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redux-faq-actions"},"Redux FAQ: Actions"),(0,i.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#redux-faq-actions"},"Redux FAQ: Actions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E7%9B%AE%E5%BD%95"},"\u76ee\u5f55")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#actions"},"Actions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants"},"\u4e3a\u4ec0\u4e48 ",(0,i.kt)("inlineCode",{parentName:"a"},"type")," \u5e94\u8be5\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u6216\u8005\u81f3\u5c11\u662f\u53ef\u5e8f\u5217\u5316\u7684\uff1f\u4e3a\u4ec0\u4e48 action types \u5e94\u8be5\u662f\u5e38\u91cf\uff1f"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#further-information"},"\u66f4\u591a\u4fe1\u606f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#is-there-always-a-one-to-one-mapping-between-reducers-and-actions"},"reducer \u548c action \u4e4b\u95f4\u603b\u662f\u5b58\u5728\u4e00\u5bf9\u4e00\u7684\u6620\u5c04\u5417\uff1f"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#further-information-1"},"\u66f4\u591a\u4fe1\u606f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior"},"\u5982\u4f55\u8868\u793a AJAX \u8c03\u7528\u7b49\u7684\u201c\u526f\u4f5c\u7528\u201d\uff1f\u4e3a\u4ec0\u4e48\u9700\u8981\u50cf \u201caction creator\u201d\u3001\u201cthunk\u201d \u548c \u201cmiddleware\u201d \u6765\u505a\u5f02\u6b65\u884c\u4e3a\uff1f"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#further-information-2"},"\u66f4\u591a\u4fe1\u606f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-async-middleware-should-i-use-how-do-you-decide-between-thunks-sagas-observables-or-something-else"},"\u5e94\u8be5\u4f7f\u7528\u4ec0\u4e48\u5f02\u6b65\u4e2d\u95f4\u4ef6\uff1f\u5982\u4f55\u5728 thunk\u3001sagas\u3001observables \u6216\u5176\u4ed6\u4e2d\u95f4\u4ef6\u4e4b\u95f4\u505a\u51fa\u9009\u62e9\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#should-i-dispatch-multiple-actions-in-a-row-from-one-action-creator"},"\u6211\u5e94\u8be5\u4ece\u4e00\u4e2a action creator \u91cc\u8fde\u7eed dispatch \u591a\u4e2a actions \u5417\uff1f"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#further-information-3"},"\u66f4\u591a\u4fe1\u606f"))))))))),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48-type-\u5e94\u8be5\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u6216\u8005\u81f3\u5c11\u662f\u53ef\u5e8f\u5217\u5316\u7684\u4e3a\u4ec0\u4e48-action-types-\u5e94\u8be5\u662f\u5e38\u91cf"},"\u4e3a\u4ec0\u4e48 ",(0,i.kt)("inlineCode",{parentName:"h3"},"type")," \u5e94\u8be5\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u6216\u8005\u81f3\u5c11\u662f\u53ef\u5e8f\u5217\u5316\u7684\uff1f\u4e3a\u4ec0\u4e48 action types \u5e94\u8be5\u662f\u5e38\u91cf\uff1f"),(0,i.kt)("p",null,"\u4e0e state \u4e00\u6837\uff0c\u53ef\u5e8f\u5217\u5316\u7684 action \u652f\u6301 Redux \u7684\u4e00\u4e9b\u5b9a\u4e49\u529f\u80fd\uff0c\u4f8b\u5982\u65f6\u95f4\u65c5\u884c\u8c03\u8bd5\uff0c\u4ee5\u53ca\u8bb0\u5f55\u548c\u91cd\u653e\u64cd\u4f5c\u3002\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u503c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Symbol")," \u7b49\u7c7b\u578b\u6216\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"instanceof")," \u68c0\u67e5 action \u672c\u8eab\u4f1a\u7834\u574f\u8fd9\u4e00\u70b9\u3002\u5b57\u7b26\u4e32\u662f\u53ef\u5e8f\u5217\u5316\u7684\u5e76\u4e14\u6613\u4e8e\u81ea\u63cf\u8ff0\uff0c\u56e0\u6b64\u662f\u66f4\u597d\u7684\u9009\u62e9\u3002\u8bf7\u6ce8\u610f\uff0c\u5982\u679c action \u65e8\u5728\u4f9b\u4e2d\u95f4\u4ef6\u4f7f\u7528\uff0c\u5219\u53ef\u4ee5\u5728 action \u4e2d\u4f7f\u7528 Symbols\u3001Promises \u6216\u5176\u4ed6\u4e0d\u53ef\u5e8f\u5217\u5316\u7684\u503c\u3002\u53ea\u9700\u8981\u4fdd\u8bc1\u5c06 action \u5b9e\u9645\u5b58\u50a8\u5230 store \u5e76\u4f20\u9012\u7ed9 reducer \u65f6\u662f\u53ef\u5e8f\u5217\u5316\u7684\u3002"),(0,i.kt)("p",null,"\u51fa\u4e8e\u6027\u80fd\u539f\u56e0\uff0c\u6211\u4eec\u65e0\u6cd5\u53ef\u9760\u5730\u5f3a\u5236\u6267\u884c\u53ef\u5e8f\u5217\u5316\u7684 actions\uff0c\u56e0\u6b64 Redux \u4ec5\u68c0\u67e5\u6bcf\u4e2a action \u662f\u5426\u90fd\u662f\u666e\u901a\u5bf9\u8c61\uff0c\u5e76\u4e14 ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u662f\u5426\u5df2\u5b9a\u4e49\u3002\u5176\u4f59\u7684\u53d6\u51b3\u4e8e\u4f60\uff0c\u4f46\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0\u4fdd\u6301\u6240\u6709\u5185\u5bb9\u53ef\u5e8f\u5217\u5316\u6709\u52a9\u4e8e\u8c03\u8bd5\u548c\u91cd\u73b0\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u5c01\u88c5\u548c\u96c6\u4e2d\u5e38\u7528\u4ee3\u7801\u7247\u6bb5\u662f\u7f16\u7a0b\u4e2d\u7684\u4e00\u4e2a\u5173\u952e\u6982\u5ff5\u3002\u867d\u7136\u5728\u4efb\u4f55\u5730\u65b9\u90fd\u53ef\u4ee5\u624b\u52a8\u521b\u5efa action \u5bf9\u8c61\uff0c\u5e76\u624b\u52a8\u7f16\u5199\u6bcf\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u503c\uff0c\u4f46\u5b9a\u4e49\u53ef\u91cd\u7528\u7684\u5e38\u91cf\u4f1a\u4f7f\u7ef4\u62a4\u4ee3\u7801\u66f4\u5bb9\u6613\u3002\u5982\u679c\u4f60\u5c06\u5e38\u91cf\u653e\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u4e2d\uff0c\u4f60\u53ef\u4ee5",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-import"},"\u68c0\u67e5\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"a"},"import")," \u8bed\u53e5\u662f\u5426\u6709\u9519\u522b\u5b57")," \u8fd9\u6837\u4f60\u5c31\u4e0d\u4f1a\u610f\u5916\u4f7f\u7528\u9519\u8bef\u7684\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("h4",{id:"\u66f4\u591a\u4fe1\u606f"},"\u66f4\u591a\u4fe1\u606f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6587\u6863")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../recipes/ReducingBoilerplate.md#actions"},"Reducing Boilerplate"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8ba8\u8bba")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/384"},"#384: \u5efa\u8bae Action \u5e38\u91cf\u7528\u8fc7\u53bb\u65f6\u547d\u540d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/628"},"#628: \u4f7f\u7528\u66f4\u5c11\u7684\u6837\u677f\u4ee3\u7801\u521b\u5efa\u7b80\u5355\u7684 action")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/1024"},"#1024: Proposal: \u58f0\u660e\u5f0f reducers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/1167"},"#1167: Reducer without switch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/q/34759047/62937"},"Stack Overflow: \u4e3a\u4ec0\u4e48\u5728 Redux \u4e2d\u9700\u8981 \u201cActions\u201d \u4f5c\u4e3a\u6570\u636e\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/q/34965856/62937"},"Stack Overflow: Redux \u4e2d\u7684\u5e38\u91cf\u6709\u4ec0\u4e48\u610f\u4e49\uff1f"))),(0,i.kt)("h3",{id:"reducer-\u548c-action-\u4e4b\u95f4\u603b\u662f\u5b58\u5728\u4e00\u5bf9\u4e00\u7684\u6620\u5c04\u5417"},"reducer \u548c action \u4e4b\u95f4\u603b\u662f\u5b58\u5728\u4e00\u5bf9\u4e00\u7684\u6620\u5c04\u5417\uff1f"),(0,i.kt)("p",null,"\u4e0d\uff0c\u5efa\u8bae\u7f16\u5199\u72ec\u7acb\u7684\u5c0f\u578b reducer \u51fd\u6570\uff0c\u6bcf\u4e2a\u51fd\u6570\u8d1f\u8d23\u66f4\u65b0\u7279\u5b9a\u7684 state \u5207\u7247\u3002\u6211\u4eec\u79f0\u8fd9\u79cd\u6a21\u5f0f\u4e3a \u201creducer composition\u201d\u3002\u4e00\u4e2a\u7ed9\u5b9a\u7684 action \u53ef\u4ee5\u7531\u5168\u90e8 reducer \u51fd\u6570\u5904\u7406\u3001\u90e8\u5206 reducer \u51fd\u6570\u5904\u7406\u6216\u4e00\u4e2a reducer \u51fd\u6570\u90fd\u4e0d\u5904\u7406\u3002\u8fd9\u4f7f\u7ec4\u4ef6\u4e0e\u5b9e\u9645\u6570\u636e\u66f4\u6539\u5206\u79bb\uff0c\u56e0\u4e3a\u4e00\u4e2a action \u53ef\u80fd\u4f1a\u5f71\u54cd\u72b6\u6001\u6811\u7684\u4e0d\u540c\u90e8\u5206\uff0c\u5e76\u4e14\u7ec4\u4ef6\u65e0\u9700\u610f\u8bc6\u5230\u8fd9\u4e00\u70b9\u3002\u6709\u4e9b\u7528\u6237\u786e\u5b9e\u9009\u62e9\u5c06\u5b83\u4eec\u66f4\u7d27\u5bc6\u5730\u7ed1\u5b9a\u5728\u4e00\u8d77\uff0c\u4f8b\u5982 \u201cducks\u201d \u6587\u4ef6\u7ed3\u6784\uff0c\u4f46\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u80af\u5b9a\u6ca1\u6709\u4e00\u5bf9\u4e00\u7684\u6620\u5c04\uff0c\u4f60\u5e94\u8be5\u968f\u65f6\u6253\u7834\u8fd9\u79cd\u8303\u5f0f\uff0c\u5728\u591a\u4e2a reducer \u4e2d\u5904\u7406\u4e00\u4e2a action\u3002"),(0,i.kt)("h4",{id:"\u66f4\u591a\u4fe1\u606f-1"},"\u66f4\u591a\u4fe1\u606f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6587\u6863")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-3-state-actions-reducers"},"\u57fa\u7840\u77e5\u8bc6: State, Actions, Reducers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../recipes/structuring-reducers/StructuringReducers.md"},"\u65b9\u6cd5: \u7ed3\u6784\u5316 Reducers"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8ba8\u8bba")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/dan_abramov/status/682923564006248448"},"Twitter: \u6700\u5e38\u89c1\u7684 Redux \u8bef\u89e3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/1167"},"#1167: Reducer without switch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxible/reduxible/issues/8"},"Reduxible #8: Reducers \u548c action creators \u4e0d\u662f\u4e00\u5bf9\u4e00\u7684\u6620\u5c04")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35493352/can-i-dispatch-multiple-actions-without-redux-thunk-middleware/35642783"},"Stack Overflow: \u6211\u53ef\u4ee5\u5728\u6ca1\u6709 Redux Thunk \u4e2d\u95f4\u4ef6\u7684\u60c5\u51b5\u4e0b dispatch \u591a\u4e2a\u64cd\u4f5c\u5417\uff1f"))),(0,i.kt)("h3",{id:"\u5982\u4f55\u8868\u793a-ajax-\u8c03\u7528\u7b49\u7684\u526f\u4f5c\u7528\u4e3a\u4ec0\u4e48\u9700\u8981\u50cf-action-creatorthunk-\u548c-middleware-\u6765\u505a\u5f02\u6b65\u884c\u4e3a"},"\u5982\u4f55\u8868\u793a AJAX \u8c03\u7528\u7b49\u7684\u201c\u526f\u4f5c\u7528\u201d\uff1f\u4e3a\u4ec0\u4e48\u9700\u8981\u50cf \u201caction creator\u201d\u3001\u201cthunk\u201d \u548c \u201cmiddleware\u201d \u6765\u505a\u5f02\u6b65\u884c\u4e3a\uff1f"),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u6f2b\u957f\u800c\u590d\u6742\u7684\u8bdd\u9898\uff0c\u5bf9\u4e8e\u5982\u4f55\u7ec4\u7ec7\u4ee3\u7801\u4ee5\u53ca\u5e94\u8be5\u4f7f\u7528\u4ec0\u4e48\u65b9\u6cd5\u6709\u5404\u79cd\u5404\u6837\u7684\u610f\u89c1\u3002"),(0,i.kt)("p",null,"\u4efb\u4f55\u6709\u610f\u4e49\u7684 Web \u5e94\u7528\u7a0b\u5e8f\u90fd\u9700\u8981\u6267\u884c\u590d\u6742\u7684\u903b\u8f91\uff0c\u901a\u5e38\u5305\u62ec\u5f02\u6b65\u5de5\u4f5c\uff0c\u4f8b\u5982\u53d1\u51fa AJAX \u8bf7\u6c42\u3002\u8be5\u4ee3\u7801\u4e0d\u518d\u7eaf\u7cb9\u662f\u5176\u8f93\u5165\u7684\u51fd\u6570\uff0c\u4e0e\u5916\u90e8\u4e16\u754c\u7684\u4ea4\u4e92\u88ab\u79f0\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Side_effect_%28computer_science%29"},"\u201c\u526f\u4f5c\u7528\u201d")),(0,i.kt)("p",null,"Redux \u53d7\u5230\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u542f\u53d1\uff0c\u5f00\u7bb1\u5373\u7528\uff0c\u6ca1\u6709\u6267\u884c\u526f\u4f5c\u7528\u7684\u5730\u65b9\u3002\u7279\u522b\u662f\uff0creducer \u51fd\u6570 ",(0,i.kt)("em",{parentName:"p"},"\u5fc5\u987b")," \u59cb\u7ec8\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"(state, action) => newState")," \u7684\u7eaf\u51fd\u6570\u3002\u4f46\u662f\uff0cRedux \u7684\u4e2d\u95f4\u4ef6\u53ef\u4ee5\u62e6\u622a dispatch \u4e86\u7684 action \u5e76\u5728\u5b83\u4eec\u5468\u56f4\u6dfb\u52a0\u989d\u5916\u7684\u590d\u6742\u884c\u4e3a\uff0c\u5305\u62ec\u526f\u4f5c\u7528\u3002"),(0,i.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0cRedux \u5efa\u8bae\u5e26\u6709\u526f\u4f5c\u7528\u7684\u4ee3\u7801\u5e94\u8be5\u662f action \u521b\u5efa\u8fc7\u7a0b\u7684\u4e00\u90e8\u5206\u3002\u867d\u7136\u8be5\u903b\u8f91 ",(0,i.kt)("em",{parentName:"p"},"\u53ef\u4ee5")," \u5728 UI \u7ec4\u4ef6\u5185\u6267\u884c\uff0c\u4f46\u901a\u5e38\u5c06\u903b\u8f91\u63d0\u53d6\u5230\u53ef\u91cd\u7528\u51fd\u6570\u4e2d\u4ee5\u4fbf\u53ef\u4ee5\u4ece\u591a\u4e2a\u4f4d\u7f6e\u8c03\u7528\u76f8\u540c\u7684\u903b\u8f91\uff08\u4e00\u4e2a action creator \u51fd\u6570\uff09\u3002"),(0,i.kt)("p",null,"\u6700\u7b80\u5355\u548c\u6700\u5e38\u89c1\u7684\u65b9\u6cd5\u662f\u6dfb\u52a0 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gaearon/redux-thunk"},"Redux Thunk")," \u4e2d\u95f4\u4ef6\uff0c\u8ba9\u4f60\u53ef\u4ee5\u7f16\u5199\u5177\u6709\u66f4\u590d\u6742\u548c\u5f02\u6b65\u903b\u8f91\u7684 action creator\u3002\u53e6\u4e00\u4e2a\u5e7f\u6cdb\u4f7f\u7528\u7684\u65b9\u6cd5\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yelouafi/redux-saga"},"Redux Saga")," \u5b83\u53ef\u4ee5\u8ba9\u4f60\u4f7f\u7528\u751f\u6210\u5668\u7f16\u5199\u66f4\u591a\u770b\u8d77\u6765\u540c\u6b65\u7684\u4ee3\u7801\uff0c\u5e76\u4e14\u53ef\u4ee5\u50cf\u4e00\u4e2a Redux \u5e94\u7528\u7a0b\u5e8f\u7684 \u201cbackground threads\u201d or \u201cdaemons\u201d \u4e00\u6837\u3002\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/raisemarketplace/redux-loop"},"Redux Loop"),"\uff0c\u5b83\u901a\u8fc7\u5141\u8bb8\u4f60\u7684 reducer \u58f0\u660e\u526f\u4f5c\u7528\u4ee5\u54cd\u5e94 state \u66f4\u6539\u5e76\u8ba9\u5b83\u4eec\u5355\u72ec\u6267\u884c\u6765\u53cd\u8f6c\u8fc7\u7a0b\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8\u6709 ",(0,i.kt)("em",{parentName:"p"},"\u8bb8\u591a")," \u5176\u4ed6\u793e\u533a\u5f00\u53d1\u7684\u5e93\u548c\u60f3\u6cd5\uff0c\u6bcf\u4e2a\u5e93\u548c\u60f3\u6cd5\u90fd\u5bf9\u5982\u4f55\u7ba1\u7406\u526f\u4f5c\u7528\u6709\u81ea\u5df1\u7684\u770b\u6cd5\u3002"),(0,i.kt)("h4",{id:"\u66f4\u591a\u4fe1\u606f-2"},"\u66f4\u591a\u4fe1\u606f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6587\u6863")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-6-async-logic"},"Redux \u57fa\u7840\u77e5\u8bc6\uff1a\u5f02\u6b65\u903b\u8f91\u548c\u6570\u636e\u6d41")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-4-store#middleware"},"Redux \u57fa\u7840\u77e5\u8bc6\uff1a Store - Middleware"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6587\u7ae0")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@fward/redux-side-effects-and-you-66f2e0842fc3"},"Redux Side-Effects and You")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://blog.hivejs.org/building-the-ui-2/"},"Redux \u4e2d\u7684\u7eaf\u529f\u80fd\u548c\u526f\u4f5c\u7528")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://danmaz74.me/2015/08/19/from-flux-to-redux-async-actions-the-easy-way/"},"\u4ece Flux \u5230 Redux\uff1a\u5f02\u6b65\u64cd\u4f5c\u7684\u7b80\u5355\u65b9\u6cd5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/redux-side-effects.md"},'React/Redux Links: "Redux Side Effects" \u7c7b\u522b')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/markerikson/ea4d0a6ce56ee479fe8b356e099f857e"},"Gist: Redux-Thunk \u793a\u4f8b"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8ba8\u8bba")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/291"},"#291: \u5c1d\u8bd5\u5c06 API \u8c03\u7528\u653e\u5728\u6b63\u786e\u7684\u4f4d\u7f6e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/455"},"#455: Modeling side effects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/533"},"#533: \u66f4\u7b80\u5355\u5730\u4ecb\u7ecd\u5f02\u6b65 action creator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/pull/569"},"#569: Proposal: \u7528\u4e8e\u663e\u5f0f\u526f\u4f5c\u7528\u7684 API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/1139"},"#1139: \u57fa\u4e8e\u751f\u6210\u5668\u548c sagas \u7684\u66ff\u4ee3\u526f\u4f5c\u7528\u6a21\u578b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux"},"Stack Overflow: \u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981\u4e2d\u95f4\u4ef6\u7528\u4e8e Redux \u4e2d\u7684\u5f02\u6b65\u6d41\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559"},"Stack Overflow: Redux \u5982\u4f55\u5728\u8d85\u65f6\u7684\u60c5\u51b5\u4e0bdispatch action\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/32982237/where-should-i-put-synchronous-side-effects-linked-to-actions-in-redux/33036344"},"Stack Overflow: \u6211\u5e94\u8be5\u5c06\u4e0e redux \u4e2d\u7684 action \u76f8\u5173\u8054\u7684\u540c\u6b65\u526f\u4f5c\u7528\u653e\u5728\u54ea\u91cc\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/32925837/how-to-handle-complex-side-effects-in-redux/33036594"},"Stack Overflow: \u5982\u4f55\u5728 Redux \u4e2d\u5904\u7406\u590d\u6742\u7684\u526f\u4f5c\u7528\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/33011729/how-to-unit-test-async-redux-actions-to-mock-ajax-response/33053465"},"Stack Overflow: \u5982\u4f55\u5bf9\u5f02\u6b65 Redux action \u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u4ee5\u6a21\u62df ajax \u54cd\u5e94")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35262692/how-to-fire-ajax-calls-in-response-to-the-state-changes-with-redux/35675447"},"Stack Overflow: \u5982\u4f55\u4f7f\u7528 Redux \u89e6\u53d1 AJAX \u8c03\u7528\u4ee5\u54cd\u5e94\u72b6\u6001\u66f4\u6539\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/469iyc/help_performing_async_api_calls_with_reduxpromise/"},"Reddit: \u4f7f\u7528 Redux-Promise \u4e2d\u95f4\u4ef6\u5e2e\u52a9\u6267\u884c\u5f02\u6b65 API \u8c03\u7528\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/dan_abramov/status/689639582120415232"},"Twitter: sagas\u3001loops \u548c\u5176\u4ed6\u65b9\u6cd5\u4e4b\u95f4\u7684\u53ef\u80fd\u6bd4\u8f83"))),(0,i.kt)("h3",{id:"\u5e94\u8be5\u4f7f\u7528\u4ec0\u4e48\u5f02\u6b65\u4e2d\u95f4\u4ef6\u5982\u4f55\u5728-thunksagasobservables-\u6216\u5176\u4ed6\u4e2d\u95f4\u4ef6\u4e4b\u95f4\u505a\u51fa\u9009\u62e9"},"\u5e94\u8be5\u4f7f\u7528\u4ec0\u4e48\u5f02\u6b65\u4e2d\u95f4\u4ef6\uff1f\u5982\u4f55\u5728 thunk\u3001sagas\u3001observables \u6216\u5176\u4ed6\u4e2d\u95f4\u4ef6\u4e4b\u95f4\u505a\u51fa\u9009\u62e9\uff1f"),(0,i.kt)("p",null,"\u8fd9\u91cc\u6709 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/side-effects.md"},"\u8bb8\u591a\u53ef\u7528\u7684\u5f02\u6b65/\u526f\u4f5c\u7528 middleware"),"\uff0c\u4f46\u6700\u5e38\u7528\u7684\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-thunk"},(0,i.kt)("inlineCode",{parentName:"a"},"redux-thunk")),"\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/redux-saga/redux-saga"},(0,i.kt)("inlineCode",{parentName:"a"},"redux-saga")),"\uff0c\u548c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/redux-observable/redux-observable"},(0,i.kt)("inlineCode",{parentName:"a"},"redux-observable")),"\u3002 \u4ee5\u4e0b\u662f\u4e0d\u540c\u7684\u5de5\u5177\uff0c\u5177\u6709\u4e0d\u540c\u7684\u4f18\u52bf\u3001\u52a3\u52bf\u548c\u4e00\u4e9b\u7528\u4f8b\u3002"),(0,i.kt)("p",null,"\u4f5c\u4e3a\u4e00\u822c\u7ecf\u9a8c\u6cd5\u5219\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Thunks \u6700\u9002\u5408\u590d\u6742\u7684\u540c\u6b65\u903b\u8f91\uff08\u5c24\u5176\u662f\u9700\u8981\u8bbf\u95ee\u6574\u4e2a Redux store state \u7684\u4ee3\u7801\uff09\u548c\u7b80\u5355\u7684\u5f02\u6b65\u903b\u8f91\uff08\u5982\u57fa\u672c\u7684 AJAX \u8c03\u7528\uff09\u3002\u901a\u8fc7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"async/await"),"\uff0c\u5c06 thunk \u7528\u4e8e\u4e00\u4e9b\u66f4\u590d\u6742\u7684\u57fa\u4e8e Promise \u7684\u903b\u8f91\u4e5f\u662f\u5408\u7406\u7684\u3002"),(0,i.kt)("li",{parentName:"ul"},"Sagas \u6700\u9002\u5408\u590d\u6742\u7684\u5f02\u6b65\u903b\u8f91\u548c\u89e3\u8026\u7684 \u201cbackground thread\u201d \u7c7b\u578b\u7684\u884c\u4e3a\uff0c\u7279\u522b\u662f\u5982\u679c\u4f60\u9700\u8981\u76d1\u542c\u5df2 dispatch \u8fc7\u7684 action\uff08\u8fd9\u662f thunk \u65e0\u6cd5\u5b8c\u6210\u7684\u4e8b\u60c5\uff09\u3002\u9700\u8981\u719f\u6089 ES6 \u751f\u6210\u5668\u51fd\u6570\u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"redux-saga")," \u7684 \u201ceffects\u201d \u8fd0\u7b97\u7b26\u3002"),(0,i.kt)("li",{parentName:"ul"},"Observables \u89e3\u51b3\u4e86\u4e0e sagas \u76f8\u540c\u7684\u95ee\u9898\uff0c\u4f46\u4f9d\u8d56 RxJS \u6765\u5b9e\u73b0\u5f02\u6b65\u884c\u4e3a\u3002\u9700\u8981\u719f\u6089 RxJS API\u3002")),(0,i.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5927\u591a\u6570 Redux \u7528\u6237\u5e94\u8be5\u4ece thunk \u5f00\u59cb\uff0c\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u786e\u5b9e\u9700\u8981\u5904\u7406\u66f4\u590d\u6742\u7684\u5f02\u6b65\u903b\u8f91\uff0c\u518d\u6dfb\u52a0\u4e00\u4e2a\u989d\u5916\u7684\u526f\u4f5c\u7528\u5e93\uff0c\u5982 sagas \u6216 observables\u3002"),(0,i.kt)("p",null,"\u7531\u4e8e sagas \u548c observables \u5177\u6709\u76f8\u540c\u7684\u7528\u4f8b\uff0c\u56e0\u6b64\u5e94\u7528\u7a0b\u5e8f\u901a\u5e38\u4f1a\u4f7f\u7528\u5176\u4e2d\u4e00\u4e2a\uff0c\u4f46\u4e0d\u4f1a\u540c\u65f6\u4f7f\u7528\u4e24\u8005\u3002\u4f46\u662f\uff0c\u8bf7\u6ce8\u610f",(0,i.kt)("strong",{parentName:"p"},"\u540c\u65f6\u4f7f\u7528 thunk \u548c sagas \u6216 observables \u7edd\u5bf9\u6ca1\u95ee\u9898"),"\uff0c\u56e0\u4e3a\u5b83\u4eec\u89e3\u51b3\u4e86\u4e0d\u540c\u7684\u95ee\u9898\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6587\u7ae0")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://decembersoft.com/posts/what-is-the-right-way-to-do-asynchronous-operations-in-redux/"},"Decembersoft: Decembersoft\uff1a\u5728 Redux \u4e2d\u8fdb\u884c\u5f02\u6b65\u64cd\u4f5c\u7684\u6b63\u786e\u65b9\u6cd5\u662f\u4ec0\u4e48\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://decembersoft.com/posts/redux-thunk-vs-redux-saga/"},"Decembersoft: Redux-Thunk vs Redux-Saga")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@shoshanarosenfield/redux-thunk-vs-redux-saga-93fe82878b2d"},"Redux-Thunk vs Redux-Saga: an overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hackmd.io/s/H1xLHUQ8e#side-by-side-comparison"},"Redux-Saga V.S. Redux-Observable"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8ba8\u8bba")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/8vglo0/react_developer_map_by_adamgolab/e1nr597/"},"Reddit: \u8ba8\u8bba\u4e00\u8d77\u4f7f\u7528 thunk \u548c sagas\uff0c\u4ee5\u53ca sagas \u7684\u4f18\u7f3a\u70b9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34930735/pros-cons-of-using-redux-saga-with-es6-generators-vs-redux-thunk-with-es2017-asy"},"Stack Overflow: \u5c06 redux-saga \u548c ES6 \u751f\u6210\u5668\u7ed3\u5408\u4f7f\u7528\u4e0e redux-thunk \u548c ES2017 async/await \u7ed3\u5408\u4f7f\u7528\u7684\u4f18\u7f3a\u70b9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/40021344/why-use-redux-observable-over-redux-saga/40027778#40027778"},"Stack Overflow: \u4e3a\u4ec0\u4e48\u4f7f\u7528 Redux-Observable \u800c\u4e0d\u662f Redux-Saga\uff1f"))),(0,i.kt)("h3",{id:"\u6211\u5e94\u8be5\u4ece\u4e00\u4e2a-action-creator-\u91cc\u8fde\u7eed-dispatch-\u591a\u4e2a-action-\u5417"},"\u6211\u5e94\u8be5\u4ece\u4e00\u4e2a action creator \u91cc\u8fde\u7eed dispatch \u591a\u4e2a action \u5417\uff1f"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5e94\u8be5\u5982\u4f55\u6784\u5efa\u884c\u4e3a\u6ca1\u6709\u7279\u5b9a\u7684\u89c4\u5219\u3002\u4f7f\u7528\u50cf Redux Thunk \u8fd9\u6837\u7684\u5f02\u6b65\u4e2d\u95f4\u4ef6\u5f53\u7136\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u6837\u7684\u573a\u666f\uff0c\u4f8b\u5982\u8fde\u7eed dispatch \u591a\u4e2a\u4e0d\u540c\u4f46\u76f8\u5173\u7684 action\uff0cdispatch action \u6765\u8868\u793a AJAX \u8bf7\u6c42\u7684\u8fdb\u5c55\uff0c\u6839\u636e state \u6709\u6761\u4ef6\u5730 dispatch action\uff0c\u751a\u81f3 dispatch \u4e00\u4e2a action \u540e\u5e76\u7acb\u5373\u68c0\u67e5\u66f4\u65b0\u7684 state\u3002"),(0,i.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u8be2\u95ee\u8fd9\u4e9b action \u662f\u5426\u76f8\u5173\u4f46\u72ec\u7acb\uff0c\u6216\u8005\u5b9e\u9645\u4e0a\u5e94\u8be5\u8868\u793a\u4e3a\u4e00\u4e2a action\u3002\u505a\u5bf9\u4f60\u81ea\u5df1\u7684\u60c5\u51b5\u6709\u610f\u4e49\u7684\u4e8b\u60c5\uff0c\u540c\u65f6\u5c1d\u8bd5\u5e73\u8861 reducer \u7684\u53ef\u8bfb\u6027\u548c\u64cd\u4f5c\u65e5\u5fd7\u7684\u53ef\u8bfb\u6027\u3002\u4f8b\u5982\uff0c\u5305\u542b\u5168\u65b0 state \u6811\u7684 action \u5c06\u4f7f\u4f60\u7684 reducer \u6210\u4e3a \u201cone-line\u201d\uff0c\u4f46\u7f3a\u70b9\u662f\u73b0\u5728\u4f60\u6ca1\u6709 ",(0,i.kt)("em",{parentName:"p"},"\u4e3a\u4ec0\u4e48")," \u53d1\u751f\u66f4\u6539\u7684\u5386\u53f2\u8bb0\u5f55\uff0c\u56e0\u6b64\u8c03\u8bd5\u53d8\u5f97\u975e\u5e38\u56f0\u96be\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u5982\u679c\u4f60\u5728\u5faa\u73af\u4e2d\u53d1\u51fa action \u4ee5\u4fdd\u6301\u5b83\u4eec\u7684\u7c92\u5ea6\uff0c\u5219\u8868\u660e\u4f60\u53ef\u80fd\u5e0c\u671b\u5f15\u5165\u4ee5\u4e0d\u540c\u65b9\u5f0f\u5904\u7406\u7684\u65b0  action \u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u5c3d\u91cf\u907f\u514d\u5728\u4f60\u5173\u5fc3\u6027\u80fd\u7684\u5730\u65b9\u8fde\u7eed\u591a\u6b21\u540c\u6b65 dispatch\u3002\u6709\u8bb8\u591a\u63d2\u4ef6\u548c\u65b9\u6cd5\u4e5f\u53ef\u4ee5\u6279\u91cf dispatch\u3002"),(0,i.kt)("h4",{id:"\u66f4\u591a\u4fe1\u606f-3"},"\u66f4\u591a\u4fe1\u606f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6587\u6863")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/performance#performance-update-events"},"FAQ: Performance - Reducing Update Events"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Articles")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2017/01/idiomatic-redux-thoughts-on-thunks-sagas-abstraction-and-reusability/#multiple-dispatching"},"Idiomatic Redux: Thoughts on Thunks, Sagas, Abstraction, and Reusability"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discussions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/597"},"#597: \u4ece\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f dispatch \u591a\u4e2a action \u662f\u5426\u6709\u6548\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/959"},"#959: \u4e00\u6b21 dispatch \u591a\u4e2a action\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/33637740/should-i-use-one-or-several-action-types-to-represent-this-async-action/33816695"},"Stack Overflow: \u6211\u5e94\u8be5\u4f7f\u7528\u4e00\u79cd\u8fd8\u662f\u51e0\u79cd action \u7c7b\u578b\u6765\u8868\u793a\u8fd9\u4e2a\u5f02\u6b65 action\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35406707/do-events-and-actions-have-a-11-relationship-in-redux/35410524"},"Stack Overflow: Redux \u4e2d\u7684\u4e8b\u4ef6\u548c action \u662f 1:1 \u7684\u5173\u7cfb\u5417\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/33220776/should-actions-like-showing-hiding-loading-screens-be-handled-by-reducers-to-rel/33226443#33226443"},"Stack Overflow: action \u5e94\u8be5\u7531 reducer \u5904\u7406\u4e3a\u76f8\u5173 action \u8fd8\u662f\u7531 action creator \u81ea\u5df1\u751f\u6210\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/dan_abramov/status/800310164792414208"},"Twitter: \u201c\u5173\u4e8e Redux Thunk \u95ee\u9898\u7684\u597d\u5e16\u5b50...\u201d"))))}d.isMDXComponent=!0}}]);