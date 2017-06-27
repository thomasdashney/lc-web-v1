import React, { Component } from 'react'

import { trackPageView } from 'services/analytics'
import css from './style.css'

@trackPageView()
class Video extends Component {
  render () {
    return (
      <div className={css.video}>
        <div className={css.videoContainer}>
          <iframe
            src='//www.youtube.com/embed/uqKBunx5y1w'
            frameBorder='0'
            allowFullScreen
          />
        </div>
        <div className={css.videoContainer}>
          <iframe
            src='//www.youtube.com/embed/smiBXf5sfj4'
            frameBorder='0'
            allowFullScreen
          />
        </div>
        <div className={css.videoContainer}>
          <iframe
            src='//player.vimeo.com/video/135092427'
            frameBorder='0'
            allowFullScreen
          />
        </div>
      </div>
    )
  }
}

export default Video
