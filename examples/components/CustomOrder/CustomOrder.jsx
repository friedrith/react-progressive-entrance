import React from 'react'

import { AnimatedGroup, AnimatedItem } from '../../../src/index'

import style from './CustomOrder.style'

export default () => (
  <div className={style.CustomOrder}>
    <AnimatedGroup animation="fade">
      <AnimatedItem index={1}>
        <h1 className={style.title}>Custom order</h1>
      </AnimatedItem>
      <AnimatedItem index={5}>
        <div className={style.item}>Item 1</div>
      </AnimatedItem>
      <AnimatedItem index={3}>
        <div className={style.item}>Item 2</div>
      </AnimatedItem>
      <AnimatedItem index={4}>
        <div className={style.item}>Item 3</div>
      </AnimatedItem>
      <AnimatedItem index={2}>
        <div className={style.item}>Item 4</div>
      </AnimatedItem>
      <AnimatedItem index={1}>
        <div className={style.item}>Item 5</div>
      </AnimatedItem>
    </AnimatedGroup>
  </div>
)
