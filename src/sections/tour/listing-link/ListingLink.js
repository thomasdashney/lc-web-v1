import React from 'react'
import { Link } from 'react-router-dom'
import css from './style.scss'

export default props => (
  <Link
    className={css.listingLink}
    {...props}
  />
)
