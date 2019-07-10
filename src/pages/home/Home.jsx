import React, { Component } from 'react'
import HomeSwiper from '../../components/homeSwiper/HomeSwiper'
import HomeGroupList from '../../components/HomeGroupList/HomeGroupList'

export class Home extends Component {
  render() {
    return (
      <div>
        <HomeSwiper/>
        <HomeGroupList/>
      </div>
    )
  }
}

export default Home
