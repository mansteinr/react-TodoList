import React from 'react'

import TodoList from './todolist/TodoList'
import AntdTodoList from './antd-todolist'


import './style.css'

class App extends React.Component{

  render() {
    return(
      <React.Fragment>
        <TodoList></TodoList>
        <AntdTodoList></AntdTodoList>
      </React.Fragment>
    )
  }
}

export default App