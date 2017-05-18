import React from 'react'
import moment from 'moment'

import facebookImageUrl from './facebook.png'
import ListingLink from './ListingLink'
import css from './style.scss'

export default ({ tourListings }) => (
  <table className={css.tourListingsMobile}>
    <tbody>
      {tourListings.map((listing, key) => {
        const {
          date,
          venue,
          acts,
          location,
          ticketLink,
          facebookLink,
          infoLink
        } = listing
        const dateMoment = moment(date)

        return (
          <tr key={key}>
            <td>
              <div className={css.dates}>
                <strong>{dateMoment.format('MMM D').toUpperCase()}</strong>
                <strong>{dateMoment.format('ddd').toUpperCase()}</strong>
              </div>
              <div className={css.venue}>
                {venue}
              </div>
              <div className={css.location}>
                {location}
              </div>
              {acts && (
                <div className={css.acts}>
                  w/ {acts}
                </div>
              )}
            </td>
            <td className={css.links}>
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
              {infoLink && (
                <ListingLink to={infoLink}>
                  Info
                </ListingLink>
              )}
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)
