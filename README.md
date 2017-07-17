# SwitchCSSTransitionGroup

Combination of `ReactCSSTransitionGroup` and `Switch` for triggering transitions between routes.

## Install

```
npm i --save switch-css-transition-group
```

## Usage

```
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
