import './style.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../../constants/actionTypes';
import AddTodo from '../add_todo';
import TodoList from '../todolist';
import Footer from '../footer';

class App extends Component {
  render() {
    return (
      <div className="index">
        <AddTodo
          onAddClick={text =>
            console.log('add todo', text)
          } />
        <TodoList
          todos={[{
            text: 'Use Redux',
            completed: true
          }, {
            text: 'Learn to connect it to React',
            completed: false
          }]}
          onTodoClick={todo =>
            console.log('todo clicked', todo)
          } />
        <Footer
          filter='SHOW_ALL'
          onFilterChange={filter =>
            console.log('filter change', filter)
          } />
      </div>
    );
  }
}

function selectTodos(todos, filter) {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos;
  case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
  case VisibilityFilters.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
  }
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(select)(App)