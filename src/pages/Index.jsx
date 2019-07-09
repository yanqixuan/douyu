import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Home from './home/Home'
import Live from './live/Live'
import Group from './group/Group'
import Video from './video/Video'
import Game from './game/Game'
import Bar from './bar/Bar'
export class Header extends Component {
  state = {
    items:[
      {
        text:'首页',
        path:'/home'
      },
      {
        text:'直播',
        path:'/live'
      },
      {
        text:'分类',
        path:'/group'
      },
      {
        text:'视频',
        path:'/video'
      },
      {
        text:'游戏',
        path:'/game'
      },
      {
        text:'鱼吧',
        path:'/bar'
      },
    ]
  }
  render() {
    const titleItems = this.state.items.map((item) => {
      return (
        <div className="index-tab" key={item.path}>
          <div className="tab-item">
            <NavLink className='nav-link' to={item.path}>
              <span>{item.text}</span>
            </NavLink>
          </div>
        </div>
      )
    })
    return (
      <Router>
        <div className='index-header'>
          <div className='index-title-pic'></div>
          {titleItems}
        </div>
        <div className='view'>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/live" component={Live} />
            <Route path="/group" component={Group} />
            <Route path="/video" component={Video} />
            <Route path="/game" component={Game} />
            <Route path="/bar" component={Bar} />
            {/* <Redirect from='/' to='/home' /> */}
          </Switch>

        </div>
      </Router>
    )
  }
}

export default Header
