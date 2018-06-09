import React from 'react'
import YouTube from 'react-youtube'

const youtubeOptions = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1
  }
}

const Video = (props) => {
  return (
    <div>
      {props.videoIds.map((videoId) => {
        return (
          <YouTube
            options={youtubeOptions}
            videoId={videoId}
            onReady={this._onReady}
        />)
      })}
    </div>
  )
}

export default Video
