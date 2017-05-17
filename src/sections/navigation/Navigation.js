import React from 'react'

import css from './style.scss'
import Banner from './banner/Banner'
import NavigationLinks from './navigation-links/NavigationLinks'
import Contact from './contact/Contact'
import MailingList from './mailing-list/MailingList'
import SocialNav from './social-nav/SocialNav'

export default ({ onNavigationToggle, onNavLinkClick }) => (
  <div className={css.navigation}>
    <Banner onNavigationToggle={onNavigationToggle} />
    <NavigationLinks
      onNavLinkClick={onNavLinkClick}
    />
    <div className={css.bottom}>
      <Contact />
      <MailingList />
      <SocialNav />
    </div>
  </div>
)
