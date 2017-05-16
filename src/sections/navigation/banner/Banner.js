import React from 'react'

import css from './style.scss'
import drawerIconUrl from './drawer.png'

const Banner = ({ onNavigationToggle }) => (
  <div className={css.banner}>
    <button
      type='button'
      className={css.drawerButton}
      onClick={onNavigationToggle}
    >
      <img src={drawerIconUrl} alt='Open Navigation' />
    </button>
    <h1>
      Lost Cousins
    </h1>
  </div>
)

export default Banner
