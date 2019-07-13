import React from 'react'
import { Input, Button, List } from 'antd'

// props父组件传递过来的
// 无状态组件 当一个组件只有一个render函数时 其性能高 因为其是个普通函数
const TodoListUI = (props) => {
  return (
    <div>
    <div>
      <Input
        onChange={props.handleInputChange}
        value={props.inputValue} 
        placeholder="Basic usage" 
        style={{width: '300px',marginRight: '10px'}}/>
      <Button type="primary" onClick={props.handleBtnClick}>submit</Button>
    </div>
    <List
      style={{width:'300px',marginTop: '10px'}}
      size="small"
      bordered
      dataSource={props.list}
      renderItem={(item, index) => <List.Item onClick={() => {props.handleItem(index)}}>{ item.userName ? item.userName : item }</List.Item>}
    />
  </div>
  )
}

// class TodoListUI extends Component{
//   render() {
//     return (
//       <div>
//         <div>
//           <Input
//             onChange={this.props.handleInputChange}
//             value={this.props.inputValue} 
//             placeholder="Basic usage" 
//             style={{width: '300px',marginRight: '10px'}}/>
//           <Button type="primary" onClick={this.props.handleBtnClick}>submit</Button>
//         </div>
//         <List
//           style={{width:'300px',marginTop: '10px'}}
//           size="small"
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => <List.Item onClick={(index) => {this.props.handleItem(index)}}>{item}</List.Item>}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI