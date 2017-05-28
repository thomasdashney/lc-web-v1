import React from 'react'

import css from './style.css'
import NavigationLinks from './navigation-links/NavigationLinks'
import Contact from './contact/Contact'
import MailingList from './mailing-list/MailingList'
import SocialNav from './social-nav/SocialNav'

export default ({ onNavLinkClick }) => (
  <div className={css.navigation}>
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
