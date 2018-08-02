import React from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatedGroup, AnimatedItem } from '../../../../src/index'

import style from './Nav.style'

export default () => (
  <div className={style.Nav}>
    <div className={style.background} />
    <div className={style.content}>
      <AnimatedGroup animation="slide-left" maxSteps={15}>
        <AnimatedItem animationIndex={1}>
          <h1 className={style.title}>
            Progressive Entrance
          </h1>
        </AnimatedItem>
        <div className={style.routes}>
          <AnimatedItem animationIndex={2}>
            <NavLink to="/" className={style.link} activeClassName={style.active}>
              Getting started
            </NavLink>
          </AnimatedItem>
          <AnimatedItem animationIndex={3}>
            <div className={style.item}>
              Examples
            </div>
          </AnimatedItem>
          <AnimatedItem animationIndex={4}>
            <NavLink to="/fade-in" className={style.sublink} activeClassName={style.active}>
              Fade in
            </NavLink>
          </AnimatedItem>
          <AnimatedItem animationIndex={5}>
            <NavLink to="/slide-in" className={style.sublink} activeClassName={style.active}>
              Slide in
            </NavLink>
          </AnimatedItem>
          <AnimatedItem animationIndex={6}>
            <NavLink to="/various-speeds" className={style.sublink} activeClassName={style.active}>
              Various speeds
            </NavLink>
          </AnimatedItem>
          <AnimatedItem animationIndex={7}>
            <NavLink to="/various-animations" className={style.sublink} activeClassName={style.active}>
              Various animations
            </NavLink>
          </AnimatedItem>
          <AnimatedItem animationIndex={8}>
            <NavLink to="/sophisticated" className={style.sublink} activeClassName={style.active}>
              Sophisticated
            </NavLink>
          </AnimatedItem>
          <AnimatedItem animationIndex={9}>
            <NavLink to="/api" className={style.link} activeClassName={style.active}>
              API
            </NavLink>
          </AnimatedItem>
          {/* <AnimatedItem animationIndex={10}>
            <NavLink to="/customize" className={style.link} activeClassName={style.active}>
              Customize
            </NavLink>
          </AnimatedItem> */}
        </div>
      </AnimatedGroup>
    </div>
  </div>
)
