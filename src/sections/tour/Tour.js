import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import moment from 'moment'
import { database } from 'firebase'

import css from './style.scss'
import TourDesktop from './TourDesktop'
import TourMobile from './TourMobile'

class Tour extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tourListings: {}
    }

    this.listingsRef = database.ref('tour_listings')
  }

  receivedTourListings (snapshot) {
    this.setState({ tourListings: snapshot.val() })
  }

  componentDidMount () {
    this.listingsRef.on('value', this.receivedTourListings.bind(this))
  }

  componentWillUnmount () {
    this.listingsRef.off()
  }

  render () {
    const tourListings = Object.keys(this.state.tourListings)
      .map(key => this.state.tourListings[key])
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
  }
}

export default Tour
