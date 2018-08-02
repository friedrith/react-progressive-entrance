import React from 'react'

import { AnimatedGroup, AnimatedItem } from '../../../src/index'

import style from './VariousSpeeds.style'

export default () => (
  <div className={style.VariousSpeeds}>
    <AnimatedGroup interval={50} maxIndex={100}>
      <AnimatedItem animationIndex={1}>
        <h1 className={style.title}>Speed 1</h1>
      </AnimatedItem>
      <AnimatedItem animationIndex={11}>
        <div className={style.item}>Item 1</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={21}>
        <div className={style.item}>Item 2</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={31}>
        <div className={style.item}>Item 3</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={41}>
        <h1 className={style.title}>Speed 2</h1>
      </AnimatedItem>
      <AnimatedItem animationIndex={42}>
        <div className={style.item}>Item 1</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={43}>
        <div className={style.item}>Item 2</div>
      </AnimatedItem>
      <AnimatedItem animationIndex={44}>
        <div className={style.item}>Item 3</div>
      </AnimatedItem>
    </AnimatedGroup>
  </div>
)
