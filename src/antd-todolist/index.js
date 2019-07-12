import React, { Component } from 'react'
import 'antd/dist/antd.css'

import { Input, Button, List } from 'antd'
import store from '../store/index'

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ]
class AntdTodo extends Component{
  constructor(props) {
    super(props)
    this.state = store.getState()
  }
  render() {
    return(
      <div>
        <div>
          <Input value={this.state.inputValue} placeholder="Basic usage" style={{width: '300px',marginRight: '10px'}}/>
          <Button type="primary">submit</Button>
        </div>
        <List
          style={{width:'300px',marginTop: '10px'}}
          size="small"
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    )
  }
}

export default AntdTodo