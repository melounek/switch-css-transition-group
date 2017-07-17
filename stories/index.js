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
          <li><Link to='/user/123'>User/:id</Link></li>
          <li><Link to='/about'>about</Link></li>
        </ul>
        <Route render={(props)=>{
          return(
            <SwitchCSSTransitionGroup
            location={props.location}
            transitionName='example'
            transitionLeaveTimeout={500}
            transitionEnterTimeout={500}>
              <Route path='/about' render={({match})=>(
                <div>
                  <p>
                    About &nbsp;
                    {console.log(match)}
                    <Link to={match.path}>first topic</Link> &nbsp;
                    <Link to={match.path + '/second-topic'}>second topic</Link>
                  </p>
                  <SwitchCSSTransitionGroup
                  location={props.location}
                  transitionName='example'
                  transitionLeaveTimeout={500}
                  transitionEnterTimeout={500}>
                    <Route path={match.path} exact render={()=><p>First topic</p>} />
                    <Route path={match.path + '/second-topic'} render={()=><p>Second topic</p>} />
                  </SwitchCSSTransitionGroup>
                </div>
              )} />
              <Route path='/user/:id' render={()=><p>User with specific ID: 123</p>} />
              <Route path='/' exact render={()=><p>Home</p>} />
            </SwitchCSSTransitionGroup>
          )
        }} />
      </div>
  ));
