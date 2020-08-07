import React, { Component } from 'react';
import './TodoListHeader.css';

class Header extends Component {
    render() {
        return (
            <div className="header-layout">
                <h1 className="header-info">Todo List</h1>
            </div>
        );
    }
}

export default Header;