import React, { Component } from 'react'
import LeftBlock from '../LeftBlock/LeftBlock'
import { NavLink } from 'react-router-dom'
import './LeftSilde.css'
import URL from '../../api/url/index'
import start from '../../api/http'
const request = require('request')

export class LeftSlide extends Component {
  state = {
    slideTitle:[
      {
        text:'我的关注'
      },
      {
        text:'排行榜'
      },
      {
        text:'页游中心'
      },
      {
        text:'赛事'
      }
    ]
  }
  componentWillMount () {
    // console.log(URL.LIVE_API)
    // request(LIVE_API,function(err,res,body){
    //   console.log(res)
    // })
    // start(URL.LIVE_API)
    // console.log(start(LIVE_API))
  }
  Control(){
    
  }
  render() {
    const leftTitle = this.state.slideTitle.map(item => {
      return (
        <div className="left-title">
          <NavLink className='left-title-text'>{item.text}</NavLink>
        </div>
      )
    })
    return (
      <div className='left-container'>
        {leftTitle}
        <LeftBlock/>
      </div>
    )
  }
}



export default LeftSlide
