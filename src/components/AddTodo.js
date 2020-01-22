import React, {Component} from "react";
import * as PropTypes from "prop-types";

class AddTodo extends Component {
    render() {
        let {addTodoCustom} = this.props;
        let input;

        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (!input.value.trim()) {
                            return;
                        }
                        addTodoCustom(input.value);
                        input.value = "";
                    }}
                >
                    <input ref={node => (input = node)}/>
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}

AddTodo.propTypes = {addTodo: PropTypes.any}

export default AddTodo;
