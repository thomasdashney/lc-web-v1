import React from 'react'
import css from './style.scss'

export default ({ to, children }) => (
  <a
    className={css.listingLink}
    target='_blank'
    href={to}
  >
    {children}
  </a>
)
