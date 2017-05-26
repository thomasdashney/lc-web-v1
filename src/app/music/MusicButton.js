import React from 'react'

import css from './style.scss'
import * as logos from './logos'

const MusicButton = ({ type, to }) => {
  const { name, src } = logos[type]

  return (
    <a href={to} target='_blank' className={css.musicButton}>
      <img src={src} alt={name} />
    </a>
  )
}

export default MusicButton
