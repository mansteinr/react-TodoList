
import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // input框中的值
      inputValue: '',
      // 数组中的值
      list: []
    }
  }
  render() {
    return(
      <Fragment> 
        <input/>
        <button>提交</button>
        <ul>
          <li>音乐</li>
          <li>music</li>
        </ul>
      </Fragment>
    )
  }
}

export default TodoList