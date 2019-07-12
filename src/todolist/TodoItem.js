import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { content, text } = this.props
    // this.props.content 接受父组件传递过来的信息
    // dangerouslySetInnerHTML={{__html: this.props.content}} 渲染html片段
    // return <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
    return <div onClick={this.handleClick}>{ text } - { content }</div>
  }
  
  handleClick() {
    // 调用父组件的方法 并把对应的索引传给父组件
    this.props.deleteItme(this.props.index)
  }
}

// 对父组件的传值 进行强校验
TodoItem.propTypes = {
  content: PropTypes.string,
  deleteItme: PropTypes.func,
  index: PropTypes.number,
  // 必须要传字符串text 上面的不是必传
  text: PropTypes.string.isRequired
}

// 对父组件的传值 进行默认值赋值
TodoItem.defaultProps = {
  text: 'hello world'
}

export default TodoItem