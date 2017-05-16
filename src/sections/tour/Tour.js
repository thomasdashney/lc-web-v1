import React from 'react'
import MediaQuery from 'react-responsive'

import css from './style.scss'
import tourListings from './tourListings'
import TourDesktop from './TourDesktop'
import TourMobile from './TourMobile'

const Tour = () => (
  <div className={css.container}>
    <MediaQuery maxWidth='619px'>
      <TourMobile tourListings={tourListings} />
    </MediaQuery>
    <MediaQuery minWidth='620px' maxWidth='799px'>
      <TourDesktop tourListings={tourListings} />
    </MediaQuery>
    <MediaQuery minWidth='800px' maxWidth='944px'>
      <TourMobile tourListings={tourListings} />
    </MediaQuery>
    <MediaQuery minWidth='945px'>
      <TourDesktop tourListings={tourListings} />
    </MediaQuery>
  </div>
)

export default Tour
