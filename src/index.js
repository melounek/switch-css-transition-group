//@flow
import React, { Component } from 'react'
import { Switch, matchPath } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'

class SwitchCSSTransitionGroup extends Component {
  render () {
    let switchKey = undefined
    React.Children.forEach(this.props.children,
      (child) => {
        if(child !== null && matchPath(this.props.location.pathname,child.props) && switchKey === undefined){
          switchKey = child.props.path
        }
      }
    )
    let transProps = {}
    for(let key in this.props){
      if(key.indexOf('transition')===0){
        transProps[key] = this.props[key]
      }
    }
    return (
      <CSSTransitionGroup {...transProps}>
        <Switch key={switchKey} location={this.props.location}>
          {this.props.children}
        </Switch>
      </CSSTransitionGroup>
    )
  }
}

SwitchCSSTransitionGroup.propTypes = {
  location: PropTypes.object.isRequired,
}

export default SwitchCSSTransitionGroup
