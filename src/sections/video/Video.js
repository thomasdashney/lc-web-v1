import React from 'react'

import css from './style.scss'

const Video = () => (
  <div className={css.video}>
    <div className={css.videoContainer}>
      <iframe
        src='//www.youtube.com/embed/smiBXf5sfj4'
        frameborder='0'
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </div>
    <div className={css.videoContainer}>
      <iframe
        src='//player.vimeo.com/video/135092427'
        frameborder='0'
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </div>
  </div>
)

export default Video
