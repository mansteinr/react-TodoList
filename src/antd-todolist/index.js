import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from '../store/index'
import * as actions from '../store/actionCreators'
import TodoListUI from './TodoListUI'

class AntdTodo extends Component{
  constructor(props) {
    super(props)
    // 获取store里面的数据
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItem = this.handleItem.bind(this)
    // 订阅 只要store里面数据改变 就会触发handleStoreChange函数
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return(
      <TodoListUI
        list={this.state.list}
        handleItem={this.handleItem}
        inputValue={this.state.inputValue}
        handleBtnClick={this.handleBtnClick}
        handleInputChange={this.handleInputChange}
      />
      // <div>
      //   <div>
      //     <Input
      //       onChange={this.handleInputChange}
      //       value={this.state.inputValue} 
      //       placeholder="Basic usage" 
      //       style={{width: '300px',marginRight: '10px'}}/>
      //     <Button type="primary" onClick={this.handleBtnClick}>submit</Button>
      //   </div>
      //   <List
      //     style={{width:'300px',marginTop: '10px'}}
      //     size="small"
      //     bordered
      //     dataSource={this.state.list}
      //     renderItem={(item, index) => <List.Item onClick={this.handleItem.bind(this, index)}>{item}</List.Item>}
      //   />
      // </div>
    )
  }

  componentDidMount() {
    // 异步请求
    const action = actions.getTodoList()
    // 直接将方法 发给store, 然后action里面的函数会自动执行
    // 这样就实现了异步发送求的目的 请求拿到数据之后 在函数体内再次派出action
    store.dispatch(action) 
  }

  handleInputChange(e) {
    // 构建action
    // const action = {
    //   type: types.CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = actions.getInputChangeAction(e.target.value)
    // 将action传给store 在reducer.js中 会自动接收action和state
    store.dispatch(action)
  }

  handleStoreChange() {
    // 当store里面的数据改变时 重新从store里面取一次数据
    // 然后用setState重新设置state 替换掉当前页面的state中的数据
    this.setState(store.getState())
  }
  // 提交的时候 让input框的内容 添加到list数组中
  handleBtnClick() {
    // const action = {
    //   type: types.ADD_TODO_ITEM
    // }
    const action = actions.getHanleBtnClickAction()
    store.dispatch(action)
  }

  handleItem(index) {
    // const action = {
    //   type: types.DELETE_TODO_ITEM,
    //   value: index
    // }
    const action = actions.getHandleItemAction(index)
    store.dispatch(action)
  }
}
export default AntdTodo