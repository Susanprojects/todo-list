import React, { Component } from 'react';
import './TodoListItem.css';

class TodoListItem extends Component {
    render() {
        const { todo, onRemove, onCompleted } = this.props;
        return (
            <div className="todo-item-container">
                <label className="todo-item-text">{todo.text}</label>
                <div className="btn-container">
                    {todo.isCompleted ?
                    null
                    :<button
                        onClick={() => onCompleted(todo.text)}>Mark Done</button>}
                    <button
                        className="delete-button"
                        onClick={() => onRemove(todo.text)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default TodoListItem;