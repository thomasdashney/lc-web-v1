import React from 'react'
import { Link } from 'react-router-dom'

import css from './style.scss'
import drawerIconUrl from './drawer.png'

const Banner = ({ onNavigationToggle, onLogoClick }) => (
  <div className={css.banner}>
    <button
      type='button'
      className={css.drawerButton}
      onClick={onNavigationToggle}
    >
      <img src={drawerIconUrl} alt='Open Navigation' />
    </button>
    <h1>
      <Link to='/' className={css.logo} onClick={onLogoClick}>
        Lost Cousins
      </Link>
    </h1>
  </div>
)

export default Banner
