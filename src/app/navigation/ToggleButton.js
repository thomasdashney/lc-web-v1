import React from 'react'

import css from './style.css'

export default ({ children, onClick }) => (
  <button
    type='submit'
    className={css.toggleButton}
    onClick={onClick}
  >
    {children}
  </button>
)
