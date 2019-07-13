import React, { Component } from 'react'
import { Input, Button, List } from 'antd'

class TodoListUI extends Component{
  render() {
    return (
      <div>
        <div>
          <Input
            onChange={this.props.handleInputChange}
            value={this.props.inputValue} 
            placeholder="Basic usage" 
            style={{width: '300px',marginRight: '10px'}}/>
          <Button type="primary" onClick={this.props.handleBtnClick}>submit</Button>
        </div>
        <List
          style={{width:'300px',marginTop: '10px'}}
          size="small"
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => <List.Item onClick={(index) => {this.props.handleItem(index)}}>{item}</List.Item>}
        />
      </div>
    )
  }
}

export default TodoListUI