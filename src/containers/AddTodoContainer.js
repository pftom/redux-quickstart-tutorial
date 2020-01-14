import { connect } from "react-redux";
// import { addTodo } from "../actions";
import * as actions from "../actions"
import AddTodo from "../components/AddTodo";

const mapStateToProps = (state, ownProps) => {
  return ownProps;
};

const mapDispatchToProps = function (dispatch) {
  return {
    addTodo: text => dispatch(actions.addTodo(text))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
