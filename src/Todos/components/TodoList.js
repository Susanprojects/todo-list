
import React from 'react';
import { connect } from 'react-redux';
import './TodoList.css';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import { removeTodo, markTodoCompleted } from '../todoActions';

const TodoList = ({ todos = [], onRemove, onCompleted }) => (
    
    <form className="list-wrapper">
        <TodoForm />
        <div className="todo-list-items-container">
            Current Tasks : <br/><br/>
            {todos.map(todo => <TodoListItem todo={todo} 
            onRemove={onRemove}
            onCompleted={onCompleted}
            key={todo.text}/>)}
        </div>
    </form>
);

const mapStateToProps = state => ({
    todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
    onRemove: text => dispatch(removeTodo(text)),
    onCompleted: text => dispatch(markTodoCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);