import { connect } from "react-redux";
// import { addTodo } from "../actions";
import * as actions from "../actions"
import AddTodo from "../components/AddTodo";
import {bindActionCreators} from "redux";

const mapStateToProps = (state, ownProps) => {
  return ownProps;
};

// const mapDispatchToProps = function (dispatch) {
//   return {
//     addTodo: function (text) {
//       return dispatch(actions.addTodoCustom(text));
//     }
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(actions, dispatch);
}
//方法1：可以
// export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

//方法2：可以
export default connect(mapStateToProps, actions)(AddTodo);

//方法2实际上是下面这个:
// export default connect(mapStateToProps, dispatch => bindActionCreators(actions, dispatch))(AddTodo);
