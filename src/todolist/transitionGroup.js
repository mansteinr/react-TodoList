import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class TransitionGroupTest extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.handleTransitionToggole = this.handleTransitionToggole.bind(this)
  }
  render() {
    return (
      <React.Fragment>
        <TransitionGroup>
          {
            this.state.list.map((v, k) => {
              return(
                <CSSTransition
                  className="fade"
                  unmountOnExit
                  timeout={1000}
                  onEntered={(el) =>{el.style.color="red"}}
                  appear={true}
                  key={k}
                >
                  <div>this is TransitionGroup </div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={ this.handleTransitionToggole }>handleTransitionToggole</button>
      </React.Fragment>
    )
  }
  handleTransitionToggole() {
    this.setState((prevState) => ({
      list: [...prevState.list, 'item']
    }))
  }
}

export default TransitionGroupTest
