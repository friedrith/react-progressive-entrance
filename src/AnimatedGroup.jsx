import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Context from './Context'

/**
 * This component helps animated children items to display themself according to specific
 * order using a clock. Each children can also let the AnimatedGroup choose its
 * index of entrance. In this case, they will appear depending on their order
 * of registration.
 */
class AnimatedGroup extends Component {
  constructor(props) {
    super(props)
    this.registerChild = this.registerChild.bind(this)

    this.state = {
      currentIndex: 0,
    }

    const { pitch } = this.props

    // since there is no item registered for now, the max index if 0 + pitch
    this.maxIndex = pitch
    // this attribute describes the index for the next item with automatic indexation
    this.nextAutoIndex = 1

    this.chidren = {}
  }

  componentDidMount() {
    const { trigger } = this.props
    // if the trigger is mount, we start the clock now
    if (trigger === 'mount') {
      this.play()
    }
  }

  componentWillUnmount() {
    // stop the clock to clean up memory
    this.stop()
  }

  /**
   * registers a child animated item. It MAY increase the maximum index of the clock
   * and allocate an new index if the child index is specified as automatic
   * @param id <number> id of the children animated item. It is not used for now.
   * @param specifiedIndex <number|string> order of entrance of the children
   *      animated item. If set to true, the index is defined by the group instead
   * @param childrenCount <number> number of children in the child animated item
   * @return the index that the child item should use to display itself.
   *      It returns the index given in parameter if it is not set to automatic.
   *      Otherwise, it returns a computed index that the children item should use
   */
  registerChild(id, specifiedIndex = 'auto', childrenCount = 0) {
    let computedIndex = specifiedIndex
    if (specifiedIndex === 'auto') {
      // if the specified index is not a number but equals to 'auto',
      // the parent chooses the index
      computedIndex = this.nextAutoIndex
      // prepare the index for the next item that chosed automatic allocation.
      // the next will have the index of this one (and the children of this one)
      const { pitch } = this.props
      this.nextAutoIndex += childrenCount * pitch
    }

    // if the new index if bigger than current maximum index, we update the maximum index
    this.maxIndex = Math.max(this.maxIndex, computedIndex + childrenCount)

    return computedIndex
  }

  /**
   * starts the clock
   */
  play() {
    const { interval } = this.props
    // if it is called while the clock was already running it stops it
    // before starting a new clock
    this.stop()

    this.setState({
      currentIndex: 0,
    })
    this.timeout = setInterval(() => {
      // we increment the current index with the pitch
      let { currentIndex } = this.state
      const { pitch } = this.props
      currentIndex += pitch
      this.setState({
        currentIndex,
      })

      // if the clocks reached the maximum
      if (currentIndex === this.maxIndex) {
        this.stop()
      }
    }, interval)
  }

  /**
   * stop the clock
   */
  stop() {
    if (this.timeout) {
      // we check that the clock was running
      clearInterval(this.timeout)
      this.timeout = null
    }
  }

  render() {
    const { currentIndex } = this.state
    const { children, animation } = this.props
    // Provide a context to the children that containts a current index, the callback
    // to register and the default animation
    return (
      <Context.Provider
        value={{
          currentIndex,
          register: this.registerChild,
          animation,
        }}
      >
        {children}
      </Context.Provider>
    )
  }
}

AnimatedGroup.propTypes = {
  /**
   * the global animation to use if animated child item does not override it
   */
  animation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      // not used for now
      enter: PropTypes.string,
      enterActive: PropTypes.string,
    }),
  ]),
  /**
   * interval of time between 2 following animated entrance
   */
  interval: PropTypes.number,
  /**
   * children to display
   */
  children: PropTypes.node.isRequired,
  /**
   * interval between 2 following index
   */
  pitch: PropTypes.number,
  /**
   * how the clock must be started
   */
  trigger: PropTypes.string,
}

AnimatedGroup.defaultProps = {
  animation: 'fade',
  interval: 200,
  pitch: 1,
  trigger: 'mount',
}

export default AnimatedGroup
