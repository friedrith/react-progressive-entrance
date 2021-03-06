import React from 'react'

import { AnimatedGroup, AnimatedItem } from '../../../src/index'

import style from './VariousAnimations.style'

export default () => (
  <div className={style.VariousSpeeds}>
    <AnimatedGroup>
      <AnimatedItem animation="fade">
        <h1 className={style.title}>Fade in</h1>
        <div className={style.item}>Item 1</div>
        <div className={style.item}>Item 2</div>
      </AnimatedItem>
      <AnimatedItem animation="slide-left">
        <h1 className={style.title}>Slide left in</h1>
        <div className={style.item}>Item 3</div>
        <div className={style.item}>Item 4</div>
      </AnimatedItem>
      <AnimatedItem animation="slide-right">
        <h1 className={style.title}>Slide right in</h1>
        <div className={style.item}>Item 5</div>
        <div className={style.item}>Item 6</div>
      </AnimatedItem>
    </AnimatedGroup>
  </div>
)
