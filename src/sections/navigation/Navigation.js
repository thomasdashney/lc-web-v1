import React from 'react'

import css from './style.scss'
import Banner from './banner/Banner'
import NavigationLinks from './navigation-links/NavigationLinks'
import MailingList from './mailing-list/MailingList'
import SocialNav from './social-nav/SocialNav'

export default ({ onNavigationToggle, onNavLinkClick }) => (
  <div className={css.navigation}>
    <Banner onNavigationToggle={onNavigationToggle} />
    <NavigationLinks
      onNavLinkClick={onNavLinkClick}
    />
    <div className={css.bottom}>
      <MailingList />
      <SocialNav />
    </div>
  </div>
)
