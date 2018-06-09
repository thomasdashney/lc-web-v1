import React, { Component } from 'react'

import { trackPageView } from 'services/analytics'
import css from './style.css'
import YouTube from 'react-youtube'

const Video = (props) => {
  return (
    <div>
      {props.videoIds.map((videoId) => {
        return (
          <YouTube
            options={props.options}
            videoId={videoId}
            onReady={this._onReady}
        />)
      })}
    </div>
  )
}

export default Video
