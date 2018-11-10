import React from 'react'

import { AnimatedGroup, AnimatedItem } from '../../../src/index'

import style from './SlideIn.style'

export default () => (
  <div className={style.SlideIn}>
    <AnimatedGroup animation="slide-left">
      <AnimatedItem>
        <h1 className={style.title}>Slide in</h1>
        <div className={style.item}>Item 1</div>
        <div className={style.item}>Item 2</div>
        <div className={style.item}>Item 3</div>
        <div className={style.item}>Item 4</div>
        <div className={style.item}>Item 5</div>
        <div className={style.item}>Item 6</div>
        <div className={style.item}>Item 7</div>
      </AnimatedItem>
    </AnimatedGroup>
  </div>
)
