"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9925],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return u}});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var a=n.createContext({}),d=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(o),u=i,k=m["".concat(a,".").concat(u)]||m[u]||c[u]||s;return o?n.createElement(k,r(r({ref:t},p),{},{components:o})):n.createElement(k,r({ref:t},p))}));function u(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=o.length,r=new Array(s);r[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<s;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6584:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=o(7462),i=o(3366),s=(o(7294),o(3905)),r=["components"],l={id:"computing-derived-data",title:"Computing Derived Data",hide_title:!1},a="\u8ba1\u7b97\u884d\u751f\u6570\u636e",d={unversionedId:"recipes/computing-derived-data",id:"recipes/computing-derived-data",title:"Computing Derived Data",description:"Reselect \u5e93\u53ef\u4ee5\u521b\u5efa\u53ef\u8bb0\u5fc6\u7684(Memoized)\u3001\u53ef\u7ec4\u5408\u7684 selector \u51fd\u6570\u3002Reselect selectors \u53ef\u4ee5\u7528\u6765\u9ad8\u6548\u5730\u8ba1\u7b97 Redux store \u91cc\u7684\u884d\u751f\u6570\u636e\u3002",source:"@site/../docs/recipes/ComputingDerivedData.md",sourceDirName:"recipes",slug:"/recipes/computing-derived-data",permalink:"/recipes/computing-derived-data",draft:!1,tags:[],version:"current",frontMatter:{id:"computing-derived-data",title:"Computing Derived Data",hide_title:!1},sidebar:"docs",previous:{title:"\u7f16\u5199\u6d4b\u8bd5",permalink:"/recipes/writing-tests"},next:{title:"\u5b9e\u73b0\u64a4\u9500\u91cd\u505a",permalink:"/recipes/implementing-undo-history"}},p={},c=[{value:"\u53ef\u8bb0\u5fc6\u7684 Selectors \u521d\u8877",id:"\u53ef\u8bb0\u5fc6\u7684-selectors-\u521d\u8877",level:3},{value:"<code>containers/VisibleTodoList.js</code>",id:"containersvisibletodolistjs",level:4},{value:"\u521b\u5efa\u53ef\u8bb0\u5fc6\u7684 Selector",id:"\u521b\u5efa\u53ef\u8bb0\u5fc6\u7684-selector",level:3},{value:"<code>selectors/index.js</code>",id:"selectorsindexjs",level:4},{value:"\u7ec4\u5408 Selector",id:"\u7ec4\u5408-selector",level:3},{value:"\u8fde\u63a5 Selector \u548c Redux Store",id:"\u8fde\u63a5-selector-\u548c-redux-store",level:3},{value:"<code>containers/VisibleTodoList.js</code>",id:"containersvisibletodolistjs-1",level:4},{value:"\u5728 selectors \u4e2d\u8bbf\u95ee React Props",id:"\u5728-selectors-\u4e2d\u8bbf\u95ee-react-props",level:3},{value:"<code>reducers/index.js</code>",id:"reducersindexjs",level:4},{value:"<code>reducers/todoLists.js</code>",id:"reducerstodolistsjs",level:4},{value:"<code>actions/index.js</code>",id:"actionsindexjs",level:4},{value:"<code>components/TodoList.js</code>",id:"componentstodolistjs",level:4},{value:"components/App.js",id:"componentsappjs",level:4},{value:"<code>selectors/todoSelectors.js</code>",id:"selectorstodoselectorsjs",level:4},{value:"containers/VisibleTodoList.js",id:"containersvisibletodolistjs-2",level:4},{value:"\u8de8\u591a\u7ec4\u4ef6\u7684\u5171\u4eab Selector",id:"\u8de8\u591a\u7ec4\u4ef6\u7684\u5171\u4eab-selector",level:3},{value:"container/VisibleTodosList.js",id:"containervisibletodoslistjs",level:4},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:3}],m={toc:c};function u(e){var t=e.components,o=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u8ba1\u7b97\u884d\u751f\u6570\u636e"},"\u8ba1\u7b97\u884d\u751f\u6570\u636e"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/reselect"},"Reselect")," \u5e93\u53ef\u4ee5\u521b\u5efa\u53ef\u8bb0\u5fc6\u7684(Memoized)\u3001\u53ef\u7ec4\u5408\u7684 ",(0,s.kt)("strong",{parentName:"p"},"selector")," \u51fd\u6570\u3002Reselect selectors \u53ef\u4ee5\u7528\u6765\u9ad8\u6548\u5730\u8ba1\u7b97 Redux store \u91cc\u7684\u884d\u751f\u6570\u636e\u3002"),(0,s.kt)("h3",{id:"\u53ef\u8bb0\u5fc6\u7684-selectors-\u521d\u8877"},"\u53ef\u8bb0\u5fc6\u7684 Selectors \u521d\u8877"),(0,s.kt)("p",null,"\u9996\u5148\u8bbf\u95ee ",(0,s.kt)("a",{parentName:"p",href:"/tutorials/fundamentals/part-5-ui-react"},"Todos \u5217\u8868\u793a\u4f8b"),":"),(0,s.kt)("h4",{id:"containersvisibletodolistjs"},(0,s.kt)("inlineCode",{parentName:"h4"},"containers/VisibleTodoList.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { connect } from 'react-redux'\nimport { toggleTodo } from '../actions'\nimport TodoList from '../components/TodoList'\n\nconst getVisibleTodos = (todos, filter) => {\n  switch (filter) {\n    case 'SHOW_ALL':\n      return todos\n    case 'SHOW_COMPLETED':\n      return todos.filter(t => t.completed)\n    case 'SHOW_ACTIVE':\n      return todos.filter(t => !t.completed)\n  }\n}\n\nconst mapStateToProps = state => {\n  return {\n    todos: getVisibleTodos(state.todos, state.visibilityFilter)\n  }\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    onTodoClick: id => {\n      dispatch(toggleTodo(id))\n    }\n  }\n}\n\nconst VisibleTodoList = connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(TodoList)\n\nexport default VisibleTodoList\n")),(0,s.kt)("p",null,"\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," \u8c03\u7528\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibleTodos")," \u6765\u8ba1\u7b97 ",(0,s.kt)("inlineCode",{parentName:"p"},"todos"),"\u3002\u8fd0\u884c\u6ca1\u95ee\u9898\uff0c\u4f46\u6709\u4e00\u4e2a\u7f3a\u70b9\uff1a\u6bcf\u5f53\u7ec4\u4ef6\u66f4\u65b0\u65f6\u90fd\u4f1a\u91cd\u65b0\u8ba1\u7b97 ",(0,s.kt)("inlineCode",{parentName:"p"},"todos"),"\u3002\u5982\u679c state tree \u975e\u5e38\u5927\uff0c\u6216\u8005\u8ba1\u7b97\u91cf\u975e\u5e38\u5927\uff0c\u6bcf\u6b21\u66f4\u65b0\u90fd\u91cd\u65b0\u8ba1\u7b97\u53ef\u80fd\u4f1a\u5e26\u6765\u6027\u80fd\u95ee\u9898\u3002Reselect \u80fd\u5e2e\u4f60\u7701\u53bb\u8fd9\u4e9b\u6ca1\u5fc5\u8981\u7684\u91cd\u65b0\u8ba1\u7b97\u3002"),(0,s.kt)("h3",{id:"\u521b\u5efa\u53ef\u8bb0\u5fc6\u7684-selector"},"\u521b\u5efa\u53ef\u8bb0\u5fc6\u7684 Selector"),(0,s.kt)("p",null,"\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u53ef\u8bb0\u5fc6\u7684 selector \u6765\u66ff\u4ee3\u8fd9\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibleTodos"),"\uff0c\u53ea\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"state.todos")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"state.visibilityFilter")," \u53d8\u5316\u65f6\u91cd\u65b0\u8ba1\u7b97 ",(0,s.kt)("inlineCode",{parentName:"p"},"todos"),"\uff0c\u800c\u5728\u5176\u5b83\u90e8\u5206\uff08\u975e\u76f8\u5173\uff09\u53d8\u5316\u65f6\u4e0d\u505a\u8ba1\u7b97\u3002"),(0,s.kt)("p",null,"Reselect \u63d0\u4f9b ",(0,s.kt)("inlineCode",{parentName:"p"},"createSelector")," \u51fd\u6570\u6765\u521b\u5efa\u53ef\u8bb0\u5fc6\u7684 selector\u3002",(0,s.kt)("inlineCode",{parentName:"p"},"createSelector")," \u63a5\u6536\u4e00\u4e2a input-selectors \u6570\u7ec4\u548c\u4e00\u4e2a\u8f6c\u6362\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u3002\u5982\u679c state tree \u7684\u6539\u53d8\u4f1a\u5f15\u8d77 input-selector \u503c\u53d8\u5316\uff0c\u90a3\u4e48 selector \u4f1a\u8c03\u7528\u8f6c\u6362\u51fd\u6570\uff0c\u4f20\u5165 input-selectors \u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u7ed3\u679c\u3002\u5982\u679c input-selectors \u7684\u503c\u548c\u524d\u4e00\u6b21\u7684\u4e00\u6837\uff0c\u5b83\u5c06\u4f1a\u76f4\u63a5\u8fd4\u56de\u524d\u4e00\u6b21\u8ba1\u7b97\u7684\u6570\u636e\uff0c\u800c\u4e0d\u4f1a\u518d\u8c03\u7528\u4e00\u6b21\u8f6c\u6362\u51fd\u6570\u3002"),(0,s.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u53ef\u8bb0\u5fc6\u7684 selector ",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibleTodos")," \u6765\u66ff\u4ee3\u4e0a\u9762\u7684\u65e0\u8bb0\u5fc6\u7248\u672c\uff1a"),(0,s.kt)("h4",{id:"selectorsindexjs"},(0,s.kt)("inlineCode",{parentName:"h4"},"selectors/index.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { createSelector } from 'reselect'\n\nconst getVisibilityFilter = state => state.visibilityFilter\nconst getTodos = state => state.todos\n\nexport const getVisibleTodos = createSelector(\n  [getVisibilityFilter, getTodos],\n  (visibilityFilter, todos) => {\n    switch (visibilityFilter) {\n      case 'SHOW_ALL':\n        return todos\n      case 'SHOW_COMPLETED':\n        return todos.filter(t => t.completed)\n      case 'SHOW_ACTIVE':\n        return todos.filter(t => !t.completed)\n    }\n  }\n)\n")),(0,s.kt)("p",null,"\u5728\u4e0a\u4f8b\u4e2d\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibilityFilter")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"getTodos")," \u662f input-selector\u3002\u56e0\u4e3a\u4ed6\u4eec\u5e76\u4e0d\u8f6c\u6362\u6570\u636e\uff0c\u6240\u4ee5\u88ab\u521b\u5efa\u6210\u666e\u901a\u7684\u975e\u8bb0\u5fc6\u7684 selector \u51fd\u6570\u3002\u4f46\u662f\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibleTodos")," \u662f\u4e00\u4e2a\u53ef\u8bb0\u5fc6\u7684 selector\u3002\u4ed6\u63a5\u6536 ",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibilityFilter")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"getTodos")," \u4e3a input-selector\uff0c\u8fd8\u6709\u4e00\u4e2a\u8f6c\u6362\u51fd\u6570\u6765\u8ba1\u7b97\u8fc7\u6ee4\u7684 todos \u5217\u8868\u3002"),(0,s.kt)("h3",{id:"\u7ec4\u5408-selector"},"\u7ec4\u5408 Selector"),(0,s.kt)("p",null,"\u53ef\u8bb0\u5fc6\u7684 selector \u81ea\u8eab\u53ef\u4ee5\u4f5c\u4e3a\u5176\u5b83\u53ef\u8bb0\u5fc6\u7684 selector \u7684 input-selector\u3002\u4e0b\u9762\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibleTodos")," \u88ab\u5f53\u4f5c\u53e6\u4e00\u4e2a selector \u7684 input-selector\uff0c\u6765\u8fdb\u4e00\u6b65\u901a\u8fc7\u5173\u952e\u5b57\uff08keyword\uff09\u8fc7\u6ee4 todos\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const getKeyword = state => state.keyword\n\nconst getVisibleTodosFilteredByKeyword = createSelector(\n  [getVisibleTodos, getKeyword],\n  (visibleTodos, keyword) =>\n    visibleTodos.filter(todo => todo.text.indexOf(keyword) > -1)\n)\n")),(0,s.kt)("h3",{id:"\u8fde\u63a5-selector-\u548c-redux-store"},"\u8fde\u63a5 Selector \u548c Redux Store"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux"},"React Redux"),"\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"mapStateToProps()")," \u4e2d\u5f53\u6b63\u5e38\u51fd\u6570\u6765\u8c03\u7528 selectors"),(0,s.kt)("h4",{id:"containersvisibletodolistjs-1"},(0,s.kt)("inlineCode",{parentName:"h4"},"containers/VisibleTodoList.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { connect } from 'react-redux'\nimport { toggleTodo } from '../actions'\nimport TodoList from '../components/TodoList'\nimport { getVisibleTodos } from '../selectors'\n\nconst mapStateToProps = state => {\n  return {\n    todos: getVisibleTodos(state)\n  }\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    onTodoClick: id => {\n      dispatch(toggleTodo(id))\n    }\n  }\n}\n\nconst VisibleTodoList = connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(TodoList)\n\nexport default VisibleTodoList\n")),(0,s.kt)("h3",{id:"\u5728-selectors-\u4e2d\u8bbf\u95ee-react-props"},"\u5728 selectors \u4e2d\u8bbf\u95ee React Props"),(0,s.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u53ea\u770b\u5230 selector \u63a5\u6536 Redux store state \u4f5c\u4e3a\u53c2\u6570\uff0c\u7136\u800c\uff0cselector \u4e5f\u53ef\u4ee5\u63a5\u6536 props\u3002"),(0,s.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u6765\u5b9e\u73b0\u5305\u542b\u591a\u4e2a Todo List \u7684\u5e94\u7528\u3002\u6211\u4eec\u9700\u8981\u6539\u5199 state \u6765\u652f\u6301\u591a\u4e2a Todo List\uff0c\u6bcf\u4e2a Todo List \u5206\u522b\u6709\u5404\u81ea\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"todos")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"visibilityFilter")," state\u3002"),(0,s.kt)("p",null,"\u6211\u4eec\u8fd8\u9700\u8981\u6539\u5199 reducer\uff0c\u73b0\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"todos")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"visibilityFilter")," \u5206\u522b\u5728\u5404\u81ea\u7684 Todo List state \u91cc\uff0c \u6240\u4ee5\u6211\u4eec\u53ea\u9700\u8981\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"todoLists")," reducer \u6765\u8fdb\u884c\u6211\u4eec\u7684 state \u7ba1\u7406\u3002"),(0,s.kt)("h4",{id:"reducersindexjs"},(0,s.kt)("inlineCode",{parentName:"h4"},"reducers/index.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { combineReducers } from 'redux'\nimport todoLists from './todoLists'\n\nexport default combineReducers({\n  todoLists\n})\n")),(0,s.kt)("h4",{id:"reducerstodolistsjs"},(0,s.kt)("inlineCode",{parentName:"h4"},"reducers/todoLists.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// Note that we're hard coding three lists here just as an example.\n// In the real world, we'd have a feature to add/remove lists,\n// and this would be empty initially.\nconst initialState = {\n  1: {\n    todos: [],\n    visibilityFilter: 'SHOW_ALL'\n  },\n  2: {\n    todos: [],\n    visibilityFilter: 'SHOW_ALL'\n  },\n  3: {\n    todos: [],\n    visibilityFilter: 'SHOW_ALL'\n  }\n}\n\nconst addTodo = (state, action) => {\n  const todoList = state[action.listId]\n  const { todos } = todoList\n\n  return {\n    ...state,\n    [action.listId]: {\n      ...todoList,\n      todos: [\n        ...todos,\n        {\n          id: action.id,\n          text: action.text,\n          completed: false\n        }\n      ]\n    }\n  }\n}\n\nconst toggleTodo = (state, action) => {\n  const todoList = state[action.listId]\n  const { todos } = todoList\n\n  return {\n    ...state,\n    [action.listId]: {\n      ...todoList,\n      todos: todos.map(todo =>\n        (todo.id === action.id)\n          ? {...todo, completed: !todo.completed}\n          : todo\n      )\n    }\n  }\n}\n\nconst setVisibilityFilter = (state, action) => {\n  const todoList = state[action.listId]\n  return {\n    ...state,\n    [action.listId]: {\n      ...todoList,\n      visibilityFilter: action.filter\n    }\n  }\n}\n\nexport default const todoLists = (state = initialState, action) => {\n  // make sure a list with the given id exists\n  if (!state[action.listId]) {\n    return state;\n  }\n\n  switch (action.type) {\n    case 'ADD_TODO':\n      return addTodo(state, action)\n\n    case 'TOGGLE_TODO':\n      return toggleTodo(state, action)\n\n    case 'SET_VISIBILITY_FILTER':\n      return setVisibilityFilter(state, action)\n\n    default:\n      return state\n  }\n}\n")),(0,s.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"todoLists")," reducer \u6765\u5904\u7406\u5168\u90e8\u4e09\u4e2a action\uff0c \u6240\u4ee5\u6211\u4eec\u9700\u8981\u5411 action creator \u4f20\u5165\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"listId")," \u53c2\u6570"),(0,s.kt)("h4",{id:"actionsindexjs"},(0,s.kt)("inlineCode",{parentName:"h4"},"actions/index.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let nextTodoId = 0\nexport const addTodo = (text, listId) => ({\n  type: 'ADD_TODO',\n  id: nextTodoId++,\n  text,\n  listId\n})\nexport const setVisibilityFilter = (filter, listId) => ({\n  type: 'SET_VISIBILITY_FILTER',\n  filter,\n  listId\n})\nexport const toggleTodo = (id, listId) => ({\n  type: 'TOGGLE_TODO',\n  id,\n  listId\n})\nexport const VisibilityFilters = {\n  SHOW_ALL: 'SHOW_ALL',\n  SHOW_COMPLETED: 'SHOW_COMPLETED',\n  SHOW_ACTIVE: 'SHOW_ACTIVE'\n}\n")),(0,s.kt)("h4",{id:"componentstodolistjs"},(0,s.kt)("inlineCode",{parentName:"h4"},"components/TodoList.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport PropTypes from 'prop-types'\nimport Todo from './Todo'\nconst TodoList = ({ todos, toggleTodo, listId }) => (\n  <ul>\n    {todos.map(todo => (\n      <Todo\n        key={todo.id}\n        {...todo}\n        onClick={() => toggleTodo(todo.id, listId)}\n      />\n    ))}\n  </ul>\n)\n\nexport default TodoList\n")),(0,s.kt)("p",null,"\u4ee5\u4e0b\u662f\u6e32\u67d3\u4e09\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"VisibleTodoList")," components \u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"App")," , \u6bcf\u4e2a",(0,s.kt)("inlineCode",{parentName:"p"},"VisibleTodoList")," \u90fd\u6709\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"listId")," prop\u3002"),(0,s.kt)("h4",{id:"componentsappjs"},"components/App.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport Footer from './Footer'\nimport AddTodo from '../containers/AddTodo'\nimport VisibleTodoList from '../containers/VisibleTodoList'\n\nconst App = () => (\n  <div>\n    <VisibleTodoList listId=\"1\" />\n    <VisibleTodoList listId=\"2\" />\n    <VisibleTodoList listId=\"3\" />\n  </div>\n)\n")),(0,s.kt)("p",null,"\u6bcf\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"VisibleTodoList")," \u5bb9\u5668\u6839\u636e ",(0,s.kt)("inlineCode",{parentName:"p"},"listId")," props \u7684\u503c\u9009\u62e9\u4e0d\u540c\u7684 state \u5207\u7247\uff0c\u8ba9\u6211\u4eec\u4fee\u6539 ",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibilityFilter")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"getTodos")," \u6765\u63a5\u6536 props\u3002"),(0,s.kt)("h4",{id:"selectorstodoselectorsjs"},(0,s.kt)("inlineCode",{parentName:"h4"},"selectors/todoSelectors.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { createSelector } from 'reselect'\n\nconst getVisibilityFilter = (state, props) =>\n  state.todoLists[props.listId].visibilityFilter\n\nconst getTodos = (state, props) => state.todoLists[props.listId].todos\n\nconst getVisibleTodos = createSelector(\n  [getVisibilityFilter, getTodos],\n  (visibilityFilter, todos) => {\n    switch (visibilityFilter) {\n      case 'SHOW_COMPLETED':\n        return todos.filter(todo => todo.completed)\n      case 'SHOW_ACTIVE':\n        return todos.filter(todo => !todo.completed)\n      default:\n        return todos\n    }\n  }\n)\n\nexport default getVisibleTodos\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"props")," \u53ef\u4ee5\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," \u4f20\u9012\u7ed9 ",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibleTodos"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const mapStateToProps = (state, props) => {\n  return {\n    todos: getVisibleTodos(state, props)\n  }\n}\n")),(0,s.kt)("p",null,"\u73b0\u5728\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibleTodos")," \u53ef\u4ee5\u8bbf\u95ee ",(0,s.kt)("inlineCode",{parentName:"p"},"props"),"\uff0c\u4e00\u5207\u770b\u4e0a\u53bb\u90fd\u662f\u5982\u6b64\u7684\u7f8e\u597d\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u4f46\u662f\u8fd9\u513f\u6709\u4e00\u4e2a\u95ee\u9898\uff01")),(0,s.kt)("p",null,"\u4f7f\u7528\u5e26\u6709\u591a\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"visibleTodoList")," \u5bb9\u5668\u5b9e\u4f8b\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibleTodos")," selector \u4e0d\u80fd\u6b63\u5e38\u4f7f\u7528\u51fd\u6570\u8bb0\u5fc6\u529f\u80fd\u3002"),(0,s.kt)("h4",{id:"containersvisibletodolistjs-2"},"containers/VisibleTodoList.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { connect } from 'react-redux'\nimport { toggleTodo } from '../actions'\nimport TodoList from '../components/TodoList'\nimport { getVisibleTodos } from '../selectors'\n\nconst mapStateToProps = (state, props) => {\n  return {\n    // \u8b66\u544a\uff1a\u4e0b\u9762\u7684 selector \u4e0d\u4f1a\u6b63\u786e\u8bb0\u5fc6\n    todos: getVisibleTodos(state, props)\n  }\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    onTodoClick: id => {\n      dispatch(toggleTodo(id))\n    }\n  }\n}\n\nconst VisibleTodoList = connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(TodoList)\n\nexport default VisibleTodoList\n")),(0,s.kt)("p",null,"\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"createSelector")," \u521b\u5efa\u7684 selector \u53ea\u6709\u5728\u53c2\u6570\u96c6\u4e0e\u4e4b\u524d\u7684\u53c2\u6570\u96c6\u76f8\u540c\u65f6\u624d\u4f1a\u8fd4\u56de\u7f13\u5b58\u7684\u503c\u3002\u5982\u679c\u6211\u4eec\u4ea4\u66ff\u7684\u6e32\u67d3 ",(0,s.kt)("inlineCode",{parentName:"p"},'<VisibleTodoList listId="1" />')," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},'<VisibleTodoList listId="2" />'),"\uff0c\u5171\u4eab\u7684 selector \u5c06\u4ea4\u66ff\u7684\u63a5\u6536 ",(0,s.kt)("inlineCode",{parentName:"p"},"{ listId: 1 }")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"{ listId: 2 }"),"\u3002\u8fd9\u4f1a\u5bfc\u81f4\u6bcf\u6b21\u8c03\u7528\u65f6\u4f20\u5165\u7684\u53c2\u6570\u4e0d\u540c\uff0c\u56e0\u6b64 selector \u5c06\u59cb\u7ec8\u91cd\u65b0\u8ba1\u7b97\u800c\u4e0d\u662f\u8fd4\u56de\u7f13\u5b58\u7684\u503c\u3002\u6211\u4eec\u5c06\u5728\u4e0b\u4e00\u8282\u4e86\u89e3\u5982\u4f55\u89e3\u51b3\u8fd9\u4e2a\u9650\u5236\u3002"),(0,s.kt)("h3",{id:"\u8de8\u591a\u7ec4\u4ef6\u7684\u5171\u4eab-selector"},"\u8de8\u591a\u7ec4\u4ef6\u7684\u5171\u4eab Selector"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u8fd9\u8282\u4e2d\u7684\u4f8b\u5b50\u9700\u8981 React Redux v4.3.0 \u6216\u8005\u66f4\u9ad8\u7684\u7248\u672c")),(0,s.kt)("p",null,"\u4e3a\u4e86\u8de8\u8d8a\u591a\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"VisibleTodoList")," \u7ec4\u4ef6\u5171\u4eab selector\uff0c",(0,s.kt)("strong",{parentName:"p"},"\u540c\u65f6\u5b9e\u73b0"),"\u6b63\u786e\u8bb0\u5fc6\u3002\u6bcf\u4e2a\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u9700\u8981\u6709\u62f7\u8d1d selector \u7684\u79c1\u6709\u7248\u672c\u3002"),(0,s.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"makeGetVisibleTodos")," \u7684\u51fd\u6570\uff0c\u5728\u6bcf\u4e2a\u8c03\u7528\u7684\u65f6\u5019\u8fd4\u56de\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibleTodos")," selector \u7684\u65b0\u62f7\u8d1d\u3002"),(0,s.kt)("p",null,"####selectors/todoSelectors.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { createSelector } from 'reselect'\n\nconst getVisibilityFilter = (state, props) =>\n  state.todoLists[props.listId].visibilityFilter\n\nconst getTodos = (state, props) => state.todoLists[props.listId].todos\n\nconst makeGetVisibleTodos = () => {\n  return createSelector(\n    [getVisibilityFilter, getTodos],\n    (visibilityFilter, todos) => {\n      switch (visibilityFilter) {\n        case 'SHOW_COMPLETED':\n          return todos.filter(todo => todo.completed)\n        case 'SHOW_ACTIVE':\n          return todos.filter(todo => !todo.completed)\n        default:\n          return todos\n      }\n    }\n  )\n}\n")),(0,s.kt)("p",null,"\u6211\u4eec\u8fd8\u9700\u8981\u4e00\u79cd\u6bcf\u4e2a\u5bb9\u5668\u8bbf\u95ee\u81ea\u5df1\u79c1\u6709 selector \u7684\u65b9\u5f0f\u3002",(0,s.kt)("inlineCode",{parentName:"p"},"connect")," \u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," \u51fd\u6570\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u5982\u679c ",(0,s.kt)("inlineCode",{parentName:"strong"},"connect")," \u7684 ",(0,s.kt)("inlineCode",{parentName:"strong"},"mapStateToProps")," \u8fd4\u56de\u7684\u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61\u800c\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4ed6\u5c06\u88ab\u7528\u505a\u4e3a\u6bcf\u4e2a\u5bb9\u5668\u7684\u5b9e\u4f8b\u521b\u5efa\u4e00\u4e2a\u5355\u72ec\u7684 ",(0,s.kt)("inlineCode",{parentName:"strong"},"mapStateToProps")," \u51fd\u6570\u3002")),(0,s.kt)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u4e2d\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"makeMapStateToProps")," \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibleTodos")," selectors\uff0c\u8fd4\u56de\u4e00\u4e2a\u72ec\u5360\u65b0 selector \u7684\u6743\u9650\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," \u51fd\u6570\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const makeMapStateToProps = () => {\n  const getVisibleTodos = makeGetVisibleTodos()\n  const mapStateToProps = (state, props) => {\n    return {\n      todos: getVisibleTodos(state, props)\n    }\n  }\n  return mapStateToProps\n}\n")),(0,s.kt)("p",null,"\u5982\u679c\u6211\u4eec\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"makeMapStateToProps")," \u6765 ",(0,s.kt)("inlineCode",{parentName:"p"},"connect"),"\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"VisibleTodosList")," \u5bb9\u5668\u7684\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u4f1a\u62e5\u6709\u542b\u79c1\u6709 ",(0,s.kt)("inlineCode",{parentName:"p"},"getVisibleTodos")," selector \u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"mapStateToProps"),"\u3002\u4e0d\u8bba ",(0,s.kt)("inlineCode",{parentName:"p"},"VisibleTodosList")," \u5bb9\u5668\u7684\u5c55\u73b0\u987a\u5e8f\u5982\u4f55\uff0c\u8bb0\u5fc6\u529f\u80fd\u90fd\u4f1a\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,s.kt)("h4",{id:"containervisibletodoslistjs"},"container/VisibleTodosList.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { connect } from 'react-redux'\nimport { toggleTodo } from '../actions'\nimport TodoList from '../components/TodoList'\nimport { makeGetVisibleTodos } from '../selectors'\n\nconst makeMapStateToProps = () => {\n  const getVisibleTodos = makeGetVisibleTodos()\n  const mapStateToProps = (state, props) => {\n    return {\n      todos: getVisibleTodos(state, props)\n    }\n  }\n  return mapStateToProps\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    onTodoClick: id => {\n      dispatch(toggleTodo(id))\n    }\n  }\n}\n\nconst VisibleTodoList = connect(\n  makeMapStateToProps,\n  mapDispatchToProps\n)(TodoList)\n\nexport default VisibleTodoList\n")),(0,s.kt)("h3",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,s.kt)("p",null,"\u67e5\u770b ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/reactjs/reselect"},"\u5b98\u65b9\u6587\u6863")," \u548c ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/reactjs/reselect#faq"},"FAQ"),"\u3002\u5f53\u56e0\u4e3a\u592a\u591a\u7684\u884d\u751f\u8ba1\u7b97\u548c\u91cd\u590d\u6e32\u67d3\u5bfc\u81f4\u51fa\u73b0\u6027\u80fd\u95ee\u9898\u65f6\uff0c\u5927\u591a\u6570\u7684 Redux \u9879\u76ee\u4f1a\u5f00\u59cb\u4f7f\u7528 Reselect\u3002\u6240\u4ee5\u5728\u4f60\u521b\u5efa\u4e00\u4e2a\u5927\u578b\u9879\u76ee\u7684\u65f6\u5019\u786e\u4fdd\u4f60\u5bf9 reselect \u662f\u719f\u6089\u7684\u3002\u4f60\u4e5f\u53ef\u4ee5\u53bb\u7814\u7a76\u4ed6\u7684 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/reactjs/reselect/blob/master/src/index.js"},"\u6e90\u7801"),"\uff0c\u8fd9\u6837\u4f60\u5c31\u4e0d\u8ba4\u4e3a\u4ed6\u662f\u9ed1\u9b54\u6cd5\u4e86\u3002"))}u.isMDXComponent=!0}}]);