import React, { Component } from 'react'
import './ListItem.css'

export class ListItem extends Component {
  state = {
    src: 'https://rpic.douyucdn.cn/asrpic/190710/288016_2056.png/webpdy1',
    title: '亚洲对抗赛总决赛直播',
    group: '英雄联盟',
    master: '英雄联盟赛事',
    hot: 134
  }
  render() {
    return (
      <div className="ListItem-container">
        <div className="ListItem-img">
          <img src={this.state.src} />
        </div>
        <div className="ListItem-content">
          <div className="ListItem-title">
            <h2>{this.state.title} <span className="ListItem-group">{this.state.group}</span></h2>
          </div>
          <div className="ListItem-info">
            <h3><img src="" alt=""/><span className="ListItem-master">{this.state.master}</span><span>{this.state.hot}万</span></h3>
          </div>
        </div>
      </div>
    )
  }
}

export default ListItem
