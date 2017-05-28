import React from 'react'
import { NavLink } from 'react-router-dom'

import { trackExternalLink } from 'services/analytics'
import css from './style.css'

const links = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Music',
    to: '/music'
  },
  {
    name: 'Video',
    to: '/video'
  },
  {
    name: 'Tour',
    to: '/tour'
  },
  {
    name: 'Merch',
    to: 'https://www.bandfan.co/collections/lost-cousins-band-merchandise/',
    external: true
  }
]

const NavigationLinks = ({ onNavLinkClick }) => (
  <ul className={css.navigationLinks}>
    {links.map(({ name, to, external }, index) => {
      return (
        <li key={index}>
          {external
            ? <a href={to} target='_blank' onClick={trackExternalLink('Merch')}>{name}</a>
            : (
              <NavLink
                exact
                to={to}
                activeClassName={css.active}
                onClick={onNavLinkClick}
              >
                {name}
              </NavLink>
            )
          }
        </li>
      )
    })}
  </ul>
)

export default NavigationLinks
