"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4946],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6225:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"faq",title:"FAQ \u76ee\u5f55",description:"FAQ \u76ee\u5f55: Redux \u5e38\u89c1\u95ee\u7b54"},s="Redux \u5e38\u89c1\u95ee\u7b54",u={unversionedId:"faq",id:"faq",title:"FAQ \u76ee\u5f55",description:"FAQ \u76ee\u5f55: Redux \u5e38\u89c1\u95ee\u7b54",source:"@site/../docs/FAQ.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,tags:[],version:"current",frontMatter:{id:"faq",title:"FAQ \u76ee\u5f55",description:"FAQ \u76ee\u5f55: Redux \u5e38\u89c1\u95ee\u7b54"},sidebar:"docs",previous:{title:"Middleware \u4e2d\u95f4\u4ef6",permalink:"/understanding/history-and-design/middleware"},next:{title:"General",permalink:"/faq/general"}},p={},c=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:2}],m={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redux-\u5e38\u89c1\u95ee\u7b54"},"Redux \u5e38\u89c1\u95ee\u7b54"),(0,i.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5e38\u89c1\u95ee\u9898"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/general#when-should-i-learn-redux"},"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u5b66\u4e60 Redux\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/general#when-should-i-use-redux"},"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u4f7f\u7528 Redux\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/general#can-redux-only-be-used-with-react"},"Redux \u53ea\u80fd\u4e0e React \u4e00\u8d77\u4f7f\u7528\u5417\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/general#do-i-need-to-have-a-particular-build-tool-to-use-redux"},"\u662f\u5426\u9700\u8981\u7279\u5b9a\u7684\u6784\u5efa\u5de5\u5177\u624d\u80fd\u4f7f\u7528 Redux\uff1f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reducers"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/reducers#how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers"},"\u5982\u4f55\u5728\u4e24\u4e2a reducers \u4e4b\u95f4\u5171\u4eab state\uff1f\u5fc5\u987b\u4f7f\u7528 combineReducers \u5417\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/reducers#do-i-have-to-use-the-switch-statement-to-handle-actions"},"\u662f\u5426\u5fc5\u987b\u4f7f\u7528 switch \u8bed\u53e5\u6765\u5904\u7406 actions \u5417\uff1f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u7ec4\u7ec7 State"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/organizing-state#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate"},"\u5fc5\u987b\u5c06\u6240\u6709\u7684 state \u90fd\u653e\u5165 Redux \u5417\uff1f\u5e94\u8be5\u4f7f\u7528 React \u7684 setState() \u5417\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state"},"\u53ef\u4ee5\u5c06\u51fd\u6570\u3001promises \u6216\u5176\u4ed6\u4e0d\u53ef\u5e8f\u5217\u5316\u7684\u9879\u653e\u5165 store state \u5417\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/organizing-state#how-do-i-organize-nested-or-duplicate-data-in-my-state"},"\u5982\u4f55\u7ec4\u7ec7 state \u4e2d\u7684\u5d4c\u5957\u6216\u91cd\u590d\u6570\u636e\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/organizing-state#should-i-put-form-state-or-other-ui-state-in-my-store"},"\u5e94\u8be5\u5c06\u8868\u5355 state \u6216\u5176\u4ed6 UI state \u653e\u5165 store \u5417\uff1f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Store \u8bbe\u7f6e"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/store-setup#can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself"},"\u53ef\u4ee5\u6216\u8005\u5e94\u8be5\u521b\u5efa\u591a\u4e2a stores \u5417\uff1f\u53ef\u4ee5\u76f4\u63a5\u5bfc\u5165 stores\uff0c\u5e76\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u5b83\u5417\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/store-setup#is-it-ok-to-have-more-than-one-middleware-chain-in-my-store-enhancer-what-is-the-difference-between-next-and-dispatch-in-a-middleware-function"},"Store enhancer \u4e2d\u53ef\u4ee5\u6709\u591a\u4e2a middleware \u94fe\u5417\uff1fMiddleware \u51fd\u6570\u4e2d\u7684 next \u548c dispatch \u6709\u4ec0\u4e48\u533a\u522b\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/store-setup#how-do-i-subscribe-to-only-a-portion-of-the-state-can-i-get-the-dispatched-action-as-part-of-the-subscription"},"\u5982\u4f55\u80fd\u591f\u53ea\u8ba2\u9605 state \u7684\u4e00\u90e8\u5206\uff1f\u53ef\u4ee5\u5c06 dispatch action \u4f5c\u4e3a\u8ba2\u9605\u7684\u4e00\u90e8\u5206\u5417\uff1f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Actions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants"},"\u4e3a\u4ec0\u4e48 type \u5e94\u8be5\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u6216\u8005\u81f3\u5c11\u662f\u53ef\u5e8f\u5217\u5316\u7684\uff1f\u4e3a\u4ec0\u4e48 action types \u5e94\u8be5\u662f\u5e38\u91cf\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/actions#is-there-always-a-one-to-one-mapping-between-reducers-and-actions"},"Reducers \u548c actions \u4e4b\u95f4\u603b\u662f\u5b58\u5728\u4e00\u5bf9\u4e00\u7684\u6620\u5c04\u5173\u7cfb\u5417\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/actions#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior"},"\u5982\u4f55\u8868\u793a AJAX \u8c03\u7528\u7b49\u201c\u526f\u4f5c\u7528\u201d\uff1f\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981 action creator\u3001thunk \u548c middleware \u8fd9\u4e9b\u6765\u5904\u7406\u5f02\u6b65\u884c\u4e3a\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/actions#what-async-middleware-should-i-use-how-do-you-decide-between-thunks-sagas-observables-or-something-else"},"\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u5f02\u6b65 middleware\uff1f\u5982\u4f55\u5728 thunk\u3001sagas\u3001observables \u6216\u5176\u4ed6\u4e2d\u505a\u51fa\u9009\u62e9\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/actions#should-i-dispatch-multiple-actions-in-a-row-from-one-action-creator"},"\u5e94\u8be5\u4ece\u4e00\u4e2a action creator \u8fde\u7eed dispatch \u591a\u4e2a actions \u5417\uff1f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4e0d\u53ef\u53d8\u6570\u636e"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/immutable-data#what-are-the-benefits-of-immutability"},"\u4e0d\u53ef\u53d8\u6570\u636e\u6709\u4ec0\u4e48\u597d\u5904\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/immutable-data#why-is-immutability-required-by-redux"},"\u4e3a\u4ec0\u4e48 Redux \u9700\u8981\u4e0d\u53ef\u53d8\u6570\u636e\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/immutable-data#what-approaches-are-there-for-handling-data-immutability-do-i-have-to-use-immer"},"\u6709\u54ea\u4e9b\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u6570\u636e\u4e0d\u53ef\u53d8\uff1f\u5fc5\u987b\u4f7f\u7528 Immer \u5417\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/immutable-data#what-are-the-issues-with-using-plain-javascript-for-immutable-operations"},"\u4f7f\u7528 JavaScript \u8fdb\u884c\u4e0d\u53ef\u53d8\u64cd\u4f5c\u4f1a\u6709\u4ec0\u4e48\u95ee\u9898\uff1f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4ee3\u7801\u7ed3\u6784"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/code-structure#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go"},"\u6587\u4ef6\u7ed3\u6784\u5e94\u8be5\u662f\u4ec0\u4e48\u6837\u7684\uff1f\u5e94\u8be5\u5982\u4f55\u5bf9 action creators \u548c reducers \u8fdb\u884c\u5206\u7ec4\uff1fSelectors \u5e94\u8be5\u653e\u5728\u54ea\u91cc\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/code-structure#how-should-i-split-my-logic-between-reducers-and-action-creators-where-should-my-business-logic-go"},"\u5e94\u8be5\u5982\u4f55\u5728 reducers \u548c action creators \u4e4b\u95f4\u5212\u5206\u903b\u8f91\uff1f\u201c\u4e1a\u52a1\u903b\u8f91\u201d\u5e94\u8be5\u653e\u5728\u54ea\u91cc\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/code-structure#why-should-i-use-action-creators"},"\u4e3a\u4ec0\u4e48\u5e94\u8be5\u4f7f\u7528 action creators\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/code-structure#where-should-websockets-and-other-persistent-connections-live"},"Websockets \u4ee5\u53ca\u5176\u4ed6\u6301\u4e45\u8fde\u63a5\u5e94\u8be5\u653e\u5728\u54ea\u91cc\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/code-structure#how-can-i-use-the-redux-store-in-non-component-files"},"\u5982\u4f55\u5728\u975e\u7ec4\u4ef6\u6587\u4ef6\u4e2d\u4f7f\u7528 Redux store\uff1f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6027\u80fd"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/performance#how-well-does-redux-scale-in-terms-of-performance-and-architecture"},"Redux \u5728\u6027\u80fd\u548c\u67b6\u6784\u65b9\u9762\u7684\u201c\u6269\u5c55\u6027\u201d\u5982\u4f55\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/performance#wont-calling-all-my-reducers-for-each-action-be-slow"},"\u4e3a\u6bcf\u4e2a action \u8c03\u7528\u201c\u6240\u6709\u7684 reducers\u201d\u4f1a\u4e0d\u4f1a\u5f88\u6162\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/performance#do-i-have-to-deep-clone-my-state-in-a-reducer-isnt-copying-my-state-going-to-be-slow"},"\u5fc5\u987b\u5728 reducer \u4e2d\u6df1\u62f7\u8d1d state \u5417\uff1f\u62f7\u8d1d state \u4e0d\u4f1a\u5f88\u6162\u5417\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/performance#how-can-i-reduce-the-number-of-store-update-events"},"\u5982\u4f55\u51cf\u5c11 store \u66f4\u65b0\u4e8b\u4ef6\u7684\u6570\u91cf\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/performance#will-having-one-state-tree-cause-memory-problems-will-dispatching-many-actions-take-up-memory"},"\u201c\u5355\u72b6\u6001\u6811\u201d\u4f1a\u5bfc\u81f4\u5185\u5b58\u95ee\u9898\u5417\uff1fDispatch \u5f88\u591a actions \u4f1a\u5360\u7528\u5185\u5b58\u5417\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/performance#will-caching-remote-data-cause-memory-problems"},"\u7f13\u5b58\u8fdc\u7aef\u6570\u636e\u4f1a\u5bfc\u81f4\u5185\u5b58\u95ee\u9898\u5417\uff1f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u8bbe\u8ba1\u51b3\u7b56"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/design-decisions#why-doesnt-redux-pass-the-state-and-action-to-subscribers"},"\u4e3a\u4ec0\u4e48 Redux \u4e0d\u5c06 state \u548c action \u4f20\u9012\u7ed9\u8ba2\u9605\u8005\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/design-decisions#why-doesnt-redux-support-using-classes-for-actions-and-reducers"},"\u4e3a\u4ec0\u4e48 Redux \u4e0d\u652f\u6301\u4f7f\u7528\u7c7b class \u505a action \u548c reducer \uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/design-decisions#why-does-the-middleware-signature-use-currying"},"\u4e3a\u4ec0\u4e48 middleware \u7b7e\u540d\u4f7f\u7528\u67ef\u91cc\u5316\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/design-decisions#why-does-applymiddleware-use-a-closure-for-dispatch"},"\u4e3a\u4ec0\u4e48 applyMiddleware \u4f7f\u7528\u95ed\u5305\u8fdb\u884c dispatch\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/design-decisions#why-doesnt-combinereducers-include-a-third-argument-with-the-entire-state-when-it-calls-each-reducer"},"\u4e3a\u4ec0\u4e48 ",(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers")," \u5728\u8c03\u7528\u6bcf\u4e2a reducer \u65f6\u4e0d\u63a5\u6536\u6574\u4e2a state \u4f5c\u4e3a\u7b2c\u4e09\u4e2a\u53c2\u6570\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/design-decisions#why-doesnt-mapdispatchtoprops-allow-use-of-return-values-from-getstate-or-mapstatetoprops"},"\u4e3a\u4ec0\u4e48 mapDispatchToProps \u4e0d\u5141\u8bb8\u4f7f\u7528\u6765\u81ea ",(0,i.kt)("inlineCode",{parentName:"a"},"getState()")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"a"},"mapStateToProps()")," \u7684\u8fd4\u56de\u503c\uff1f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"React Redux"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/react-redux#why-should-i-use-react-redux"},"\u4e3a\u4ec0\u4e48\u5e94\u8be5\u4f7f\u7528 React-Redux\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/react-redux#why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running"},"\u4e3a\u4ec0\u4e48\u6211\u7684\u7ec4\u4ef6\u6ca1\u6709\u91cd\u65b0\u6e32\u67d3\uff0c\u6216\u8005 mapStateToProps \u6ca1\u6709\u8fd0\u884c\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/react-redux#why-is-my-component-re-rendering-too-often"},"\u4e3a\u4ec0\u4e48\u6211\u7684\u7ec4\u4ef6\u7ecf\u5e38\u91cd\u65b0\u6e32\u67d3\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/react-redux#how-can-i-speed-up-my-mapstatetoprops"},"\u5982\u4f55\u52a0\u901f mapStateToProps\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/react-redux#why-dont-i-have-this-props-dispatch-available-in-my-connected-component"},"\u4e3a\u4ec0\u4e48 connect \u8fc7\u7684\u7ec4\u4ef6\u4e2d\u6ca1\u6709 this.props.dispatch \u53ef\u7528\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/react-redux#should-i-only-connect-my-top-component-or-can-i-connect-multiple-components-in-my-tree"},"\u5e94\u8be5\u53ea connect \u9876\u5c42\u7ec4\u4ef6\uff0c\u8fd8\u662f\u53ef\u4ee5 connect \u6811\u4e2d\u7684\u591a\u4e2a\u7ec4\u4ef6\uff1f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5176\u4ed6"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/miscellaneous#are-there-any-larger-real-redux-projects"},"\u6709\u6ca1\u6709\u66f4\u5927\u7684\u3001\u201c\u771f\u6b63\u751f\u4ea7\u73af\u5883\u7684\u201d Redux \u9879\u76ee\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/faq/miscellaneous#how-can-i-implement-authentication-in-redux"},"\u5982\u4f55\u5728 Redux \u4e2d\u5b9e\u73b0\u8eab\u4efd\u9a8c\u8bc1\uff1f"))))))}d.isMDXComponent=!0}}]);