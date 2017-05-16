import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './style.scss'

const links = [
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

const NavigationLinks = () => (
  <ul className={css.navigationLinks}>
    {links.map(({ name, to }, index) => (
      <li key={index}>
        <NavLink to={to} activeClassName={css.active}>
          {name}
        </NavLink>
      </li>
    ))}
  </ul>
)

export default NavigationLinks
