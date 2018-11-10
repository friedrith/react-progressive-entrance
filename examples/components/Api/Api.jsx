import React from 'react'

import { AnimatedGroup, AnimatedItem } from '../../../src/index'

import style from './Api.style'

export default () => (
  <div className={style.Api}>
    <AnimatedGroup interval={350}>
      <AnimatedItem animationIndex={1}>
        <h1 className={style.title}>API</h1>
      </AnimatedItem>
      <div className={style.content}>
        <AnimatedItem animationIndex={2}>
          <h3 className={style.sectionTitle}>AnimatedGroup</h3>
        </AnimatedItem>
        <AnimatedItem animationIndex={3}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>
                  Property
                </th>
                <th>
                  Type
                </th>
                <th>
                  Default Value
                </th>
                <th>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  animation
                </td>
                <td>
                  string
                </td>
                <td>
                  fade
                </td>
                <td className={style.description}>
                  The animation when the components appear.
                  Only <strong>fade</strong>
                  , <strong>slide-left</strong> and <strong>slide-right</strong> natively
                  exists but you can add your own
                  animations.
                </td>
              </tr>
              <tr>
                <td>
                  interval
                </td>
                <td>
                  number
                </td>
                <td>
                  200
                </td>
                <td className={style.description}>
                  It is the minimum timing between 2 animations.
                </td>
              </tr>
              <tr>
                <td>
                  pitch
                </td>
                <td>
                  number
                </td>
                <td>
                  1
                </td>
                <td className={style.description}>
                  After each interval of time, the threshold of
                  the <strong>AnimatedGroup</strong> is
                  incremented by the pitch. Most of the time, this value {'doesn\'t'} to be
                  changed. However, it may be useful when you want to reinsert new items between
                  existing ones.
                </td>
              </tr>
              <tr>
                <td>
                  trigger
                </td>
                <td>
                  string
                </td>
                <td>
                  mount
                </td>
                <td className={style.description}>
                  Define the way the animation will be triggered.
                </td>
              </tr>
            </tbody>
          </table>
        </AnimatedItem>
        <AnimatedItem animationIndex={4}>
          <h3 className={style.sectionTitle}>AnimatedItem</h3>
        </AnimatedItem>
        <AnimatedItem animationIndex={5}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>
                  Property
                </th>
                <th>
                  Type
                </th>
                <th>
                  Default Value
                </th>
                <th>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  animation
                </td>
                <td>
                  string
                </td>
                <td>
                  null
                </td>
                <td className={style.description}>
                  This value overloads values defined by the <strong>AnimatedGroup</strong> only
                  for the current item if it is defined.
                </td>
              </tr>
              <tr>
                <td>
                  index
                </td>
                <td>
                  number/string
                </td>
                <td>
                  'auto'
                </td>If set to 'auto', the nodes
                  will be displayed according to the order they are mounted into the DOM.
                <td className={style.description}>
                  The iteration value of the <strong>AnimatedGroup</strong> that will
                  trigger the animation of the current item. If set to 'auto', the nodes
                  will be displayed according to the order they are mounted into the DOM.
                </td>
              </tr>
            </tbody>
          </table>
        </AnimatedItem>
      </div>
    </AnimatedGroup>
  </div>
)
