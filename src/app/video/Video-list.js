/* global fetch */

import React, { Component } from 'react'
import Video from './Video'

const apiKey = 'AIzaSyBF1keCujrTqDlUeAoBYt7hl_YNpx63T9o'
const channelId = 'UCQm43Ot1CesxvhVICvguzqQ'

class VideoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      channelInfo: [],
      videoIds: []
    }
    this.fetchVideoIds = this.fetchVideoIds.bind(this)
  }

  componentDidMount () {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=Id&forUsername=LostCousinsBand&channelId=${channelId}`)
      .then(resp => resp.json())
      .then(json => this.setState({ channelInfo: json }))
      .then(this.fetchVideoIds)
  }
  fetchVideoIds () {
    const channelItems = this.state.channelInfo.items
    const videoIds = channelItems
      .filter(video => video.id.kind === 'youtube#video')
      .map(video => video.id.videoId)
    this.setState({videoIds})
  }
  render () {
    return (
      <Video videoIds={this.state.videoIds} />
    )
  }
}

export default VideoList
