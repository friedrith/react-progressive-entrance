import React from 'react'

import { AnimatedGroup, AnimatedItem } from '../../../src/index'

import style from './SlideIn.style'

export default () => (
  <div className={style.SlideIn}>
    <AnimatedGroup animation="slide-left">
      <AnimatedItem animationIndex={1}>
        <h1 className={style.title}>Slide in</h1>
      </AnimatedItem>
      <AnimatedItem animationIndex={2}>
        <div className={style.item}>Item 1</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={3}>
        <div className={style.item}>Item 2</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={4}>
        <div className={style.item}>Item 3</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={5}>
        <div className={style.item}>Item 4</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={6}>
        <div className={style.item}>Item 5</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={7}>
        <div className={style.item}>Item 6</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={8}>
        <div className={style.item}>Item 7</div>
      </AnimatedItem>
    </AnimatedGroup>
  </div>
)
