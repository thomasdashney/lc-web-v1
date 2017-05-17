import React from 'react'
import { Link } from 'react-router-dom'

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
    <Link to='/' className={css.logo}>
      <h1>
        Lost Cousins
      </h1>
    </Link>
  </div>
)

export default Banner
