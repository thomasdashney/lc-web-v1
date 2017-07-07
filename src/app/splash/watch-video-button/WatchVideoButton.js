import React from 'react'

import videoButtonLoop from './video_button_loop.mp4'
import css from './style.css'

const WatchVideoButton = ({ onClick }) => (
  <button
    className={css.watchVideoButton}
    type='button'
    onClick={onClick}
  >
    <video
      className={css.videoPreview}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={videoButtonLoop} type='video/mp4' />
    </video>
    <span
      className={css.watchVideoText}
    >
      Click to Watch Video
    </span>
  </button>
)

export default WatchVideoButton
