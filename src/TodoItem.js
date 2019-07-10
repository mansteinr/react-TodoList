import React from 'react'

class TodoItem extends React.Component{
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { content } = this.props
    // this.props.content 接受父组件传递过来的信息
    // dangerouslySetInnerHTML={{__html: this.props.content}} 渲染html片段
    // return <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
    return <div onClick={this.handleClick}>{ content }</div>
  }
  
  handleClick() {
    // 调用父组件的方法 并把对应的索引传给父组件
    this.props.deleteItme(this.props.index)
  }
}

export default TodoItem