import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

import { connect } from "react-redux";
import { toggleTodo } from "../actions";

const TodoList = ({ todos, dispatch }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => dispatch(toggleTodo(todo.id))}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default connect()(TodoList);
