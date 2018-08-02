# react-progressive-entrance
React components to create nice-looking progressive entrance

## Getting started

> Before installing it, notice that this library only works with **React 16.3+** because it uses the API of context.

```bash
# with npm
$ npm install react-progressive-entrance --save
$ yarn add react-progressive-entrance
```

## How to use it

Like some other animation libraries in React, **react-progressive-entrance** is based on 2 kind of components:
a parent item and children items.

```js
import { AnimatedGroup, AnimatedItem } from 'react-progressive-entrance'

export default = () => (
  <div>
    <AnimatedGroup animation="fade">
      <AnimatedItem animationIndex="1">
        <h1>Title</h1>
      </AnimatedItem>

      <div>
        <!--
          -- Thanks to the context API the children items {'don\'t'} need to be direct children,
          -- They can be in other html elements
         -->
        <AnimatedItem animationIndex="2">
          <span>Item 1</span> <!-- each content must inside a html element -->
        </AnimatedItem>

        <AnimatedItem animationIndex="3" animation="slide-left"><!--you can override the animation -->
          <span>Item 1</span>
        </AnimatedItem>
      </div>
    </AnimatedGroup>
  </div>
)

```

You also need to define your class in your stylesheet

```css
/* for fade animation */
.fade-enter { /* before animation */
  opacity: 0;
}

.fade-enter-active { /* after animation */
  opacity: 1;
  transition: opacity 250ms ease-in;
}

/* for slide from left animation */
.slide-left-enter { /* before animation */
  position: relative;
  right: 2000px;
}

.slide-left-enter-active { /* after animation */
  right: 0px;
  transition: right 700ms ease-out;
}

/* for slide from right animation */
.slide-right-enter { /* before animtion */
  position: relative;
  left: 2000px;
}

.slide-right-enter-active { /* after animation */
  left: 0px;
  transition: left 700ms ease-out;
}

```

You can of course add your own animations and refers to it thanks to the property animation.
