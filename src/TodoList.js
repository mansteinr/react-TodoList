
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
        <input
          // 原生DOMchange事件绑定为onchange
          // 绑定chang事件, 需要绑定this，否则this指向不是该组件
          onChange={this.handleInputChange.bind(this)}
          value={this.state.inputValue}/>
          {/* 绑定提交事件 */}
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        <ul>
          {
            this.state.list.map((v, k) => {
              return <li 
                key={ k }
                onClick={this.handleDelete.bind(this, k)}
              >{ v }</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      // 点击的时候 list数组内容新增 输入项
      list: [...this.state.list, this.state.inputValue],
      // 情况inputValue
      inputValue: ''
    })
  }

  // 删除事件
  handleDelete(index) {
    let list = [...this.state.list]
    list.splice(index, 1)
    //1. 不希望直接修改state里面的数据 故先拷贝出来
    //2. splice 删除后返回的是被删除的项，并改变原数组
    this.setState({
      list: list
    })
  }
}

export default TodoList