# react-progressive-entrance

React components to create nice-looking progressive entrance

In comparison with other react libraries
like [ReactCSSTransitionGroup](https://reactjs.org/docs/animation.html),
**React-progressive-entrance** uses
new feature of React 16.6: context. It means that
you can animate any descending child component of the group and not only
the first level child.
It allows you create sophisticated animated entrances more easily.

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
      <AnimatedItem index="1">
        <h1>Title</h1>
      </AnimatedItem>

      <div>
        <!--
          -- Thanks to the context API the children items {'don\'t'} need to be direct children,
          -- They can be in other html elements
         -->
        <AnimatedItem index="2">
          <span>Item 1</span> <!-- each content must inside a html element -->
        </AnimatedItem>

        <AnimatedItem index="3" animation="slide-left"><!--you can override the animation -->
          <span>Item 1</span>
        </AnimatedItem>

        <!-- if you put several html elements in an AnimatedItem, it will automatically
          -- handle it as if there was an AnimatedItem for each element
          -->
        <AnimatedItem index="3" >
          <span>Item 1</span>
          <span>Item 2</span>
        </AnimatedItem>
        <!-- is equivalent to -->
        <AnimatedItem index="3" >
          <span>Item 1</span>
        </AnimatedItem>
        <AnimatedItem index="4" >
          <span>Item 2</span>
        </AnimatedItem>
        <!-- finally you are not forced to put the index
          -- If you do that, items will automatically appear depending of their
          -- order of mounting into the DOM
          -->
        <AnimatedItem>
          <span>Item 1</span>
        </AnimatedItem>
        <AnimatedItem >
          <span>Item 2</span>
        </AnimatedItem>
      </div>
    </AnimatedGroup>
  </div>
)

```

You also need to define your class in your stylesheet

```css
/* for fade animation */
.fade-enter {
  /* before animation */
  opacity: 0;
}

.fade-enter-active {
  /* after animation */
  opacity: 1;
  transition: opacity 250ms ease-in;
}

/* for slide from left animation */
.slide-left-enter {
  /* before animation */
  transform: translateX(-2000px);
}

.slide-left-enter-active {
  /* after animation */
  transform: translateX(0);
  transition: transform 700ms ease-out;
}

/* for slide from right animation */
.slide-right-enter {
  /* before animtion */
  transform: translateX(2000px);
}

.slide-right-enter-active {
  /* after animation */
  transform: translateX(0);
  transition: transform 700ms ease-out;
}
```

You can of course add your own animations and refers to it thanks to the property animation.

## API

### AnimatedGroup

| Property  | Type   | Default value | Description                                                                                                                                                                                                                                             |
| --------- | ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| animation | string | fade          | The animation when the components appear. Only **fade**, **slide-left** and **slide-right** natively exists but you can add your own animations.                                                                                                        |
| interval  | number | 200           | It is the minimum timing between 2 animations                                                                                                                                                                                                           |
| pitch     | number | 1             | After each interval of time, the threshold of the **AnimatedGroup** is incremented by the pitch. Most of the time, this value doesn't need to be changed. However, it may useful when you want to reinsert new items between existing ones.             |
| trigger   | string | mount         | Define the way the animation will be triggered. With the value 'mount', the animation will started as soon as the **AnimatedGroup** is mounted. Otherwise, you can manually trigger the animation using the function **play** of the **AnimatedGroup**. |

### AnimatedItem

| Property  | Type          | Default value | Description                                                                                                                                                                                           |
| --------- | ------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| animation | string        | fade          | This value overloads value defined by **AnimatedGroup** only for the current item if it is defined.                                                                                                   |
| index     | number/string | 'auto'        | The iteration value of the **AnimatedGroup** that will trigger the animation of the current item. If set to 'auto', the nodes will be displayed according to the order they are mounted into the DOM. |

## Changelog

### Version 0.4.0

- maxIndex is now set up automatically
- create a 'auto' value for index
- rename `animationIndex` for `index`

### Version 0.3.0

- Several nodes children of a `AnimatedItem` are now displayed progressively

### Version 0.2.0

- Release of the first version
