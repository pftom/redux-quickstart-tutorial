import React from "react";
import AddTodo from "./AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { filter } = this.props;

    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer filter={filter} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  filter: state.filter
});

export default connect(mapStateToProps)(App);
