import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Context from './Context'

class AnimatedGroup extends Component {
  constructor(props) {
    super(props)
    this.registerChild = this.registerChild.bind(this)

    this.state = {
      currentStep: 0,
    }

    const { pitch } = this.props

    this.maxIndex = pitch
    this.nextIndexForAuto = 1

    this.chidren = {}
  }

  componentDidMount() {
    const { trigger } = this.props
    if (trigger === 'mount') {
      this.play()
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearInterval(this.timeout)
      this.timeout = null
    }
  }

  registerChild(id, index, childrenCount) {
    let nextIndex = index
    if (index === 'auto') {
      nextIndex = this.nextIndexForAuto
      this.nextIndexForAuto = this.nextIndexForAuto + childrenCount
    }

    this.maxIndex = Math.max(this.maxIndex, nextIndex + childrenCount)

    return nextIndex
  }

  play() {
    const { interval } = this.props
    if (this.timeout) {
      clearInterval()
    }

    this.setState({
      currentStep: 0,
    })
    this.timeout = setInterval(() => {
      let { currentStep } = this.state
      const { pitch } = this.props
      currentStep += pitch
      this.setState({
        currentStep,
      })


      if (currentStep === this.maxIndex) {
        clearInterval(this.timeout)
        this.timeout = null
      }
    }, interval)
  }

  render() {
    const { currentStep } = this.state
    const { children, animation } = this.props
    return (
      <Context.Provider value={{
        currentStep,
        animation,
        register: this.registerChild,
      }}
      >
        {children}
      </Context.Provider>
    )
  }
}

AnimatedGroup.propTypes = {
  animation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      enter: PropTypes.string,
      enterActive: PropTypes.string,
    }),
  ]),
  interval: PropTypes.number,
  children: PropTypes.node.isRequired,
  pitch: PropTypes.number,
  trigger: PropTypes.string,
}

AnimatedGroup.defaultProps = {
  animation: 'fade',
  interval: 200,
  pitch: 1,
  trigger: 'mount',
}

export default AnimatedGroup
