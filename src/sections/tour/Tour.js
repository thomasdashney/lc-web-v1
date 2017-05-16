import React, { Component } from 'react'
import moment from 'moment'

import css from './style.scss'
import tourListings from './tourListings'
import { ListingLink } from './listing-link'
import facebookImageUrl from './facebook.png'

class Tour extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tourListings: []
    }
  }

  render () {
    return (
      <table className={css.tourListings}>
        <tbody>
          {Object.keys(tourListings).map(key => {
            const {
              date,
              venue,
              acts,
              location,
              ticketLink,
              facebookLink
            } = tourListings[key]
            const dateMoment = moment(date)

            return (
              <tr key={key}>
                <td className={css.dates}>
                  <strong>{dateMoment.format('MMM D').toUpperCase()}</strong>
                  <strong>{dateMoment.format('ddd').toUpperCase()}</strong>
                </td>
                <td>
                  {venue}
                  {acts && (
                    <span className={css.acts}>
                      w/ {acts}
                    </span>
                  )}
                </td>
                <td>{location}</td>
                <td>
                  {ticketLink && (
                    <ListingLink to={ticketLink}>
                      Tickets
                    </ListingLink>
                  )}
                  {facebookLink && (
                    <ListingLink to={facebookLink}>
                      RSVP <img src={facebookImageUrl} />
                    </ListingLink>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default Tour
