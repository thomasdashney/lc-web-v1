import React from 'react'
import moment from 'moment'

import facebookImageUrl from './facebook.png'
import ListingLink from './ListingLink'
import css from './style.scss'

export default ({ tourListings }) => (
  <table className={css.tourListings}>
    <tbody>
      {tourListings.map((listing, key) => {
        const {
          date,
          venue,
          acts,
          location,
          ticketLink,
          facebookLink
        } = listing
        const dateMoment = moment(date)

        return (
          <tr key={key}>
            <td className={css.dates}>
              <strong>{dateMoment.format('MMM D').toUpperCase()}</strong>
            </td>
            <td>
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
              {facebookLink && (
                <ListingLink to={facebookLink}>
                  RSVP <img src={facebookImageUrl} />
                </ListingLink>
              )}
              {ticketLink && (
                <ListingLink to={ticketLink}>
                  Tickets
                </ListingLink>
              )}
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)
