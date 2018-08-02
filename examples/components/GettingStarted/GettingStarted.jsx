import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/styles/hljs'

import { AnimatedGroup, AnimatedItem } from '../../../src/index'

import style from './GettingStarted.style'

const install = `$ npm install react-progressive-entrance --save
$ yarn add react-progressive-entrance`

const code = `import { AnimatedGroup, AnimatedItem } from 'react-progressive-entrance'

export default () => (
  <div>
    <AnimatedGroup animation="fade">
      <AnimatedItem animationIndex={1}>
        <h1>Progressive Entrance</h1>
      </AnimatedItem>
      <div>
        <AnimatedItem animationIndex={2}>
          <span>Item 1</span>
        </AnimatedItem>
      </div>
      <div>
        <AnimatedItem animationIndex={3} animation="slide-left">
          <span>Item 2</span>
        </AnimatedItem>
      </div>
    </AnimatedGroup>
  </div>
)`

export default () => (
  <div className={style.GettingStarted}>
    <AnimatedGroup interval={350} maxIndex={20}>
      <AnimatedItem animationIndex={1}>
        <h1 className={style.title}>Progressive Entrance</h1>
      </AnimatedItem>
      <AnimatedItem animationIndex={2}>
        <h2 className={style.subtitle}>For React 16.3+</h2>
      </AnimatedItem>
      <div className={style.content}>
        <AnimatedItem animationIndex={3}>
          <h3 className={style.sectionTitle}>Introduction</h3>
        </AnimatedItem>
        <AnimatedItem animationIndex={4}>
          <p>
            <strong>React-progressive-entrance</strong> is a library to help you make react
            components appearing progressively when the page loads.
            With a smooth and progressive entrance, the {'user\'s'} attention is not overloaded by a too higher
            volume of information.
          </p>
        </AnimatedItem>
        <AnimatedItem animationIndex={5}>
          <p>
            In comparison with other react libraries
            like <a href="https://reactjs.org/docs/animation.html">ReactCSSTransitionGroup</a>
            , <strong>React-progressive-entrance</strong> uses
            new feature of React 16.3: context. It means that
            you can animate any descending child component of the group and not only
            the first level child.
            It allows you create sophisticated animated entrances more easily.
          </p>
        </AnimatedItem>
        <AnimatedItem animationIndex={6}>
          <h3 className={style.sectionTitle}>How to install?</h3>
        </AnimatedItem>
        <AnimatedItem animationIndex={7}>
          <p>
            <strong>React-progressive-entrance</strong> is available on npm:
          </p>
        </AnimatedItem>
        <AnimatedItem animationIndex={8}>
          <SyntaxHighlighter className={style.code} language="bash" style={docco}>{install}</SyntaxHighlighter>
        </AnimatedItem>
        <AnimatedItem animationIndex={9}>
          <p className={style.notice}>
            Notice that you need to use at least React 16.3+.
          </p>
        </AnimatedItem>
        <AnimatedItem animationIndex={10}>
          <h3 className={style.sectionTitle}>How to use?</h3>
        </AnimatedItem>
        <AnimatedItem animationIndex={10}>
          <p>
            When <strong>AnimatedGroup</strong> is mounted, it starts a incrementation.
            When a animationIndex of a <strong>AnimatedItem</strong> is greater than
            the incrementation value, the item appears.
          </p>
        </AnimatedItem>
        <AnimatedItem animationIndex={11}>
          <p>
            <strong>Progressive entrance</strong> is composed of groups and items:
          </p>
        </AnimatedItem>
        <AnimatedItem animationIndex={12}>
          <SyntaxHighlighter className={style.code} language="javascript" style={docco}>{code}</SyntaxHighlighter>
        </AnimatedItem>
        <AnimatedItem animationIndex={13}>
          <p>
            Thanks to the context feature, you can animate any descending component you want.
            You just need to put all your components inside a <code>AnimatedGroup</code>. Each
            component you want to animate must also be in a separated <code>AnimatedItem</code>
            with a given <code>animatedIndex</code>.
          </p>
          <p>
            Once the group will be loaded it will start a chrono and will begin to show the items
            depending of the given index.
          </p>
        </AnimatedItem>
      </div>
    </AnimatedGroup>
  </div>
)
