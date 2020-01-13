import React, {Component} from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import store from "../index";

class TodoList extends Component {
    render() {
        let {todosArray, toggleTodo} = this.props;
        console.log(todosArray)
        //文件打包的顺序是有问题的，会调用第一次render的时候store为undefined
        //增加一个todo后会有值
        console.log(store);
        if (typeof(store) === 'undefined') {
            //当store不为undefined时，必须加上typeof()，否则还是会走store.getState，然后爆出运行时错误
            console.log('store is undefined')
        } else {
            console.log(store.getState());
            console.log(store.dispatch);
        }
        return (
            <ul>
                {todosArray.map(todo => (
                    <Todo key = {todo.id} completed = {todo.completed} text = {todo.text} onClick={() => toggleTodo(todo.id)}/>
                ))}
            </ul>
        );
    }
}

TodoList.propTypes = {
  todosArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
