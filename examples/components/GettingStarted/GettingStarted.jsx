import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/styles/hljs'

import { AnimatedGroup, AnimatedItem } from '../../../src/index'

import style from './GettingStarted.style'

const install = `$ npm install react-progressive-entrance --save
$ yarn add react-progressive-entrance`

const code1 = `import { AnimatedGroup, AnimatedItem } from 'react-progressive-entrance'

export default () => (
  <div>
    <AnimatedGroup animation="fade">
      <AnimatedItem>
        <h1>Progressive Entrance</h1>
      </AnimatedItem>
      <div>
        <AnimatedItem>
          <span>Item 1</span>
        </AnimatedItem>
      </div>
      <div>
        <AnimatedItem animation="slide-left">
          <span>Item 2</span>
          <span>Item 3</span>
          <!-- if you put several items in the same AnimatedItem
            -- they will appear one after another
            -->
        </AnimatedItem>
      </div>
    </AnimatedGroup>
  </div>
)`

const code3 = `<AnimatedGroup animation="fade">
  <AnimatedItem index={3}>
    <span>Item 3</span>
  </AnimatedItem>
  <AnimatedItem index={2}>
    <span>Item 2</span>
  </AnimatedItem>
  <AnimatedItem index={1}>
    <span>Item 1</span>
  </AnimatedItem>
  <AnimatedItem index={4}>
    <span>Item 4</span>
  </AnimatedItem>
</AnimatedGroup>
`

export default () => (
  <div className={style.GettingStarted}>
    <AnimatedGroup interval={350} animation={null}>
      <AnimatedItem>
        <h1 className={style.title}>Progressive Entrance</h1>
        <h2 className={style.subtitle}>For React 16.6+</h2>
      </AnimatedItem>
      <div className={style.content}>
        <AnimatedItem>
          <h3 className={style.sectionTitle}>Introduction</h3>
          <p>
            <strong>React-progressive-entrance</strong> is a library to help you make react
            components appearing progressively when the page loads.
            With a smooth and progressive entrance, the {'user\'s'} attention is not overloaded by a too higher
            volume of information.
          </p>
          <p>
            In comparison with other react libraries
            like <a href="https://reactjs.org/docs/animation.html">ReactCSSTransitionGroup</a>
            , <strong>React-progressive-entrance</strong> uses
            new feature of React 16.6: context. It means that
            you can animate any descending child component of the group and not only
            the first level child.
            It allows you create sophisticated animated entrances more easily.
          </p>
          <h3 className={style.sectionTitle}>How to install?</h3>
          <p>
            <strong>React-progressive-entrance</strong> is available on npm:
          </p>
          <SyntaxHighlighter className={style.code} language="bash" style={docco}>{install}</SyntaxHighlighter>
          <p className={style.notice}>
            Notice that you need to use at least React 16.6+.
          </p>
          <h3 className={style.sectionTitle}>How to use?</h3>
          <p>
            <strong>React-progressive-entrance</strong> make components appear progressively
            by groups. Each group must be surround with a <strong>AnimatedGroup</strong>.
            By this way, you can define a global animation for all items in this group.
            Besides, nodes in a group can appear one after the other
            using <strong>AnimatedItem</strong>.
          </p>
          <SyntaxHighlighter className={style.code} language="javascript" style={docco}>{code1}</SyntaxHighlighter>
          <p>
            Thanks to the context feature, you can animate any descending component you want.
            You just need to put all your components inside a <code>AnimatedItem</code>.
          </p>
          <p>
            By default, nodes appear progressively in the order they are mounted in the DOM, but you
            can force the index of each <strong>AnimatedItem</strong>.
            To handle the order, <strong>AnimatedGroup</strong> increments an internal index that
            begins to zero and finish to the maximum index declared by
            an <strong>AnimatedItem</strong>.
            Once the group will be loaded it will start a chrono and will begin to show the items
            depending of the given index. When you don't declare a index
            yourself, <strong>AnimatedItem</strong> generates an index for
            each <strong>AnimatedItem</strong>.
          </p>
          <SyntaxHighlighter className={style.code} language="javascript" style={docco}>{code3}</SyntaxHighlighter>
          <p>
            You can also use index to customize the speed of the progress on the fly in
            the <strong>AnimatedGroup</strong> by using one index on two.
          </p>
        </AnimatedItem>
      </div>
    </AnimatedGroup>
  </div>
)
