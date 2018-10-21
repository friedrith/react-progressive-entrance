import React from 'react'

import { AnimatedGroup, AnimatedItem } from '../../../src/index'

import style from './FadeIn.style'

export default () => (
  <div className={style.FadeIn}>
    <AnimatedGroup>
      <AnimatedItem animationIndex={1}>
        <h1 className={style.title}>Fade in</h1>
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
        <div className={style.item}>Item 6</div>
        <div className={style.item}>Item 7</div>
      </AnimatedItem>
    </AnimatedGroup>
  </div>
)
