"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6653],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return l}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),d=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=d(e.components);return o.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=d(n),l=r,f=p["".concat(m,".").concat(l)]||p[l]||u[l]||a;return n?o.createElement(f,c(c({ref:t},i),{},{components:n})):o.createElement(f,c({ref:t},i))}));function l(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var d=2;d<a;d++)c[d]=n[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7260:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return m},default:function(){return l},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],s={id:"updating-normalized-data",title:"\u7ba1\u7406\u8303\u5f0f\u5316\u6570\u636e",description:"Structuring Reducers > \u7ba1\u7406\u8303\u5f0f\u5316\u6570\u636e: Patterns for updating normalized data",hide_title:!1},m="\u7ba1\u7406\u8303\u5f0f\u5316\u6570\u636e",d={unversionedId:"recipes/structuring-reducers/updating-normalized-data",id:"recipes/structuring-reducers/updating-normalized-data",title:"\u7ba1\u7406\u8303\u5f0f\u5316\u6570\u636e",description:"Structuring Reducers > \u7ba1\u7406\u8303\u5f0f\u5316\u6570\u636e: Patterns for updating normalized data",source:"@site/../docs/recipes/structuring-reducers/UpdatingNormalizedData.md",sourceDirName:"recipes/structuring-reducers",slug:"/recipes/structuring-reducers/updating-normalized-data",permalink:"/recipes/structuring-reducers/updating-normalized-data",draft:!1,tags:[],version:"current",frontMatter:{id:"updating-normalized-data",title:"\u7ba1\u7406\u8303\u5f0f\u5316\u6570\u636e",description:"Structuring Reducers > \u7ba1\u7406\u8303\u5f0f\u5316\u6570\u636e: Patterns for updating normalized data",hide_title:!1},sidebar:"docs",previous:{title:"State \u8303\u5f0f\u5316",permalink:"/recipes/structuring-reducers/normalizing-state-shape"},next:{title:"Reducer \u903b\u8f91\u590d\u7528",permalink:"/recipes/structuring-reducers/reusing-reducer-logic"}},i={},u=[{value:"\u6807\u51c6\u65b9\u6cd5",id:"\u6807\u51c6\u65b9\u6cd5",level:2},{value:"\u7b80\u5355\u5408\u5e76",id:"\u7b80\u5355\u5408\u5e76",level:3},{value:"reducer \u5207\u7247\u7ec4\u5408",id:"reducer-\u5207\u7247\u7ec4\u5408",level:3},{value:"\u5176\u4ed6\u65b9\u6cd5",id:"\u5176\u4ed6\u65b9\u6cd5",level:2},{value:"\u57fa\u4e8e\u4efb\u52a1\u7684\u66f4\u65b0",id:"\u57fa\u4e8e\u4efb\u52a1\u7684\u66f4\u65b0",level:3},{value:"Redux-ORM",id:"redux-orm",level:3}],p={toc:u};function l(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ba1\u7406\u8303\u5f0f\u5316\u6570\u636e"},"\u7ba1\u7406\u8303\u5f0f\u5316\u6570\u636e"),(0,a.kt)("p",null,"\u5982 ",(0,a.kt)("a",{parentName:"p",href:"/recipes/structuring-reducers/normalizing-state-shape"},"\u8303\u5f0f\u5316\u6570\u636e")," \u7ae0\u8282\u6240\u63d0\u53ca\u7684\uff0c\u6211\u4eec\u7ecf\u5e38\u4f7f\u7528 Normaizr \u5e93\u5c06\u5d4c\u5957\u5f0f\u6570\u636e\u8f6c\u5316\u4e3a\u9002\u5408\u96c6\u6210\u5230 store \u4e2d\u7684\u8303\u5f0f\u5316\u6570\u636e\u3002\u4f46\u8fd9\u5e76\u4e0d\u89e3\u51b3\u9488\u5bf9\u8303\u5f0f\u5316\u7684\u6570\u636e\u8fdb\u4e00\u6b65\u66f4\u65b0\u540e\u5728\u5e94\u7528\u7684\u5176\u4ed6\u5730\u65b9\u4f7f\u7528\u7684\u95ee\u9898\u3002\u6839\u636e\u559c\u597d\u6709\u5f88\u591a\u79cd\u65b9\u6cd5\u53ef\u4f9b\u4f7f\u7528\u3002\u4e0b\u9762\u5c55\u793a\u4e00\u4e2a\u50cf\u6587\u7ae0\u6dfb\u52a0\u8bc4\u8bba\u7684\u793a\u4f8b\u3002"),(0,a.kt)("h2",{id:"\u6807\u51c6\u65b9\u6cd5"},"\u6807\u51c6\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u7b80\u5355\u5408\u5e76"},"\u7b80\u5355\u5408\u5e76"),(0,a.kt)("p",null,"\u4e00\u79cd\u65b9\u6cd5\u662f\u5c06 action \u7684\u5185\u5bb9\u5408\u5e76\u5230\u73b0\u6709\u7684 state\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u5bf9\u6570\u636e\u7684\u6df1\u62f7\u8d1d\uff08\u975e\u6d45\u62f7\u8d1d\uff09\u3002Lodash \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"merge")," \u65b9\u6cd5\u53ef\u4ee5\u5e2e\u6211\u4eec\u5904\u7406\u8fd9\u4e2a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import merge from 'lodash/merge'\n\nfunction commentsById(state = {}, action) {\n  switch (action.type) {\n    default: {\n      if (action.entities && action.entities.comments) {\n        return merge({}, state, action.entities.comments.byId)\n      }\n      return state\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u505a\u4f1a\u8ba9 reducer \u4fdd\u6301\u6700\u5c0f\u7684\u5de5\u4f5c\u91cf\uff0c\u4f46\u9700\u8981 action creator \u5728 action dispatch \u4e4b\u524d\u505a\u5927\u91cf\u7684\u5de5\u4f5c\u6765\u5c06\u6570\u636e\u8f6c\u5316\u6210\u6b63\u786e\u7684\u5f62\u6001\u3002\u5728\u5220\u9664\u6570\u636e\u9879\u65f6\u8fd9\u79cd\u65b9\u5f0f\u4e5f\u662f\u4e0d\u9002\u5408\u7684\u3002"),(0,a.kt)("h3",{id:"reducer-\u5207\u7247\u7ec4\u5408"},"reducer \u5207\u7247\u7ec4\u5408"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u6709\u4e00\u4e2a\u7531\u5207\u7247 reducer \u7ec4\u6210\u7684\u5d4c\u5957\u6570\u636e\uff0c\u6bcf\u4e2a\u5207\u7247 reducer \u90fd\u9700\u8981\u77e5\u9053\u5982\u4f55\u54cd\u5e94\u8fd9\u4e2a action\u3002\u56e0\u4e3a\u6211\u4eec\u9700\u8981\u8ba9 action \u56ca\u62ec\u6240\u6709\u76f8\u5173\u7684\u6570\u636e\u3002\u8b6c\u5982\u66f4\u65b0\u76f8\u5e94\u7684 Post \u5bf9\u8c61\u9700\u8981\u751f\u6210\u4e00\u4e2a comment \u7684 id\uff0c\u7136\u540e\u4f7f\u7528 id \u4f5c\u4e3a key \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 comment \u5bf9\u8c61\uff0c\u5e76\u4e14\u8ba9\u8fd9\u4e2a comment \u7684 id \u5305\u62ec\u5728\u6240\u6709\u7684 comment id \u5217\u8868\u4e2d\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u5982\u4f55\u7ec4\u5408\u8fd9\u6837\u6570\u636e\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bd1\u8005\u6ce8\uff1a\u7ed3\u5408\u4e0a\u7ae0\u8282\u4e2d\u8303\u5f0f\u5316\u4e4b\u540e\u7684 state \u9605\u8bfb")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// actions.js\nfunction addComment(postId, commentText) {\n  // \u4e3a\u8fd9\u4e2a comment \u751f\u6210\u4e00\u4e2a\u72ec\u4e00\u65e0\u4e8c\u7684 ID\n  const commentId = generateId('comment')\n\n  return {\n    type: 'ADD_COMMENT',\n    payload: {\n      postId,\n      commentId,\n      commentText\n    }\n  }\n}\n\n// reducers/posts.js\nfunction addComment(state, action) {\n  const { payload } = action\n  const { postId, commentId } = payload\n\n  // \u67e5\u627e\u51fa\u76f8\u5e94\u7684\u6587\u7ae0\uff0c\u7b80\u5316\u5176\u4f59\u4ee3\u7801\n  const post = state[postId]\n\n  return {\n    ...state,\n    // \u7528\u65b0\u7684 comments \u6570\u636e\u66f4\u65b0 Post \u5bf9\u8c61\n    [postId]: {\n      ...post,\n      comments: post.comments.concat(commentId)\n    }\n  }\n}\n\nfunction postsById(state = {}, action) {\n  switch (action.type) {\n    case 'ADD_COMMENT':\n      return addComment(state, action)\n    default:\n      return state\n  }\n}\n\nfunction allPosts(state = [], action) {\n  // \u7701\u7565\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u4e0d\u9700\u8981\u5b83\n}\n\nconst postsReducer = combineReducers({\n  byId: postsById,\n  allIds: allPosts\n})\n\n// reducers/comments.js\nfunction addCommentEntry(state, action) {\n  const { payload } = action\n  const { commentId, commentText } = payload\n\n  // \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Comment \u5bf9\u8c61\n  const comment = { id: commentId, text: commentText }\n\n  // \u5728\u67e5\u8be2\u8868\u4e2d\u63d2\u5165\u65b0\u7684 Comment \u5bf9\u8c61\n  return {\n    ...state,\n    [commentId]: comment\n  }\n}\n\nfunction commentsById(state = {}, action) {\n  switch (action.type) {\n    case 'ADD_COMMENT':\n      return addCommentEntry(state, action)\n    default:\n      return state\n  }\n}\n\nfunction addCommentId(state, action) {\n  const { payload } = action\n  const { commentId } = payload\n  // \u628a\u65b0 Comment \u7684 ID \u6dfb\u52a0\u5728 all IDs \u7684\u5217\u8868\u540e\u9762\n  return state.concat(commentId)\n}\n\nfunction allComments(state = [], action) {\n  switch (action.type) {\n    case 'ADD_COMMENT':\n      return addCommentId(state, action)\n    default:\n      return state\n  }\n}\n\nconst commentsReducer = combineReducers({\n  byId: commentsById,\n  allIds: allComments\n})\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4e4b\u6240\u6709\u6709\u70b9\u957f\uff0c\u662f\u56e0\u4e3a\u5b83\u5c55\u793a\u4e86\u4e0d\u540c\u5207\u7247 reducer \u548c case reducer \u662f\u5982\u4f55\u914d\u5408\u5728\u4e00\u8d77\u4f7f\u7528\u7684\u3002\u6ce8\u610f\u8fd9\u91cc\u5bf9 \u201c\u59d4\u6258\u201d \u7684\u7406\u89e3\u3002postById reducer \u5207\u7247\u5c06\u5de5\u4f5c\u59d4\u62d6\u7ed9 addComment\uff0caddComment \u5c06\u65b0\u7684\u8bc4\u8bba id \u63d2\u5165\u5230\u76f8\u5e94\u7684\u6570\u636e\u9879\u4e2d\u3002\u540c\u65f6 commentsById \u548c allComments \u7684 reducer \u5207\u7247\u90fd\u6709\u81ea\u5df1\u7684 case reducer\uff0c\u4ed6\u4eec\u66f4\u65b0\u8bc4\u8bba\u67e5\u627e\u8868\u548c\u6240\u6709\u8bc4\u8bba id \u5217\u8868\u7684\u8868\u3002"),(0,a.kt)("h2",{id:"\u5176\u4ed6\u65b9\u6cd5"},"\u5176\u4ed6\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u57fa\u4e8e\u4efb\u52a1\u7684\u66f4\u65b0"},"\u57fa\u4e8e\u4efb\u52a1\u7684\u66f4\u65b0"),(0,a.kt)("p",null,"reducer \u4ec5\u4ec5\u662f\u4e2a\u51fd\u6570\uff0c\u56e0\u6b64\u6709\u65e0\u6570\u79cd\u65b9\u6cd5\u6765\u62c6\u5206\u8fd9\u4e2a\u903b\u8f91\u3002\u4f7f\u7528\u5207\u7247 reducer \u662f\u6700\u5e38\u89c1\uff0c\u4f46\u4e5f\u53ef\u4ee5\u5728\u66f4\u9762\u5411\u4efb\u52a1\u7684\u7ed3\u6784\u4e2d\u7ec4\u7ec7\u884c\u4e3a\u3002\u7531\u4e8e\u901a\u5e38\u4f1a\u6d89\u53ca\u5230\u66f4\u591a\u5d4c\u5957\u7684\u66f4\u65b0\uff0c\u56e0\u6b64\u5e38\u5e38\u4f1a\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/debitoor/dot-prop-immutable"},"dot-prop-immutable"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mariocasciaro/object-path-immutable"},"object-path-immutable")," \u7b49\u5e93\u5b9e\u73b0\u4e0d\u53ef\u53d8\u66f4\u65b0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import posts from "./postsReducer";\nimport comments from "./commentsReducer";\nimport dotProp from "dot-prop-immutable";\nimport {combineReducers} from "redux";\nimport reduceReducers from "reduce-reducers";\n\nconst combinedReducer = combineReducers({\n    posts,\n    comments\n});\n\n\nfunction addComment(state, action) {\n    const {payload} = action;\n    const {postId, commentId, commentText} = payload;\n\n    // State here is the entire combined state\n    const updatedWithPostState = dotProp.set(\n        state,\n        `posts.byId.${postId}.comments`,\n        comments => comments.concat(commentId)\n    );\n\n    const updatedWithCommentsTable = dotProp.set(\n        updatedWithPostState,\n        `comments.byId.${commentId}`,\n        {id : commentId, text : commentText}\n    );\n\n    const updatedWithCommentsList = dotProp.set(\n        updatedWithCommentsTable,\n        `comments.allIds`,\n        allIds => allIds.concat(commentId);\n    );\n\n    return updatedWithCommentsList;\n}\n\nconst featureReducers = createReducer({}, {\n    ADD_COMMENT : addComment,\n};\n\nconst rootReducer = reduceReducers(\n    combinedReducer,\n    featureReducers\n);\n')),(0,a.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u8ba9 ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD_COMMENT")," \u8fd9\u4e2a case \u8981\u5e72\u54ea\u4e9b\u4e8b\u66f4\u52a0\u6e05\u695a\uff0c\u4f46\u9700\u8981\u66f4\u65b0\u5d4c\u5957\u903b\u8f91\u548c\u5bf9\u7279\u5b9a\u72b6\u6001\u6811\u7684\u4e86\u89e3\u3002\u6700\u540e\u8fd9\u53d6\u51b3\u4e8e\u4f60\u5982\u4f55\u7ec4\u7ec7 reducer \u903b\u8f91\uff0c\u6216\u8bb8\u4f60\u6839\u672c\u4e0d\u9700\u8981\u8fd9\u6837\u505a\u3002"),(0,a.kt)("h3",{id:"redux-orm"},"Redux-ORM"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tommikaikkonen/redux-orm"},"Redux-ORM")," \u5e93\u63d0\u4f9b\u4e86\u4e00\u4e2a\u975e\u5e38\u6709\u7528\u7684\u62bd\u8c61\u5c42\uff0c\u7528\u4e8e\u7ba1\u7406 Redux store \u4e2d\u5b58\u50a8\u7684\u8303\u5f0f\u5316\u6570\u636e\u3002\u5b83\u5141\u8bb8\u4f60\u58f0\u660e Model \u7c7b\u5e76\u4e14\u5b9a\u4e49\u4ed6\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\u3002\u7136\u540e\u5b83\u53ef\u4ee5\u4e3a\u4f60\u7684\u6570\u636e\u7c7b\u578b\u751f\u6210\u65b0\u201c\u8868\u201d\uff0c\u5145\u5f53\u7528\u4e8e\u67e5\u627e\u6570\u636e\u7684\u7279\u6b8a\u9009\u62e9\u5668\u5de5\u5177\uff0c\u5e76\u4e14\u5bf9\u6570\u636e\u6267\u884c\u4e0d\u53ef\u53d8\u66f4\u65b0\u3002"),(0,a.kt)("p",null,"\u6709\u51e0\u79cd\u65b9\u6cd5\u53ef\u4ee5\u7528 Redux-ORM \u6267\u884c\u6570\u636e\u66f4\u65b0\u3002\u9996\u9009\uff0cRedux-ORM \u6587\u6863\u5efa\u8bae\u5728\u6bcf\u4e2a Model \u5b50\u7c7b\u4e0a\u5b9a\u4e49 reducer \u51fd\u6570\uff0c\u7136\u540e\u5c06\u81ea\u52a8\u751f\u6210\u7684\u7ec4\u5408 reducer \u51fd\u6570\u653e\u5230 store \u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// models.js\nimport { Model, many, Schema } from 'redux-orm'\n\nexport class Post extends Model {\n  static get fields() {\n    return {\n      // \u5b9a\u4e49\u4e00\u4e2a\u591a\u8fb9\u5173\u7cfb - \u4e00\u4e2a Post \u53ef\u4ee5\u6709\u591a\u4e2a Comments\uff0c\n      // \u5b57\u6bb5\u540d\u662f \u201ccomments\u201d\n      comments: many('Comment')\n    }\n  }\n\n  static reducer(state, action, Post) {\n    switch (action.type) {\n      case 'CREATE_POST': {\n        // \u6392\u961f\u521b\u5efa\u4e00\u4e2a Post \u5b9e\u4f8b\n        Post.create(action.payload)\n        break\n      }\n      case 'ADD_COMMENT': {\n        const { payload } = action\n        const { postId, commentId } = payload\n        // \u6392\u961f\u589e\u52a0\u4e00\u4e2a Comment ID \u548c Post \u5b9e\u4f8b\u7684\u8054\u7cfb\n        Post.withId(postId).comments.add(commentId)\n        break\n      }\n    }\n\n    // Redux-ORM \u5c06\u5728\u8fd4\u56de\u540e\u81ea\u52a8\u5e94\u7528\u6392\u961f\u7684\u66f4\u65b0\n  }\n}\nPost.modelName = 'Post'\n\nexport class Comment extends Model {\n  static get fields() {\n    return {}\n  }\n\n  static reducer(state, action, Comment) {\n    switch (action.type) {\n      case 'ADD_COMMENT': {\n        const { payload } = action\n        const { commentId, commentText } = payload\n\n        // \u6392\u961f\u521b\u5efa\u4e00\u4e2a Comment \u5b9e\u4f8b\n        Comment.create({ id: commentId, text: commentText })\n        break\n      }\n    }\n\n    // Redux-ORM \u5c06\u5728\u8fd4\u56de\u540e\u81ea\u52a8\u5e94\u7528\u6392\u961f\u7684\u66f4\u65b0\n  }\n}\nComment.modelName = 'Comment'\n\n// \u521b\u5efa Schema \u5b9e\u4f8b\uff0c\u7136\u540e\u548c Post\u3001Comment \u6570\u636e\u6a21\u578b\u6302\u94a9\u8d77\u6765\nexport const schema = new Schema()\nschema.register(Post, Comment)\n\n// main.js\nimport { createStore, combineReducers } from 'redux'\nimport { schema } from './models'\n\nconst rootReducer = combineReducers({\n  // \u63d2\u5165 Redux-ORM \u81ea\u52a8\u751f\u6210\u7684 reducer\uff0c\u8fd9\u5c06\n  // \u521d\u59cb\u5316\u4e00\u4e2a\u6570\u636e\u6a21\u578b \u201c\u8868\u201d\uff0c\u5e76\u4e14\u548c\u6211\u4eec\u5728\n  // \u6bcf\u4e2a Model \u5b50\u7c7b\u4e2d\u5b9a\u4e49\u7684 reducer \u903b\u8f91\u6302\u94a9\u8d77\u6765\n  entities: schema.reducer()\n})\n\n// dispatch \u4e00\u4e2a action \u4ee5\u521b\u5efa\u4e00\u4e2a Post \u5b9e\u4f8b\nstore.dispatch({\n  type: 'CREATE_POST',\n  payload: {\n    id: 1,\n    name: 'Test Post Please Ignore'\n  }\n})\n\n// dispatch \u4e00\u4e2a action \u4ee5\u521b\u5efa\u4e00\u4e2a Comment \u5b9e\u4f8b\u4f5c\u4e3a\u4e0a\u4e2a Post \u7684\u5b50\u5143\u7d20\nstore.dispatch({\n  type: 'ADD_COMMENT',\n  payload: {\n    postId: 1,\n    commentId: 123,\n    commentText: 'This is a comment'\n  }\n})\n")),(0,a.kt)("p",null,"Redux-ORM \u5e93\u7ef4\u62a4\u8981\u5e94\u7528\u7684\u5185\u90e8\u66f4\u65b0\u961f\u5217\u3002\u8fd9\u4e9b\u66f4\u65b0\u662f\u4e0d\u53ef\u53d8\u66f4\u65b0\uff0c\u8fd9\u4e2a\u5e93\u7b80\u5316\u4e86\u8fd9\u4e2a\u66f4\u65b0\u8fc7\u7a0b\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 Redux-ORM \u7684\u53e6\u4e00\u4e2a\u53d8\u5316\u662f\u7528\u4e00\u4e2a\u5355\u4e00\u7684 case reducer \u4f5c\u4e3a\u62bd\u8c61\u5c42\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { schema } from './models'\n\n// \u5047\u8bbe\u8fd9\u4e2a case reducer \u6b63\u5728\u6211\u4eec\u7684 \u201centities\u201d \u5207\u7247 reducer \u4f7f\u7528\uff0c\n// \u5e76\u4e14\u6211\u4eec\u5728 Redux-ORM \u7684 Model \u5b50\u7c7b\u4e0a\u6ca1\u6709\u5b9a\u4e49 reducer\nfunction addComment(entitiesState, action) {\n  const session = schema.from(entitiesState)\n  const { Post, Comment } = session\n  const { payload } = action\n  const { postId, commentId, commentText } = payload\n\n  const post = Post.withId(postId)\n  post.comments.add(commentId)\n\n  Comment.create({ id: commentId, text: commentText })\n\n  return session.reduce()\n}\n")),(0,a.kt)("p",null,"\u603b\u4e4b\uff0cRedux-ORM \u63d0\u4f9b\u4e86\u4e00\u7ec4\u975e\u5e38\u6709\u7528\u7684\u62bd\u8c61\uff0c\u7528\u4e8e\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u5728\u6211\u4eec\u7684 state \u4e2d\u521b\u5efa\u4e86\u4e00\u4e2a \u201c\u8868\u201d\uff0c\u68c0\u7d22\u548c\u53cd\u89c4\u5212\u5173\u7cfb\u6570\u636e\uff0c\u4ee5\u53ca\u5c06\u4e0d\u53ef\u53d8\u66f4\u65b0\u5e94\u7528\u4e8e\u5173\u7cfb\u6570\u636e\u3002"))}l.isMDXComponent=!0}}]);