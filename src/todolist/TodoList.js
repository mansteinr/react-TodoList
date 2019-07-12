
import React, { Component } from 'react'
import TodoItem from './TodoItem'
import CSStransition from './CSSTransition'
import TransitionGroupTest from './transitionGroup'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // input框中的值
      inputValue: '',
      // 数组中的值
      list: []
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  render() {
    return(
      <div>
        <label htmlFor="input">输入框</label>
        <input
          id="input"
          className="input"
          // 原生DOMchange事件绑定为onchange
          // 绑定chang事件, 需要绑定this，否则this指向不是该组件
          onChange={this.handleInputChange}
          value={this.state.inputValue}/>
          {/* 绑定提交事件 */}
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>
          { this.getTodoItem() }
        </ul>
        <CSStransition></CSStransition>
        <TransitionGroupTest></TransitionGroupTest>
      </div>
    )
  }
  handleInputChange(e) {
    const value = e.target.value
    // this.setState这是个异步过程 但他本身提供了一个回调函数
    // this.setState(() => ({
    //   inputValue: value
    // }), () => {
    //   console.log('异步了')
    // })
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    // this.setState({
    //   // 点击的时候 list数组内容新增 输入项
    //   list: [...this.state.list, this.state.inputValue],
    //   // 情况inputValue
    //   inputValue: ''
    // })
  }

  // 删除事件
  handleDelete(index) {
    // let list = [...this.state.list]
    // list.splice(index, 1)
    //1. 不希望直接修改state里面的数据 故先拷贝出来
    //2. splice 删除后返回的是被删除的项，并改变原数组
    // this.setState({
    //   list: list
    // })
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })

  }

  getTodoItem() {
    return this.state.list.map((v, k) => {
      return (
        <div key={ k }>
          {/* 通过content={item} 将数据传给子组件 
            通过deleteItme将父组件的方法传给子组件
            将父组件的this，传递给子组件
        */}
          <TodoItem content={v} index={k} deleteItme={this.handleDelete}/>
             {/* return <li 
        key={ k }
        onClick={this.handleDelete.bind(this, k)}
        // 外层的{}是jsx的语法 内层的是个对象的{}
        dangerouslySetInnerHTML={{__html: v}}
        // 渲染html片段
      ></li> */}
        </div>
      )
   
    })
  }
}

export default TodoList