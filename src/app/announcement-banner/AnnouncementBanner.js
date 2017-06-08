import React from 'react'

import css from './style.css'

const AnnouncementBanner = () => (
  <a className={css.announcementBanner} href='http://indie88.com/indie88-premiere-lost-cousins-share-quarters/' target='_blank'>
    <p>
      Our new single, “Quarters”, is premiering now on Indie88.
    </p>
    <button className={css.streamButton} type='button'>
      Stream the song here
    </button>
  </a>
)

export default AnnouncementBanner
