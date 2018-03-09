# SwitchCSSTransitionGroup

Combination of `ReactCSSTransitionGroup` and `Switch` for triggering transitions between routes.

There is no `key` param because it is changing automatically based on matching routes.

## Install

```bash
npm i --save switch-css-transition-group
```

## Demo

[storybook online](https://melounek.github.io/switch-css-transition-group)

or locally you can try `npm run storybook`

## Usage

```js
import SwitchCSSTransitionGroup from 'switch-css-transition-group'

// your code

<SwitchCSSTransitionGroup
    location={history.location}
    transitionName='example'
    transitionLeaveTimeout={300}
    transitionEnterTimeout={500}>
  <Route path='/' exact component={Home} />
  <Route path='/about' component={About} />
</SwitchCSSTransitionGroup>
```

Similar like if you are using `ReactCSSTransitionGroup` and `Switch` there are available properties:
 - `location` - your history.location object from `react-router`
 - `transition*` - params from [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html)

On this [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html) docs page
you will also find how to deal with CSS and how customize more the transitions.
