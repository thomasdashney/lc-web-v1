import React from 'react'

import { trackExternalLink } from 'analytics'
import css from './style.css'
import * as logos from './logos'

const MusicButton = ({ releaseTitle, type, to }) => {
  const { name, src } = logos[type]

  return (
    <a
      href={to}
      target='_blank'
      className={css.musicButton}
      onClick={trackExternalLink(`${releaseTitle} - ${type}`)}
    >
      <img src={src} alt={name} />
    </a>
  )
}

export default MusicButton
