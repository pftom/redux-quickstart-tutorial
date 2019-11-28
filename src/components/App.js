import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

let nextTodoId = 0;

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      filter: VisibilityFilters.SHOW_ALL
    };

    this.toggleTodo = this.toggleTodo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
  }

  toggleTodo(id) {
    const { todos } = this.state;

    this.setState({
      todos: todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  }

  onSubmit(value) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: nextTodoId++,
          text: value,
          completed: false
        }
      ]
    });
  }

  setVisibilityFilter(filter) {
    this.setState({
      filter: filter
    });
  }

  render() {
    const { todos, filter } = this.state;

    return (
      <div>
        <AddTodo onSubmit={this.onSubmit} />
        <TodoList
          todos={getVisibleTodos(todos, filter)}
          toggleTodo={this.toggleTodo}
        />
        <Footer
          filter={filter}
          setVisibilityFilter={this.setVisibilityFilter}
        />
      </div>
    );
  }
}

export default App;
