//https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
//Should use name export instead of default export
import {initialState} from "../reducers/todosReducer"

console.log(initialState)
let nextTodoId = initialState.length;
console.log('nextTodoId = ' + nextTodoId);

export const addTodoCustom = function (text) {
    return {
        type: "ADD_TODO",
        id: nextTodoId++,
        text
    };
};

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
