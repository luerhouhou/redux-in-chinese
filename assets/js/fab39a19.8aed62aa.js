"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3967],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5778:function(e,t,a){a.d(t,{s:function(){return r}});var n=a(7294),r=function(e){var t=e.children,a=e.title,r=void 0===a?"Detailed Explanation":a;return n.createElement("details",{className:"detailed-explanation"},n.createElement("summary",null,n.createElement("h4",null,r)),t)}},9347:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(5778),s=["components"],l={id:"code-structure",title:"Code Structure",hide_title:!1},c="Redux FAQ: Code Structure",u={unversionedId:"faq/code-structure",id:"faq/code-structure",title:"Code Structure",description:"Table of Contents",source:"@site/../docs/faq/CodeStructure.md",sourceDirName:"faq",slug:"/faq/code-structure",permalink:"/faq/code-structure",draft:!1,tags:[],version:"current",frontMatter:{id:"code-structure",title:"Code Structure",hide_title:!1},sidebar:"docs",previous:{title:"Immutable Data",permalink:"/faq/immutable-data"},next:{title:"Performance",permalink:"/faq/performance"}},p={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"What should my file structure look like? How should I group my action creators and reducers in my project? Where should my selectors go?",id:"what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go",level:2},{value:"Further information",id:"further-information",level:4},{value:"How should I split my logic between reducers and action creators? Where should my \u201cbusiness logic\u201d go?",id:"how-should-i-split-my-logic-between-reducers-and-action-creators-where-should-my-business-logic-go",level:2},{value:"Further information",id:"further-information-1",level:4},{value:"Why should I use action creators?",id:"why-should-i-use-action-creators",level:2},{value:"Further information",id:"further-information-2",level:4},{value:"Where should websockets and other persistent connections live?",id:"where-should-websockets-and-other-persistent-connections-live",level:2},{value:"How can I use the Redux store in non-component files?",id:"how-can-i-use-the-redux-store-in-non-component-files",level:2}],m={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redux-faq-code-structure"},"Redux FAQ: Code Structure"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go"},"What should my file structure look like? How should I group my action creators and reducers in my project? Where should my selectors go?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-should-i-split-my-logic-between-reducers-and-action-creators-where-should-my-business-logic-go"},"How should I split my logic between reducers and action creators? Where should my \u201cbusiness logic\u201d go?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#why-should-i-use-action-creators"},"Why should I use action creators?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#where-should-websockets-and-other-persistent-connections-live"},"Where should websockets and other persistent connections live?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-can-i-use-the-redux-store-in-non-component-files"},"How can I use the Redux store in non-component files?"))),(0,o.kt)("h2",{id:"what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go"},"What should my file structure look like? How should I group my action creators and reducers in my project? Where should my selectors go?"),(0,o.kt)("p",null,"Since Redux is just a data store library, it has no direct opinion on how your project should be structured. However, there are a few common patterns that most Redux developers tend to use:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rails-style: separate folders for \u201cactions\u201d, \u201cconstants\u201d, \u201creducers\u201d, \u201ccontainers\u201d, and \u201ccomponents\u201d"),(0,o.kt)("li",{parentName:"ul"},'"Feature folders" / "Domain"-style : separate folders per feature or domain, possibly with sub-folders per file type'),(0,o.kt)("li",{parentName:"ul"},"\u201cDucks/Slices\u201d: similar to domain style, but explicitly tying together actions and reducers, often by defining them in the same file")),(0,o.kt)("p",null,"It's generally suggested that selectors are defined alongside reducers and exported, and then reused elsewhere (such as in ",(0,o.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," functions, in async action creators, or sagas) to colocate all the code that knows about the actual shape of the state tree in the reducer files."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},'We specifically recommend organizing your logic into "feature folders", with all the Redux logic for a given feature in a single "slice/ducks" file"'),"."),(0,o.kt)("p",{parentName:"div"},"See this section for an example:"),(0,o.kt)(i.s,{title:"Detailed Explanation: Example Folder Structure",mdxType:"DetailedExplanation"},"An example folder structure might look something like:",(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/src"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"index.tsx"),": Entry point file that renders the React component tree"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/app"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"store.ts"),": store setup"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rootReducer.ts"),": root reducer (optional)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"App.tsx"),": root React component"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/common"),": hooks, generic components, utils, etc"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/features"),': contains all "feature folders"',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/todos"),": a single feature folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"todosSlice.ts"),": Redux reducer logic and associated actions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Todos.tsx"),": a React component")))))))),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"/app")," contains app-wide setup and layout that depends on all the other folders."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"/common")," contains truly generic and reusable utilities and components."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"/features")," has folders that contain all functionality related to a specific feature. In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"todosSlice.ts"),' is a "duck"-style file that contains a call to RTK\'s ',(0,o.kt)("inlineCode",{parentName:"p"},"createSlice()")," function, and exports the slice reducer and action creators.")))),(0,o.kt)("p",null,"While it ultimately doesn't matter how you lay out your code on disk, it's important to remember that actions and reducers should not be considered in isolation. It's entirely possible (and encouraged) for a reducer defined in one folder to respond to an action defined in another folder."),(0,o.kt)("h4",{id:"further-information"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/style-guide/##structure-files-as-feature-folders-with-single-file-logic"},"Style Guide: Structure Files as Feature Folders with Single-File Logic")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tutorials/essentials/part-2-app-structure"},"Redux Essentials tutorial: App Structure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/faq/actions#actions-reducer-mappings"},'FAQ: Actions - "1:1 mapping between reducers and actions?"'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/"},"How to Scale React Applications")," (accompanying talk: ",(0,o.kt)("a",{parentName:"li",href:"https://vimeo.com/168648012"},"Scaling React Applications"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e"},"Redux Best Practices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://jaysoo.ca/2016/02/28/organizing-redux-application/"},"Rules For Structuring (Redux) Applications ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marmelab.com/blog/2015/12/17/react-directory-structure.html"},"A Better File Structure for React/Redux Applications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://engineering.kapost.com/2016/01/organizing-large-react-applications/"},"Organizing Large React Applications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@msandin/strategies-for-organizing-code-2c9d690b6f33"},"Four Strategies for Organizing Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://randycoulman.com/blog/2016/09/13/encapsulating-the-redux-state-tree/"},"Encapsulating the Redux State Tree")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://randycoulman.com/blog/2016/09/20/redux-reducer-selector-asymmetry/"},"Redux Reducer/Selector Asymmetry")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://randycoulman.com/blog/2016/09/27/modular-reducers-and-selectors/"},"Modular Reducers and Selectors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@mmazzarolo/my-journey-toward-a-maintainable-project-structure-for-react-redux-b05dfd999b5"},"My journey towards a maintainable project structure for React/Redux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/react-redux-architecture.md#project-file-structure"},"React/Redux Links: Architecture - Project File Structure"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/839"},"#839: Emphasize defining selectors alongside reducers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/943"},"#943: Reducer querying")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mxstbr/react-boilerplate/issues/27"},"React Boilerplate #27: Application Structure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/32634320/how-to-structure-redux-components-containers/32921576"},"Stack Overflow: How to structure Redux components/containers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/dan_abramov/status/783428282666614784"},"Twitter: There is no ultimate file structure for Redux"))),(0,o.kt)("h2",{id:"how-should-i-split-my-logic-between-reducers-and-action-creators-where-should-my-business-logic-go"},"How should I split my logic between reducers and action creators? Where should my \u201cbusiness logic\u201d go?"),(0,o.kt)("p",null,"There's no single clear answer to exactly what pieces of logic should go in a reducer or an action creator. Some developers prefer to have \u201cfat\u201d action creators, with \u201cthin\u201d reducers that simply take the data in an action and blindly merge it into the corresponding state. Others try to emphasize keeping actions as small as possible, and minimize the usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"getState()"),' in an action creator. (For purposes of this question, other async approaches such as sagas and observables fall in the "action creator" category.)'),(0,o.kt)("p",null,"There are several potential benefits from putting more logic into your reducers. It's likely that the action types would be more semantic and more meaningful (such as ",(0,o.kt)("inlineCode",{parentName:"p"},'"USER_UPDATED"')," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},'"SET_STATE"'),"). In addition, having more logic in reducers means that more functionality will be affected by time travel debugging."),(0,o.kt)("p",null,"This comment sums up the dichotomy nicely:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Now, the problem is what to put in the action creator and what in the reducer, the choice between fat and thin action objects. If you put all the logic in the action creator, you end up with fat action objects that basically declare the updates to the state. Reducers become pure, dumb, add-this, remove that, update these functions. They will be easy to compose. But not much of your business logic will be there.\nIf you put more logic in the reducer, you end up with nice, thin action objects, most of your data logic in one place, but your reducers are harder to compose since you might need info from other branches. You end up with large reducers or reducers that take additional arguments from higher up in the state.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"We recommend putting as much logic as possible into reducers"),". There are times when you may need some logic to help prepare what goes into the action, but reducers should do most of the work."))),(0,o.kt)("h4",{id:"further-information-1"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/style-guide/#put-as-much-logic-as-possible-in-reducers"},"Style Guide: Put as Much Logic as Possible in Reducers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/style-guide/#model-actions-as-events-not-setters"},'Style Guide: Model Actions as "Events", not "Setters"'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@jeffbski/where-do-i-put-my-business-logic-in-a-react-redux-application-9253ef91ce1"},"Where do I put my business logic in a React/Redux application?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/"},"How to Scale React Applications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/#thick-and-thin-reducers"},"The Tao of Redux, Part 2 - Practice and Philosophy. Thick and thin reducers."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/384#issuecomment-127393209"},"How putting too much logic in action creators could affect debugging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/384#issuecomment-127393209"},"#384: The more that's in a reducer, the more you can replay via time travel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1165"},"#1165: Where to put business logic / validation?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1171"},"#1171: Recommendations for best practices regarding action-creators, reducers, and selectors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator/35674575"},"Stack Overflow: Accessing Redux state in an action creator?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/2796#issue-289298280"},'#2796: Gaining clarity on "business logic"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/FwardPhoenix/status/952971237004926977"},"Twitter: Moving away from unclear terminology..."))),(0,o.kt)("h2",{id:"why-should-i-use-action-creators"},"Why should I use action creators?"),(0,o.kt)("p",null,"Redux does not require action creators. You are free to create actions in any way that is best for you, including simply passing an object literal to ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),". Action creators emerged from the ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#actions-and-actioncreators"},"Flux architecture")," and have been adopted by the Redux community because they offer several benefits."),(0,o.kt)("p",null,"Action creators are more maintainable. Updates to an action can be made in one place and applied everywhere. All instances of an action are guaranteed to have the same shape and the same default values."),(0,o.kt)("p",null,"Action creators are testable. The correctness of an inline action must be verified manually. Like any function, tests for an action creator can be written once and run automatically."),(0,o.kt)("p",null,"Action creators are easier to document. The action creator's parameters enumerate the action's dependencies. And centralization of the action definition provides a convenient place for documentation comments. When actions are written inline, this information is harder to capture and communicate."),(0,o.kt)("p",null,"Action creators are a more powerful abstraction. Creating an action often involves transforming data or making AJAX requests. Action creators provide a uniform interface to this varied logic. This abstraction frees a component to dispatch an action without being complicated by the details of that action's creation."),(0,o.kt)("h4",{id:"further-information-2"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/"},"Idiomatic Redux: Why use action creators?"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/54k8js/redbox_redux_action_creation_made_simple/d8493z1/?context=4"},"Reddit: Redbox - Redux action creation made simple"))),(0,o.kt)("h2",{id:"where-should-websockets-and-other-persistent-connections-live"},"Where should websockets and other persistent connections live?"),(0,o.kt)("p",null,"Middleware are the right place for persistent connections like websockets in a Redux app, for several reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Middleware exist for the lifetime of the application"),(0,o.kt)("li",{parentName:"ul"},"Like with the store itself, you probably only need a single instance of a given connection that the whole app can use"),(0,o.kt)("li",{parentName:"ul"},"Middleware can see all dispatched actions and dispatch actions themselves. This means a middleware can take dispatched actions and turn those into messages sent over the websocket, and dispatch new actions when a message is received over the websocket."),(0,o.kt)("li",{parentName:"ul"},"A websocket connection instance isn't serializable, so ",(0,o.kt)("a",{parentName:"li",href:"/faq/organizing-state#organizing-state-non-serializable"},"it doesn't belong in the store state itself"))),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/markerikson/3df1cf5abbac57820a20059287b4be58"},"this example that shows how a socket middleware might dispatch and respond to Redux actions"),"."),(0,o.kt)("p",null,"There's many existing middleware for websockets and other similar connections - see the link below."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Libraries")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/middleware-sockets-adapters.md"},"Middleware: Socket and Adapters"))),(0,o.kt)("h2",{id:"how-can-i-use-the-redux-store-in-non-component-files"},"How can I use the Redux store in non-component files?"),(0,o.kt)("p",null,"There should only be a single Redux store per application. This makes it effectively a singleton in terms of the app architecture. When used with React, the store is injected into the components at runtime by rendering a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Provider store={store}>")," around the root ",(0,o.kt)("inlineCode",{parentName:"p"},"<App>")," component, so only the application setup logic needs to import the store directly."),(0,o.kt)("p",null,"However, there may be times when other parts of the codebase need to interact with the store as well."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You should avoid importing the store directly into other codebase files"),". While it may work in some cases, that often ends up causing circular import dependency errors."),(0,o.kt)("p",null,"Some possible solutions are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Write your store-dependent logic as a thunk, and then dispatch that thunk from a component"),(0,o.kt)("li",{parentName:"ul"},"Pass along references to ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch")," from components as arguments the relevant functions"),(0,o.kt)("li",{parentName:"ul"},"Write the logic as middleware and add them to the store at setup time"),(0,o.kt)("li",{parentName:"ul"},"Inject the store instance into the relevant files as the app is being created.")),(0,o.kt)("p",null,"One common use case is reading API authorization information such as a token from the Redux state, inside of an Axios interceptor. The interceptor file needs to reference ",(0,o.kt)("inlineCode",{parentName:"p"},"store.getState()"),", but also needs to be imported into API layer files, and this leads to circular imports."),(0,o.kt)("p",null,"You can expose an ",(0,o.kt)("inlineCode",{parentName:"p"},"injectStore")," function from the interceptor file instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="common/api.js"',title:'"common/api.js"'},"let store\n\nexport const injectStore(_store) {\n  store = _store\n}\n\naxiosInstance.interceptors.request.use(\n  config => {\n    config.headers.authorization = store.getState().auth.token\n    return config;\n  }\n)\n")),(0,o.kt)("p",null,"Then, in your entry point file, inject the store into the API setup file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'import store from "./app/store".\nimport {injectStore} from "./common/api";\ninjectStore(store);\n')),(0,o.kt)("p",null,"This way, the application setup is the only code that has to import the store, and the file dependency graph avoids circular dependencies."))}h.isMDXComponent=!0}}]);