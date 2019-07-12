import React from 'react'
import { CSSTransition } from 'react-transition-group'

class CSStransition extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleToggole = this.handleToggole.bind(this)
  }
  render() {
    // unmountOnExit 将dom 移除
    return (
      <React.Fragment>
        <CSSTransition
          in={this.state.show}
          className="fade"
          unmountOnExit
          timeout={1000}
          onEntered={(el) =>{el.style.color="red"}}
          appear={true}
        >
          <div>this is CSStransition </div>
        </CSSTransition>
        <button onClick={ this.handleToggole }>toggle</button>
      </React.Fragment>
    )
  }
  handleToggole() {
    this.setState(() => ({
      show: !this.state.show
    }))
  }
}

export default CSStransition
