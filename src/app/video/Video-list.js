/* global fetch */

import React, { Component } from 'react'
import Video from './Video'

const apiKey = 'AIzaSyBF1keCujrTqDlUeAoBYt7hl_YNpx63T9o'
const channelId = 'UCQm43Ot1CesxvhVICvguzqQ'

class VideoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      test: 'test props string',
      channelInfo: [],
      videoIds: [],
      options: {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      }
    }
    this.state.fetchVideoIds = this.fetchVideoIds.bind(this)
  }
  componentDidMount () {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=Id&forUsername=LostCousinsBand&channelId=${channelId}`)
      .then(resp => resp.json())
      .then(json => this.setState({ channelInfo: json }))
      .then(this.state.fetchVideoIds)
  }
  fetchVideoIds () {
    const videoArr = this.state.channelInfo.items
    let videoIds = videoArr.filter((video) => {
      if (video.id.kind === 'youtube#video') {
        return video
      }
    })
    videoIds = videoIds.map((video) => {
      return video.id.videoId
    })
    this.setState({videoIds: [...videoIds]})
  }
  render () {
    return (
      <Video videoIds={this.state.videoIds} options={this.state.options} />
    )
  }
}

export default VideoList
