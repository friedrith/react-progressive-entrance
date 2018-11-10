import React from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatedGroup, AnimatedItem } from '../../../../src/index'

import style from './Nav.style'

export default () => (
  <div className={style.Nav}>
    <div className={style.background} />
    <div className={style.content}>
      <AnimatedGroup animation="slide-left">
        <AnimatedItem>
          <h1 className={style.title}>
            Progressive Entrance
          </h1>
        </AnimatedItem>
        <div className={style.routes}>
          <AnimatedItem>
            <NavLink to="/" className={style.link} activeClassName={style.active}>
              Getting started
            </NavLink>
            <div className={style.item}>
              Examples
            </div>
            <NavLink to="/fade-in" className={style.sublink} activeClassName={style.active}>
              Fade in
            </NavLink>
            <NavLink to="/slide-in" className={style.sublink} activeClassName={style.active}>
              Slide in
            </NavLink>
            <NavLink to="/various-animations" className={style.sublink} activeClassName={style.active}>
              Various animations
            </NavLink>
            <NavLink to="/custom-order" className={style.sublink} activeClassName={style.active}>
              Custom order
            </NavLink>
            <NavLink to="/various-speeds" className={style.sublink} activeClassName={style.active}>
              Various speeds
            </NavLink>
            <NavLink to="/sophisticated" className={style.sublink} activeClassName={style.active}>
              Sophisticated
            </NavLink>
            <NavLink to="/api" className={style.link} activeClassName={style.active}>
              API
            </NavLink>
          </AnimatedItem>
        </div>
      </AnimatedGroup>
    </div>
  </div>
)
