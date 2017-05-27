import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import moment from 'moment'

import { trackPageView } from 'services/analytics'
import css from './style.scss'
import TourDesktop from './TourDesktop'
import TourMobile from './TourMobile'
import LoadingSpinner from './LoadingSpinner'

import { mobileMax, laptopMin } from 'shared/styles/variables'

@trackPageView()
class Tour extends Component {
  render () {
    let { tourListings } = this.props

    if (!tourListings) {
      return <LoadingSpinner />
    }

    if (Object.keys(tourListings).length === 0) {
      return <p className={css.noListings}>There are no upcoming dates</p>
    }

    tourListings = Object.keys(tourListings)
      .map(key => tourListings[key])
      .sort((listing1, listing2) => {
        const date1 = moment(listing1.date).startOf('day')
        const date2 = moment(listing2.date).startOf('day')
        if (date1.isSame(date2)) {
          return 0
        } else if (date1.isBefore(date2)) {
          return -1
        } else {
          return 1
        }
      })
      .filter(listing => {
        return moment(listing.date).startOf('day').isSameOrAfter(moment().startOf('day'))
      })

    return (
      <div className={css.container}>
        <MediaQuery maxWidth='619px'>
          <TourMobile tourListings={tourListings} />
        </MediaQuery>
        <MediaQuery minWidth='620px' maxWidth={mobileMax}>
          <TourDesktop tourListings={tourListings} />
        </MediaQuery>
        <MediaQuery minWidth={laptopMin} maxWidth='944px'>
          <TourMobile tourListings={tourListings} />
        </MediaQuery>
        <MediaQuery minWidth='945px'>
          <TourDesktop tourListings={tourListings} />
        </MediaQuery>
      </div>
    )
  }
}

export default Tour
