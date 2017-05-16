import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './style.scss'

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
    to: '/merch'
  }
]

const NavigationLinks = ({ onNavLinkClick }) => (
  <ul className={css.navigationLinks}>
    {links.map(({ name, to }, index) => (
      <li key={index}>
        <NavLink
          exact
          to={to}
          activeClassName={css.active}
          onClick={onNavLinkClick}
        >
          {name}
        </NavLink>
      </li>
    ))}
  </ul>
)

export default NavigationLinks
