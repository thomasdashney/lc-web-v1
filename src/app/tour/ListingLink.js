import React from 'react'
import css from './style.css'

export default ({ to, children }) => (
  <a
    className={css.listingLink}
    target='_blank'
    href={to}
  >
    {children}
  </a>
)
