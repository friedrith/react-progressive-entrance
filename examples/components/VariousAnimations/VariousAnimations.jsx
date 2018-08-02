import React from 'react'

import { AnimatedGroup, AnimatedItem } from '../../../src/index'

import style from './VariousAnimations.style'

export default () => (
  <div className={style.VariousSpeeds}>
    <AnimatedGroup maxIndex={100}>
      <AnimatedItem animationIndex={1} animation="fade">
        <h1 className={style.title}>Fade in</h1>
      </AnimatedItem>
      <AnimatedItem animationIndex={2}>
        <div className={style.item}>Item 1</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={3}>
        <div className={style.item}>Item 2</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={4} animation="slide-left">
        <h1 className={style.title}>Slide left in</h1>
      </AnimatedItem>
      <AnimatedItem animationIndex={5} animation="slide-left">
        <div className={style.item}>Item 3</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={6} animation="slide-left">
        <div className={style.item}>Item 4</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={7} animation="slide-right">
        <h1 className={style.title}>Slide right in</h1>
      </AnimatedItem>
      <AnimatedItem animationIndex={8} animation="slide-right">
        <div className={style.item}>Item 5</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={9} animation="slide-right">
        <div className={style.item}>Item 6</div>
      </AnimatedItem>
    </AnimatedGroup>
  </div>
)
