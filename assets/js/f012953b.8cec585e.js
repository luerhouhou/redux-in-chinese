"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6763],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||l[f]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7938:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return l}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],c={id:"refactoring-reducer-example",title:"Refactoring Reducers Example",sidebar_label:"Refactoring Reducers Example",description:"Structuring Reducers > Refactoring Reducers: Examples of ways to refactor reducer logic"},s="Refactoring Reducer Logic Using Functional Decomposition and Reducer Composition",d={unversionedId:"usage/structuring-reducers/refactoring-reducer-example",id:"usage/structuring-reducers/refactoring-reducer-example",title:"Refactoring Reducers Example",description:"Structuring Reducers > Refactoring Reducers: Examples of ways to refactor reducer logic",source:"@site/../docs/usage/structuring-reducers/RefactoringReducersExample.md",sourceDirName:"usage/structuring-reducers",slug:"/usage/structuring-reducers/refactoring-reducer-example",permalink:"/usage/structuring-reducers/refactoring-reducer-example",draft:!1,tags:[],version:"current",frontMatter:{id:"refactoring-reducer-example",title:"Refactoring Reducers Example",sidebar_label:"Refactoring Reducers Example",description:"Structuring Reducers > Refactoring Reducers: Examples of ways to refactor reducer logic"}},u={},l=[{value:"Initial Reducer",id:"initial-reducer",level:4},{value:"Extracting Utility Functions",id:"extracting-utility-functions",level:4},{value:"Extracting Case Reducers",id:"extracting-case-reducers",level:4},{value:"Separating Data Handling by Domain",id:"separating-data-handling-by-domain",level:4},{value:"Reducing Boilerplate",id:"reducing-boilerplate",level:4},{value:"Combining Reducers by Slice",id:"combining-reducers-by-slice",level:4}],p={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"refactoring-reducer-logic-using-functional-decomposition-and-reducer-composition"},"Refactoring Reducer Logic Using Functional Decomposition and Reducer Composition"),(0,i.kt)("p",null,"It may be helpful to see examples of what the different types of sub-reducer functions look like and how they fit together. Let's look at a demonstration of how a large single reducer function can be refactored into a composition of several smaller functions."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": this example is deliberately written in a verbose style in order to illustrate the concepts and the process of refactoring, rather than perfectly concise code.")),(0,i.kt)("h4",{id:"initial-reducer"},"Initial Reducer"),(0,i.kt)("p",null,"Let's say that our initial reducer looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const initialState = {\n  visibilityFilter: 'SHOW_ALL',\n  todos: []\n}\n\nfunction appReducer(state = initialState, action) {\n  switch (action.type) {\n    case 'SET_VISIBILITY_FILTER': {\n      return Object.assign({}, state, {\n        visibilityFilter: action.filter\n      })\n    }\n    case 'ADD_TODO': {\n      return Object.assign({}, state, {\n        todos: state.todos.concat({\n          id: action.id,\n          text: action.text,\n          completed: false\n        })\n      })\n    }\n    case 'TOGGLE_TODO': {\n      return Object.assign({}, state, {\n        todos: state.todos.map(todo => {\n          if (todo.id !== action.id) {\n            return todo\n          }\n\n          return Object.assign({}, todo, {\n            completed: !todo.completed\n          })\n        })\n      })\n    }\n    case 'EDIT_TODO': {\n      return Object.assign({}, state, {\n        todos: state.todos.map(todo => {\n          if (todo.id !== action.id) {\n            return todo\n          }\n\n          return Object.assign({}, todo, {\n            text: action.text\n          })\n        })\n      })\n    }\n    default:\n      return state\n  }\n}\n")),(0,i.kt)("p",null,"That function is fairly short, but already becoming overly complex. We're dealing with two different areas of concern (filtering vs managing our list of todos), the nesting is making the update logic harder to read, and it's not exactly clear what's going on everywhere."),(0,i.kt)("h4",{id:"extracting-utility-functions"},"Extracting Utility Functions"),(0,i.kt)("p",null,"A good first step might be to break out a utility function to return a new object with updated fields. There's also a repeated pattern with trying to update a specific item in an array that we could extract to a function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function updateObject(oldObject, newValues) {\n  // Encapsulate the idea of passing a new object as the first parameter\n  // to Object.assign to ensure we correctly copy data instead of mutating\n  return Object.assign({}, oldObject, newValues)\n}\n\nfunction updateItemInArray(array, itemId, updateItemCallback) {\n  const updatedItems = array.map(item => {\n    if (item.id !== itemId) {\n      // Since we only want to update one item, preserve all others as they are now\n      return item\n    }\n\n    // Use the provided callback to create an updated item\n    const updatedItem = updateItemCallback(item)\n    return updatedItem\n  })\n\n  return updatedItems\n}\n\nfunction appReducer(state = initialState, action) {\n  switch (action.type) {\n    case 'SET_VISIBILITY_FILTER': {\n      return updateObject(state, { visibilityFilter: action.filter })\n    }\n    case 'ADD_TODO': {\n      const newTodos = state.todos.concat({\n        id: action.id,\n        text: action.text,\n        completed: false\n      })\n\n      return updateObject(state, { todos: newTodos })\n    }\n    case 'TOGGLE_TODO': {\n      const newTodos = updateItemInArray(state.todos, action.id, todo => {\n        return updateObject(todo, { completed: !todo.completed })\n      })\n\n      return updateObject(state, { todos: newTodos })\n    }\n    case 'EDIT_TODO': {\n      const newTodos = updateItemInArray(state.todos, action.id, todo => {\n        return updateObject(todo, { text: action.text })\n      })\n\n      return updateObject(state, { todos: newTodos })\n    }\n    default:\n      return state\n  }\n}\n")),(0,i.kt)("p",null,"That reduced the duplication and made things a bit easier to read."),(0,i.kt)("h4",{id:"extracting-case-reducers"},"Extracting Case Reducers"),(0,i.kt)("p",null,"Next, we can split each specific case into its own function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Omitted\nfunction updateObject(oldObject, newValues) {}\nfunction updateItemInArray(array, itemId, updateItemCallback) {}\n\nfunction setVisibilityFilter(state, action) {\n  return updateObject(state, { visibilityFilter: action.filter })\n}\n\nfunction addTodo(state, action) {\n  const newTodos = state.todos.concat({\n    id: action.id,\n    text: action.text,\n    completed: false\n  })\n\n  return updateObject(state, { todos: newTodos })\n}\n\nfunction toggleTodo(state, action) {\n  const newTodos = updateItemInArray(state.todos, action.id, todo => {\n    return updateObject(todo, { completed: !todo.completed })\n  })\n\n  return updateObject(state, { todos: newTodos })\n}\n\nfunction editTodo(state, action) {\n  const newTodos = updateItemInArray(state.todos, action.id, todo => {\n    return updateObject(todo, { text: action.text })\n  })\n\n  return updateObject(state, { todos: newTodos })\n}\n\nfunction appReducer(state = initialState, action) {\n  switch (action.type) {\n    case 'SET_VISIBILITY_FILTER':\n      return setVisibilityFilter(state, action)\n    case 'ADD_TODO':\n      return addTodo(state, action)\n    case 'TOGGLE_TODO':\n      return toggleTodo(state, action)\n    case 'EDIT_TODO':\n      return editTodo(state, action)\n    default:\n      return state\n  }\n}\n")),(0,i.kt)("p",null,"Now it's ",(0,i.kt)("em",{parentName:"p"},"very")," clear what's happening in each case. We can also start to see some patterns emerging."),(0,i.kt)("h4",{id:"separating-data-handling-by-domain"},"Separating Data Handling by Domain"),(0,i.kt)("p",null,"Our app reducer is still aware of all the different cases for our application. Let's try splitting things up so that the filter logic and the todo logic are separated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Omitted\nfunction updateObject(oldObject, newValues) {}\nfunction updateItemInArray(array, itemId, updateItemCallback) {}\n\nfunction setVisibilityFilter(visibilityState, action) {\n  // Technically, we don't even care about the previous state\n  return action.filter\n}\n\nfunction visibilityReducer(visibilityState = 'SHOW_ALL', action) {\n  switch (action.type) {\n    case 'SET_VISIBILITY_FILTER':\n      return setVisibilityFilter(visibilityState, action)\n    default:\n      return visibilityState\n  }\n}\n\nfunction addTodo(todosState, action) {\n  const newTodos = todosState.concat({\n    id: action.id,\n    text: action.text,\n    completed: false\n  })\n\n  return newTodos\n}\n\nfunction toggleTodo(todosState, action) {\n  const newTodos = updateItemInArray(todosState, action.id, todo => {\n    return updateObject(todo, { completed: !todo.completed })\n  })\n\n  return newTodos\n}\n\nfunction editTodo(todosState, action) {\n  const newTodos = updateItemInArray(todosState, action.id, todo => {\n    return updateObject(todo, { text: action.text })\n  })\n\n  return newTodos\n}\n\nfunction todosReducer(todosState = [], action) {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return addTodo(todosState, action)\n    case 'TOGGLE_TODO':\n      return toggleTodo(todosState, action)\n    case 'EDIT_TODO':\n      return editTodo(todosState, action)\n    default:\n      return todosState\n  }\n}\n\nfunction appReducer(state = initialState, action) {\n  return {\n    todos: todosReducer(state.todos, action),\n    visibilityFilter: visibilityReducer(state.visibilityFilter, action)\n  }\n}\n")),(0,i.kt)("p",null,'Notice that because the two "slice of state" reducers are now getting only their own part of the whole state as arguments, they no longer need to return complex nested state objects, and are now simpler as a result.'),(0,i.kt)("h4",{id:"reducing-boilerplate"},"Reducing Boilerplate"),(0,i.kt)("p",null,"We're almost done. Since many people don't like switch statements, it's very common to use a function that creates a lookup table of action types to case functions. We'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"createReducer")," function described in ",(0,i.kt)("a",{parentName:"p",href:"../reducing-boilerplate"},"Reducing Boilerplate"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Omitted\nfunction updateObject(oldObject, newValues) {}\nfunction updateItemInArray(array, itemId, updateItemCallback) {}\n\nfunction createReducer(initialState, handlers) {\n  return function reducer(state = initialState, action) {\n    if (handlers.hasOwnProperty(action.type)) {\n      return handlers[action.type](state, action)\n    } else {\n      return state\n    }\n  }\n}\n\n// Omitted\nfunction setVisibilityFilter(visibilityState, action) {}\n\nconst visibilityReducer = createReducer('SHOW_ALL', {\n  SET_VISIBILITY_FILTER: setVisibilityFilter\n})\n\n// Omitted\nfunction addTodo(todosState, action) {}\nfunction toggleTodo(todosState, action) {}\nfunction editTodo(todosState, action) {}\n\nconst todosReducer = createReducer([], {\n  ADD_TODO: addTodo,\n  TOGGLE_TODO: toggleTodo,\n  EDIT_TODO: editTodo\n})\n\nfunction appReducer(state = initialState, action) {\n  return {\n    todos: todosReducer(state.todos, action),\n    visibilityFilter: visibilityReducer(state.visibilityFilter, action)\n  }\n}\n")),(0,i.kt)("h4",{id:"combining-reducers-by-slice"},"Combining Reducers by Slice"),(0,i.kt)("p",null,"As our last step, we can now use Redux's built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"combineReducers"),' utility to handle the "slice-of-state" logic for our top-level app reducer. Here\'s the final result:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Reusable utility functions\n\nfunction updateObject(oldObject, newValues) {\n  // Encapsulate the idea of passing a new object as the first parameter\n  // to Object.assign to ensure we correctly copy data instead of mutating\n  return Object.assign({}, oldObject, newValues)\n}\n\nfunction updateItemInArray(array, itemId, updateItemCallback) {\n  const updatedItems = array.map(item => {\n    if (item.id !== itemId) {\n      // Since we only want to update one item, preserve all others as they are now\n      return item\n    }\n\n    // Use the provided callback to create an updated item\n    const updatedItem = updateItemCallback(item)\n    return updatedItem\n  })\n\n  return updatedItems\n}\n\nfunction createReducer(initialState, handlers) {\n  return function reducer(state = initialState, action) {\n    if (handlers.hasOwnProperty(action.type)) {\n      return handlers[action.type](state, action)\n    } else {\n      return state\n    }\n  }\n}\n\n// Handler for a specific case ("case reducer")\nfunction setVisibilityFilter(visibilityState, action) {\n  // Technically, we don\'t even care about the previous state\n  return action.filter\n}\n\n// Handler for an entire slice of state ("slice reducer")\nconst visibilityReducer = createReducer(\'SHOW_ALL\', {\n  SET_VISIBILITY_FILTER: setVisibilityFilter\n})\n\n// Case reducer\nfunction addTodo(todosState, action) {\n  const newTodos = todosState.concat({\n    id: action.id,\n    text: action.text,\n    completed: false\n  })\n\n  return newTodos\n}\n\n// Case reducer\nfunction toggleTodo(todosState, action) {\n  const newTodos = updateItemInArray(todosState, action.id, todo => {\n    return updateObject(todo, { completed: !todo.completed })\n  })\n\n  return newTodos\n}\n\n// Case reducer\nfunction editTodo(todosState, action) {\n  const newTodos = updateItemInArray(todosState, action.id, todo => {\n    return updateObject(todo, { text: action.text })\n  })\n\n  return newTodos\n}\n\n// Slice reducer\nconst todosReducer = createReducer([], {\n  ADD_TODO: addTodo,\n  TOGGLE_TODO: toggleTodo,\n  EDIT_TODO: editTodo\n})\n\n// "Root reducer"\nconst appReducer = combineReducers({\n  visibilityFilter: visibilityReducer,\n  todos: todosReducer\n})\n')),(0,i.kt)("p",null,"We now have examples of several kinds of split-up reducer functions: helper utilities like ",(0,i.kt)("inlineCode",{parentName:"p"},"updateObject")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"createReducer"),", handlers for specific cases like ",(0,i.kt)("inlineCode",{parentName:"p"},"setVisibilityFilter")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"addTodo"),", and slice-of-state handlers like ",(0,i.kt)("inlineCode",{parentName:"p"},"visibilityReducer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"todosReducer"),". We also can see that ",(0,i.kt)("inlineCode",{parentName:"p"},"appReducer"),' is an example of a "root reducer".'),(0,i.kt)("p",null,"Although the final result in this example is noticeably longer than the original version, this is primarily due to the extraction of the utility functions, the addition of comments, and some deliberate verbosity for the sake of clarity, such as separate return statements. Looking at each function individually, the amount of responsibility is now smaller, and the intent is hopefully clearer. Also, in a real application, these functions would probably then be split into separate files such as ",(0,i.kt)("inlineCode",{parentName:"p"},"reducerUtilities.js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"visibilityReducer.js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"todosReducer.js"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"rootReducer.js"),"."))}f.isMDXComponent=!0}}]);