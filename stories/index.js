import React from 'react';
import { Route, Link } from 'react-router-dom'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-router'

import SwitchCSSTransitionGroup from '../src/index.js'
import './styles.css';

storiesOf('SwitchCSSTransitionGroup', module)
  .addDecorator(StoryRouter())
  .add('SwitchCSSTransitionGroup', () => (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>about</Link></li>
        </ul>
        <Route render={(props)=>{
          return(
            <SwitchCSSTransitionGroup
                location={props.location}
                transitionName='example'
                transitionLeaveTimeout={500}
                transitionEnterTimeout={500}>
              <Route path='/about' render={()=><p>About</p>} />
              <Route path='/' exact render={()=><p>Home</p>} />
            </SwitchCSSTransitionGroup>
          )
        }} />
      </div>
  ));
