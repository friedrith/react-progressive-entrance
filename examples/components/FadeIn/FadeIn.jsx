import React from 'react'

import { AnimatedGroup, AnimatedItem } from '../../../src/index'

import style from './FadeIn.style'

export default () => (
  <div className={style.FadeIn}>
    <AnimatedGroup>
      <AnimatedItem>
        <h1 className={style.title}>Fade in</h1>
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
