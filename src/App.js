import React from 'react';
import Header from './Todos/components/TodoListHeader';
import TodoList from './Todos/components/TodoList';
import './App.css';

const App = () => (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );

export default App;
