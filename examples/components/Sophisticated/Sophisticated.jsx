import React from 'react'

import { AnimatedGroup, AnimatedItem } from '../../../src/index'
import Legend from './Legend'
import style from './Sophisticated.style'

export default () => (
  <div className={style.SlideIn}>
    <AnimatedGroup interval={100} maxIndex={200}>
      <AnimatedItem animationIndex={63}>
        <h1 className={style.title}>
          <strong>Progressive entrance</strong> also works on sophisticated structure like SVG.
        </h1>
      </AnimatedItem>
      <svg className={style.chart} height="1000" width="2000" viewBox="-500 200 2000 1000">
        <defs>
          <clipPath id="clip">
            <circle cx="500" cy="500" r="400" className={style.disk} />
          </clipPath>
        </defs>
        <AnimatedItem animationIndex={10}>
          <path
            d="M 800 0 L500 500 L0 500 L0 0 Z"
            clipPath="url(#clip)"
            className={`${style.path} ${style.curious}`}
          />
        </AnimatedItem>
        <AnimatedItem animationIndex={20}>
          <path
            d="M 800 0 L1000 0 L1000 500 L500 500 Z"
            clipPath="url(#clip)"
            className={`${style.path} ${style.reliable}`}
          />
        </AnimatedItem>
        <AnimatedItem animationIndex={30}>
          <path
            d="M 1000 500 L1000 1000 L800 1000 L500 500 Z"
            clipPath="url(#clip)"
            className={`${style.path} ${style.hardWork}`}
          />
        </AnimatedItem>
        <AnimatedItem animationIndex={40}>
          <path
            d="M 800 1000 L200 1000 L500 500 Z"
            clipPath="url(#clip)"
            className={`${style.path} ${style.empathic}`}
          />
        </AnimatedItem>
        <AnimatedItem animationIndex={50}>
          <path
            d="M 200 1000 L500 500 L0 500 L0 1000 Z"
            clipPath="url(#clip)"
            className={`${style.path} ${style.ambitious}`}
          />
        </AnimatedItem>
        <AnimatedItem animationIndex={13}>
          <Legend
            path="M 350 350 L200 200 L0 200"
            align="end"
            x={-20}
            y={210}
            label="Alpha"
            subLabel="Lorem ipsum dolor\nsit amet"
          />
        </AnimatedItem>
        <AnimatedItem animationIndex={23}>
          <Legend
            path="M 700 400 L900 200 L1000 200"
            align="start"
            x={1020}
            y={210}
            label="Beta"
            subLabel="Lorem ipsum dolor\nsit amet"
          />
        </AnimatedItem>
        <AnimatedItem animationIndex={33}>
          <Legend
            path="M 700 600 L900 800 L1000 800"
            align="start"
            x={1020}
            y={810}
            label="Gamma"
            subLabel="Lorem ipsum dolor\nsit amet"
          />
        </AnimatedItem>
        <AnimatedItem animationIndex={43}>
          <Legend
            path="M 500 800 500 1000"
            align="middle"
            x={500}
            y={1050}
            label="Delta"
            subLabel="Lorem ipsum dolor\nsit amet"
          />
        </AnimatedItem>
        <AnimatedItem animationIndex={53}>
          <Legend
            path="M 300 650 L150 850 L0 850"
            align="end"
            x={-20}
            y={860}
            label="Epsilon"
            subLabel="Lorem ipsum dolor\nsit amet"
          />
        </AnimatedItem>
      </svg>

    </AnimatedGroup>
  </div>
)
