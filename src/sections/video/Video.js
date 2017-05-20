import React from 'react'

import css from './style.scss'

const Video = () => (
  <div className={css.video}>
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

export default Video
