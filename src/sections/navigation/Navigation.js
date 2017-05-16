import React from 'react'

import css from './style.scss'
import Banner from './banner/Banner'
import NavigationLinks from './navigation-links/NavigationLinks'
import SocialNav from './social-nav/SocialNav'

export default ({ onNavigationToggle }) => (
  <div className={css.navigation}>
    <Banner onNavigationToggle={onNavigationToggle} />
    <NavigationLinks />
    <SocialNav />
  </div>
)
