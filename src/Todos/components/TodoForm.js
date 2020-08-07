import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../todoActions';
import TodoFormEdit from './TodoFormEdit';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ' ',
            inputChanged: '',
            inputInvalid: true
        }
    }

    inputChanged = (strValue) => {
        this.setState({            
            inputInvalid: (!strValue || strValue.length <= 5) ? true : false,
            inputValue: strValue            
        });
    }
    
    render() {
        const { todos, onCreate } = this.props;
        return (
            <div className="new-todo-form">
                <div className="create-task-form">
                    Enter task name : <input className="new-todo-input"
                    type="text"
                    value={this.state.inputValue}
                    onChange={e => this.inputChanged(e.target.value)}
                />
                
                <TodoFormEdit />
                <div className="create-btn-container">
                    <button
                    className="new-todo-button"
                    disabled={this.state.inputInvalid}
                    onClick={() => {
                        const isDuplicateTodo = todos.some(todo => todo.text === this.state.inputValue);
                        if(!isDuplicateTodo) {
                            onCreate(this.state.inputValue);
                            this.setInputValue('');
                        }
                    }}>Create Todo</button>
                </div>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
    onCreate: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);