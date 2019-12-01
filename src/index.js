import React from "react";
import ReactDOM from "react-dom";
import App, { VisibilityFilters } from "./components/App";

import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  todos: [
    {
      id: 1,
      text: "你好, 图雀",
      completed: false
    },
    {
      id: 2,
      text: "我是一只小小小小图雀",
      completed: false
    },
    {
      id: 3,
      text: "小若燕雀，亦可一展宏图！",
      completed: false
    }
  ],
  filter: VisibilityFilters.SHOW_ALL
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const { todos } = state;

      return {
        ...state,
        todos: [
          ...todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    }

    case "TOGGLE_TODO": {
      const { todos } = state;

      return {
        ...state,
        todos: todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    }

    case "SET_VISIBILITY_FILTER": {
      return {
        ...state,
        filter: action.filter
      };
    }

    default:
      return state;
  }
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
