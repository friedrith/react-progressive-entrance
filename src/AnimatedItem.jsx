import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Context from './Context'

let id = 0
// https://reactjs.org/docs/context.html#when-to-use-context
class AnimatedItem extends Component {
  componentDidMount() {
    id += 1
    const { index, children } = this.props
    if (this.context) {
      const { register } = this.context
      if (register) {
        this.index = register(id, index, React.Children
          .toArray(children).length)
      }
    }
  }

  render() {
    const {
      children,
      animation: childAnimation,
    } = this.props
    return (
      <Context.Consumer>
        { ({ currentStep, animation: parentAnimation }) => (React.Children
          .toArray(children)
          .map((child, currentIndex) => {
            const animation = childAnimation || parentAnimation
            let newClassName = `${child.props.className ? child.props.className : ''} ${animation}-enter`
            if (this.index + currentIndex <= currentStep) {
              newClassName = `${newClassName} ${animation}-enter-active`
            }
            const properties = {
              className: newClassName,
              key: `item-${currentIndex}`,
            }
            return React.cloneElement(child, properties)
          })
        )}
      </Context.Consumer>
    )
  }
}

AnimatedItem.contextType = Context

AnimatedItem.propTypes = {
  children: PropTypes.node,
  index: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['auto']),
  ]),
  animation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      enter: PropTypes.string,
      enterActive: PropTypes.string,
    }),
  ]),
}

AnimatedItem.defaultProps = {
  children: [],
  index: 'auto',
  animation: null,
}

export default AnimatedItem
