import React from 'react'
import css from './style.css'

export default ({ songUri }) => (
  <div className={css.playerWrapper}>
    <iframe
      src={`https://open.spotify.com/embed?uri=${songUri}`}
      frameBorder={0}
      allowTransparency
    />
  </div>
)
